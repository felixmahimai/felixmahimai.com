import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Felix Mahimai is a strategic generalist and systems builder working on urban mobility, infrastructure delivery and evidence, based in Chennai.",
};

const timeline = [
  {
    heading: "Studies and international exposure",
    body: "Time at Politecnico di Milano shaped how I see cities and the way different countries approach mobility. My highest completed qualification is a B.Tech.",
  },
  {
    heading: "Building systems",
    body: "A career spent designing structures that make work repeatable, so good results do not depend on heroics.",
  },
  {
    heading: "Civic work in Chennai",
    body: "Bicycle Mayor of Chennai since October 2019, bringing citizens, officials and evidence into the same room.",
  },
  {
    heading: "Tamil Nadu and the national movement",
    body: "State Cycling Leader for Tamil Nadu in the Fit India Cycling Movement, working with communities, institutions and government.",
  },
];

const values = [
  { t: "Structure over improvisation", b: "Good systems outlast good intentions." },
  { t: "Evidence over opinion", b: "Show the data, the method and the limits." },
  { t: "Long-term impact", b: "Prefer the slower win that holds over the quick one that fades." },
  { t: "Quiet credibility", b: "Let the work and the record do the talking." },
];

export default function About() {
  return (
    <div className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
      <p className="eyebrow">About</p>
      <h1 className="mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl">
        A strategic generalist who builds systems.
      </h1>
      <div className="mt-8 max-w-prose space-y-5 text-lg leading-relaxed text-ink/80">
        <p>
          I work across urban mobility, infrastructure delivery and evidence-based decision
          making. What connects it all is a habit of looking at the whole system: who decides,
          what they know, and what happens between a plan and the street.
        </p>
        <p>
          My aim is simple. Wherever I go, people should either learn something new or gain
          something valuable from the conversation.
        </p>
      </div>

      <div className="mt-20">
        <p className="eyebrow">The path so far</p>
        <ol className="mt-8 border-l border-copper/60">
          {timeline.map((t) => (
            <li key={t.heading} className="relative pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-copper bg-ivory" />
              <Reveal>
                <h2 className="text-xl">{t.heading}</h2>
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink/75">{t.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-20">
        <p className="eyebrow">How I work</p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {values.map((v) => (
            <Reveal key={v.t} className="border-t border-ink/20 pt-4">
              <h3 className="text-lg">{v.t}</h3>
              <p className="mt-2 text-sm text-ink/75">{v.b}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
