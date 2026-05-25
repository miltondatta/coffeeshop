import { NextRequest, NextResponse } from 'next/server';

const N8N_WEBHOOK_URL =
  'https://n8n.vistechsolutions.org/webhook/93013e35-d3ef-4798-8ba4-dd21e4621315/chat';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const upstream = await fetch(N8N_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await upstream.json();
  return NextResponse.json(data, { status: upstream.status });
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const params = searchParams.toString();
  const url = params ? `${N8N_WEBHOOK_URL}?${params}` : N8N_WEBHOOK_URL;

  const upstream = await fetch(url, { method: 'GET' });
  const data = await upstream.json();
  return NextResponse.json(data, { status: upstream.status });
}
