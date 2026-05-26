import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_URL = 'https://n8n.vistechsolutions.org/webhook/make_reservation';
const WEBHOOK_SECRET = 'Cuet@#1994';

export async function POST(req: NextRequest) {
  const { guestName, groupSize, bookingTime } = await req.json();

  if (!guestName || !groupSize || !bookingTime) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const upstream = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-webhook-secret': WEBHOOK_SECRET,
    },
    body: JSON.stringify({ guestName, groupSize, bookingTime }),
  });

  if (!upstream.ok) {
    return NextResponse.json({ error: 'Booking failed. Please try again.' }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
