import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const sheetWebhookUrl = process.env.SUBSCRIBE_SHEET_WEBHOOK_URL;

  if (!sheetWebhookUrl) {
    return NextResponse.json(
      { error: "Waitlist is not configured" },
      { status: 500 }
    );
  }

  const res = await fetch(sheetWebhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, source: "waitlist-page", ts: new Date().toISOString() }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("Sheet webhook error:", detail);
    return NextResponse.json({ error: "Failed to join waitlist" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
