import CartBuilder from "@/components/cart-builder";
import Hero from "@/components/hero";
import MenuSection from "@/components/menu-section";
import ServingOptions from "@/components/serving-options";
import TrustSection from "@/components/trust-section";
import InfoSection from "@/components/info-section";
import SiteFooter from "@/components/site-footer";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <MenuSection />
      <ServingOptions />
      <CartBuilder />
      <TrustSection />
      <InfoSection />
      <SiteFooter />
    </main>
  );
}
