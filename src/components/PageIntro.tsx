export function PageIntro({
  index,
  kicker,
  title,
  lede,
}: {
  index: string;
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-acid">
          {index} / {kicker}
        </p>
        <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-fraunces)] text-4xl leading-[1.05] tracking-tight text-paper md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper-dim md:text-lg">
          {lede}
        </p>
      </div>
    </section>
  );
}
