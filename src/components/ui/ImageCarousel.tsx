import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { CarouselImage } from "../../types/carousel";

import CarouselIndicators from "./CarouselIndicators";

interface ImageCarouselProps {
  images: CarouselImage[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) return null;

  function nextImage() {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }

  function previousImage() {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  const currentImage = images[currentIndex];

  return (
    <div className="mt-14">
      <div className="relative mx-auto max-w-[1500px] px-8 md:px-12">
        <button
          type="button"
          onClick={previousImage}
          className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white shadow-2xl backdrop-blur-md transition hover:border-emerald-400/40 hover:bg-emerald-400/15 hover:text-emerald-300"
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          onClick={nextImage}
          className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white shadow-2xl backdrop-blur-md transition hover:border-emerald-400/40 hover:bg-emerald-400/15 hover:text-emerald-300"
          aria-label="Siguiente imagen"
        >
          <ChevronRight size={22} />
        </button>

        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#040507] shadow-[0_50px_170px_rgba(0,0,0,0.72)]">
          <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_42%)]" />

          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.035] px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />

            <span className="ml-4 font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500">
              switch-a2a / demo-v1 / operations
            </span>
          </div>

          <div className="relative flex aspect-video items-center justify-center bg-black">
            <img
              key={currentImage.src}
              src={currentImage.src}
              alt={currentImage.alt}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-white/[0.025] px-5 py-3">
            <p className="text-left text-xs text-zinc-500">
              {currentImage.alt}
            </p>

            <p className="shrink-0 font-mono text-xs text-emerald-300">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>

      <CarouselIndicators
        total={images.length}
        current={currentIndex}
        onChange={setCurrentIndex}
      />
    </div>
  );
}
