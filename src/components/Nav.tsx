'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'WORK', href: '/work' },
  { label: 'ABOUT', href: '/about' },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-8 py-5 transition-colors duration-500 ${
        scrolled ? 'bg-slate-veil/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div whileHover={{ scale: 1.02 }}>
        <Link href="/" className="text-[16px] sm:text-[17px] font-[400] text-bone-white no-underline tracking-normal">
          Pranav Sai Alli
        </Link>
      </motion.div>

      <div className="flex items-center gap-5 sm:gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`relative text-[13px] sm:text-[14px] font-[400] tracking-[0.02em] text-bone-white no-underline uppercase transition-opacity hover:opacity-70 ${
              pathname === item.href ? 'opacity-60' : 'opacity-80'
            }`}
          >
            {item.label}
            {pathname === item.href && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gunmetal-blue"
                layoutId="nav-underline"
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
        ))}
        <Link
          href="/contact"
          className="text-[13px] sm:text-[14px] font-[400] tracking-[0.02em] text-bone-white no-underline px-[14px] sm:px-[15px] py-[8px] sm:py-[9px] border border-bone-white uppercase hover:bg-bone-white hover:text-obsidian transition-colors"
        >
          CONTACT
        </Link>
      </div>
    </motion.nav>
  );
}
