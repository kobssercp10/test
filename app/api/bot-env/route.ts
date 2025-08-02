import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

export async function GET() {
  try {
    const envPath = path.join(process.cwd(), 'bot/.env')
    const data = fs.readFileSync(envPath)
    const parsed = dotenv.parse(data)
    return NextResponse.json({
      BOT_USERNAME: parsed.BOT_USERNAME || '',
      TON_ADDRESS: parsed.TON_ADDRESS || '',
      TON_TAG: parsed.TON_TAG || '',
    })
  } catch {
    return NextResponse.json({ BOT_USERNAME: '', TON_ADDRESS: '', TON_TAG: '' })
  }
}
