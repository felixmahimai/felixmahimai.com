import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work & Impact",
  description:
    "Selected work in urban mobility, community action and evidence: Bicycle Mayor of Chennai, Relief Riders and Fit India Cycling in Tamil Nadu.",
};

const cases = [
  {
    tag: "Urban mobility",
    title: "Making cycling part of everyday city life",
    body: "Work as Bicycle Mayor of Chennai to connect citizens with institutions, push for safer streets and keep decisions anchored in evidence.",
    todo: "To add: milestones, partners, public engagements and documented outcomes.",
  },
  {
    tag: "Community action",
    title: "Relief Riders, Chennai",
    body: "How a cycling community delivered essential goods during the lockdown, and what that taught about community-led response.",
    todo: "To add: dates, verified reach, partners, my specific role and recognition received.",
  },
  {
    tag: "State programme",
    title: "Fit India Cycling Movement, Tamil Nadu",
    body: "Official State Cycling Leader, building participation through regular rides, community leagues and engagement with state authorities.",
    todo: "To add: programme scale, partners and results to date.",
  },
];

export default function Work() {
  return (
    <div className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
      <p className="eyebrow">Work & Impact</p>
      <h1 className="mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl">
        Organised around problems, not job titles.
      </h1>
      <p className="mt-6 max-w-prose text-lg text-ink/80">
        Each story separates what I did personally from what a team achieved together, and links to
        the evidence behind it.
      </p>

      <div className="mt-16 space-y-12">
        {cases.map((c) => (
          <Reveal key={c.title} className="grid gap-4 border-t border-ink/15 pt-8 md:grid-cols-[14rem_1fr]">
            <p className="eyebrow">{c.tag}</p>
            <div>
              <h2 className="text-2xl">{c.title}</h2>
              <p className="mt-3 max-w-prose leading-relaxed text-ink/80">{c.body}</p>
              <p className="mt-3 text-sm italic text-copper">{c.todo}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20 bg-sage/50 p-8">
        <p className="eyebrow">Published research</p>
        <h2 className="mt-3 text-2xl">The Lancet Global Health</h2>
        <p className="mt-3 max-w-prose text-ink/80">
          A peer-reviewed publication on cities and health. The full citation, link and a short
          plain-language summary will appear here.
        </p>
      </Reveal>
    </div>
  );
}
