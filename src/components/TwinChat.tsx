"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { twinPrompts, type TwinMessage } from "@/lib/twin";

type ChatItem = TwinMessage & { pending?: boolean };

export function TwinChat() {
  const [messages, setMessages] = useState<ChatItem[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const field = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({
      top: scroller.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, busy]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || busy) return;

    const history: TwinMessage[] = messages
      .filter((m) => !m.pending)
      .map(({ role, content: body }) => ({ role, content: body }));
    const nextUser: TwinMessage = { role: "user", content };
    const payload = [...history, nextUser];

    setInput("");
    setError(null);
    setBusy(true);
    setMessages([...payload, { role: "assistant", content: "", pending: true }]);

    try {
      const response = await fetch("/api/twin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payload }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error || "The twin did not respond.");
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No stream from the twin.");

      const decoder = new TextDecoder();
      let assembled = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assembled += decoder.decode(value, { stream: true });
        const snapshot = assembled;
        setMessages([...payload, { role: "assistant", content: snapshot }]);
      }

      if (!assembled.trim()) {
        throw new Error("The twin returned a blank line.");
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "The twin dropped the line.";
      setError(message);
      setMessages(payload);
    } finally {
      setBusy(false);
      field.current?.focus();
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    void send(input);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div className="flex min-h-[32rem] flex-col border border-[var(--line)] bg-ink-2">
        <div
          ref={scroller}
          className="flex-1 space-y-5 overflow-y-auto px-5 py-6 md:px-8"
        >
          {messages.length === 0 ? (
            <div className="flex h-full flex-col justify-end">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-acid">
                Channel open
              </p>
              <p className="mt-4 max-w-xl font-[family-name:var(--font-fraunces)] text-3xl">
                Ask the twin about programs, industries, or how the work actually
                got done.
              </p>
            </div>
          ) : (
            messages.map((message, index) => (
              <article
                key={`${message.role}-${index}`}
                className={
                  message.role === "user"
                    ? "ml-auto max-w-[42rem] border border-acid/40 bg-acid/10 px-5 py-4"
                    : "max-w-[42rem] border border-[var(--line)] px-5 py-4"
                }
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-acid">
                  {message.role === "user" ? "Visitor" : "Twin"}
                </p>
                <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-paper">
                  {message.content
                    ? message.content.replace(/\*\*(.*?)\*\*/g, "$1")
                    : message.pending
                      ? "Thinking…"
                      : ""}
                </p>
              </article>
            ))
          )}
        </div>

        <form
          onSubmit={onSubmit}
          className="border-t border-[var(--line)] p-4 md:p-5"
        >
          {error ? (
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-acid">
              {error}
            </p>
          ) : null}
          <div className="flex items-end gap-3">
            <textarea
              ref={field}
              value={input}
              rows={2}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  void send(input);
                }
              }}
              placeholder="Ask about a company, a budget, a methodology…"
              className="min-h-[3.25rem] flex-1 resize-none bg-transparent px-3 py-3 text-sm text-paper outline-none placeholder:text-paper-dim"
              disabled={busy}
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="border border-acid bg-acid px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink disabled:opacity-40"
            >
              {busy ? "…" : "Send"}
            </button>
          </div>
        </form>
      </div>

      <aside className="space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-acid">
          Starters
        </p>
        {twinPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => void send(prompt)}
            disabled={busy}
            className="block w-full border border-[var(--line)] px-4 py-3 text-left text-sm leading-relaxed text-paper-dim transition hover:border-acid hover:text-paper disabled:opacity-40"
          >
            {prompt}
          </button>
        ))}
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper-dim">
          Grounded in the public career record. Invents nothing.
        </p>
      </aside>
    </div>
  );
}
