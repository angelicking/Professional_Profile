import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import {
  certifications,
  education,
  languages,
  site,
  skills,
} from "@/data/site";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        index="01"
        kicker="About"
        title="Fifteen years of making ambitious programs ship."
        lede={site.summary}
      />

      <section className="mx-auto grid max-w-7xl gap-16 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <div className="md:col-span-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-acid">
            Position
          </p>
        </div>
        <div className="md:col-span-8">
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl">
            I run the rooms where strategy becomes a backlog, a budget, and a
            go-live.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-paper-dim">
            <p>
              The work has always been hybrid: technical enough to sit with
              architects, commercial enough to sit with CFOs, human enough to
              hold a 100-person planning event without losing the plot.
            </p>
            <p>
              Aerospace taught precision. Insurance taught regulation and
              scale. Gaming taught partner ecosystems and automation. Commerce
              and media taught customer-facing velocity. The stack changes. The
              job does not: clarity, cadence, and delivery.
            </p>
            <p>
              Based in {site.location}, operating across New York programs —
              currently as Program Manager at Vector Media, with Salesforce and
              NetSuite in production.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)]">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="border-b border-[var(--line)] px-5 py-14 md:border-b-0 md:border-r md:px-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-acid">
              Capabilities
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="border border-[var(--line)] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-5 py-14 md:px-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-acid">
              Languages
            </p>
            <ul className="mt-8 space-y-6">
              {languages.map((lang) => (
                <li key={lang.name} className="flex items-baseline justify-between gap-4 border-b border-[var(--line)] pb-4">
                  <span className="font-[family-name:var(--font-fraunces)] text-2xl">
                    {lang.name}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper-dim">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.28em] text-acid">
              Credentials
            </p>
            <ul className="mt-6 space-y-3">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="text-sm leading-relaxed text-paper-dim"
                >
                  <span className="mr-3 text-acid">▸</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-acid">
          Education
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <article
              key={item.school}
              className="card-edge border border-[var(--line)] p-8"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
                {item.years}
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-fraunces)] text-2xl">
                {item.credential}
              </h3>
              <p className="mt-2 text-paper-dim">{item.field}</p>
              <p className="mt-6 text-sm text-paper-dim">{item.school}</p>
            </article>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap gap-4">
          <Link
            href="/journey"
            className="border border-acid bg-acid px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink hover:bg-transparent hover:text-acid"
          >
            Walk the journey
          </Link>
          <Link
            href="/contact"
            className="border border-[var(--line-strong)] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em]"
          >
            Contact
          </Link>
        </div>
      </section>
    </>
  );
}
