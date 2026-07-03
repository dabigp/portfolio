'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 8 + 1;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setFinished(true), 300);
          return 100;
        }
        return next;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (finished) {
      const t = setTimeout(() => onComplete(), 600);
      return () => clearTimeout(t);
    }
  }, [finished, onComplete]);

  const progressStr = String(Math.floor(progress)).padStart(2, '0');

  return (
    <AnimatePresence>
      {!finished && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-veil"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex flex-col items-center gap-6 w-[200px]">
            <motion.p
              className="text-[14px] font-[400] text-bone-white/60 uppercase tracking-[0.15em]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Loading
            </motion.p>
            <div className="w-full h-[1px] bg-graphite/50 relative overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-bone-white"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <motion.p
              className="text-[36px] font-[400] text-bone-white tabular-nums leading-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {progressStr}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
