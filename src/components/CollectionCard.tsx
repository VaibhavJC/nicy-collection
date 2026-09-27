import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Category } from "../data/categories";
import SafeImage from "./SafeImage";
import Reveal from "./Reveal";

interface CollectionCardProps {
  category: Category;
  delay?: number;
}

export default function CollectionCard({ category, delay = 0 }: CollectionCardProps) {
  return (
    <Reveal delay={delay}>
      <Link
        to={`/collections/${category.slug}`}
        className="group relative block aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-champagne shadow-sm hover:shadow-xl hover:shadow-ink/10 transition-shadow duration-300"
      >
        <SafeImage
          src={category.image}
          alt={`${category.name} by Nicy Collection`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
          <span className="text-2xl mb-1" aria-hidden="true">
            {category.emoji}
          </span>
          <h3 className="font-display text-2xl sm:text-3xl text-ivory">{category.name}</h3>
          <span className="mt-2 inline-flex items-center gap-1.5 text-sm text-ivory/90 opacity-90 group-hover:gap-2.5 transition-all">
            Explore Collection <ArrowRight size={16} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
