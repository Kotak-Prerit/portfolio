import { NextResponse } from "next/server";
import { CSSBattleAPI } from "@edixon/css-battle-api";

export async function GET() {
  try {
    const api = new CSSBattleAPI();
    const profile = await api.profile("prerit_");
    return NextResponse.json(profile);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch profile" }, { status: 500 });
  }
}
