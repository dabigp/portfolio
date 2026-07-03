import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollProvider from "@/components/ScrollProvider";

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
    "Full-stack developer and designer. Python, Arduino, Next.js, Three.js. Building at the intersection of code, circuit, and craft.",
  keywords: [
    "Pranav Sai Alli",
    "portfolio",
    "full-stack developer",
    "web developer",
    "designer",
    "React",
    "Next.js",
    "TypeScript",
    "Three.js",
    "Arduino",
    "Python",
  ],
  authors: [{ name: "Pranav Sai Alli" }],
  creator: "Pranav Sai Alli",
  openGraph: {
    title: "Pranav Sai Alli — Portfolio",
    description:
      "Full-stack developer and designer. Building at the intersection of code, circuit, and craft.",
    url: "https://portfolio-lyart-kappa-46.vercel.app",
    siteName: "Pranav Sai Alli",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Sai Alli — Portfolio",
    description:
      "Full-stack developer and designer. Building at the intersection of code, circuit, and craft.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pranav Sai Alli",
  url: "https://portfolio-lyart-kappa-46.vercel.app",
  email: "pranavalli19@gmail.com",
  jobTitle: "Full-Stack Developer & Designer",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "UI/UX Design",
    "Python",
    "Arduino",
    "Three.js",
    "Framer Motion",
  ],
  sameAs: [
    "https://github.com/pranavsai",
    "https://linkedin.com/in/pranavsai",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <meta name="google-site-verification" content="G6RKYDox_ckTnS_A1inA9QwE8W8_NUolVkUcHeNWaSc" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-veil text-bone-white font-neue-montreal antialiased min-h-screen overflow-x-hidden">
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
