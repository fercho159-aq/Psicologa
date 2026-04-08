import { HeroSection } from "@/components/HeroSection";
import { EscuelaPadresSection } from "@/components/EscuelaPadresSection";
import { CapacidadesDiferentesSection } from "@/components/CapacidadesDiferentesSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <EscuelaPadresSection />
      <CapacidadesDiferentesSection />
      <Footer />
    </main>
  );
}
