import GlassPrism from "@/components/GlassPrism";

const projects = [
  {
    title: "Project Alpha",
    description: "A full-stack SaaS platform built with Next.js, Node.js, and PostgreSQL. Real-time collaboration, AI-powered recommendations, and a sleek design system.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    year: "2025",
  },
  {
    title: "Project Beta",
    description: "Design system and component library used across multiple products. 50+ components, dark/light mode, accessibility-first, and comprehensive Storybook documentation.",
    tech: ["React", "Storybook", "CSS", "Radix UI"],
    year: "2024",
  },
  {
    title: "Project Gamma",
    description: "AI-powered developer tool that analyzes codebases and generates optimized implementations. Built with a custom RAG pipeline and vector database.",
    tech: ["Python", "React", "LangChain", "Pinecone"],
    year: "2024",
  },
];

export default function Work() {
  return (
    <div className="pt-32 px-8 pb-32">
      <div className="relative mb-32">
        <GlassPrism className="w-[400px] h-[500px] left-[-150px] top-[-100px] opacity-40" />
        <p className="text-[18px] font-[400] text-bone-white/70 mb-4">Selected Projects</p>
        <h1 className="text-display-xl font-[400] text-bone-white leading-[1] tracking-[-0.02em] max-w-[14ch]">
          Work that <span className="font-[700]">speaks</span>
        </h1>
      </div>

      <div className="flex flex-col gap-32">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group flex flex-col gap-6 pb-16 border-b border-graphite/30"
          >
            <div className="flex items-start justify-between">
              <p className="text-[22px] font-[400] text-gunmetal-blue">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="text-[14px] font-[400] text-bone-white/40">{project.year}</p>
            </div>
            <h2 className="text-[56px] sm:text-[72px] font-[400] text-bone-white leading-[1.13] tracking-[-0.02em] group-hover:opacity-70 transition-opacity">
              {project.title}
            </h2>
            <p className="text-[18px] font-[400] text-bone-white/70 max-w-[70ch] leading-[1.5]">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[14px] font-[400] text-gunmetal-blue px-3 py-1 border border-gunmetal-blue/40"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
