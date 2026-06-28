import Container from "../components/common/Container";
import { problemData } from "../data/problem";

export default function Problem() {
  return (
    <section className="py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            El problema
          </p>

          <h2 className="text-4xl font-bold text-white">
            {problemData.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            {problemData.description}
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {problemData.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-zinc-900/60 p-8"
            >
              <h3 className="mb-4 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="leading-7 text-zinc-400">
                {item.description}
              </p>
            </article>
          ))}

        </div>

        <div className="mt-12 rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-8">

          <p className="text-center text-lg text-zinc-300">
            <span className="font-semibold text-white">
              Resultado:
            </span>{" "}
            {problemData.conclusion}
          </p>

        </div>
      </Container>
    </section>
  );
}