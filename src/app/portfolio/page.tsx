import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { portfolio } from "@/data/site";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <>
      <PageIntro
        index="03"
        kicker="Portfolio"
        title="Selected programs, staged for future case studies."
        lede="This grid is built to hold deep dives — architecture, stakeholders, metrics, and the messy middle. The work is real. The write-ups are next."
      />

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        <div className="mb-10 flex items-center justify-between border border-dashed border-[var(--line-strong)] px-5 py-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
            Status · Case studies in production
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">
            {portfolio.length} slots reserved
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {portfolio.map((item) => (
            <article
              key={item.code}
              className="card-edge group relative overflow-hidden border border-[var(--line)] p-8"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[radial-gradient(circle,var(--danger-glow),transparent_70%)] opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em]">
                <span className="text-paper-dim">Study {item.code}</span>
                <span className="border border-acid/40 px-2 py-1 text-acid">
                  Forthcoming
                </span>
              </div>
              <h2 className="mt-10 font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl">
                {item.title}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-paper-dim md:text-base">
                {item.blurb}
              </p>
              <div className="mt-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-paper-dim">
                <span>{item.sector}</span>
                <span>{item.year}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-6 border border-[var(--line)] p-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="font-[family-name:var(--font-fraunces)] text-2xl">
              Have a program that needs this kind of spine?
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-paper-dim">
              Digital transformation, PMO stand-up, ERP, revenue operations, or
              a messy multi-vendor integration — that is the terrain.
            </p>
          </div>
          <div className="flex items-end justify-start md:justify-end">
            <Link
              href="/contact"
              className="border border-acid bg-acid px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink hover:bg-transparent hover:text-acid"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
