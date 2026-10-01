interface PetalFieldProps {
  count?: number;
  className?: string;
}

const PETAL_PATH =
  "M12 0C6 4 2 10 4 16C5.5 20 9 22 12 22C15 22 18.5 20 20 16C22 10 18 4 12 0Z";

// Deterministic pseudo-random layout so server/client (and rebuilds) match —
// no Math.random() at render time, just fixed decorative values.
const LAYOUT = [
  { left: 4, size: 22, duration: 26, delay: -2, hue: "rose", drift: 40 },
  { left: 16, size: 16, duration: 21, delay: -9, hue: "gold", drift: -30 },
  { left: 30, size: 26, duration: 30, delay: -14, hue: "rose", drift: 25 },
  { left: 45, size: 14, duration: 19, delay: -4, hue: "maroon", drift: -45 },
  { left: 58, size: 20, duration: 24, delay: -18, hue: "rose", drift: 35 },
  { left: 71, size: 18, duration: 28, delay: -7, hue: "gold", drift: -25 },
  { left: 83, size: 24, duration: 22, delay: -12, hue: "rose", drift: 20 },
  { left: 93, size: 15, duration: 25, delay: -20, hue: "maroon", drift: -35 },
];

const hueClass: Record<string, string> = {
  rose: "text-rose",
  gold: "text-gold",
  maroon: "text-maroon",
};

/**
 * Purely decorative, slow-drifting petal layer. Used sparingly (hero-style
 * sections only, not sitewide) so it reads as an elegant accent rather than
 * visual noise. Respects prefers-reduced-motion and is hidden from
 * assistive tech and pointer events.
 */
export default function PetalField({ count = 8, className = "" }: PetalFieldProps) {
  const petals = LAYOUT.slice(0, count);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {petals.map((p, i) => (
        <span
          key={i}
          className={`petal absolute -top-10 ${hueClass[p.hue]}`}
          style={
            {
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: 0.22,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--petal-drift": `${p.drift}px`,
            } as React.CSSProperties
          }
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d={PETAL_PATH} />
          </svg>
        </span>
      ))}
    </div>
  );
}
