import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Format email content
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

    // Send email using Resend (you'll need to install and configure)
    // For now, we'll use a simple fetch to a service like Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      // Fallback: log to console in development
      console.log('Guest Form Submission:', emailContent);
      return NextResponse.json({ success: true, message: 'Form received (dev mode)' });
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Baan Sayiuan <noreply@baan-sayiuan.com>',
        to: 'veltzlucie@gmail.com',
        subject: `🏝️ New Guest Form - ${data.arrival || 'Arrival TBD'}`,
        text: emailContent,
      }),
    });

    if (!emailResponse.ok) {
      throw new Error('Failed to send email');
    }

    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
