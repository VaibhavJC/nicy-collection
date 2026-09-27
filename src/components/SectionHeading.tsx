import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <Reveal className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-gold-dark font-medium">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-ink-soft max-w-xl text-base sm:text-lg ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
