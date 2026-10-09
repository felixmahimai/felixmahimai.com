import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://felixmahimai.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Felix Mahimai | Urban mobility, infrastructure delivery and evidence",
    template: "%s | Felix Mahimai",
  },
  description:
    "Felix Mahimai works on urban mobility, infrastructure delivery and evidence-based decision making. Bicycle Mayor of Chennai and Fit India State Cycling Leader for Tamil Nadu.",
  openGraph: {
    title: "Felix Mahimai",
    description:
      "Urban mobility, infrastructure delivery and evidence-based decisions, from Chennai.",
    url: siteUrl,
    siteName: "Felix Mahimai",
    type: "website",
  },
  alternates: { canonical: siteUrl },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Felix Mahimai",
  url: siteUrl,
  address: { "@type": "PostalAddress", addressLocality: "Chennai", addressCountry: "IN" },
  jobTitle: "Bicycle Mayor of Chennai",
  sameAs: ["https://www.linkedin.com/in/felixmahimai"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-ink focus:px-3 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
