import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const emailContent = `
New Guest Form Submission — Baan Sayiuan
========================================

ARRIVÉE
-------
Heure d'arrivée : ${data.arrivalTime || 'N/A'}
Numéro de vol   : ${data.flightNumber || 'N/A'}
Taxi aéroport   : ${data.taxi || 'N/A'}

PRÉFÉRENCES
-----------
Cocktails       : ${Array.isArray(data.cocktails) ? data.cocktails.join(', ') || 'Aucun' : data.cocktails || 'N/A'}
Cocktail autre  : ${data.cocktailOther || '—'}
Jus préféré     : ${data.juice || 'N/A'}
Jus autre       : ${data.juiceOther || '—'}
Allergies       : ${data.allergies || 'Aucune'}
Petit-déj adultes : ${data.breakfastAdults || '—'}
Petit-déj enfants : ${data.breakfastKids || '—'}

ENFANTS
-------
Nombre d'enfants : ${data.kidsCount || '0'}
Âges             : ${data.kidsAges || 'N/A'}
Couchage         : ${Array.isArray(data.kidsSleeping) ? data.kidsSleeping.join(', ') || 'N/A' : data.kidsSleeping || 'N/A'}
Couchage autre   : ${data.kidsSleepingOther || '—'}
Couches          : ${data.diapers || 'N/A'}
Taille couches   : ${data.diapersSize || '—'}
Repas bébé       : ${data.babyFood || 'N/A'}

NOTES LIBRES
------------
${data.other || 'Aucune'}

---
Soumis le : ${new Date().toISOString()}
    `.trim();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `Baan Sayiuan <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || 'veltzlucie@gmail.com',
      subject: `🏝️ Nouveau formulaire invité — arrivée ${data.arrivalTime || 'à confirmer'}`,
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
