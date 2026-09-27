import { Link } from "react-router-dom";
import type { Occasion } from "../data/occasions";
import SafeImage from "./SafeImage";
import Reveal from "./Reveal";

interface OccasionCardProps {
  occasion: Occasion;
  delay?: number;
}

export default function OccasionCard({ occasion, delay = 0 }: OccasionCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        to={`/occasions/${occasion.slug}`}
        className="group flex items-center gap-4 rounded-2xl bg-ivory ring-1 ring-champagne p-3 pr-5 hover:ring-gold/60 transition-colors h-full"
      >
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-xl overflow-hidden">
          <SafeImage
            src={occasion.image}
            alt={occasion.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div>
          <p className="font-display text-lg text-ink flex items-center gap-1.5">
            <span aria-hidden="true">{occasion.emoji}</span> {occasion.name}
          </p>
          <p className="text-sm text-ink-soft mt-0.5">{occasion.description}</p>
        </div>
      </Link>
    </Reveal>
  );
}
