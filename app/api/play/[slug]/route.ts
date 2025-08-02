import { NextResponse } from "next/server";
import games from "@/data/games.json";
import apiConfig from "@/data/api-config.json";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const game = (games as any[]).find((g) => g.slug === params.slug);
  if (!game) {
    return NextResponse.json({ error: "Game not found" }, { status: 404 });
  }

  const headers: Record<string, string> = { ...apiConfig.headers, Cookie: apiConfig.cookies };

  const res = await fetch(
    `https://www.playamo.com/api/games/launch_options/${game.path}`,
    { headers }
  );
  const data = await res.json();
  let url: string | undefined = data.launch_options?.game_url;
  if (!url) {
    return NextResponse.json({ error: "Game URL not found" }, { status: 500 });
  }

  let botUsername = "";
  try {
    const envPath = path.join(process.cwd(), "bot/.env");
    const env = dotenv.parse(fs.readFileSync(envPath));
    botUsername = env.BOT_USERNAME || "";
  } catch {}

  const parsed = new URL(url);
  parsed.searchParams.delete("ip");
  if (botUsername) {
    const botLink = `https://t.me/${botUsername}`;
    parsed.searchParams.set("return_url", botLink);
  }

  return NextResponse.json({ game_url: parsed.toString() });
}
