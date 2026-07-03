import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-neue-montreal",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Pranav Sai Alli — Portfolio",
    template: "%s — Pranav Sai Alli",
  },
  description:
    "Full-stack developer and designer building products at the intersection of design, technology, and purpose.",
  keywords: [
    "Pranav Sai Alli",
    "portfolio",
    "full-stack developer",
    "web developer",
    "designer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Pranav Sai Alli" }],
  creator: "Pranav Sai Alli",
  openGraph: {
    title: "Pranav Sai Alli — Portfolio",
    description:
      "Full-stack developer and designer building products at the intersection of design, technology, and purpose.",
    url: "https://portfolio.vercel.app",
    siteName: "Pranav Sai Alli",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Sai Alli — Portfolio",
    description:
      "Full-stack developer and designer building products at the intersection of design, technology, and purpose.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google-site-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pranav Sai Alli",
  url: "https://portfolio.vercel.app",
  email: "pranavalli19@gmail.com",
  jobTitle: "Full-Stack Developer & Designer",
  knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "UI/UX Design"],
  sameAs: [
    "https://github.com/the-X-alien",
    "https://linkedin.com/in/dhiaan",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-veil text-bone-white font-neue-montreal antialiased min-h-screen">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
