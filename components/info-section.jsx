import {
  Banknote,
  Bike,
  CalendarClock,
  Instagram,
  MapPin,
  MessageCircle,
  QrCode,
  Store
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { formatCurrency } from "@/lib/pricing";

export default function InfoSection() {
  return (
    <section className="bg-crema px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-rojo">
            Información útil
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-tinta sm:text-5xl">
            Pedidos, retiros y contacto
          </h2>
          <p className="mt-4 text-lg leading-8 text-tinta/70">
            Hacé tu pedido por WhatsApp, coordiná delivery en Presidente Derqui
            o reservá con anticipación para otros días.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={MessageCircle}
            title="WhatsApp"
            text={siteConfig.displayWhatsapp}
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            action="Enviar mensaje"
            featured
          />

          <InfoCard
            icon={MapPin}
            title="Dirección"
            text={siteConfig.address}
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              siteConfig.address
            )}`}
            action="Ver ubicación"
          />

          <InfoCard
            icon={Instagram}
            title="Instagram"
            text="@empa.nadasdelvalle"
            href={siteConfig.instagramUrl}
            action="Ver perfil"
          />
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[2rem] border border-tinta/10 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-maiz text-tinta">
                <CalendarClock size={22} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-2xl font-black text-tinta">Horarios</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {siteConfig.openingHours.map((hour) => (
                    <div
                      key={hour}
                      className="rounded-2xl bg-crema px-4 py-3 text-sm font-black text-tinta"
                    >
                      {hour}
                    </div>
                  ))}
                </div>
                <p className="mt-5 rounded-2xl border border-valle/20 bg-valle/10 p-4 text-base font-semibold leading-7 text-tinta/75">
                  {siteConfig.reservationNote}
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border border-tinta/10 bg-tinta p-6 text-white shadow-soft sm:p-8">
            <div className="grid gap-4">
              <MiniInfo
                icon={Bike}
                title="Delivery"
                text={`${siteConfig.delivery.availableText}. Envío orientativo de ${formatCurrency(
                  siteConfig.delivery.fee
                )}.`}
              />
              <MiniInfo
                icon={Store}
                title="Retiro / Take away"
                text="Podés coordinar retiro en el local."
              />
              <MiniInfo
                icon={QrCode}
                title="Mercado Pago"
                text="Transferencia"
              />
              <MiniInfo
                icon={Banknote}
                title="Efectivo"
                text="También aceptamos pago en efectivo."
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, text, href, action, featured = false }) {
  return (
    <article
      className={`rounded-[2rem] border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft ${
        featured
          ? "border-rojo bg-rojo text-white"
          : "border-tinta/10 bg-white text-tinta"
      }`}
    >
      <span
        className={`grid h-12 w-12 place-items-center rounded-2xl ${
          featured ? "bg-white text-rojo" : "bg-valle text-white"
        }`}
      >
        <Icon size={22} aria-hidden="true" />
      </span>

      <h3 className="mt-5 text-2xl font-black">{title}</h3>
      <p
        className={`mt-2 break-words text-lg font-black ${
          featured ? "text-white" : "text-tinta"
        }`}
      >
        {text}
      </p>

      {href && (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={`mt-5 inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-black transition focus:outline-none focus:ring-4 ${
            featured
              ? "bg-white text-rojo hover:bg-crema focus:ring-white/40"
              : "bg-tinta text-white hover:bg-rojo focus:ring-rojo/25"
          }`}
        >
          {action}
        </a>
      )}
    </article>
  );
}

function MiniInfo({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-maiz text-tinta">
        <Icon size={19} aria-hidden="true" />
      </span>
      <div>
        <h4 className="font-black">{title}</h4>
        <p className="mt-1 text-sm font-semibold leading-6 text-white/68">
          {text}
        </p>
      </div>
    </div>
  );
}