import { useState } from "react";

interface SafeImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  fallbackLabel?: string;
}

/**
 * Renders an <img>, and if the image fails to load (missing/broken file),
 * falls back to a tasteful placeholder instead of breaking the layout.
 */
export default function SafeImage({
  fallbackLabel = "Nicy Collection",
  className = "",
  alt,
  ...props
}: SafeImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center bg-champagne/60 text-ink-soft text-center px-4 ${className}`}
        role="img"
        aria-label={alt || fallbackLabel}
      >
        <span className="font-display text-lg italic">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      {...props}
      alt={alt}
      className={className}
      loading={props.loading ?? "lazy"}
      onError={() => setErrored(true)}
    />
  );
}
