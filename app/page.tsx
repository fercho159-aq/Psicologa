import { HeroSection } from "@/components/HeroSection";
import { EscuelaPadresSection } from "@/components/EscuelaPadresSection";
import { QRSection } from "@/components/QRSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FlyerModal } from "@/components/FlyerModal";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <EscuelaPadresSection />
      <QRSection />
      <Footer />
      <FlyerModal />
    </main>
  );
}
