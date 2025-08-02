'use client'
import { useEffect, useState } from 'react'

export interface BotEnv {
  BOT_USERNAME: string
  TON_ADDRESS: string
  TON_TAG: string
}

export default function useBotEnv() {
  const [env, setEnv] = useState<BotEnv>({
    BOT_USERNAME: '',
    TON_ADDRESS: '',
    TON_TAG: '',
  })

  useEffect(() => {
    fetch('/api/bot-env')
      .then((res) => res.json())
      .then((data: BotEnv) => setEnv(data))
      .catch(() => {})
  }, [])

  return env
}
