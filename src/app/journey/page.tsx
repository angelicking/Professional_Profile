import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { journey } from "@/data/site";

export const metadata: Metadata = {
  title: "Career Journey",
};

export default function JourneyPage() {
  return (
    <>
      <PageIntro
        index="02"
        kicker="Journey"
        title="A through-line from SAP shop floors to digital revenue fabrics."
        lede="Every chapter added a new operating context — manufacturing, insurance, interactive entertainment, commerce, media — without dropping the discipline of delivery."
      />

      <section className="relative mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <div className="pointer-events-none absolute left-[1.4rem] top-10 hidden h-[calc(100%-5rem)] w-px bg-[var(--line)] md:left-[calc(18rem)] md:block" />
        <div className="space-y-4">
          {journey.map((role, index) => (
            <article
              key={`${role.company}-${role.title}-${role.dates}`}
              className="grid gap-6 border border-[var(--line)] bg-ink p-6 md:grid-cols-12 md:p-10"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-paper-dim">
                  {role.dates}
                </p>
                {role.location ? (
                  <p className="mt-2 text-sm text-paper-dim">{role.location}</p>
                ) : null}
                {role.tenure ? (
                  <p className="mt-4 max-w-[12rem] font-mono text-[10px] uppercase tracking-[0.16em] text-acid/80">
                    {role.tenure}
                  </p>
                ) : null}
              </div>
              <div className="md:col-span-9">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
                  {role.title}
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl">
                  {role.company}
                </h2>
                <ul className="mt-6 space-y-3">
                  {role.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-paper-dim md:text-base"
                    >
                      <span className="mt-2 h-px w-6 shrink-0 bg-acid" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-between gap-4 border-t border-[var(--line)] pt-8">
          <Link
            href="/about"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper-dim"
          >
            ← About
          </Link>
          <Link
            href="/portfolio"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid"
          >
            Portfolio →
          </Link>
        </div>
      </section>
    </>
  );
}
