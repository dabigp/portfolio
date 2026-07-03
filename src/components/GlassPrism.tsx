export default function GlassPrism({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30">
        <defs>
          <linearGradient id="prism-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fffdf9" stopOpacity="0.08" />
            <stop offset="30%" stopColor="#6f879c" stopOpacity="0.12" />
            <stop offset="60%" stopColor="#fffdf9" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#6f879c" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="chroma-r" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff4444" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ff4444" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="chroma-b" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4488ff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#4488ff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="chroma-g" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#44ff88" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#44ff88" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points="300,0 600,200 500,700 100,700 0,200" fill="url(#prism-grad)" stroke="#fffdf9" strokeWidth="0.3" strokeOpacity="0.15" />
        <polygon points="300,0 610,200 500,700 100,700 -10,200" fill="url(#chroma-r)" strokeWidth="0" />
        <polygon points="290,0 590,200 490,700 90,700 -10,200" fill="url(#chroma-b)" strokeWidth="0" />
        <line x1="300" y1="0" x2="600" y2="200" stroke="#ff4444" strokeWidth="0.5" strokeOpacity="0.3" />
        <line x1="300" y1="0" x2="0" y2="200" stroke="#4488ff" strokeWidth="0.5" strokeOpacity="0.3" />
        <line x1="100" y1="700" x2="600" y2="200" stroke="#44ff88" strokeWidth="0.3" strokeOpacity="0.2" />
        <polygon points="150,300 350,250 400,500 200,550" fill="url(#prism-grad)" stroke="#6f879c" strokeWidth="0.3" strokeOpacity="0.2" />
        <line x1="150" y1="300" x2="400" y2="500" stroke="#6f879c" strokeWidth="0.3" strokeOpacity="0.15" />
      </svg>
    </div>
  );
}
