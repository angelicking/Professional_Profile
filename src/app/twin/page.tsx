import type { Metadata } from "next";
import { TwinChat } from "@/components/TwinChat";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Digital Twin",
};

export default function TwinPage() {
  return (
    <>
      <PageIntro
        index="05"
        kicker="Digital Twin"
        title="A working copy of the career — available for interrogation."
        lede="Ask about programs, industries, methods, and the numbers in the record. The twin answers from Luis Garcia’s public career dossier, not from improvisation."
      />
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <TwinChat />
      </section>
    </>
  );
}
