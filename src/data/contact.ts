const whatsappNumber = "573183215825";

const whatsappMessage =
  "Hola, quiero agendar una validación piloto de Switch A2A. Vi la demo y me interesa revisar si aplica para mi operación de pagos.";

export const contactData = {
  whatsappNumber,
  whatsappMessage,
  whatsappUrl:
    "https" +
    "://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(whatsappMessage),
};
