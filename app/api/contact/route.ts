import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Server configuration error: Missing API key" },
      { status: 500 }
    )
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { name, email, message } = await req.json()

    const data = await resend.emails.send({
      from: "Decaff <onboarding@resend.dev>",
      to: ["tazigrigolia@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      replyTo: email,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { 
        error: "Failed to send email", 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    )
  }
} 