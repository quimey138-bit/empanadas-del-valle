import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function SiteFooter() {
  return (
    <footer className="bg-tinta px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="relative h-14 w-14 overflow-hidden rounded-full bg-white">
            <Image src={siteConfig.images.logo} alt="" fill sizes="56px" className="object-contain p-1" />
          </span>
          <div>
            <p className="text-lg font-black">{siteConfig.name}</p>
            <p className="text-sm font-semibold text-white/60">{siteConfig.location}</p>
          </div>
        </div>
        <p className="max-w-xl text-sm leading-6 text-white/60">
          {siteConfig.slogan}. WhatsApp, horarios, redes y dirección quedan pendientes para completar en configuración.
        </p>
      </div>
    </footer>
  );
}
