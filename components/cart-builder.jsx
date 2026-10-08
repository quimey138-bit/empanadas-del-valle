"use client";

import { useMemo, useState } from "react";
import { AlertCircle, Minus, Plus, Send, ShoppingBag, Truck } from "lucide-react";
import { dailyFlavors, siteConfig } from "@/lib/site-config";
import { calculatePacks, formatCurrency, makeOrderMessage } from "@/lib/pricing";

const initialQuantities = dailyFlavors.reduce((acc, flavor) => {
  acc[flavor.name] = 0;
  return acc;
}, {});

export default function CartBuilder() {
  const [quantities, setQuantities] = useState(initialQuantities);
  const [deliveryMode, setDeliveryMode] = useState("delivery");
  const [paymentMethod, setPaymentMethod] = useState(siteConfig.paymentMethods[0]);
  const [includeDelivery, setIncludeDelivery] = useState(true);
  const [cookingMethod, setCookingMethod] = useState("Al horno");

  const totalQuantity = useMemo(
    () => Object.values(quantities).reduce((sum, quantity) => sum + quantity, 0),
    [quantities]
  );

  const packs = useMemo(() => calculatePacks(totalQuantity), [totalQuantity]);
  const deliveryFee = deliveryMode === "delivery" && includeDelivery ? siteConfig.delivery.fee : 0;
  const total = packs.subtotal + deliveryFee;
  const orderMessage = makeOrderMessage({
    quantities,
    deliveryMode,
    paymentMethod,
    includeDelivery,
    cookingMethod
  });
  const whatsappHref = siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(orderMessage)}`
    : `https://wa.me/?text=${encodeURIComponent(orderMessage)}`;

  function updateQuantity(name, nextValue) {
    setQuantities((current) => ({
      ...current,
      [name]: Math.max(0, Math.min(99, nextValue))
    }));
  }

  return (
    <section id="pedido" className="bg-tinta px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.82fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-maiz">Pedido rápido</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Armá tu pedido</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/72">
            Elegí cantidades por sabor, revisá el total estimado y enviá el mensaje listo por WhatsApp.
          </p>

          <div className="mt-8 space-y-4">
            {dailyFlavors.map((flavor) => (
              <div key={flavor.id} className="rounded-3xl border border-white/10 bg-white/[0.06] p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-black">{flavor.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-white/60">{flavor.badge}</p>
                  </div>
                  <div className="grid grid-cols-[44px_72px_44px] items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateQuantity(flavor.name, quantities[flavor.name] - 1)}
                      className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 transition hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-maiz/30"
                      aria-label={`Quitar ${flavor.name}`}
                    >
                      <Minus size={18} aria-hidden="true" />
                    </button>
                    <input
                      aria-label={`Cantidad de ${flavor.name}`}
                      className="h-11 rounded-full border border-white/15 bg-white text-center text-lg font-black text-tinta focus:outline-none focus:ring-4 focus:ring-maiz/30"
                      inputMode="numeric"
                      min="0"
                      max="99"
                      value={quantities[flavor.name]}
                      onChange={(event) => updateQuantity(flavor.name, Number(event.target.value || 0))}
                    />
                    <button
                      type="button"
                      onClick={() => updateQuantity(flavor.name, quantities[flavor.name] + 1)}
                      className="grid h-11 w-11 place-items-center rounded-full bg-maiz text-tinta transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-maiz/30"
                      aria-label={`Agregar ${flavor.name}`}
                    >
                      <Plus size={18} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-[2rem] bg-white p-5 text-tinta shadow-soft sm:p-6 lg:sticky lg:top-6 lg:self-start" aria-label="Resumen del pedido">
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-rojo text-white">
              <ShoppingBag size={22} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-2xl font-black">Resumen</h3>
              <p className="text-sm font-semibold text-tinta/60">{totalQuantity} empanada{totalQuantity === 1 ? "" : "s"}</p>
            </div>
          </div>

          <div className="rounded-3xl bg-crema p-4">
            <SummaryRow label="Docenas" value={`${packs.dozens} x ${formatCurrency(siteConfig.prices.dozen)}`} />
            <SummaryRow label="Medias docenas" value={`${packs.halfDozens} x ${formatCurrency(siteConfig.prices.halfDozen)}`} />
            <SummaryRow label="Unidades" value={`${packs.units} x ${formatCurrency(siteConfig.prices.unit)}`} />
            <SummaryRow label="Subtotal" value={formatCurrency(packs.subtotal)} strong />
          </div>

          <fieldset className="mt-5">
            <legend className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-terracota">Modalidad</legend>
            <div className="grid grid-cols-2 gap-2">
              <ChoiceButton active={deliveryMode === "delivery"} onClick={() => setDeliveryMode("delivery")} label="Delivery" />
              <ChoiceButton active={deliveryMode === "pickup"} onClick={() => setDeliveryMode("pickup")} label="Retiro" />
            </div>
          </fieldset>
          <fieldset className="mt-5">
            <legend className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-terracota">
              Cocción
            </legend>
            <div className="grid grid-cols-2 gap-2">
              <ChoiceButton
                active={cookingMethod === "Al horno"}
                onClick={() => setCookingMethod("Al horno")}
                label="Al horno"
              />
              <ChoiceButton
                active={cookingMethod === "Fritas"}
                onClick={() => setCookingMethod("Fritas")}
                label="Fritas"
              />
            </div>
          </fieldset>

          {deliveryMode === "delivery" && (
            <label className="mt-4 flex items-start gap-3 rounded-2xl border border-valle/25 bg-valle/10 p-4 text-sm font-semibold text-tinta/75">
              <input
                type="checkbox"
                className="mt-1 h-5 w-5 accent-valle"
                checked={includeDelivery}
                onChange={(event) => setIncludeDelivery(event.target.checked)}
              />
              <span>
                Incluir envío orientativo de {formatCurrency(siteConfig.delivery.fee)}. Se confirma según zona.
              </span>
            </label>
          )}

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-black uppercase tracking-[0.14em] text-terracota">Pago</span>
            <select
              className="h-12 w-full rounded-full border border-tinta/15 bg-white px-4 font-bold focus:outline-none focus:ring-4 focus:ring-valle/20"
              value={paymentMethod}
              onChange={(event) => setPaymentMethod(event.target.value)}
            >
              {siteConfig.paymentMethods.map((method) => (
                <option key={method} value={method}>{method}</option>
              ))}
            </select>
          </label>

          <div className="mt-5 rounded-3xl bg-tinta p-5 text-white">
            <SummaryRow label="Envío" value={formatCurrency(deliveryFee)} />
            <div className="mt-4 flex items-end justify-between gap-4 border-t border-white/12 pt-4">
              <span className="text-base font-bold text-white/70">Total estimado</span>
              <span className="text-3xl font-black">{formatCurrency(total)}</span>
            </div>
          </div>

          {!siteConfig.whatsappNumber && (
            <div className="mt-4 flex gap-3 rounded-2xl border border-maiz/40 bg-maiz/15 p-4 text-sm font-semibold text-tinta/75">
              <AlertCircle className="mt-0.5 shrink-0 text-terracota" size={18} aria-hidden="true" />
              <p>El número de WhatsApp queda pendiente en la configuración. El botón abre WhatsApp con el mensaje prearmado.</p>
            </div>
          )}

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-disabled={totalQuantity === 0}
            className={`mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-base font-black shadow-glow transition focus:outline-none focus:ring-4 focus:ring-rojo/30 ${totalQuantity === 0 ? "pointer-events-none bg-tinta/25 text-tinta/45" : "bg-rojo text-white hover:bg-terracota"}`}
          >
            <Send size={18} aria-hidden="true" />
            Enviar pedido a WhatsApp
          </a>

          <div className="mt-5 flex items-start gap-3 text-sm font-semibold text-tinta/60">
            <Truck size={18} className="mt-0.5 shrink-0 text-valle" aria-hidden="true" />
            <p>{siteConfig.delivery.availableText}. {siteConfig.delivery.note}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function SummaryRow({ label, value, strong = false }) {
  return (
    <div className={`flex items-center justify-between gap-4 py-2 ${strong ? "border-t border-tinta/10 text-lg font-black" : "text-sm font-bold text-tinta/70"}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function ChoiceButton({ active, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-11 rounded-full px-4 text-sm font-black transition focus:outline-none focus:ring-4 focus:ring-valle/20 ${active ? "bg-valle text-white" : "border border-tinta/15 bg-white text-tinta hover:border-valle"}`}
    >
      {label}
    </button>
  );
}
