import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PrismaClient } from "../../../generated/prisma";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";

const prisma = new PrismaClient();
const SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "fallback-secret-change-me");

async function signToken(payload: Record<string, unknown>) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(SECRET);
}

export async function POST(req: Request) {
  try {
    console.log("=== LOGIN INICIADO ===");

    const body = await req.json();
    console.log("Body recebido:", { username: body.username, hasPassword: !!body.password });

    const username = body.username;
    const password = body.password;

    if (!username || !password) {
      console.log("Campos faltando");
      return NextResponse.json({ message: "Usuário e senha obrigatórios" }, { status: 400 });
    }

    console.log("Buscando usuário:", username);

    const user = await prisma.usuario.findFirst({
      where: { nome_usuario: username },
    });

    console.log("Usuário encontrado:", user ? "SIM" : "NÃO");

    if (!user) {
      return NextResponse.json({ message: "Credenciais inválidas" }, { status: 401 });
    }

    console.log("Comparando senha...");
    const valid = await bcrypt.compare(password, user.senha);
    console.log("Senha válida:", valid);

    if (!valid) {
      return NextResponse.json({ message: "Credenciais inválidas" }, { status: 401 });
    }

    console.log("Gerando token...");
    const token = await signToken({ u: user.id });
    console.log("Token gerado");

    console.log("Salvando cookie...");
    const cookieStore = await cookies();
    cookieStore.set("piape.token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    console.log("=== LOGIN SUCESSO ===");
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("=== ERRO NO LOGIN ===");
    console.error("Tipo:", typeof err);
    console.error("Mensagem:", err instanceof Error ? err.message : err);
    console.error("Stack:", err instanceof Error ? err.stack : "N/A");
    return NextResponse.json({ message: "Erro interno" }, { status: 500 });
  }
}