"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { PlayIcon } from "./Icons";

type VideoHeroProps = {
  /** Video source(s). Provide webm + mp4 for best coverage. */
  sources?: { src: string; type: string }[];
  /** Poster shown before playback / when motion is reduced / on error. */
  poster: string;
  /** Meaningful description of what the video shows (a11y). */
  label: string;
  className?: string;
};

/**
 * Autoplay / muted / loop / playsInline video with graceful degradation:
 * - Respects prefers-reduced-motion: NO autoplay; shows poster + manual play.
 * - Falls back to the poster image if the video can't load (e.g. placeholder
 *   asset not yet supplied), so the layout never breaks.
 */
export function VideoHero({ sources = [], poster, label, className }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);
  const [failed, setFailed] = useState(sources.length === 0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Autoplay only when motion is allowed and we have a source.
  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduced || failed) return;
    v.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [reduced, failed]);

  const showVideo = !failed && !reduced;

  return (
    <div className={cn("relative overflow-hidden bg-ink-900", className)}>
      {showVideo ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          poster={poster}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          aria-label={label}
          onError={() => setFailed(true)}
        >
          {sources.map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))}
        </video>
      ) : (
        // Poster fallback (reduced-motion or missing/failed video)
        // eslint-disable-next-line @next/next/no-img-element
        <img src={poster} alt={label} className="h-full w-full object-cover" />
      )}

      {/* Manual play affordance when not autoplaying */}
      {!playing && (
        <button
          type="button"
          onClick={() => {
            setFailed(false);
            setReduced(false);
            const v = videoRef.current;
            v?.play().then(() => setPlaying(true)).catch(() => {});
          }}
          className="absolute inset-0 flex items-center justify-center bg-ink-900/10 transition hover:bg-ink-900/20"
          aria-label={`Play video: ${label}`}
        >
          <span className="flex size-16 items-center justify-center rounded-full bg-white/90 text-brand shadow-card-lg backdrop-blur">
            <PlayIcon className="size-7 translate-x-0.5" />
          </span>
        </button>
      )}
    </div>
  );
}
