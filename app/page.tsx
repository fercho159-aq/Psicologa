import { HeroSection } from "@/components/HeroSection";
import { EscuelaPadresSection } from "@/components/EscuelaPadresSection";
import { QRSection } from "@/components/QRSection";
import { CommentsSection } from "@/components/CommentsSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FlyerModal } from "@/components/FlyerModal";
import RegistroGPSForm from "@/components/RegistroGPSForm";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <EscuelaPadresSection />
      <QRSection />
      <CommentsSection />
      <RegistroGPSForm />
      <Footer />
      <FlyerModal />
    </main>
  );
}
