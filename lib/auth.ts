import jwt from 'jsonwebtoken';

const SECRET = process.env.ADMIN_SECRET || 'fallback_secret';

export function signToken(username: string) {
  return jwt.sign({ username }, SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET) as { username: string };
  } catch {
    return null;
  }
}
