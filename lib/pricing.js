import { siteConfig } from "@/lib/site-config";

export function formatCurrency(value) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(value);
}

export function calculatePacks(quantity) {
  const { dozen, halfDozen, unit } = siteConfig.prices;
  const dozens = Math.floor(quantity / 12);
  const afterDozens = quantity % 12;
  const halfDozens = Math.floor(afterDozens / 6);
  const units = afterDozens % 6;

  return {
    dozens,
    halfDozens,
    units,
    subtotal: dozens * dozen + halfDozens * halfDozen + units * unit
  };
}

function formatPackSummary(packs) {
  const parts = [];

  if (packs.dozens > 0) {
    parts.push(`${packs.dozens} docena${packs.dozens > 1 ? "s" : ""}`);
  }

  if (packs.halfDozens > 0) {
    parts.push(`${packs.halfDozens} media docena${packs.halfDozens > 1 ? "s" : ""}`);
  }

  if (packs.units > 0) {
    parts.push(`${packs.units} unidad${packs.units > 1 ? "es" : ""}`);
  }

  return parts.length > 0 ? parts.join(" + ") : "Sin unidades seleccionadas";
}

export function makeOrderMessage({
  quantities,
  deliveryMode,
  paymentMethod,
  includeDelivery,
  cookingMethod = "Al horno"
}) {
  const lines = Object.entries(quantities)
    .filter(([, quantity]) => quantity > 0)
    .map(([flavor, quantity]) => `• ${quantity} ${flavor}`);

  const totalQuantity = Object.values(quantities).reduce(
    (sum, quantity) => sum + quantity,
    0
  );

  const packs = calculatePacks(totalQuantity);
  const deliveryFee =
    deliveryMode === "delivery" && includeDelivery
      ? siteConfig.delivery.fee
      : 0;
  const total = packs.subtotal + deliveryFee;

  return [
    `Hola ${siteConfig.name}, quiero hacer un pedido:`,
    "",
    ...lines,
    "",
    `Total de empanadas: ${totalQuantity}`,
    `Cocción: ${cookingMethod}`,
    `Formato aplicado: ${formatPackSummary(packs)}`,
    `Modalidad: ${
      deliveryMode === "delivery"
        ? "Delivery en Presidente Derqui"
        : "Retiro / Take away"
    }`,
    deliveryMode === "delivery"
      ? `Envío estimado: ${formatCurrency(deliveryFee)}`
      : "Envío: no aplica",
    `Pago: ${paymentMethod}`,
    `Total estimado: ${formatCurrency(total)}`,
    "",
    "Quedo atento/a para confirmar disponibilidad. Gracias."
  ].join("\n");
}