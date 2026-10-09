import Link from "next/link";
import RouteHero from "@/components/RouteHero";
import Reveal from "@/components/Reveal";

const pillars = [
  {
    title: "Cities and mobility",
    body: "Walking, cycling and everyday movement, treated as infrastructure that should be planned, measured and funded like any other.",
  },
  {
    title: "Infrastructure delivery",
    body: "Why good projects stall between approval and the street, and what it takes to close that gap.",
  },
  {
    title: "Evidence",
    body: "Decisions that hold up when someone asks how you know. Data, method and honest limits, shown openly.",
  },
  {
    title: "AI meets infrastructure",
    body: "Practical, careful uses of AI in how public works are planned and delivered, without the hype.",
  },
];

const proof = [
  {
    tag: "Civic leadership",
    title: "Bicycle Mayor of Chennai",
    body: "Appointed by BYCS in October 2019 to bring citizens, institutions and evidence into conversations about safer streets.",
  },
  {
    tag: "State programme",
    title: "State Cycling Leader, Tamil Nadu",
    body: "Official lead for the Fit India Cycling Movement in the state, working with communities and government.",
  },
  {
    tag: "Published research",
    title: "The Lancet Global Health",
    body: "Peer-reviewed work on cities and health. Full citation and a plain-language summary coming soon.",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-page px-5 pb-10 pt-16 sm:px-8 sm:pt-24">
        <p className="eyebrow">Urban mobility · Infrastructure delivery · Evidence</p>
        <h1 className="mt-6 max-w-4xl text-4xl leading-tight sm:text-6xl">
          Decisions about cities that hold up in the real world.
        </h1>
        <p className="mt-8 max-w-prose text-lg leading-relaxed text-ink/80">
          I work on how streets, transport and public infrastructure get planned and delivered,
          and on making the evidence behind those choices clear enough to act on. Based in
          Chennai.
        </p>
        <div className="mt-10 flex flex-wrap gap-6 text-sm">
          <Link href="/work/" className="link-arrow">
            Explore my work
          </Link>
          <Link href="/connect/" className="link-arrow">
            Start a conversation
          </Link>
        </div>
        <div className="mt-16">
          <RouteHero />
        </div>
      </section>

      <section className="bg-sage/50">
        <div className="mx-auto max-w-page px-5 py-20 sm:px-8">
          <Reveal>
            <p className="eyebrow">What I work on</p>
            <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">Four threads, one question.</h2>
            <p className="mt-4 max-w-prose text-ink/80">
              Each thread asks the same thing: how do we get from a good idea to a result people
              can see and measure?
            </p>
          </Reveal>
          <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2">
            {pillars.map((p) => (
              <Reveal key={p.title} className="bg-ivory p-8">
                <h3 className="text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-page px-5 py-20 sm:px-8">
        <Reveal>
          <p className="eyebrow">Credentials and evidence</p>
          <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">Work you can check.</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {proof.map((c) => (
            <Reveal key={c.title} className="border-t border-copper pt-5">
              <p className="eyebrow">{c.tag}</p>
              <h3 className="mt-3 text-xl">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink text-ivory">
        <div className="mx-auto max-w-page px-5 py-20 sm:px-8">
          <Reveal>
            <p className="eyebrow !text-ivory/60">An open invitation</p>
            <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">
              Working on a hard problem in cities or infrastructure?
            </h2>
            <p className="mt-4 max-w-prose text-ivory/75">
              I welcome invitations to speak, to join panels, and to collaborate with researchers,
              practitioners and public institutions.
            </p>
            <Link
              href="/connect/"
              className="mt-8 inline-block rounded-full border border-ivory px-6 py-2.5 text-sm transition-colors hover:bg-ivory hover:text-ink"
            >
              Get in touch
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
