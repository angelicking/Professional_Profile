import Link from "next/link";
import { nav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--line)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-[family-name:var(--font-fraunces)] text-2xl">
            {site.name}
            <span className="text-acid">, {site.credential}</span>
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-paper-dim">
            Program leadership for systems that have to work — at scale, under
            scrutiny, with the lights on.
          </p>
        </div>
        <div className="flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline w-fit hover:text-paper"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
          <a
            className="link-underline block w-fit hover:text-paper"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
          <a
            className="link-underline mt-2 block w-fit hover:text-paper"
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <p className="mt-2">{site.location}</p>
        </div>
      </div>
      <div className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 font-mono text-[10px] uppercase tracking-[0.22em] text-paper-dim md:px-8">
          <span>© 2026 {site.name}</span>
          <span>Enterprise × Edge</span>
        </div>
      </div>
    </footer>
  );
}
