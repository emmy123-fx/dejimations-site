import { NextRequest, NextResponse } from 'next/server';
import { signToken } from '../../../lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    // Hardcoded for now (in production, hash & store in DB)
    if (username === 'deji' && password === 'deji') {
      const token = signToken(username);
      return NextResponse.json({ token, message: 'Login successful' }, { status: 200 });
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
