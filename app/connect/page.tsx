import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speaking & Connect",
  description:
    "Invite Felix Mahimai to speak, join a panel or collaborate on urban mobility, infrastructure delivery and evidence.",
};

const interests = [
  "Speaking engagements, panels and conferences",
  "Conversations with researchers, practitioners and policymakers",
  "Cross-sector partnerships and international collaboration",
  "Workshops on evidence, delivery and people-centred cities",
];

export default function Connect() {
  return (
    <div className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
      <p className="eyebrow">Speaking & Connect</p>
      <h1 className="mt-5 max-w-3xl text-4xl leading-tight sm:text-5xl">
        Let&apos;s connect ideas and people.
      </h1>
      <p className="mt-6 max-w-prose text-lg text-ink/80">
        If you are organising an event, exploring a partnership or working on a challenge in cities
        or infrastructure, I would be glad to hear from you.
      </p>

      <p className="eyebrow mt-14">Particularly interested in</p>
      <ul className="mt-5 max-w-prose space-y-3">
        {interests.map((i) => (
          <li key={i} className="border-l-2 border-copper pl-4 text-ink/85">
            {i}
          </li>
        ))}
      </ul>

      <div className="mt-14 bg-sage/50 p-8">
        <p className="eyebrow">Get in touch</p>
        {/* TODO: replace with your professional email, e.g. hello@felixmahimai.com */}
        <a
          href="mailto:hello@felixmahimai.com"
          className="mt-3 block font-serif text-2xl link-arrow w-fit"
        >
          hello@felixmahimai.com
        </a>
        <p className="mt-4 text-sm text-ink/70">
          Also on{" "}
          <a href="https://www.linkedin.com/in/felixmahimai" className="link-arrow" rel="noopener">
            LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  );
}
