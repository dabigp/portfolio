'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const getVariants = (direction: Direction, distance: number) => {
  const dx = direction === 'left' ? -distance : direction === 'right' ? distance : 0;
  const dy = direction === 'up' ? distance : direction === 'down' ? -distance : 0;
  return {
    hidden: { opacity: 0, x: dx, y: dy },
    visible: { opacity: 1, x: 0, y: 0 },
  };
};

interface Props {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export default function AnimatedSection({
  children,
  className = '',
  direction = 'up',
  distance = 60,
  delay = 0,
  duration = 0.8,
  threshold = 0.15,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={getVariants(direction, distance)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
