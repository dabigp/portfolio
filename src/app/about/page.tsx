import GlassPrism from "@/components/GlassPrism";

export default function About() {
  return (
    <div className="pt-32 px-8 pb-32">
      <div className="relative mb-32">
        <GlassPrism className="w-[500px] h-[600px] right-[-200px] top-[-150px] opacity-50" />
        <p className="text-[18px] font-[400] text-bone-white/70 mb-4">About</p>
        <h1 className="text-display-xl font-[400] text-bone-white leading-[1] tracking-[-0.02em] max-w-[14ch]">
          Designer &amp; developer with a <span className="font-[700]">builder</span> mindset
        </h1>
      </div>

      <div className="max-w-[80ch]">
        <p className="text-heading font-[400] text-bone-white leading-[1.13] tracking-[-0.02em] mb-16">
          I believe the best products emerge when technical rigor meets
          <span className="font-[700]"> design empathy</span>. Every line of code is a design decision.
        </p>

        <div className="grid sm:grid-cols-2 gap-16 mb-32">
          <div>
            <p className="text-[15px] font-[400] text-gunmetal-blue mb-4 uppercase tracking-[0.01em]">
              Background
            </p>
            <p className="text-[17px] font-[400] text-bone-white/80 leading-[1.5]">
              I&apos;m a full-stack developer and designer focused on building products
              that are both beautiful and functional. With experience across the stack —
              from React frontends to Node backends to cloud infrastructure — I bring
              a holistic approach to every project.
            </p>
          </div>
          <div>
            <p className="text-[15px] font-[400] text-gunmetal-blue mb-4 uppercase tracking-[0.01em]">
              Approach
            </p>
            <p className="text-[17px] font-[400] text-bone-white/80 leading-[1.5]">
              Systems thinking, iterative refinement, and obsessive attention to
              detail. I design for humans first and machines second, and I believe
              the best interfaces are invisible.
            </p>
          </div>
        </div>

        <div className="border-t border-graphite/30 pt-16">
          <p className="text-[15px] font-[400] text-gunmetal-blue mb-8 uppercase tracking-[0.01em]">
            Skills &amp; Tools
          </p>
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            {[
              { category: "Frontend", items: "React, Next.js, TypeScript, Tailwind, Framer Motion" },
              { category: "Backend", items: "Node.js, Python, PostgreSQL, Prisma, Supabase" },
              { category: "Design", items: "Figma, Design Systems, Typography, UI/UX" },
              { category: "DevOps", items: "Vercel, Docker, AWS, CI/CD, Git" },
            ].map((skill) => (
              <div key={skill.category} className="min-w-[200px]">
                <p className="text-[14px] font-[400] text-gunmetal-blue uppercase tracking-[0.01em] mb-2">
                  {skill.category}
                </p>
                <p className="text-[17px] font-[400] text-bone-white/80">{skill.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
