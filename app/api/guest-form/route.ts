import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const emailContent = `
New Guest Form Submission - Baan Sayiuan

Arrival: ${data.arrival || 'N/A'}
Flight Number: ${data.flightNumber || 'N/A'}
Airport Taxi: ${data.taxi || 'N/A'}

Preferences:
- Breakfast: ${data.breakfast || 'N/A'}
- Favorite Juice: ${data.juice || 'N/A'}
- Favorite Cocktail: ${data.cocktail || 'N/A'}
- Allergies/Intolerances: ${data.allergies || 'None'}

Kids:
- Number: ${data.kids || '0'}
- Ages: ${data.kidsAges || 'N/A'}

Other Notes:
${data.other || 'None'}

---
Submitted at: ${new Date().toISOString()}
    `.trim();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,   // ex: veltzlucie@gmail.com
        pass: process.env.SMTP_PASS,   // App Password Gmail (16 caractères)
      },
    });

    await transporter.sendMail({
      from: `Baan Sayiuan <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || 'veltzlucie@gmail.com',
      subject: `🏝️ New Guest Form - ${data.arrival || 'Arrival TBD'}`,
      text: emailContent,
    });

    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
