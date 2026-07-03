import Link from "next/link";
import GlassPrism from "@/components/GlassPrism";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-8">
        <GlassPrism className="w-[600px] h-[800px] right-[-100px] top-[-100px] opacity-60" />
        <div className="relative z-10 max-w-[90vw]">
          <p className="text-[18px] sm:text-[22px] font-[400] text-bone-white/80 mb-4 tracking-normal">
            Design &bull; Develop &bull; Deliver
          </p>
          <h1 className="text-display-xl font-[400] text-bone-white leading-[1] tracking-[-0.02em] max-w-[14ch]">
            Turning <span className="font-[700]">ideas</span> into digital craft
          </h1>
          <div className="mt-12 flex gap-6">
            <Link
              href="/work"
              className="inline-block text-[14px] font-[400] tracking-[0.01em] text-bone-white no-underline px-[15px] py-[9px] border border-bone-white uppercase"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="inline-block text-[14px] font-[400] tracking-[0.01em] text-gunmetal-blue no-underline px-[15px] py-[9px] border border-gunmetal-blue uppercase"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="relative min-h-[80vh] flex items-center px-8 py-32">
        <div className="max-w-[90vw]">
          <p className="text-[18px] font-[400] text-bone-white/70 mb-6 tracking-normal">
            Philosophy
          </p>
          <p className="text-heading font-[400] text-bone-white leading-[1.13] tracking-[-0.02em] max-w-[20ch]">
            I build products that live at the intersection of <span className="font-[700]">design</span>, <span className="font-[700]">technology</span>, and <span className="font-[700]">purpose</span>.
          </p>
          <p className="text-[18px] font-[400] text-bone-white/80 mt-10 max-w-[60ch] leading-[1.5]">
            From concept to deployment, I architect full-stack experiences with modern frameworks,
            clean systems thinking, and an obsessive attention to craft.
          </p>
        </div>
      </section>

      {/* Work Preview Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 py-32">
        <p className="text-[18px] font-[400] text-bone-white/70 mb-12 tracking-normal uppercase">
          Selected Work
        </p>
        <div className="flex flex-col gap-24">
          {[
            { title: "Project One", tag: "Full-Stack Application", href: "/work" },
            { title: "Project Two", tag: "Design System", href: "/work" },
            { title: "Project Three", tag: "AI-Powered Tool", href: "/work" },
          ].map((project, i) => (
            <Link
              key={i}
              href={project.href}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-graphite/30 no-underline"
            >
              <div>
                <p className="text-[22px] font-[400] text-bone-white/50 mb-1">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="text-[36px] sm:text-[56px] font-[400] text-bone-white leading-[1.13] tracking-[-0.02em] group-hover:opacity-70 transition-opacity">
                  {project.title}
                </h2>
              </div>
              <p className="text-[17px] font-[400] text-bone-white/60">{project.tag}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-8 py-32">
        <div className="text-center">
          <p className="text-display font-[400] text-bone-white leading-[1] tracking-[-0.02em] max-w-[16ch] mx-auto">
            Let&apos;s build something <span className="font-[700]">remarkable</span>
          </p>
          <Link
            href="/contact"
            className="inline-block mt-12 text-[14px] font-[400] tracking-[0.01em] text-bone-white no-underline px-[15px] py-[9px] border border-bone-white uppercase"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
