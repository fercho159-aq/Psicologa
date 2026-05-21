'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function RegistroGPSForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    hijos: '',
    edades: '',
    razon: ''
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mensaje = `🧭 *NUEVO REGISTRO - GPS de la Disciplina*

👤 *Nombre:* ${formData.nombre}
📧 *Correo:* ${formData.email}
📱 *Teléfono:* ${formData.telefono}
👶 *Hijos:* ${formData.hijos}
🎂 *Edades:* ${formData.edades}
💬 *Motivación:* ${formData.razon}`;

    const url = `https://wa.me/5521096740?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');

    setEnviado(true);
    setTimeout(() => setEnviado(false), 6000);
    setFormData({ nombre: '', email: '', telefono: '', hijos: '', edades: '', razon: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-yellow-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header con referencia al evento */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-900 mb-2">
            Regístrate al Taller
          </h1>
          <p className="text-lg text-purple-700 mb-4">
            <span className="font-bold">Previene hoy los trastornos mentales de tu hijo</span>
            <br />
            desde el <span className="text-yellow-600 font-bold">GPS de la Disciplina</span>
          </p>
          <p className="text-gray-600 text-sm">
            Educar con amor, límites y empatía es la mejor prevención
          </p>
        </div>

        <Card className="p-8 bg-white shadow-lg border-2 border-purple-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-semibold text-purple-900 mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-purple-900 mb-2">
                Correo Electrónico *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition"
                placeholder="tu@email.com"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-sm font-semibold text-purple-900 mb-2">
                Teléfono / WhatsApp *
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition"
                placeholder="55 21 09 67 40"
              />
            </div>

            {/* Número de hijos */}
            <div>
              <label className="block text-sm font-semibold text-purple-900 mb-2">
                ¿Cuántos hijos tienes? *
              </label>
              <select
                name="hijos"
                value={formData.hijos}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition"
              >
                <option value="">Selecciona una opción</option>
                <option value="1">1 hijo</option>
                <option value="2">2 hijos</option>
                <option value="3">3 hijos</option>
                <option value="4">4 o más hijos</option>
              </select>
            </div>

            {/* Edades */}
            <div>
              <label className="block text-sm font-semibold text-purple-900 mb-2">
                Edades de tus hijos *
              </label>
              <input
                type="text"
                name="edades"
                value={formData.edades}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition"
                placeholder="ej: 5, 8, 12 años"
              />
            </div>

            {/* Razón para asistir */}
            <div>
              <label className="block text-sm font-semibold text-purple-900 mb-2">
                ¿Qué te motiva a asistir? *
              </label>
              <textarea
                name="razon"
                value={formData.razon}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 transition resize-none"
                placeholder="Cuéntanos qué desafíos enfrenta tu familia..."
              />
            </div>

            {/* Términos */}
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm text-purple-900">
                ✓ Al enviar, se abrirá WhatsApp con tus datos para confirmar tu registro
                <br />
                ✓ Tus datos serán utilizados solo para el evento
              </p>
            </div>

            {/* Botón envío */}
            <Button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-bold py-3 text-lg rounded-lg transition transform hover:scale-105"
            >
              Regístrate Ahora
            </Button>

            {/* Mensaje de éxito */}
            {enviado && (
              <div className="bg-green-100 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg text-center">
                ✓ ¡Se abrió WhatsApp con tus datos! Envía el mensaje para completar tu registro.
              </div>
            )}
          </form>

          {/* Info de contacto alternativa */}
          <div className="mt-8 pt-6 border-t border-purple-200 text-center">
            <p className="text-sm text-gray-600 mb-3">¿Prefieres contactarnos directamente?</p>
            <a
              href="https://wa.me/5521096740?text=Hola%20Quiero%20registrarme%20al%20taller%20del%20GPS%20de%20la%20Disciplina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
            >
              💬 Escríbenos por WhatsApp
            </a>
          </div>
        </Card>

        {/* Beneficios del taller */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
            <h3 className="font-bold text-purple-900 mb-2">📚 Aprenderás:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Fortalecer confianza y seguridad</li>
              <li>✓ Poner límites sin dañar emocionalmente</li>
              <li>✓ Aplicar consecuencias naturales</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-bold text-purple-900 mb-2">🛡️ Prevendrás:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Depresión y ansiedad</li>
              <li>✓ Violencia y adicciones</li>
              <li>✓ Baja autoestima</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
