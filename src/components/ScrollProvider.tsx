'use client';

import { ReactLenis } from 'lenis/react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <ReactLenis root options={{ lerp: 0.06, duration: 1.2, smoothWheel: true }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ReactLenis>
  );
}
