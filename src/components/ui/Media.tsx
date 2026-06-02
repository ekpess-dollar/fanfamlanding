import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

type MediaProps = {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * next/image wrapper: automatic responsive srcset + avif/webp, lazy-loaded by
 * default (priority only for above-the-fold). `alt` is required and meaningful.
 */
export function Media({
  src,
  alt,
  width,
  height,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: MediaProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={cn("h-auto w-full", className)}
    />
  );
}
