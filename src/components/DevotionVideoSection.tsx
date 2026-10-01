import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import Reveal from "./Reveal";
import PetalField from "./PetalField";
import Button from "./Button";
import { asset } from "../utils/asset";

export default function DevotionVideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  // Only start loading the video once the section is close to view.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Keep in sync if the person toggles their OS-level motion preference
  // while the page is open.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Pause playback when the section scrolls out of view, resume in view.
  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video || !shouldLoad || reducedMotion) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          if (playing) video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad, reducedMotion, playing]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
      setPlaying(false);
    } else {
      video.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 sm:py-24">
      <div ref={containerRef}>
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] ring-1 ring-champagne min-h-[440px] sm:min-h-[520px] flex items-end">
          <PetalField count={6} className="z-[1]" />

          {/* Poster paints instantly; video (once loaded) sits on top and
              fades in so there's never a blank/flash state. */}
          <img
            src={asset("/videos/nicy-ganpati-poster.webp")}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {!reducedMotion && shouldLoad && (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover opacity-80"
              src={asset("/videos/nicy-ganpati.mp4")}
              poster={asset("/videos/nicy-ganpati-poster.webp")}
              muted
              loop
              playsInline
              autoPlay
              preload="none"
              aria-label="Close-up handmade jewellery detailing on a Ganpati idol, crafted by Nicy Collection"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />

          <div className="relative z-10 p-7 sm:p-12 flex flex-col items-start gap-4 max-w-xl">
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-gold font-medium">
              Handcrafted With Devotion
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-ivory text-balance">
              Every Detail, Handcrafted with Love <span aria-hidden="true">🪔</span>
            </h2>
            <p className="text-ivory/85 text-sm sm:text-base max-w-md">
              A closer look at our handmade jewellery and décor detailing on
              this year's Ganpati Bappa — hand-set stones, pearls and
              embroidery, crafted with the same care we bring to every piece.
            </p>
            <Button to="/occasions/festivals" variant="outline" className="mt-1">
              Explore Festive Pieces
            </Button>
          </div>

          {shouldLoad && !reducedMotion && (
            <button
              type="button"
              onClick={togglePlayback}
              aria-label={playing ? "Pause background video" : "Play background video"}
              className="absolute top-4 right-4 z-10 bg-ivory/90 hover:bg-ivory text-ink p-2.5 rounded-full transition-colors"
            >
              {playing ? <Pause size={16} /> : <Play size={16} />}
            </button>
          )}
        </Reveal>
      </div>
    </section>
  );
}
