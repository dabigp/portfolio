'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError('');
    // Placeholder — will integrate form service
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          className="flex items-center justify-center min-h-[300px] border border-gunmetal-blue/30"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="text-center px-8">
            <motion.svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className="mx-auto mb-6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.path
                d="M10 24L20 34L38 14"
                stroke="#6f879c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </motion.svg>
            <motion.p
              className="text-[22px] font-[400] text-bone-white leading-[1.2]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              Message sent &mdash; thank you.
            </motion.p>
            <motion.p
              className="text-[15px] font-[400] text-bone-white/50 mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              I&apos;ll get back to you soon.
            </motion.p>
          </div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[
            { id: 'name', label: 'Name', type: 'text' },
            { id: 'email', label: 'Email', type: 'email' },
          ].map((field, i) => (
            <motion.div
              key={field.id}
              className="flex flex-col gap-2"
              custom={i}
              variants={fieldVariants}
              initial="hidden"
              animate="visible"
            >
              <label htmlFor={field.id} className="text-[12px] font-[400] text-gunmetal-blue uppercase tracking-[0.08em]">
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                required
                className="bg-transparent border border-graphite/50 text-bone-white text-[16px] font-[400] px-4 py-3 outline-none focus:border-gunmetal-blue transition-colors"
              />
            </motion.div>
          ))}
          <motion.div
            className="flex flex-col gap-2"
            custom={2}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
          >
            <label htmlFor="message" className="text-[12px] font-[400] text-gunmetal-blue uppercase tracking-[0.08em]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="bg-transparent border border-graphite/50 text-bone-white text-[16px] font-[400] px-4 py-3 outline-none focus:border-gunmetal-blue transition-colors resize-none"
            />
          </motion.div>
          <motion.div
            custom={3}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              type="submit"
              disabled={sending}
              className="text-[13px] font-[400] tracking-[0.03em] text-bone-white px-[20px] py-[10px] border border-bone-white uppercase bg-transparent cursor-pointer disabled:opacity-50"
              whileHover={{ scale: 1.02, backgroundColor: '#fffdf9', color: '#495764' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              {sending ? (
                <span className="flex items-center gap-2">
                  <motion.span
                    className="inline-block w-3 h-3 border border-bone-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                  />
                  Sending
                </span>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </motion.div>
          {error && (
            <motion.p
              className="text-[14px] font-[400] text-red-400"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </motion.p>
          )}
        </motion.form>
      )}
    </AnimatePresence>
  );
}
