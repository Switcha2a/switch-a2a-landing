interface CarouselIndicatorsProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
}

export default function CarouselIndicators({
  total,
  current,
  onChange,
}: CarouselIndicatorsProps) {
  return (
    <div className="mt-8 flex justify-center gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`h-2.5 rounded-full transition-all duration-300 ${
            current === index
              ? "w-8 bg-emerald-400"
              : "w-2.5 bg-zinc-600 hover:bg-zinc-400"
          }`}
          aria-label={`Ir a la imagen ${index + 1}`}
        />
      ))}
    </div>
  );
}