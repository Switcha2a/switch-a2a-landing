import Container from "../components/common/Container";
import { demoData } from "../data/demo";

export default function Demo() {
  return (
    <section className="py-28">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            {demoData.eyebrow}
          </p>

          <h2 className="text-4xl font-bold text-white">
            {demoData.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            {demoData.description}
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {demoData.modules.map((module) => {

            const Icon = module.icon;

            return (

              <article
                key={module.title}
                className="rounded-2xl border border-white/10 bg-zinc-900/60 p-8"
              >

                <Icon className="mb-6 h-7 w-7 text-emerald-400" />

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {module.title}
                </h3>

                <p className="leading-7 text-zinc-400">
                  {module.description}
                </p>

              </article>

            );

          })}

        </div>

      </Container>
    </section>
  );
}