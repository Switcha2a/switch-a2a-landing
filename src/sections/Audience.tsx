import Container from "../components/common/Container";

const audiences = [
  {
    title: "Comercios con alto volumen",
    description:
      "Empresas que reciben pagos cuenta a cuenta y necesitan reducir fricción operativa, errores de seguimiento y dependencia de procesos manuales.",
  },
  {
    title: "Fintechs y pasarelas",
    description:
      "Equipos que quieren integrar múltiples rieles, comparar rutas y ofrecer una operación más resiliente a sus comercios.",
  },
  {
    title: "Operaciones y soporte",
    description:
      "Áreas que necesitan saber qué pasó con cada pago sin buscar información entre varios sistemas, logs o proveedores.",
  },
  {
    title: "Aliados estratégicos",
    description:
      "Bancos, proveedores tecnológicos o integradores que quieran validar una capa de orquestación para pagos A2A en Colombia.",
  },
];

export default function Audience() {
  return (
    <section className="py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.35em] text-emerald-400">
            PARA QUIÉN ES
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Diseñado para equipos que necesitan controlar la operación de pagos
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Switch A2A no reemplaza al comercio ni al proveedor de pago: funciona como una capa de control, trazabilidad y decisión para operar mejor.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {audiences.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-8 transition duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/[0.04]"
            >
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
