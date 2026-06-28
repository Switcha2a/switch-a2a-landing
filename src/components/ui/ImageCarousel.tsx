import { useState } from "react";

import type { CarouselImage } from "../../types/carousel";

import CarouselControls from "./CarouselControls";
import CarouselIndicators from "./CarouselIndicators";

interface ImageCarouselProps {
  images: CarouselImage[];
}

export default function ImageCarousel({
  images,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextImage() {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }

  function previousImage() {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }

  return (
  <div className="mt-16">

    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">

      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="aspect-video w-full object-cover"
      />

      <CarouselControls
        onPrevious={previousImage}
        onNext={nextImage}
      />

    </div>

    <CarouselIndicators
      total={images.length}
      current={currentIndex}
      onChange={setCurrentIndex}
    />

  </div>
);
}