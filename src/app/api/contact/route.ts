import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // TODO: Add your email service integration here
    // Example using Resend:
    // await resend.emails.send({
    //   from: 'contact@yourdomain.com',
    //   to: 'your@email.com',
    //   subject: `New Contact Form Submission: ${subject}`,
    //   text: `
    //     Name: ${name}
    //     Email: ${email}
    //     Subject: ${subject}
    //     Message: ${message}
    //   `
    // })

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
