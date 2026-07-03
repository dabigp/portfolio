'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
  type?: 'words' | 'chars' | 'lines';
  stagger?: number;
}

export default function TextReveal({
  text,
  className = '',
  as: Tag = 'p',
  delay = 0,
  type = 'words',
  stagger = 0.04,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  if (type === 'chars') {
    const chars = text.split('');
    return (
      <div ref={ref} className={className}>
        {chars.map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 40, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.5, delay: delay + i * stagger, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>
    );
  }

  const words = text.split(' ');
  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: delay + i * stagger, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
