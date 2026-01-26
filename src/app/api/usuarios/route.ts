import { NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

// GET - Listar todos os usuários
export async function GET() {
  try {
    const usuarios = await prisma.usuario.findMany({
      select: {
        id: true,
        nome_usuario: true,
        email_institucional: true,
        tipo_de_usuario: true,
        telefone: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ usuarios });
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    return NextResponse.json({ message: "Erro ao listar usuários" }, { status: 500 });
  }
}

// POST - Criar novo usuário
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nome_usuario, email_institucional, senha, tipo_de_usuario, telefone } = body;

    if (!nome_usuario || !email_institucional || !senha) {
      return NextResponse.json(
        { message: "Nome de usuário, email e senha são obrigatórios" },
        { status: 400 }
      );
    }

    // Verificar se usuário já existe
    const existingUser = await prisma.usuario.findFirst({
      where: {
        OR: [
          { nome_usuario },
          { email_institucional },
        ],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Usuário ou email já cadastrado" },
        { status: 400 }
      );
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(senha, 10);

    const usuario = await prisma.usuario.create({
      data: {
        nome_usuario,
        email_institucional,
        senha: hashedPassword,
        tipo_de_usuario: tipo_de_usuario || "USUARIO",
        telefone: telefone || null,
      },
      select: {
        id: true,
        nome_usuario: true,
        email_institucional: true,
        tipo_de_usuario: true,
        telefone: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ usuario }, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    return NextResponse.json({ message: "Erro ao criar usuário" }, { status: 500 });
  }
}
