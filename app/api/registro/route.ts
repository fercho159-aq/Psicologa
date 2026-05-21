import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nombre, email, telefono, hijos, edades, razon } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'GPS de la Disciplina <registro@grupoohm.com>',
      to: 'terapiabreve1@gmail.com',
      subject: `🧭 Nuevo registro: ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f5ff; border-radius: 12px;">
          <div style="background-color: #6b21a8; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
            <h1 style="color: #facc15; margin: 0; font-size: 22px;">🧭 GPS de la Disciplina</h1>
            <p style="color: white; margin: 6px 0 0;">Nuevo registro recibido</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; background-color: #ede9fe; border-radius: 6px; font-weight: bold; color: #6b21a8; width: 40%;">👤 Nombre</td>
              <td style="padding: 12px; color: #1f2937;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #6b21a8;">📧 Correo</td>
              <td style="padding: 12px; color: #1f2937;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #ede9fe; border-radius: 6px; font-weight: bold; color: #6b21a8;">📱 Teléfono</td>
              <td style="padding: 12px; color: #1f2937;">${telefono}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #6b21a8;">👶 Hijos</td>
              <td style="padding: 12px; color: #1f2937;">${hijos}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #ede9fe; border-radius: 6px; font-weight: bold; color: #6b21a8;">🎂 Edades</td>
              <td style="padding: 12px; color: #1f2937;">${edades}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #6b21a8; vertical-align: top;">💬 Motivación</td>
              <td style="padding: 12px; color: #1f2937;">${razon}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 16px; background-color: #fef9c3; border-left: 4px solid #facc15; border-radius: 4px;">
            <p style="margin: 0; color: #78350f; font-size: 13px;">
              Este registro fue enviado desde el formulario del sitio web.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error));
      return NextResponse.json({ error: error.message ?? error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
