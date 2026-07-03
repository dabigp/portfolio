'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ThreePrism from '@/components/ThreePrism';
import TextReveal from '@/components/TextReveal';
import AnimatedSection from '@/components/AnimatedSection';

const timeline = [
  { year: '2018', event: 'Wrote first Python script — a number guessing game. Age 13, completely hooked.' },
  { year: '2019', event: 'Discovered Arduino. Built LED blink circuits, servo sweeps, and a 7-segment dice roller.' },
  { year: '2020', event: 'Built an IR remote-controlled RGB LED system with 7 mood-based color presets.' },
  { year: '2021', event: 'Learned web fundamentals — HTML, CSS, JavaScript. Built first interactive UIs.' },
  { year: '2022', event: 'Created an LCD menu system with buttons, buzzer, and dynamic pricing on Arduino.' },
  { year: '2023', event: 'Adopted React and Next.js. Started building full-stack applications.' },
  { year: '2024', event: 'Integrated Stockfish chess engine with Python at depth 15. Explored AI + algorithms.' },
  { year: '2025', event: 'Built this portfolio — a cinematic dark-editorial experience with 3D, animation, and purpose.' },
];

const skillsData = [
  {
    category: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'C++', 'HTML/CSS'],
    level: 90,
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    level: 85,
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL', 'Prisma', 'REST APIs'],
    level: 75,
  },
  {
    category: 'Hardware',
    items: ['Arduino', 'IR Remote', 'LCD/I2C', 'Servo Motors', 'LED Systems'],
    level: 80,
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'Vercel', 'VS Code', 'PyCharm', 'Linux'],
    level: 85,
  },
  {
    category: 'Design',
    items: ['Figma', 'Typography', 'UI/UX', 'Design Systems', '3D Graphics'],
    level: 70,
  },
];

function SkillBar({ label, level, delay }: { label: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-[15px] font-[400] text-bone-white/80">{label}</span>
        <motion.span
          className="text-[13px] font-[400] text-gunmetal-blue tabular-nums"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="w-full h-[1px] bg-graphite/40 relative overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full bg-gunmetal-blue"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div>
      {/* ─── HEADER ─── */}
      <section className="relative min-h-[60vh] flex items-center px-8 pt-32">
        <ThreePrism />
        <div className="relative z-10">
          <AnimatedSection direction="up" delay={0.1}>
            <p className="text-[14px] font-[400] text-gunmetal-blue uppercase tracking-[0.15em] mb-4">
              About
            </p>
          </AnimatedSection>
          <TextReveal
            text="Designer & developer with a builder mindset"
            className="text-display-xl font-[400] text-bone-white leading-[1] tracking-[-0.02em] max-w-[14ch]"
            type="chars"
            stagger={0.025}
            delay={0.3}
          />
        </div>
      </section>

      {/* ─── BIO ─── */}
      <section className="px-8 py-48">
        <div className="max-w-[80ch]">
          <TextReveal
            text="I believe the best products emerge when technical rigor meets design empathy. Every line of code is a design decision, every circuit a composition."
            className="text-heading font-[400] text-bone-white leading-[1.13] tracking-[-0.02em]"
            type="words"
            stagger={0.04}
            delay={0.2}
          />

          <AnimatedSection direction="up" delay={0.8}>
            <div className="grid sm:grid-cols-2 gap-12 mt-24">
              <div>
                <p className="text-[13px] font-[400] text-gunmetal-blue uppercase tracking-[0.1em] mb-5">
                  Background
                </p>
                <p className="text-[17px] font-[400] text-bone-white/80 leading-[1.7]">
                  My journey started at 13 with a Python IDE and a blinking cursor. From there, I moved to
                  Arduino — wiring LEDs, decoding IR signals, and building interactive hardware. Today,
                  I build full-stack web applications with React, Next.js, and Three.js, bringing the
                  same tinkering curiosity to every project.
                </p>
              </div>
              <div>
                <p className="text-[13px] font-[400] text-gunmetal-blue uppercase tracking-[0.1em] mb-5">
                  Approach
                </p>
                <p className="text-[17px] font-[400] text-bone-white/80 leading-[1.7]">
                  Systems thinking, iterative refinement, and obsessive attention to detail.
                  I design for humans first and machines second. Whether it&apos;s a chess engine or a
                  cinematic website, I believe the best work happens when you care deeply about the craft.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section className="px-8 py-48 border-t border-graphite/20">
        <AnimatedSection direction="up" delay={0.1}>
          <p className="text-[14px] font-[400] text-gunmetal-blue uppercase tracking-[0.15em] mb-16">
            Skills &amp; Proficiency
          </p>
        </AnimatedSection>
        <div className="max-w-[800px]">
          <div className="flex flex-col gap-10">
            {skillsData.map((skill, i) => (
              <AnimatedSection key={skill.category} direction="up" delay={i * 0.1}>
                <div>
                  <p className="text-[13px] font-[400] text-gunmetal-blue uppercase tracking-[0.1em] mb-4">
                    {skill.category}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="text-[13px] font-[400] text-bone-white/60 px-2.5 py-1 border border-graphite/30"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <SkillBar label="Proficiency" level={skill.level} delay={i * 0.15} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="px-8 py-48 border-t border-graphite/20">
        <AnimatedSection direction="up" delay={0.1}>
          <p className="text-[14px] font-[400] text-gunmetal-blue uppercase tracking-[0.15em] mb-16">
            Timeline
          </p>
        </AnimatedSection>
        <div className="relative max-w-[800px]">
          <div className="absolute left-[15px] sm:left-[19px] top-0 bottom-0 w-[1px] bg-gunmetal-blue/20" />
          <div className="flex flex-col gap-20">
            {timeline.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="px-8 py-48 border-t border-graphite/20 text-center">
        <TextReveal
          text="Want to work together?"
          className="text-[56px] sm:text-[72px] font-[400] text-bone-white leading-[1.13] tracking-[-0.02em] max-w-[16ch] mx-auto"
          type="chars"
          stagger={0.03}
        />
        <AnimatedSection direction="up" delay={0.6}>
          <motion.a
            href="mailto:pranavalli19@gmail.com"
            className="inline-block mt-12 text-[14px] font-[400] tracking-[0.03em] text-bone-white px-[32px] py-[14px] border border-bone-white uppercase"
            whileHover={{ scale: 1.05, backgroundColor: '#fffdf9', color: '#495764' }}
            transition={{ duration: 0.3 }}
          >
            Get in Touch
          </motion.a>
        </AnimatedSection>
      </section>
    </div>
  );
}

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className="relative pl-12 sm:pl-16"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        className="absolute left-[9px] sm:left-[11px] top-[6px] w-[13px] h-[13px] rounded-full border border-gunmetal-blue bg-slate-veil"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.12 + 0.2, type: 'spring' }}
      />
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
        <span className="text-[14px] font-[400] text-gunmetal-blue uppercase tracking-[0.08em] shrink-0">
          {item.year}
        </span>
        <p className="text-[17px] font-[400] text-bone-white/70 leading-[1.6]">
          {item.event}
        </p>
      </div>
    </motion.div>
  );
}
