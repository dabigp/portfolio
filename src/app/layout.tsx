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
  title: "Pranav Sai Alli — Portfolio",
  description: "Design, develop, deliver. Portfolio of Pranav Sai Alli.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-slate-veil text-bone-white font-neue-montreal antialiased min-h-screen">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
