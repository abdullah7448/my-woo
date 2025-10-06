import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST() {
  // Clear the JWT cookie
  const cookie = serialize("token", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
    sameSite: "lax",
  });

  return new Response(JSON.stringify({ message: "Logged out" }), {
    status: 200,
    headers: { "Set-Cookie": cookie, "Content-Type": "application/json" },
  });
}
