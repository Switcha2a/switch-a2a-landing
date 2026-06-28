import {
  LayoutDashboard,
  Workflow,
  Clock3,
  History,
  Building2,
  FileText,
} from "lucide-react";

export const demoData = {
  eyebrow: "DEMO TÉCNICA",

  title: "Lo que podrás explorar en la versión actual",

  description:
    "La demo reúne los principales módulos desarrollados hasta el momento para visualizar la operación y la trazabilidad del sistema.",

  modules: [
    {
      icon: LayoutDashboard,
      title: "Dashboard Operativo",
      description: "Panel con el estado general de la operación.",
    },
    {
      icon: Workflow,
      title: "Payment Intents",
      description: "Seguimiento de cada intento de pago.",
    },
    {
      icon: Clock3,
      title: "Timeline",
      description: "Eventos registrados durante el ciclo de vida de la transacción.",
    },
    {
      icon: History,
      title: "Replay",
      description: "Simulación de escenarios históricos de orquestación.",
    },
    {
      icon: Building2,
      title: "Merchant Portal",
      description: "Espacio para configuración e integración del comercio.",
    },
    {
      icon: FileText,
      title: "README Técnico",
      description: "Documentación con instalación, endpoints y arquitectura del proyecto.",
    },
  ],
};