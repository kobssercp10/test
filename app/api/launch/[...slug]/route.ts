import { NextResponse } from 'next/server';
import config from '@/lib/game-api-config.json';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

export async function GET(
  request: Request,
  { params }: { params: { slug: string[] } }
) {
  const slugPath = params.slug.join('/');
  const apiUrl = `https://www.playamo.com/api/games/launch_options/${slugPath}`;

  const headers: Record<string, string> = { ...config.headers, Cookie: config.cookies };

  const res = await fetch(apiUrl, { headers });
  const data = await res.json();
  let gameUrl: string = data.launch_options?.game_url || '';

  // remove ip parameter
  gameUrl = gameUrl
    .replace(/([?&])ip=[^&]*&?/, '$1')
    .replace(/[?&]$/, '');

  // load bot username
  let botUsername = '';
  try {
    const envPath = path.join(process.cwd(), 'bot/.env');
    const parsed = dotenv.parse(fs.readFileSync(envPath));
    botUsername = parsed.BOT_USERNAME || '';
  } catch {}

  if (botUsername) {
    const botLink = `https://t.me/${botUsername}`;
    const encoded = encodeURIComponent(botLink);
    if (gameUrl.includes('return_url=')) {
      gameUrl = gameUrl.replace(/return_url=[^&]*/, `return_url=${encoded}`);
    } else {
      const sep = gameUrl.includes('?') ? '&' : '?';
      gameUrl += `${sep}return_url=${encoded}`;
    }
  }

  return NextResponse.json({ game_url: gameUrl });
}
