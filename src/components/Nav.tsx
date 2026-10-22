"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/data/site";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(7,8,10,0.78)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-[family-name:var(--font-fraunces)] text-xl tracking-tight text-paper">
            {site.name.split(" ")[0]}
            <span className="text-acid">.</span>
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-paper-dim sm:inline">
            {site.credential} / PM
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:gap-8 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-mono text-[11px] uppercase tracking-[0.22em] transition-colors ${
                  active ? "text-acid" : "text-paper-dim hover:text-paper"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-paper-dim lg:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-acid" />
            </span>
            Open to programs
          </span>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-[var(--line)] md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="font-mono text-[11px] text-acid">
              {open ? "CLS" : "NAV"}
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[var(--line)] bg-ink px-5 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-[0.22em] text-paper"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
