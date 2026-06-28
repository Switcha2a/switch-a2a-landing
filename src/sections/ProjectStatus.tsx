import Container from "../components/common/Container";
import { projectStatus } from "../data/landing";

export default function ProjectStatus() {
  return (
    <section className="py-28">
      <Container>

        <div className="mb-16 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Estado del proyecto
          </p>

          <h2 className="text-4xl font-bold text-white">
            Desarrollo actual
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            Estas son algunas de las funcionalidades implementadas en la versión
            actual de Switch A2A.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {projectStatus.map((item) => (

            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-zinc-900/60 p-8 transition hover:border-emerald-400/40"
            >

              <div className="mb-6 flex items-center justify-between">

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
                  {item.status}
                </span>

              </div>

              <p className="leading-7 text-zinc-400">
                {item.description}
              </p>

            </article>

          ))}

        </div>

      </Container>
    </section>
  );
}