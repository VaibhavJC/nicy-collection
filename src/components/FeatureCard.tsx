import Reveal from "./Reveal";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <Reveal delay={delay}>
      <div className="flex flex-col items-center text-center gap-3 rounded-2xl bg-ivory ring-1 ring-champagne px-6 py-8 h-full hover:ring-gold/50 transition-colors">
        <span className="text-3xl" aria-hidden="true">
          {icon}
        </span>
        <h3 className="font-display text-xl text-ink">{title}</h3>
        <p className="text-sm text-ink-soft">{description}</p>
      </div>
    </Reveal>
  );
}
