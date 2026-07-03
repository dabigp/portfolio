'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ThreePrism from '@/components/ThreePrism';
import TextReveal from '@/components/TextReveal';
import AnimatedSection from '@/components/AnimatedSection';

const projects = [
  {
    id: 'chess',
    title: 'Chess Engine UI',
    year: '2024',
    role: 'Solo Project',
    description: [
      'A terminal-based chess application that pits the player against Stockfish — one of the strongest open-source chess engines in the world. The system supports UCI (Universal Chess Interface) commands, allowing direct communication with the engine at configurable depths up to 15 ply.',
      'Players can set skill levels from 0–20, adjust Elo ratings, and enforce time controls down to 0.5 seconds per move. The interface parses Standard Algebraic Notation (SAN) for clean human-readable moves while maintaining full engine state internally.',
    ],
    tech: ['Python', 'Stockfish', 'UCI Protocol', 'SAN Notation'],
    highlights: [
      'Depth 15 search with skill level 10',
      'Configurable Elo rating (1400+)',
      '0.5s minimum time control',
      'Full game state management',
    ],
    links: { github: 'https://github.com/pranavsai' },
  },
  {
    id: 'ir-rgb',
    title: 'IR RGB Controller',
    year: '2022',
    role: 'Solo Project',
    description: [
      'An Arduino-based RGB LED lighting system controlled entirely via infrared remote. Each button on the remote maps to a distinct mood color — red for angry, blue for sad, green for happy, purple for tired, yellow for cozy, pink for confused, white for neutral.',
      'Built using the IRremote library and a standard TSOP38238 IR receiver, the system reads NEC-encoded remote signals and maps them to PWM outputs on three LED channels (red, green, blue) for smooth color transitions.',
    ],
    tech: ['Arduino', 'C++', 'IRremote Library', 'PWM'],
    highlights: [
      '7 mood-based color presets',
      'NEC IR protocol decoding',
      'Smooth PWM transitions',
      'TSOP38238 IR receiver',
    ],
    links: { github: 'https://github.com/pranavsai' },
  },
  {
    id: 'lcd-menu',
    title: 'Arduino LCD Menu',
    year: '2022',
    role: 'Solo Project',
    description: [
      'An interactive menu system displayed on a 16x2 I2C LCD, controlled via physical push buttons with audible buzzer feedback. The menu presents a "Family Friendly Menu" with items like cake, milkshake, and coffee — each with dynamic pricing displayed in real-time.',
      'Features multiple navigation states, selection highlighting, and a confirm/cancel flow. The I2C LCD backpack reduces wiring to just 4 pins, and the button matrix uses analog read pin-sharing for efficient I/O usage.',
    ],
    tech: ['Arduino', 'LiquidCrystal I2C', 'C++', 'Embedded Systems'],
    highlights: [
      'Multi-state navigation system',
      'Dynamic pricing display',
      'Buzzer audio feedback',
      'I2C LCD with 4-pin wiring',
    ],
    links: { github: 'https://github.com/pranavsai' },
  },
  {
    id: 'portfolio',
    title: 'Portfolio v2',
    year: '2025',
    role: 'Solo Project',
    description: [
      'This very site — a cinematic dark-editorial portfolio built with Next.js 16, Three.js, Framer Motion, and Lenis smooth scroll. Inspired by the typographic restraint of Vivid+Co and the narrative intensity of IVRESS, the site treats every section as a full-viewport editorial composition.',
      'The 3D glass prism in the hero uses chromatic aberration with offset RGB wireframe meshes and mouse-tracked rotation. Every text block uses per-character or per-word reveal animations triggered by scroll position. The result is a site that feels less like a webpage and more like a darkroom editorial spread come to life.',
    ],
    tech: ['Next.js', 'Three.js', 'TypeScript', 'Framer Motion', 'Lenis'],
    highlights: [
      'Interactive 3D glass prism with chromatic aberration',
      'Per-character text reveal animations',
      'Lenis smooth scroll (lerp 0.06)',
      'Google Search Console verified',
      'JSON-LD structured data',
      'Responsive dark editorial design',
    ],
    links: { github: 'https://github.com/dabigp/portfolio', live: 'https://portfolio-lyart-kappa-46.vercel.app' },
  },
];

export default function Work() {
  return (
    <div>
      {/* ─── HEADER ─── */}
      <section className="relative min-h-[60vh] flex items-center px-8 pt-32">
        <ThreePrism />
        <div className="relative z-10">
          <AnimatedSection direction="up" delay={0.1}>
            <p className="text-[14px] font-[400] text-gunmetal-blue uppercase tracking-[0.15em] mb-4">
              Portfolio
            </p>
          </AnimatedSection>
          <TextReveal
            text="Projects I've built"
            className="text-display-xl font-[400] text-bone-white leading-[1] tracking-[-0.02em] max-w-[14ch]"
            type="chars"
            stagger={0.025}
            delay={0.3}
          />
          <AnimatedSection direction="up" delay={0.8}>
            <p className="text-[18px] font-[400] text-bone-white/60 mt-8 max-w-[50ch] leading-[1.6]">
              Each project represents a different chapter — from hardware circuits to chess engines to cinematic web experiences.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      {projects.map((project, i) => (
        <ProjectSection key={project.id} project={project} index={i} />
      ))}
    </div>
  );
}

function ProjectSection({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-150px' });

  return (
    <section
      id={project.id}
      ref={ref}
      className="px-8 py-48 border-t border-graphite/20"
    >
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection direction="up" delay={0.1}>
          <div className="flex items-center gap-6 mb-6">
            <span className="text-[22px] font-[400] text-gunmetal-blue tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-[14px] font-[400] text-bone-white/30 uppercase tracking-[0.08em]">
              {project.year}
            </span>
          </div>
        </AnimatedSection>

        <TextReveal
          text={project.title}
          className="text-[56px] sm:text-[72px] font-[400] text-bone-white leading-[1.13] tracking-[-0.02em] mb-4"
          type="chars"
          stagger={0.03}
          delay={0.2}
        />

        <AnimatedSection direction="up" delay={0.4}>
          <span className="text-[15px] font-[400] text-gunmetal-blue">{project.role}</span>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-8 mt-16">
          {project.description.map((para, i) => (
            <motion.p
              key={i}
              className="text-[17px] font-[400] text-bone-white/70 leading-[1.7]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        <motion.div
          className="flex flex-wrap gap-3 mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[13px] font-[400] text-gunmetal-blue px-3 py-1.5 border border-gunmetal-blue/40"
            >
              {t}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 grid sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {project.highlights.map((h) => (
            <div key={h} className="flex items-center gap-3">
              <span className="w-[3px] h-[3px] bg-gunmetal-blue rounded-full shrink-0" />
              <span className="text-[15px] font-[400] text-bone-white/60">{h}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-6 mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-[400] tracking-[0.03em] text-bone-white px-[20px] py-[10px] border border-bone-white uppercase inline-block hover:bg-bone-white hover:text-obsidian transition-colors"
            >
              View on GitHub
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-[400] tracking-[0.03em] text-gunmetal-blue px-[20px] py-[10px] border border-gunmetal-blue uppercase inline-block hover:bg-gunmetal-blue hover:text-bone-white transition-colors"
            >
              Live Site
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
