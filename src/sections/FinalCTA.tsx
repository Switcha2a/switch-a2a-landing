import Container from "../components/common/Container";
import { contactData } from "../data/contact";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 py-28">
      <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-[160px]" />

      <Container>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-emerald-400/20 bg-emerald-400/[0.045] px-8 py-14 text-center shadow-[0_40px_140px_rgba(0,0,0,0.55)] md:px-16 md:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.45em] text-emerald-400">
            SIGUIENTE PASO
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Validemos Switch A2A con un caso real de pagos
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Buscamos comercios, fintechs, PSPs o aliados estratégicos que quieran probar una capa de orquestación, trazabilidad, replay y webhooks durables para pagos cuenta a cuenta.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={contactData.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-8 py-4 text-base font-bold text-black shadow-[0_18px_55px_rgba(16,185,129,0.22)] transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Agendar validación piloto
            </a>

            <a
              href="#demo-video"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.055] px-8 py-4 text-base font-bold text-white transition hover:bg-white/[0.09]"
            >
              Ver video demo
            </a>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 text-left sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
                Demo
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                Flujo funcional V1.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
                Piloto
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                Validación con datos reales.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
                Colombia
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                Enfoque Bre-B + PSE.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
