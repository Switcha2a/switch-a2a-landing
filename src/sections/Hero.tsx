import Container from "../components/common/Container";
import Button from "../components/common/Button";
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
            <Button>{heroData.primaryButton}</Button>
            <Button variant="secondary">{heroData.secondaryButton}</Button>
          </div>

          <ImageCarousel images={showcaseImages} />
        </div>
      </Container>
    </section>
  );
}
