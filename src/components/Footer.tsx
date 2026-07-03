import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-8 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 border-t border-gunmetal-blue/20">
      <div className="flex flex-col gap-1">
        <p className="text-[14px] font-[400] text-bone-white/60">
          Made by{" "}
          <Link href="https://github.com/the-X-alien" target="_blank" className="text-bone-white/80 hover:text-bone-white transition-colors">
            the-X-alien
          </Link>{" "}
          (Dhiaan)
        </p>
      </div>
      <div className="flex items-center gap-6">
        <Link href="https://github.com/the-X-alien" target="_blank" className="text-[14px] font-[400] text-bone-white/60 hover:text-bone-white transition-colors">
          GitHub
        </Link>
        <Link href="https://linkedin.com/in/dhiaan" target="_blank" className="text-[14px] font-[400] text-bone-white/60 hover:text-bone-white transition-colors">
          LinkedIn
        </Link>
        <Link href="mailto:pranavalli19@gmail.com" className="text-[14px] font-[400] text-bone-white/60 hover:text-bone-white transition-colors">
          Email
        </Link>
      </div>
    </footer>
  );
}
