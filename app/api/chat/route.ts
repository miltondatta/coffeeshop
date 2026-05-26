import { NextRequest, NextResponse } from 'next/server';

const N8N_WEBHOOK_URL =
  'https://n8n.vistechsolutions.org/webhook/67ea2785-0e17-46c8-b43b-919ec18d188a/chat';

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
