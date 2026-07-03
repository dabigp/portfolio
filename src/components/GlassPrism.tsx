import ThreePrism from './ThreePrism';

export default function GlassPrism({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none select-none ${className}`} aria-hidden="true">
      <ThreePrism />
    </div>
  );
}
