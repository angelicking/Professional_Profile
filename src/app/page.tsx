import Link from "next/link";
import {
  industries,
  journey,
  portfolio,
  site,
  skills,
  stats,
} from "@/data/site";

export default function Home() {
  const featuredRoles = journey.slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden grid-bg">
        <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,var(--danger-glow),transparent_68%)]" />
        <p
          aria-hidden
          className="pointer-events-none absolute -right-6 top-24 hidden select-none font-[family-name:var(--font-fraunces)] text-[14rem] leading-none text-paper/[0.035] lg:block"
        >
          PM
        </p>
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          <div className="flex items-center justify-between gap-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-acid">
              00 / Program Architecture
            </p>
            <p className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-paper-dim md:block">
              {site.location}
            </p>
          </div>

          <h1 className="mt-10 max-w-5xl font-[family-name:var(--font-fraunces)] text-[14vw] leading-[0.86] tracking-[-0.04em] text-paper sm:text-7xl md:text-8xl lg:text-9xl">
            Luis
            <br />
            Garcia
            <span className="text-acid">.</span>
          </h1>

          <div className="mt-10 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-paper-dim">
                {site.title} · {site.credential}
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-paper-dim md:text-xl">
                {site.tagline}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/journey"
                  className="border border-acid bg-acid px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink transition hover:bg-transparent hover:text-acid"
                >
                  Career Journey
                </Link>
                <Link
                  href="/portfolio"
                  className="border border-[var(--line-strong)] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-paper transition hover:border-acid hover:text-acid"
                >
                  Portfolio
                </Link>
                <Link
                  href="/twin"
                  className="border border-[var(--line-strong)] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-paper transition hover:border-acid hover:text-acid"
                >
                  Digital Twin
                </Link>
              </div>
            </div>
            <div className="md:col-span-5 md:border-l md:border-[var(--line)] md:pl-10">
              <p className="text-sm leading-relaxed text-paper-dim">
                {site.summary}
              </p>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-acid">
                Waterfall · Hybrid · Agile
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-[var(--line)] py-4">
        <div className="marquee">
          <div className="marquee-track font-mono text-[11px] uppercase tracking-[0.35em] text-paper-dim">
            {[...industries, ...industries, ...industries].map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-10">
                {item}
                <span className="text-acid">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`border-b border-[var(--line)] px-5 py-10 last:border-b-0 md:border-b-0 md:px-8 ${
                i !== stats.length - 1 ? "md:border-r md:border-[var(--line)]" : ""
              }`}
            >
              <p className="font-[family-name:var(--font-fraunces)] text-4xl text-paper md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-dim">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-acid">
              01 / About
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-4xl md:text-5xl">
              Operator, not spectator.
            </h2>
          </div>
          <Link
            href="/about"
            className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-paper-dim link-underline md:inline"
          >
            Full profile →
          </Link>
        </div>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-paper-dim">
            From Sikorsky hangars to New York Life product rooms to Amazon
            marketplaces, the through-line is the same: make complex technology
            programs legible, funded, and finished. I sit at the seam of
            executives, engineers, and operators — and keep the work moving.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {skills.slice(0, 8).map((skill) => (
              <div
                key={skill}
                className="border border-[var(--line)] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-paper-dim"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <Link
          href="/about"
          className="mt-10 inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-acid md:hidden"
        >
          Full profile →
        </Link>
      </section>

      <section className="border-y border-[var(--line)] bg-ink-2">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-acid">
                02 / Selected chapters
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-4xl md:text-5xl">
                Career, compressed.
              </h2>
            </div>
            <Link
              href="/journey"
              className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-paper-dim link-underline md:inline"
            >
              Full journey →
            </Link>
          </div>
          <div className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {featuredRoles.map((role) => (
              <article
                key={`${role.company}-${role.dates}`}
                className="grid gap-4 py-8 md:grid-cols-12 md:gap-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-acid md:col-span-3">
                  {role.dates}
                </p>
                <div className="md:col-span-4">
                  <h3 className="font-[family-name:var(--font-fraunces)] text-2xl">
                    {role.company}
                  </h3>
                  <p className="mt-1 text-sm text-paper-dim">{role.title}</p>
                </div>
                <p className="text-sm leading-relaxed text-paper-dim md:col-span-5">
                  {role.highlights[0]}
                </p>
              </article>
            ))}
          </div>
          <Link
            href="/journey"
            className="mt-8 inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-acid"
          >
            See the full arc →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-acid">
              03 / Work
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-4xl md:text-5xl">
              Portfolio, primed.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-paper-dim link-underline md:inline"
          >
            All studies →
          </Link>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {portfolio.slice(0, 3).map((item) => (
            <Link
              key={item.code}
              href="/portfolio"
              className="card-edge group border border-[var(--line)] p-6 transition hover:border-acid/60"
            >
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-paper-dim">
                <span>{item.code}</span>
                <span className="text-acid">Coming</span>
              </div>
              <h3 className="mt-8 font-[family-name:var(--font-fraunces)] text-2xl group-hover:text-acid">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-dim">
                {item.blurb}
              </p>
              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-paper-dim">
                {item.sector} · {item.year}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-ink-2">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-20 md:flex-row md:items-end md:px-8 md:py-24">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-acid">
              04 / Digital Twin
            </p>
            <h2 className="mt-3 max-w-xl font-[family-name:var(--font-fraunces)] text-4xl md:text-6xl">
              Interrogate the career in real time.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-paper-dim">
              An AI twin grounded in the public record — programs, numbers,
              industries, and how the work actually ran.
            </p>
          </div>
          <Link
            href="/twin"
            className="border border-acid bg-acid px-6 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink transition hover:bg-transparent hover:text-acid"
          >
            Open the twin
          </Link>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-20 md:flex-row md:items-end md:px-8 md:py-24">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-acid">
              05 / Contact
            </p>
            <h2 className="mt-3 max-w-xl font-[family-name:var(--font-fraunces)] text-4xl md:text-6xl">
              Let’s build the next operating system of work.
            </h2>
          </div>
          <Link
            href="/contact"
            className="border border-acid bg-acid px-6 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink transition hover:bg-transparent hover:text-acid"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
