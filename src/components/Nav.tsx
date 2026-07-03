'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "WORK", href: "/work" },
  { label: "ABOUT", href: "/about" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-transparent">
      <Link href="/" className="text-[17px] font-[400] tracking-normal text-bone-white no-underline">
        Pranav Sai Alli
      </Link>
      <div className="flex items-center gap-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-[14px] font-[400] tracking-normal text-bone-white no-underline transition-opacity hover:opacity-70 ${
              pathname === item.href ? "opacity-60" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="text-[14px] font-[400] tracking-normal text-bone-white no-underline px-[15px] py-[9px] border border-bone-white"
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
}
