import { HeroSection } from "@/components/HeroSection";
import { EscuelaPadresSection } from "@/components/EscuelaPadresSection";
import { QRSection } from "@/components/QRSection";
import { CapacidadesDiferentesSection } from "@/components/CapacidadesDiferentesSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <EscuelaPadresSection />
      <QRSection />
      <CapacidadesDiferentesSection />
      <Footer />
    </main>
  );
}
