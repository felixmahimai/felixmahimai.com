import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ideas",
  description:
    "Essays and field notes on urban mobility, infrastructure delivery, evidence and AI in public works.",
};

const topics = [
  {
    cat: "Cities and mobility",
    title: "What does a truly cycle-friendly city look like?",
  },
  {
    cat: "Infrastructure delivery",
    title: "Why approved projects stall before they reach the street",
  },
  {
    cat: "Evidence",
    title: "How to tell whether a mobility intervention actually worked",
  },
  {
    cat: "AI and infrastructure",
    title: "Where AI helps public works, and where it should wait",
  },
  {
    cat: "Field notes",
    title: "Observations from a conversation about urban mobility",
  },
];

export default function Ideas() {
  return (
    <div className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
      <p className="eyebrow">Ideas</p>
      <h1 className="mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl">
        Writing that stays findable.
      </h1>
      <p className="mt-6 max-w-prose text-lg text-ink/80">
        Essays and field notes will live here as a permanent, searchable record. The first pieces are
        in preparation.
      </p>

      <p className="eyebrow mt-16">In preparation</p>
      <ul className="mt-6 divide-y divide-ink/15 border-y border-ink/15">
        {topics.map((t) => (
          <li key={t.title} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between">
            <span className="font-serif text-xl">{t.title}</span>
            <span className="text-xs uppercase tracking-widest text-ink/55">{t.cat}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
