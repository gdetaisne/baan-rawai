import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiting
const attempts = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT = 5; // 5 attempts
const RATE_WINDOW = 15 * 60 * 1000; // 15 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = attempts.get(ip);

  if (!record || now > record.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many attempts. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { passcode } = body;

    const correctPasscode = process.env.PRIVATE_ACCESS_CODE;

    if (!correctPasscode) {
      return NextResponse.json(
        { error: 'Private mode not configured' },
        { status: 500 }
      );
    }

    if (passcode !== correctPasscode) {
      return NextResponse.json(
        { error: 'Incorrect passcode' },
        { status: 401 }
      );
    }

    // Return secrets only if passcode is correct
    return NextResponse.json({
      doorCode: process.env.DOOR_CODE || 'Not configured',
      wifiPassword: process.env.WIFI_PASSWORD || 'Not configured',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}
