import { Client } from "pg";
import { NextRequest, NextResponse } from "next/server";

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

let isConnected = false;

async function ensureConnection() {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
  }
}

export async function GET() {
  try {
    await ensureConnection();

    const result = await client.query(
      "SELECT id, nombre, comentario, created_at FROM comments ORDER BY created_at DESC LIMIT 50"
    );

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json({ error: "Error fetching comments" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureConnection();

    const body = await request.json();
    const { nombre, comentario, honeypot } = body;

    // Honeypot check (bots fill hidden fields)
    if (honeypot) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Basic validation
    if (!nombre || !comentario || typeof nombre !== "string" || typeof comentario !== "string") {
      return NextResponse.json({ error: "Nombre y comentario son requeridos" }, { status: 400 });
    }

    if (nombre.length < 2 || nombre.length > 255) {
      return NextResponse.json({ error: "Nombre debe tener entre 2 y 255 caracteres" }, { status: 400 });
    }

    if (comentario.length < 5 || comentario.length > 2000) {
      return NextResponse.json({ error: "Comentario debe tener entre 5 y 2000 caracteres" }, { status: 400 });
    }

    // Rate limiting: check if this IP has posted in the last 2 minutes
    const clientIp = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    const twoMinutesAgo = new Date(Date.now() - 2 * 60 * 1000);

    const recentComments = await client.query(
      "SELECT COUNT(*) FROM comments WHERE ip_address = $1 AND created_at > $2",
      [clientIp, twoMinutesAgo]
    );

    if (parseInt(recentComments.rows[0].count) > 0) {
      return NextResponse.json(
        { error: "Por favor espera unos minutos antes de dejar otro comentario" },
        { status: 429 }
      );
    }

    // Insert comment
    const result = await client.query(
      "INSERT INTO comments (nombre, comentario, ip_address, user_agent) VALUES ($1, $2, $3, $4) RETURNING id, nombre, comentario, created_at",
      [nombre, comentario, clientIp, request.headers.get("user-agent")]
    );

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error("Error posting comment:", error);
    return NextResponse.json({ error: "Error al guardar comentario" }, { status: 500 });
  }
}
