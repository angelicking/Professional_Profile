import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        index="04"
        kicker="Contact"
        title="Direct lines. No intake form theater."
        lede="If the work is complex, regulated, or politically loaded — that is usually a good sign we should talk."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-4 md:grid-cols-2">
          <a
            href={`mailto:${site.email}`}
            className="card-edge group border border-[var(--line)] p-10 transition hover:border-acid"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-acid">
              Email
            </p>
            <p className="mt-8 break-all font-[family-name:var(--font-fraunces)] text-2xl md:text-3xl">
              {site.email}
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim group-hover:text-acid">
              Compose →
            </p>
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="card-edge group border border-[var(--line)] p-10 transition hover:border-acid"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-acid">
              LinkedIn
            </p>
            <p className="mt-8 font-[family-name:var(--font-fraunces)] text-2xl md:text-3xl">
              /luisgarciamba
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim group-hover:text-acid">
              Open profile →
            </p>
          </a>
          <div className="card-edge border border-[var(--line)] p-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-acid">
              Base
            </p>
            <p className="mt-8 font-[family-name:var(--font-fraunces)] text-2xl md:text-3xl">
              {site.location}
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
              New York programs
            </p>
          </div>
          <a
            href={`tel:+1${site.phone.replace(/\D/g, "")}`}
            className="card-edge group border border-[var(--line)] p-10 transition hover:border-acid"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-acid">
              Mobile
            </p>
            <p className="mt-8 font-[family-name:var(--font-fraunces)] text-2xl md:text-3xl">
              {site.phone}
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim group-hover:text-acid">
              Call →
            </p>
          </a>
        </div>
      </section>
    </>
  );
}
