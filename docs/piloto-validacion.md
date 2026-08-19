# Switch A2A — Piloto de validación

## Resumen

Switch A2A es una capa de orquestación y operación para pagos cuenta a cuenta en Colombia.

La plataforma permite centralizar la trazabilidad de pagos, comparar rutas, registrar decisiones, manejar webhooks, reintentos, DLQ, replay, conciliación y operación desde un panel técnico/comercial.

La Demo V1 ya permite validar el flujo operativo completo antes de conectar rieles productivos.

## Landing y demo

Landing pública:

https://switch-a2a-landing.vercel.app/

La landing incluye:

- Explicación del problema.
- Propuesta de solución.
- Alcance de la Demo V1.
- Video funcional.
- Llamado a validación piloto.

## Estado actual de la Demo V1

La Demo V1 incluye:

- Dashboard operativo.
- Payment Intents.
- Timeline por transacción.
- Orquestación Bre-B / PSE.
- Simulator / Replay.
- Webhook Events.
- Webhook Deliveries / DLQ.
- Re-drive de webhooks fallidos.
- Merchant Portal.
- Configuración de webhooks.
- Go-live checklist.
- Conciliación / settlement export.
- PSE sandbox vía Wompi.
- Bre-B demo/simulado.

## Estado real de Bre-B y PSE

### Bre-B

Bre-B está implementado actualmente como conector demo/simulado.

Permite validar:

- Referencias de pago.
- QR / redirect demo.
- Estados de procesamiento.
- Trazabilidad operativa.
- Decisión de ruta.
- Timeline.
- Conciliación demo.

La conexión real a Bre-B requiere acceso mediante banco, PSP, fintech, participante, agregador o aliado con ambiente autorizado.

### PSE

PSE cuenta con integración sandbox vía Wompi.

Esto permite validar un flujo más cercano a un proveedor real en ambiente de pruebas.

Si Wompi no está habilitado o falla, el sistema cae automáticamente a un simulador PSE para no romper el flujo de demo.

La conexión productiva PSE requiere credenciales productivas, convenio, validación técnica y condiciones del proveedor o agregador.

## Qué se busca validar en piloto

El piloto busca confirmar si Switch A2A puede ayudar a comercios, fintechs, PSPs o aliados tecnológicos a mejorar la operación de pagos cuenta a cuenta.

Se busca validar:

- Visibilidad por transacción.
- Trazabilidad completa de cada pago.
- Reducción del tiempo de diagnóstico de fallos.
- Utilidad del timeline para soporte.
- Operación de webhooks y reintentos.
- Manejo de DLQ.
- Conciliación y exportes.
- Experiencia del merchant portal.
- Preparación para conectar rieles reales.

## Perfil ideal de aliado piloto

Switch A2A es especialmente útil para:

- Fintechs que operan pagos o recaudos.
- PSPs y pasarelas de pago.
- Comercios con alto volumen de pagos cuenta a cuenta.
- Empresas de recaudo.
- Software contable o ERP que quiera integrar pagos.
- Integradores tecnológicos.
- Aliados bancarios o entidades con acceso a rieles reales.

## Alcance sugerido del piloto

Un piloto inicial puede incluir:

- Reunión de descubrimiento técnico.
- Revisión del flujo actual de pagos.
- Identificación de rieles disponibles.
- Validación con ambiente sandbox.
- Configuración de merchant demo.
- Webhook endpoint de prueba.
- Revisión del dashboard operativo.
- Prueba de timeline y replay.
- Prueba de conciliación.
- Definición de siguientes pasos para conexión real.

## Qué no se promete en esta etapa

En esta etapa no se debe presentar Switch A2A como un procesador productivo de Bre-B o PSE ya certificado.

La posición correcta es:

Switch A2A es una capa de orquestación, trazabilidad y operación lista para validarse con aliados, datos reales o ambientes sandbox. La conexión productiva depende del proveedor, banco, PSP, agregador o participante con acceso al riel.

## Propuesta de reunión

Duración sugerida: 30 minutos.

Agenda:

1. Mostrar la Demo V1.
2. Revisar el flujo actual de pagos del aliado.
3. Identificar dolores operativos.
4. Definir si aplica un piloto.
5. Acordar alcance técnico inicial.

## Mensaje clave

Switch A2A no busca reemplazar el riel de pago.

Busca darle al comercio, fintech o PSP una capa superior de control para operar pagos cuenta a cuenta con mayor trazabilidad, resiliencia y capacidad de soporte.
