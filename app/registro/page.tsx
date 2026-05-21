import RegistroGPSForm from '@/components/RegistroGPSForm';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Registro - GPS de la Disciplina | Psicóloga Lupita',
  description: 'Regístrate al taller "Previene los trastornos mentales de tu hijo desde el GPS de la Disciplina"'
};

export default function RegistroPage() {
  return (
    <>
      <Navbar />
      <RegistroGPSForm />
      <Footer />
    </>
  );
}
