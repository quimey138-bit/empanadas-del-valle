export const siteConfig = {
  name: "Empanadas del Valle",
  slogan: "Masa casera hecha en el día y rellenos 100% artesanales",
  description:
    "Empanadas artesanales en Presidente Derqui con masa casera hecha en el día, rellenos abundantes y pedidos rápidos por WhatsApp.",
  siteUrl: "https://empanadas-del-valle.local",
  whatsappNumber: "5491136755851",
  displayWhatsapp: "11 3675-5851",
  instagramUrl: "https://www.instagram.com/empa.nadasdelvalle/",
  address: "Salta 2769, Presidente Derqui",
  openingHours: [
    "Viernes 19 a 22",
    "Sábado 12 a 14 y 19 a 22",
    "Domingo 12 a 14"
  ],
  reservationNote:
    "También se puede pedir con anticipación o reservar para otros días. Aceptamos pedidos grandes para empresas, eventos y reuniones.",
  pendingFields: {
    whatsappNumber: "11 3675-5851",
    openingHours:
      "Viernes 19 a 22; sábado 12 a 14 y 19 a 22; domingo 12 a 14. Se puede pedir con anticipación o reservar para otros días.",
    address: "Salta 2769, Presidente Derqui",
    instagram: "https://www.instagram.com/empa.nadasdelvalle/",
    facebook: "Pendiente de definir"
  },
  location: "Presidente Derqui",
  delivery: {
    availableText: "Envíos a todo Presidente Derqui",
    fee: 1000,
    note: "Costo orientativo sujeto a variación según la zona dentro de Derqui."
  },
  paymentMethods: ["Mercado Pago (Transferencia / QR)", "Efectivo"],
  prices: {
    dozen: 22000,
    halfDozen: 12000,
    unit: 2000
  },
  images: {
    logo: "/images/logo-empanadas-del-valle.png",
    hero: "/images/empanadas-horneadas-tabla.jpg",
    boxes: "/images/empanadas-cajas.jpg",
    prep: "/images/empanadas-armado.jpg"
  }
};

export const dailyFlavors = [
  {
    id: "carne-a-cuchillo",
    name: "Carne a cuchillo",
    badge: "Especialidad de la casa",
    description:
      "Relleno jugoso, cortado a cuchillo y con ese sabor casero que pide otra.",
    color: "bg-rojo"
  },
  {
    id: "pollo",
    name: "Pollo",
    badge: "Clásica",
    description:
      "Suave, sabrosa y bien condimentada para todos los días.",
    color: "bg-maiz"
  },
  {
    id: "jamon-y-queso",
    name: "Jamón y queso",
    badge: "Bien abundante",
    description:
      "Una combinación cremosa y dorada que no falla.",
    color: "bg-valle"
  }
];

export const preorderFlavors = [
  "Humita",
  "Verdura",
  "Más variedades a pedido"
];