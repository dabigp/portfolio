import GlassPrism from "@/components/GlassPrism";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="pt-32 px-8 pb-32">
      <div className="relative mb-20">
        <GlassPrism className="w-[400px] h-[500px] right-[-100px] top-[-80px] opacity-40" />
        <p className="text-[18px] font-[400] text-bone-white/70 mb-4">Contact</p>
        <h1 className="text-display-xl font-[400] text-bone-white leading-[1] tracking-[-0.02em] max-w-[14ch]">
          Let&apos;s <span className="font-[700]">talk</span>
        </h1>
      </div>

      <div className="grid sm:grid-cols-2 gap-20 max-w-[1000px]">
        <div>
          <p className="text-display font-[400] text-bone-white leading-[1] tracking-[-0.02em] mb-8">
            Have a project in mind?
          </p>
          <p className="text-[17px] font-[400] text-bone-white/70 leading-[1.5] mb-12">
            Whether it&apos;s a new product, a redesign, or just a conversation —
            I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-[15px] font-[400] text-bone-white/60">pranavalli19@gmail.com</p>
            <div className="flex gap-6 mt-4">
              <a href="https://github.com/pranavsai" target="_blank" rel="noopener noreferrer" className="text-[14px] font-[400] text-bone-white/60 hover:text-bone-white transition-colors uppercase tracking-[0.01em]">
                GitHub
              </a>
              <a href="https://linkedin.com/in/pranavsai" target="_blank" rel="noopener noreferrer" className="text-[14px] font-[400] text-bone-white/60 hover:text-bone-white transition-colors uppercase tracking-[0.01em]">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
