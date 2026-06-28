import Container from "../components/common/Container";
import { solutionData } from "../data/solution";

export default function Solution() {
  return (
    <section className="py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            {solutionData.eyebrow}
          </p>

          <h2 className="text-4xl font-bold text-white">
            {solutionData.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            {solutionData.description}
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {solutionData.features.map((feature) => {

            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-zinc-900/60 p-8 transition hover:border-emerald-400/40"
              >

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">

                  <Icon className="h-6 w-6 text-emerald-400" />

                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="leading-7 text-zinc-400">
                  {feature.description}
                </p>

              </article>
            );

          })}

        </div>

      </Container>
    </section>
  );
}