import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')
  if (!code) {
    return NextResponse.json({ error: 'Missing code' }, { status: 400 })
  }

  try {
    const configPath = path.join(process.cwd(), 'game-api.json')
    const raw = fs.readFileSync(configPath, 'utf-8')
    const { headers } = JSON.parse(raw)

    const res = await fetch(
      `https://www.playamo.com/api/games/launch_options/${code}`,
      { headers }
    )
    const data = await res.json()
    return NextResponse.json(data)
  } catch (e) {
    return NextResponse.json({ error: 'request failed' }, { status: 500 })
  }
}
