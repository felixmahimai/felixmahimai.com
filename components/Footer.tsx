import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10">
      <div className="mx-auto flex max-w-page flex-col gap-4 px-5 py-10 text-sm text-ink/70 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Felix Mahimai. Chennai, India.</p>
        <div className="flex gap-6">
          <Link href="/connect/" className="hover:text-copper">
            Contact
          </Link>
          <a
            href="https://www.linkedin.com/in/felixmahimai"
            className="hover:text-copper"
            rel="noopener"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
