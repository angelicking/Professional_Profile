import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-28 md:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-acid">
        404 / Off the critical path
      </p>
      <h1 className="mt-6 font-[family-name:var(--font-fraunces)] text-5xl md:text-7xl">
        This route was never in the baseline.
      </h1>
      <Link
        href="/"
        className="mt-10 inline-block border border-acid bg-acid px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink"
      >
        Return to index
      </Link>
    </section>
  );
}
