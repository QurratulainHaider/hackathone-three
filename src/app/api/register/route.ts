import { NextResponse } from 'next/server';

// Handle GET request
export async function GET() {
  return NextResponse.json({ message: 'This is the register API endpoint.' });
}

// Handle POST request
export async function POST(request: Request) {
  const body = await request.json();
  const { email, password, name } = body;

  if (!email || !password || !name) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
  }

  return NextResponse.json({ message: 'Registration successful' }, { status: 201 });
}
