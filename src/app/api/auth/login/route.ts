import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  const wpUrl = process.env.NEXT_PUBLIC_WP_API_URL!;

  const res = await fetch(`${wpUrl}/jwt-auth/v1/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json({ message: data.message }, { status: 401 });
  }

  const cookie = serialize("token", data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // ⚠️ important
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });

  return new Response(JSON.stringify({ message: "Login successful" }), {
    status: 200,
    headers: {
      "Set-Cookie": cookie,
      "Content-Type": "application/json",
    },
  });
}
