import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Create transporter using your verified domain email
    const transporter = nodemailer.createTransport({
      host: 'mail.privateemail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'info@topotasoptimumservices.com',
        pass: 'TOPOTAS1234.', // Make sure this is your mailbox password
      },
    });

    // ✅ Send message to your company inbox
    await transporter.sendMail({
      from: 'info@topotasoptimumservices.com',
      to: 'info@topotasoptimumservices.com',
      replyTo: email,
      subject: 'New Contact Form Submission',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // ✅ Send confirmation email to the sender
    await transporter.sendMail({
      from: 'info@topotasoptimumservices.com',
      to: email,
      subject: 'We received your message!',
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for contacting <strong>Topotas Optimum Services</strong>. We’ve received your message and will get back to you shortly.</p>
        <p>Best regards,<br/>Topotas Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}