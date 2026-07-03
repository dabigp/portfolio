'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

interface Props {
  title: string;
  number: number;
  tags: string[];
  description: string;
  href: string;
}

export default function ProjectCard({ title, number, tags, description, href }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link href={href} className="group block no-underline">
        <motion.div
          className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-12 border-b border-graphite/30 cursor-pointer"
          whileHover={{ x: 8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-start gap-8">
            <motion.span
              className="text-[22px] font-[400] text-gunmetal-blue tabular-nums"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {String(number).padStart(2, '0')}
            </motion.span>
            <div>
              <motion.h2
                className="text-[36px] sm:text-[56px] font-[400] text-bone-white leading-[1.13] tracking-[-0.02em] group-hover:text-gunmetal-blue transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {title}
              </motion.h2>
              <motion.p
                className="text-[17px] font-[400] text-bone-white/60 mt-4 max-w-[50ch] leading-[1.5]"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {description}
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-3 mt-5"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[13px] font-[400] text-gunmetal-blue px-3 py-1 border border-gunmetal-blue/40"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
          <motion.span
            className="text-[14px] font-[400] text-bone-white/40 uppercase tracking-[0.02em] whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            View Project &rarr;
          </motion.span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
