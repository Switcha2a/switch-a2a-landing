import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselControlsProps {
  onPrevious: () => void;
  onNext: () => void;
}

export default function CarouselControls({
  onPrevious,
  onNext,
}: CarouselControlsProps) {
  const buttonClass =
    "flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60";

  return (
    <>
      <button
        onClick={onPrevious}
        className={`${buttonClass} absolute left-5 top-1/2 -translate-y-1/2`}
        aria-label="Imagen anterior"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={onNext}
        className={`${buttonClass} absolute right-5 top-1/2 -translate-y-1/2`}
        aria-label="Imagen siguiente"
      >
        <ChevronRight size={20} />
      </button>
    </>
  );
}