import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // For now: log to console. Replace with your email provider.
    // Options: Resend (recommended), Nodemailer, SendGrid.
    // Add CONTACT_EMAIL and RESEND_API_KEY env vars on Vercel.
    console.log("Contact form submission:", { name, email, message });

    // TODO: wire up email sending
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'philcarey.com <noreply@philcarey.com>',
    //   to: process.env.CONTACT_EMAIL ?? 'phil@philcarey.com',
    //   subject: `New message from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    // });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
