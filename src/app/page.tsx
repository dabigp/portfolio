'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import ThreePrism from '@/components/ThreePrism';
import AnimatedSection from '@/components/AnimatedSection';
import TextReveal from '@/components/TextReveal';
import ProjectCard from '@/components/ProjectCard';
import LoadingScreen from '@/components/LoadingScreen';

const projects = [
  {
    title: 'Chess Engine UI',
    number: 1,
    tags: ['Python', 'Stockfish', 'AI'],
    description: 'Terminal-based chess game integrated with Stockfish engine at depth 15, skill level 10. Supports UCI commands, SAN notation, and configurable Elo ratings.',
    href: '/work#chess',
  },
  {
    title: 'IR RGB Controller',
    number: 2,
    tags: ['Arduino', 'C++', 'IR Remote', 'Hardware'],
    description: 'Infrared remote-controlled RGB LED system with mood-based color mapping — red for angry, blue for sad, green for happy, and more. Built with IRremote library.',
    href: '/work#ir-rgb',
  },
  {
    title: 'Arduino LCD Menu',
    number: 3,
    tags: ['Arduino', 'LiquidCrystal', 'I2C', 'Embedded'],
    description: 'Interactive family-friendly menu system with buttons, buzzer, and LCD display. Features dynamic pricing, navigation states, and real-time selection feedback.',
    href: '/work#lcd-menu',
  },
  {
    title: 'Portfolio v2',
    number: 4,
    tags: ['Next.js', 'Three.js', 'TypeScript', 'Framer Motion'],
    description: 'This site — a dark editorial cinematic experience with interactive 3D glass prism, per-character text reveals, Lenis smooth scroll, and IVRESS-inspired storytelling.',
    href: '/',
  },
];

const timeline = [
  { age: '13', year: '2018', event: 'First Python script — built a number guessing game and student ID card program. The spark that started everything.' },
  { age: '14', year: '2019', event: 'Moved to Arduino — blinking LEDs, servo motors, LCD displays. Built a dice roller on 7-segment displays and an IR-controlled RGB LED system.' },
  { age: '16', year: '2021', event: 'Deep dive into web dev — HTML, CSS, JavaScript. Started building interactive UIs and learned the fundamentals of full-stack development.' },
  { age: '18', year: '2023', event: 'React & Next.js — built full-stack applications, explored TypeScript, Tailwind, and modern frontend architecture.' },
  { age: '19', year: '2024', event: 'Chess engine integration — built Python + Stockfish UCI interface with configurable depth, skill, and Elo. Explored AI and algorithmic thinking.' },
  { age: '20', year: '2025', event: 'Professional portfolio — combining design, 3D graphics, and storytelling into a cinematic web experience.' },
];

const skills = [
  { category: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'C++'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind', 'Framer Motion', 'Three.js'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Prisma'] },
  { category: 'Hardware', items: ['Arduino', 'IR Remote', 'LCD/I2C', 'Servo', 'LED'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Vercel', 'VS Code', 'PyCharm'] },
  { category: 'Design', items: ['Figma', 'Typography', 'UI/UX', 'Design Systems'] },
];

function Counter({ from = 0, to, suffix = '' }: { from?: number; to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.span
      ref={ref}
      className="tabular-nums inline-block"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.01 }}
      >
        <CountUp from={from} to={to} play={isInView} />
      </motion.span>
      {suffix}
    </motion.span>
  );
}

