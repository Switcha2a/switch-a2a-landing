import {
  Activity,
  ArrowLeftRight,
  ClipboardList,
  Route,
  ShieldCheck,
  TimerReset,
} from "lucide-react";

export const solutionData = {
  eyebrow: "LA SOLUCIÓN",

  title: "Una capa para decidir, registrar y auditar cada pago",

  description:
    "Switch A2A se ubica entre el comercio y los rieles de pago. Desde ahí permite centralizar la operación, comparar rutas, registrar decisiones, monitorear eventos y mantener una trazabilidad completa por cada Payment Intent.",

  features: [
    {
      icon: ClipboardList,
      title: "Payment Intents",
      description:
        "Cada pago tiene un ciclo de vida visible: estado, ruta, referencia, eventos y acciones operativas.",
    },
    {
      icon: Route,
      title: "Orquestación",
      description:
        "El sistema permite decidir entre Bre-B y PSE según reglas, salud de ruta, latencia, disponibilidad y contexto del pago.",
    },
    {
      icon: Activity,
      title: "Route Health",
      description:
        "Monitoreo de rutas para detectar degradaciones, comparar desempeño y actuar antes de que el problema escale.",
    },
    {
      icon: ArrowLeftRight,
      title: "Webhooks",
      description:
        "Eventos, entregas, fallos, DLQ, reintentos y re-drive desde un único panel operativo.",
    },
    {
      icon: TimerReset,
      title: "Replay",
      description:
        "Simulación de escenarios históricos para comparar decisiones y validar estrategias de enrutamiento.",
    },
    {
      icon: ShieldCheck,
      title: "Trazabilidad",
      description:
        "Auditoría completa del recorrido de cada transacción: intent, decisión de ruta, charge, webhook y delivery.",
    },
  ],
};
