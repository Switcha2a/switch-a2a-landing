import Container from "../components/common/Container";
import Button from "../components/common/Button";
import ImageCarousel from "../components/ui/ImageCarousel";

import { heroData, showcaseImages } from "../data/landing";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">

      {/* Glow superior */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[160px]" />

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}

          <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-sm text-emerald-300">

            {heroData.badge}

          </span>

          {/* Título */}

          <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">

            {heroData.title}

          </h1>

          {/* Descripción */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">

            {heroData.description}

          </p>

          {/* Botones */}

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

            <Button>

              {heroData.primaryButton}

            </Button>

            <Button variant="secondary">

              {heroData.secondaryButton}

            </Button>

          </div>

          <ImageCarousel images={showcaseImages} />

        </div>

      </Container>

    </section>
  );
}