function CountUp({ from, to, play }: { from: number; to: number; play: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll();
  const val = useTransform(scrollYProgress, [0, 1], [from, to]);

  useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={play ? { opacity: 1 } : {}}
      transition={{ duration: 0.01 }}
    >
      {play ? Math.floor(to) : from}
    </motion.span>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  if (loading) return <LoadingScreen onComplete={() => setLoading(false)} />;

  return (
    <div className="flex flex-col">
      {/* ─── HERO ─── */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-8"
      >
        <ThreePrism />

        <div className="relative z-10 max-w-[90vw]">
          <motion.p
            className="text-[14px] sm:text-[17px] font-[400] text-gunmetal-blue mb-6 tracking-[0.15em] uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Design &middot; Develop &middot; Deliver
          </motion.p>

          <h1 className="text-display-xl font-[400] text-bone-white leading-[1] tracking-[-0.02em] max-w-[14ch]">
            <TextReveal text="Turning ideas into digital craft" as="span" type="chars" stagger={0.02} delay={0.8} />
          </h1>

          <motion.div
            className="mt-12 flex gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link
              href="/work"
              className="inline-block text-[14px] font-[400] tracking-[0.03em] text-obsidian bg-bone-white no-underline px-[24px] py-[12px] uppercase"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="inline-block text-[14px] font-[400] tracking-[0.03em] text-bone-white no-underline px-[24px] py-[12px] border border-bone-white uppercase"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          <span className="text-[12px] font-[400] text-bone-white/40 uppercase tracking-[0.15em]">Scroll</span>
          <motion.svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M8 0V20M8 20L1 13M8 20L15 13" stroke="#fffdf9" strokeWidth="1" strokeOpacity="0.4" />
          </motion.svg>
        </motion.div>
      </motion.section>

      {/* ─── PHILOSOPHY ─── */}
      <section className="relative min-h-[60vh] flex items-center px-8 py-48">
        <div className="max-w-[90vw]">
          <AnimatedSection direction="up" delay={0.1}>
            <p className="text-[14px] font-[400] text-gunmetal-blue uppercase tracking-[0.15em] mb-8">
              Philosophy
            </p>
          </AnimatedSection>
          <TextReveal
            text="I build things that live at the intersection of design, technology, and purpose. Every line of code is a design decision."
            className="text-heading font-[400] text-bone-white leading-[1.13] tracking-[-0.02em] max-w-[22ch]"
            type="words"
            stagger={0.05}
            delay={0.2}
          />
          <AnimatedSection direction="up" delay={0.6}>
            <p className="text-[18px] font-[400] text-bone-white/70 mt-12 max-w-[60ch] leading-[1.6]">
              From my first Python script at age 13 to building cinematic web experiences with Three.js,
              I&apos;ve been driven by curiosity and the desire to create things that matter.
              I&apos;ve built chess engines, wired Arduino circuits, designed PCB layouts, and
              architected full-stack applications — always with the same philosophy:
              <span className="font-[700] text-bone-white"> craft over clutter, purpose over trends.</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="px-8 py-32 border-t border-graphite/20">
        <div className="max-w-[90vw] grid grid-cols-2 sm:grid-cols-4 gap-16">
          {[
            { label: 'Years Coding', value: '7+' },
            { label: 'Projects Built', value: '15+' },
            { label: 'Technologies', value: '20+' },
            { label: 'Languages', value: '4' },
          ].map((stat, i) => (
            <AnimatedSection key={stat.label} direction="up" delay={i * 0.1}>
              <div className="flex flex-col gap-2">
                <motion.span
                  className="text-[56px] sm:text-[72px] font-[400] text-bone-white leading-[1] tracking-[-0.02em]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-[14px] font-[400] text-bone-white/50 uppercase tracking-[0.08em]">
                  {stat.label}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section className="px-8 py-48">
        <AnimatedSection direction="up" delay={0.1}>
          <p className="text-[14px] font-[400] text-gunmetal-blue uppercase tracking-[0.15em] mb-16">
            Selected Projects
          </p>
        </AnimatedSection>
        <div className="flex flex-col gap-20">
          {projects.map((project) => (
            <ProjectCard key={project.number} {...project} />
          ))}
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="px-8 py-48 border-t border-graphite/20">
        <AnimatedSection direction="up" delay={0.1}>
          <p className="text-[14px] font-[400] text-gunmetal-blue uppercase tracking-[0.15em] mb-16">
            Journey
          </p>
        </AnimatedSection>
        <div className="relative">
          <div className="absolute left-[15px] sm:left-[19px] top-0 bottom-0 w-[1px] bg-gunmetal-blue/20" />
          <div className="flex flex-col gap-24">
            {timeline.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section className="px-8 py-48 border-t border-graphite/20">
        <AnimatedSection direction="up" delay={0.1}>
          <p className="text-[14px] font-[400] text-gunmetal-blue uppercase tracking-[0.15em] mb-16">
            Toolkit
          </p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
          {skills.map((skill, i) => (
            <AnimatedSection key={skill.category} direction="up" delay={i * 0.1}>
              <motion.div
                className="group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[13px] font-[400] text-gunmetal-blue uppercase tracking-[0.1em] mb-4">
                  {skill.category}
                </p>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item) => (
                    <motion.span
                      key={item}
                      className="text-[15px] font-[400] text-bone-white/80 px-3 py-1.5 border border-graphite/40"
                      whileHover={{ borderColor: '#6f879c', color: '#fffdf9' }}
                      transition={{ duration: 0.2 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-8 py-48 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, #6f879c 0%, transparent 60%)',
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative z-10 text-center">
          <TextReveal
            text="Let's build something remarkable"
            className="text-display font-[400] text-bone-white leading-[1] tracking-[-0.02em] max-w-[16ch] mx-auto"
            type="chars"
            stagger={0.025}
          />
          <AnimatedSection direction="up" delay={0.8}>
            <motion.div
              className="mt-16"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/contact"
                className="inline-block text-[14px] font-[400] tracking-[0.03em] text-bone-white no-underline px-[32px] py-[14px] border border-bone-white uppercase"
              >
                Start a Project
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
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
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        className="absolute left-[9px] sm:left-[11px] top-[6px] w-[13px] h-[13px] rounded-full border border-gunmetal-blue bg-slate-veil"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: 'spring' }}
      />
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-8">
        <div className="flex items-baseline gap-4 sm:gap-6 shrink-0">
          <span className="text-[36px] sm:text-[48px] font-[400] text-gunmetal-blue leading-none tabular-nums tracking-[-0.02em]">
            {item.age}
          </span>
          <span className="text-[14px] font-[400] text-bone-white/30 uppercase tracking-[0.08em]">
            {item.year}
          </span>
        </div>
        <p className="text-[17px] font-[400] text-bone-white/70 leading-[1.6] max-w-[60ch]">
          {item.event}
        </p>
      </div>
    </motion.div>
  );
}
