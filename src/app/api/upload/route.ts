import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('applicationForm') as File;

    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    await fs.mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, file.name);
    await fs.writeFile(filePath, buffer);

    // ✅ Configure Namecheap Private Email SMTP
   const transporter = nodemailer.createTransport({
  host: 'mail.privateemail.com',
  port: 465, // Use 587 if you prefer TLS
  secure: true, // true for port 465 (SSL)
  auth: {
    user: 'info@topotasoptimumservices.com', // full email address from your login screen
    pass: 'TOPOTAS1234.', // password you entered in the login screen
  },
});

    // ✅ Send email with attachment
    await transporter.sendMail({
      from: '"Topotas Portal" <info@topotasoptimumservices.com>',
      to: 'info@topotasoptimumservices.com', // Destination inbox
      subject: 'New Travel Application Submission',
      text: 'A new travel application form has been submitted.',
      attachments: [
        {
          filename: file.name,
          path: filePath,
        },
      ],
    });

    // Optional: delete the file after sending
    await fs.unlink(filePath);

    return NextResponse.json({
      message: 'File uploaded and emailed successfully',
      filename: file.name,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'File upload failed' }, { status: 500 });
  }
}