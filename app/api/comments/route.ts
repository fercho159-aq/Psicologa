import { neon } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";

function getDb() {
  return neon(process.env.DATABASE_URL!);
}

export async function GET() {
  try {
    const sql = getDb();
    const rows = await sql`
      SELECT id, nombre, comentario, rating, created_at
      FROM comments
      ORDER BY created_at DESC
      LIMIT 100
    `;
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json({ error: "Error al obtener comentarios" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, comentario, rating, honeypot } = body;

    if (honeypot) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    if (!nombre || !comentario || typeof nombre !== "string" || typeof comentario !== "string") {
      return NextResponse.json({ error: "Nombre y comentario son requeridos" }, { status: 400 });
    }
    if (nombre.length < 2 || nombre.length > 255) {
      return NextResponse.json({ error: "Nombre debe tener entre 2 y 255 caracteres" }, { status: 400 });
    }
    if (comentario.length < 5 || comentario.length > 2000) {
      return NextResponse.json({ error: "Comentario debe tener entre 5 y 2000 caracteres" }, { status: 400 });
    }

    const safeRating = typeof rating === "number" && rating >= 1 && rating <= 5 ? rating : 5;

    const sql = getDb();

    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const recent = await sql`
      SELECT COUNT(*) as count FROM comments
      WHERE ip_address = ${clientIp}
        AND created_at > NOW() - INTERVAL '2 minutes'
    `;

    if (parseInt(recent[0].count) > 0) {
      return NextResponse.json(
        { error: "Por favor espera unos minutos antes de dejar otro comentario" },
        { status: 429 }
      );
    }

    const result = await sql`
      INSERT INTO comments (nombre, comentario, rating, ip_address, user_agent)
      VALUES (${nombre}, ${comentario}, ${safeRating}, ${clientIp}, ${request.headers.get("user-agent")})
      RETURNING id, nombre, comentario, rating, created_at
    `;

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error("Error posting comment:", error);
    return NextResponse.json({ error: "Error al guardar comentario" }, { status: 500 });
  }
}
