interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-zinc-400">
        {description}
      </p>
    </div>
  );
}