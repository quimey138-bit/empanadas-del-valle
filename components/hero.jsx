import Image from "next/image";
import { ArrowDown, MessageCircle, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { formatCurrency } from "@/lib/pricing";

export default function Hero() {
  return (
    <section className="grain relative min-h-screen px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:min-h-[calc(100vh-40px)] lg:flex-row lg:items-center">
        <div className="relative z-10 flex-1 pt-6 lg:pt-0">
          <nav className="mb-10 flex items-center justify-between gap-4" aria-label="Principal">
            <a href="#inicio" className="flex items-center gap-3">
              <span className="relative h-14 w-14 overflow-hidden rounded-full bg-white shadow-soft">
                <Image src={siteConfig.images.logo} alt="Logo Empanadas del Valle" fill sizes="56px" className="object-contain p-1" priority />
              </span>
              <span className="hidden text-sm font-bold uppercase tracking-[0.18em] text-terracota sm:inline">
                Empanadas artesanales
              </span>
            </a>
            <a
              href="#pedido"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-tinta px-4 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-rojo focus:outline-none focus:ring-4 focus:ring-maiz/50"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Pedir
            </a>
          </nav>

          <div id="inicio" className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rojo/20 bg-white/80 px-4 py-2 text-sm font-bold text-rojo shadow-sm backdrop-blur">
              <Sparkles size={16} aria-hidden="true" />
              Horneadas al momento
            </div>
            <h1 className="text-balance text-5xl font-black leading-[0.95] text-tinta sm:text-6xl lg:text-7xl">
              Empanadas del Valle
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-xl font-semibold leading-8 text-tinta/78 sm:text-2xl">
              {siteConfig.slogan}
            </p>

            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3" aria-label="Precios">
              <PricePill label="Docena" value={formatCurrency(siteConfig.prices.dozen)} highlight />
              <PricePill label="Media docena" value={formatCurrency(siteConfig.prices.halfDozen)} />
              <PricePill label="Unidad" value={formatCurrency(siteConfig.prices.unit)} />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pedido"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-rojo px-6 text-base font-black text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-terracota focus:outline-none focus:ring-4 focus:ring-rojo/30"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Pedir por WhatsApp
              </a>
              <a
                href="#menu"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-tinta/15 bg-white/80 px-6 text-base font-black text-tinta shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-valle hover:text-valle focus:outline-none focus:ring-4 focus:ring-valle/20"
              >
                Ver Menú
                <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex-1 pb-8 lg:pb-0">
          <div className="relative mx-auto aspect-[4/5] max-h-[720px] overflow-hidden rounded-[2rem] bg-terracota shadow-soft">
            <Image
              src={siteConfig.images.hero}
              alt="Empanadas artesanales recién horneadas sobre tabla de madera"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="photo-polish object-cover"
              priority
            />
            <div className="absolute inset-x-4 bottom-4 rounded-3xl border border-white/35 bg-white/90 p-4 shadow-soft backdrop-blur-md sm:p-5">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-rojo">Promo rápida</p>
              <p className="mt-1 text-2xl font-black text-tinta">
                12 por {formatCurrency(siteConfig.prices.dozen)} · 6 por {formatCurrency(siteConfig.prices.halfDozen)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricePill({ label, value, highlight = false }) {
  return (
    <div className={`rounded-2xl border p-4 shadow-sm ${highlight ? "border-rojo bg-rojo text-white" : "border-tinta/10 bg-white/80 text-tinta"}`}>
      <p className="text-sm font-bold uppercase tracking-[0.12em] opacity-75">{label}</p>
      <p className="mt-1 text-2xl font-black">{value}</p>
    </div>
  );
}
