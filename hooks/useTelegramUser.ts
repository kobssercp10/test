'use client';
import { useEffect, useState } from 'react';

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
}

export default function useTelegramUser() {
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    const tgUser = (typeof window !== 'undefined')
      ? (window as any).Telegram?.WebApp?.initDataUnsafe?.user
      : undefined;
    if (tgUser) {
      const { id, first_name, last_name, username, photo_url } = tgUser;
      setUser({ id, first_name, last_name, username, photo_url });
    } else {
      setUser(null);
    }
  }, []);

  return user;
}
