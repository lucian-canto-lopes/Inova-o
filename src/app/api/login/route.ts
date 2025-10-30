import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { signToken } from "../../../lib/auth";

export async function POST(req: Request) {
  const { username, password } = await req.json().catch(() => ({}));

  const OK_USER = process.env.AUTH_USER || "admin";
  const OK_PASS = process.env.AUTH_PASS || "123456";

  if (!username || !password) {
    return NextResponse.json({ ok: false, message: "Dados inválidos" }, { status: 400 });
  }
  if (username !== OK_USER || password !== OK_PASS) {
    return NextResponse.json({ ok: false, message: "Usuário ou senha incorretos" }, { status: 401 });
  }

  const token = signToken({ u: username, exp: Date.now() + 1000 * 60 * 60 * 24 * 7 });

  cookies().set({
    name: "session",
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return NextResponse.json({ ok: true });
}