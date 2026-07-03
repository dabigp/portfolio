'use client';

import { motion } from 'framer-motion';
import ThreePrism from '@/components/ThreePrism';
import TextReveal from '@/components/TextReveal';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div>
      {/* ─── HEADER ─── */}
      <section className="relative min-h-[50vh] flex items-center px-8 pt-32">
        <ThreePrism />
        <div className="relative z-10">
          <AnimatedSection direction="up" delay={0.1}>
            <p className="text-[14px] font-[400] text-gunmetal-blue uppercase tracking-[0.15em] mb-4">
              Contact
            </p>
          </AnimatedSection>
          <TextReveal
            text="Let's talk"
            className="text-display-xl font-[400] text-bone-white leading-[1] tracking-[-0.02em] max-w-[14ch]"
            type="chars"
            stagger={0.03}
            delay={0.3}
          />
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="px-8 py-32">
        <div className="grid sm:grid-cols-2 gap-20 max-w-[1000px]">
          <AnimatedSection direction="up" delay={0.2}>
            <div>
              <p className="text-display font-[400] text-bone-white leading-[1] tracking-[-0.02em] mb-8">
                Have a project in mind?
              </p>
              <p className="text-[17px] font-[400] text-bone-white/70 leading-[1.7] mb-12">
                Whether it&apos;s a web app, a hardware project, a design system, or just a conversation
                about something cool — I&apos;d love to hear from you.
              </p>
              <div className="flex flex-col gap-4">
                <motion.a
                  href="mailto:pranavalli19@gmail.com"
                  className="text-[15px] font-[400] text-bone-white/60 hover:text-bone-white transition-colors"
                  whileHover={{ x: 4 }}
                >
                  pranavalli19@gmail.com
                </motion.a>
                <div className="flex gap-6 mt-4">
                  {[
                    { label: 'GitHub', href: 'https://github.com/pranavsai' },
                    { label: 'LinkedIn', href: 'https://linkedin.com/in/pranavsai' },
                  ].map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-[400] text-bone-white/40 hover:text-bone-white transition-colors uppercase tracking-[0.08em]"
                      whileHover={{ x: 3 }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FOOTER NOTE ─── */}
      <section className="px-8 py-32 border-t border-graphite/20 text-center">
        <TextReveal
          text="Available for freelance, collaboration, and conversation."
          className="text-[36px] sm:text-[48px] font-[400] text-bone-white/60 leading-[1.13] tracking-[-0.02em] max-w-[20ch] mx-auto"
          type="words"
          stagger={0.04}
        />
      </section>
    </div>
  );
}
