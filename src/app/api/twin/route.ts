import { buildSystemPrompt, sanitizeMessages, TWIN_MODEL } from "@/lib/twin";

export const runtime = "nodejs";

const FALLBACK_MODEL = "openrouter/free";

type UpstreamBody = {
  model: string;
  stream: boolean;
  temperature: number;
  max_tokens: number;
  messages: Array<{ role: string; content: string }>;
  reasoning?: { effort: "low" | "medium" | "high" };
};

async function complete(apiKey: string, body: UpstreamBody) {
  return fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost:3001",
      "X-Title": "Luis Garcia Digital Twin",
    },
    body: JSON.stringify(body),
  });
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "The twin is offline — missing OpenRouter key." },
      { status: 500 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const messages = sanitizeMessages(
    payload && typeof payload === "object"
      ? (payload as { messages?: unknown }).messages
      : undefined,
  );

  const last = messages.at(-1);
  if (!last || last.role !== "user") {
    return Response.json({ error: "Ask a question to begin." }, { status: 400 });
  }

  const chat = [
    { role: "system", content: buildSystemPrompt() },
    ...messages,
  ];

  let upstream = await complete(apiKey, {
    model: TWIN_MODEL,
    stream: true,
    temperature: 0.4,
    max_tokens: 1200,
    reasoning: { effort: "low" },
    messages: chat,
  });

  if (upstream.status === 402) {
    await upstream.text().catch(() => "");
    upstream = await complete(apiKey, {
      model: FALLBACK_MODEL,
      stream: true,
      temperature: 0.4,
      max_tokens: 1200,
      messages: chat,
    });
  }

  if (!upstream.ok || !upstream.body) {
    const detail = await upstream.text().catch(() => "");
    console.error("OpenRouter error", upstream.status, detail.slice(0, 500));
    return Response.json(
      { error: "The twin could not reach the model. Try again in a moment." },
      { status: 502 },
    );
  }

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const stream = new ReadableStream({
    async start(controller) {
      const reader = upstream.body!.getReader();
      let buffer = "";
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";
          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            const data = trimmed.slice(5).trim();
            if (!data || data === "[DONE]") continue;
            try {
              const json = JSON.parse(data) as {
                choices?: Array<{
                  delta?: { content?: string | null };
                  message?: { content?: string | null };
                }>;
              };
              const token =
                json.choices?.[0]?.delta?.content ??
                json.choices?.[0]?.message?.content ??
                "";
              if (token) controller.enqueue(encoder.encode(token));
            } catch {
              // skip malformed SSE chunks
            }
          }
        }
      } catch (error) {
        console.error("Twin stream failed", error);
        controller.enqueue(
          encoder.encode("\n\nThe line dropped mid-answer. Ask again."),
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
    },
  });
}
