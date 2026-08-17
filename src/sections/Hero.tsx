import Container from "../components/common/Container";
import ImageCarousel from "../components/ui/ImageCarousel";

import { heroData, showcaseImages } from "../data/landing";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20">
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[160px]" />

      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-sm font-medium text-emerald-300">
            {heroData.badge}
          </span>

          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-bold leading-[0.98] tracking-tight text-white md:text-7xl">
            {heroData.title}
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-zinc-400">
            {heroData.description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#demo-video"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-8 py-4 text-base font-bold text-black shadow-[0_18px_55px_rgba(16,185,129,0.22)] transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              {heroData.primaryButton}
            </a>

            <button
              type="button"
              aria-disabled="true"
              title="Próximamente"
              className="inline-flex cursor-default items-center justify-center rounded-xl border border-white/10 bg-white/[0.055] px-8 py-4 text-base font-bold text-white/90"
            >
              {heroData.secondaryButton}
            </button>
          </div>

          <ImageCarousel images={showcaseImages} />
        </div>
      </Container>
    </section>
  );
}
