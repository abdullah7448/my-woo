// src/app/api/auth/me/route.ts

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  // cookies() is synchronous, do NOT await
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value; // ✅ now TS is happy

  if (!token) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  const wpUrl = process.env.NEXT_PUBLIC_WP_API_URL;

  const res = await fetch(`${wpUrl}/wp/v2/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  const user = await res.json();
  return NextResponse.json({ authenticated: true, user });
}
