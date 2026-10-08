import Image from "next/image";
import { Clock3, Plus, Star } from "lucide-react";
import { dailyFlavors, preorderFlavors, siteConfig } from "@/lib/site-config";

export default function MenuSection() {
  return (
    <section id="menu" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-rojo">Menú principal</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-tinta sm:text-5xl">Sabores diarios</h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-tinta/70">
            Tres clásicos bien resueltos, con masa casera, repulgue artesanal y rellenos abundantes.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {dailyFlavors.map((flavor) => (
            <article key={flavor.id} className="group rounded-3xl border border-tinta/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className={`h-3 w-14 rounded-full ${flavor.color}`} aria-hidden="true" />
                <span className="inline-flex items-center gap-1 rounded-full bg-crema px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-terracota">
                  {flavor.id === "carne-a-cuchillo" && <Star size={13} aria-hidden="true" />}
                  {flavor.badge}
                </span>
              </div>
              <h3 className="text-2xl font-black text-tinta">{flavor.name}</h3>
              <p className="mt-3 min-h-20 text-base leading-7 text-tinta/70">{flavor.description}</p>
              <a
                href="#pedido"
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-tinta px-4 text-sm font-black text-white transition hover:bg-rojo focus:outline-none focus:ring-4 focus:ring-maiz/40"
              >
                <Plus size={18} aria-hidden="true" />
                Sumar al pedido
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 overflow-hidden rounded-[2rem] border border-terracota/20 bg-terracota text-white shadow-soft lg:grid-cols-[1fr_0.9fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-black uppercase tracking-[0.12em]">
              <Clock3 size={16} aria-hidden="true" />
              Bajo Encargue
            </div>
            <h3 className="text-3xl font-black sm:text-4xl">Sabores con anticipación</h3>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/82">
              Para pedidos especiales, se coordinan con tiempo para cuidar la preparación y disponibilidad.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {preorderFlavors.map((flavor) => (
                <span key={flavor} className="rounded-full bg-white px-4 py-2 text-sm font-black text-terracota">
                  {flavor}
                </span>
              ))}
            </div>
          </div>
          <div className="relative min-h-72 lg:min-h-full">
            <Image
              src={siteConfig.images.prep}
              alt="Empanadas artesanales en preparación"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="photo-polish object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
