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

  title: "Una capa para centralizar decisiones y trazabilidad",

  description:
    "Switch A2A actúa entre el comercio y los rieles de pago para coordinar el flujo de las transacciones, registrar cada decisión y ofrecer una visión unificada de la operación.",

  features: [
    {
      icon: ClipboardList,
      title: "Payment Intents",
      description: "Gestión centralizada del ciclo de vida de cada transacción.",
    },
    {
      icon: Route,
      title: "Orquestación",
      description: "Selección de la mejor ruta entre Bre-B y PSE según reglas definidas.",
    },
    {
      icon: Activity,
      title: "Route Health",
      description: "Monitoreo del estado de las rutas para facilitar el seguimiento operativo.",
    },
    {
      icon: ArrowLeftRight,
      title: "Webhooks",
      description: "Gestión de eventos, entregas y reintentos desde un único lugar.",
    },
    {
      icon: TimerReset,
      title: "Replay",
      description: "Simulación de escenarios históricos para analizar decisiones de enrutamiento.",
    },
    {
      icon: ShieldCheck,
      title: "Trazabilidad",
      description: "Registro completo de eventos y decisiones por cada Payment Intent.",
    },
  ],
};