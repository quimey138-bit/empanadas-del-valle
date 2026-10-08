import Image from "next/image";
import { Flame, HandPlatter, Wheat } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const secrets = [
  {
    icon: Wheat,
    title: "Masa casera hecha en el día",
    text: "Preparación fresca para que cada empanada llegue tierna, dorada y con buen repulgue."
  },
  {
    icon: HandPlatter,
    title: "Rellenos abundantes",
    text: "Sabores clásicos con foco en textura, sazón y porciones generosas."
  },
  {
    icon: Flame,
    title: "Horneadas al momento",
    text: "La producción se organiza para entregar empanadas listas para disfrutar."
  }
];

export default function TrustSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-crema shadow-soft">
          <Image
            src={siteConfig.images.boxes}
            alt="Cajas con empanadas artesanales listas para entregar"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="photo-polish object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-rojo">El Secreto del Valle</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-tinta sm:text-5xl">Simple, casero y bien hecho</h2>
          <div className="mt-8 grid gap-4">
            {secrets.map((item) => (
              <article key={item.title} className="flex gap-4 rounded-3xl border border-tinta/10 bg-white p-5 shadow-sm">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-maiz text-tinta">
                  <item.icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-black text-tinta">{item.title}</h3>
                  <p className="mt-2 leading-7 text-tinta/68">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
