'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.footer
      ref={ref}
      className="w-full px-6 sm:px-8 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-graphite/20"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div>
        <p className="text-[13px] font-[400] text-bone-white/40">
          Made by{' '}
          <Link href="https://github.com/the-X-alien" target="_blank" className="text-bone-white/60 hover:text-bone-white transition-colors">
            the-X-alien
          </Link>{' '}
          (Dhiaan)
        </p>
      </div>
      <div className="flex items-center gap-5 sm:gap-6">
        {[
          { label: 'GitHub', href: 'https://github.com/the-X-alien' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/dhiaan' },
          { label: 'Email', href: 'mailto:pranavalli19@gmail.com' },
        ].map((link) => (
          <motion.span key={link.label} whileHover={{ x: 2 }}>
            <Link
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              className="text-[13px] font-[400] text-bone-white/40 hover:text-bone-white transition-colors uppercase tracking-[0.05em]"
            >
              {link.label}
            </Link>
          </motion.span>
        ))}
      </div>
    </motion.footer>
  );
}
