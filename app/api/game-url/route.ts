import { NextResponse } from 'next/server'
import config from '@/lib/game-api-config.json'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  if (!code) {
    return NextResponse.json({ error: 'code required' }, { status: 400 })
  }
  const url = `https://www.playamo.com/api/games/launch_options/${code}`
  const res = await fetch(url, {
    headers: {
      ...config.headers,
      Cookie: config.cookies,
    },
    cache: 'no-store',
  })
  const data = await res.json()
  return NextResponse.json({ game_url: data.launch_options?.game_url })
}
