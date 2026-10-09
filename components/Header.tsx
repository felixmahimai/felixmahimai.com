import Link from "next/link";

const links = [
  { href: "/about/", label: "About" },
  { href: "/work/", label: "Work & Impact" },
  { href: "/ideas/", label: "Ideas" },
  { href: "/connect/", label: "Connect" },
];

export default function Header() {
  return (
    <header className="border-b border-ink/10">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <Link href="/" className="font-serif text-lg tracking-tight">
          Felix Mahimai
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-copper transition-colors">
              {l.label}
            </Link>
          ))}
          <Link
            href="/connect/"
            className="hidden rounded-full border border-ink px-4 py-1.5 transition-colors hover:bg-ink hover:text-ivory sm:inline-block"
          >
            Collaborate with me
          </Link>
        </nav>
      </div>
    </header>
  );
}
