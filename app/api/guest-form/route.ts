import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Email configuration
    const emailBody = `
New Guest Form Submission - Baan Sayiuan

Arrival: ${formData.arrival}
Flight Number: ${formData.flightNumber || 'N/A'}
Airport Taxi: ${formData.needTaxi}

PREFERENCES:
Breakfast: ${formData.breakfast || 'N/A'}
Favorite Juice: ${formData.juice || 'N/A'}
Favorite Cocktail: ${formData.cocktail || 'N/A'}
Allergies/Intolerances: ${formData.allergies || 'None'}

KIDS:
Number of Kids: ${formData.kids || '0'}
Ages: ${formData.kidsAges || 'N/A'}
Diapers Needed: ${formData.diapers || 'N/A'}
Diaper Size: ${formData.diaperSize || 'N/A'}
Baby Food Notes: ${formData.babyFood || 'N/A'}

Sleeping Arrangements: ${formData.sleeping || 'N/A'}

OTHER NOTES:
${formData.other || 'None'}

---
Submitted at: ${new Date().toLocaleString('en-GB', { timeZone: 'Asia/Bangkok' })} (Bangkok time)
    `.trim();

    // Send email using a service (e.g., SendGrid, Resend, or SMTP)
    // For now, we'll use a simple fetch to a serverless email endpoint
    // You can replace this with your preferred email service

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Baan Sayiuan <noreply@baansayiuan.com>',
        to: ['veltzlucie@gmail.com'],
        subject: `New Guest Arrival: ${formData.arrival}`,
        text: emailBody,
      }),
    });

    if (!emailResponse.ok) {
      // Fallback: log to console if email fails
      console.error('Email send failed:', await emailResponse.text());
      
      // Still return success to user (you can log this server-side)
      return NextResponse.json({ success: true, fallback: true });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Guest form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
