import Image from "next/image";
import { ChefHat, Flame, Snowflake, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const frozenMessage = encodeURIComponent(
  `Hola ${siteConfig.name}, quiero consultar por empanadas crudas y frizadas.`
);

export default function ServingOptions() {
  const whatsappHref = siteConfig.whatsappNumber
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=${frozenMessage}`
    : `https://wa.me/?text=${frozenMessage}`;

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[2rem] bg-tinta p-6 text-white shadow-soft sm:p-8 lg:p-10">
          <div className="absolute inset-0 opacity-20">
            <Image
              src={siteConfig.images.prep}
              alt=""
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative z-10">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-maiz">
              <Sparkles size={16} aria-hidden="true" />
              A tu manera
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Empanadas listas o para cocinar
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/78">
              Pedilas cocidas para comer en el momento, o crudas y frizadas
              para tener en casa y cocinar cuando quieras.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-maiz px-6 text-base font-black text-tinta shadow-glow transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-maiz/30"
            >
              Consultar por frizadas
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <OptionCard
            icon={Flame}
            title="Cocidas"
            text="Recien hechas, al horno o fritas, listas para disfrutar en el momento."
            badge="Para comer ahora"
            tone="rojo"
          />
          <OptionCard
            icon={Snowflake}
            title="Crudas y frizadas"
            text="Las guardas en casa, las sacas cuando queres y las cocinas a tu gusto."
            badge="Para tener listas"
            tone="valle"
          />
          <div className="rounded-3xl border border-tinta/10 bg-crema p-5 sm:col-span-2">
            <div className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-terracota text-white">
                <ChefHat size={22} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-black text-tinta">
                  Ideal para resolver comidas rapido
                </h3>
                <p className="mt-2 leading-7 text-tinta/70">
                  Una opcion practica para freezar, organizar la semana o tener
                  empanadas caseras siempre a mano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OptionCard({ icon: Icon, title, text, badge, tone }) {
  const toneClass =
    tone === "rojo" ? "bg-rojo text-white" : "bg-valle text-white";

  return (
    <article className="rounded-3xl border border-tinta/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className={`grid h-12 w-12 place-items-center rounded-2xl ${toneClass}`}>
          <Icon size={22} aria-hidden="true" />
        </span>
        <span className="rounded-full bg-crema px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-terracota">
          {badge}
        </span>
      </div>
      <h3 className="text-2xl font-black text-tinta">{title}</h3>
      <p className="mt-3 leading-7 text-tinta/70">{text}</p>
    </article>
  );
}
