import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import { prisma } from "@/src/lib/prisma";
import { signToken } from "@/src/lib/auth";

export const runtime = "nodejs"; // garante Node runtime (necessário p/ bcrypt)

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json().catch(() => ({}));
    if (!username || !password) {
      return NextResponse.json({ ok: false, message: "Dados inválidos" }, { status: 400 });
    }

    const user = await prisma.usuario.findUnique({ where: { nome_usuario: String(username).trim() } });
    if (!user) return NextResponse.json({ ok: false, message: "Credenciais inválidas" }, { status: 401 });

    const ok = await bcrypt.compare(String(password), user.senha);
    if (!ok) return NextResponse.json({ ok: false, message: "Credenciais inválidas" }, { status: 401 });

    const token = signToken({ u: user.id, exp: Date.now() + 1000 * 60 * 60 * 24 * 7 });
    cookies().set("session", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, message: "Erro interno" }, { status: 500 });
  }
}