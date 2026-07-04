import {
  LayoutDashboard,
  Workflow,
  Clock3,
  History,
  Building2,
  FileText,
} from "lucide-react";

export const demoData = {
  eyebrow: "DEMO FUNCIONAL",

  title: "Lo que se puede validar en la versión actual",

  description:
    "La Demo V1 permite navegar un flujo operativo completo: dashboard, intents, timeline, replay, webhooks, DLQ, conciliación y portal del comercio.",

  modules: [
    {
      icon: LayoutDashboard,
      title: "Dashboard Operativo",
      description:
        "Métricas de operación, salud de rutas, charges, webhooks y exportación de conciliación.",
    },
    {
      icon: Workflow,
      title: "Payment Intents",
      description:
        "Listado de transacciones con ruta, decisión, estado, monto, referencia y acceso al timeline.",
    },
    {
      icon: Clock3,
      title: "Timeline",
      description:
        "Auditoría por transacción con decisión de ruta, eventos, charges, webhooks y deliveries.",
    },
    {
      icon: History,
      title: "Replay",
      description:
        "Comparación de escenarios para evaluar cómo habría decidido el motor de orquestación.",
    },
    {
      icon: Building2,
      title: "Merchant Portal",
      description:
        "Configuración del comercio, integración, webhooks y checklist de salida a producción.",
    },
    {
      icon: FileText,
      title: "README Técnico",
      description:
        "Instalación, endpoints, seguridad, scripts y estructura del proyecto para validación técnica.",
    },
  ],
};
