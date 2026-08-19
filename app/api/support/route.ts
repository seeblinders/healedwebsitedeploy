import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, useCase } = await request.json();

  if (!name || !email || !useCase) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.SUPPORT_NOTIFY_EMAIL;

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      { error: "Support inbox is not configured" },
      { status: 500 }
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Healed Support <onboarding@resend.dev>",
      to: [toEmail],
      reply_to: email,
      subject: `Support request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nUse case:\n${useCase}`,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("Resend error:", detail);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
