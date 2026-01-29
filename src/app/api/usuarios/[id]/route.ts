import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

// GET - Buscar usuário por ID
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const usuario = await prisma.usuario.findUnique({
      where: { id: parseInt(id) },
      select: {
        id: true,
        nome_usuario: true,
        email_institucional: true,
        tipo_de_usuario: true,
        telefone: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!usuario) {
      return NextResponse.json({ message: "Usuário não encontrado" }, { status: 404 });
    }

    return NextResponse.json({ usuario });
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return NextResponse.json({ message: "Erro ao buscar usuário" }, { status: 500 });
  }
}

// PUT - Atualizar usuário
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { nome_usuario, email_institucional, senha, tipo_de_usuario, telefone } = body;

    // Verificar se usuário existe
    const existingUser = await prisma.usuario.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingUser) {
      return NextResponse.json({ message: "Usuário não encontrado" }, { status: 404 });
    }

    // Verificar duplicatas (excluindo o próprio usuário)
    if (nome_usuario || email_institucional) {
      const duplicate = await prisma.usuario.findFirst({
        where: {
          AND: [
            { id: { not: parseInt(id) } },
            {
              OR: [
                nome_usuario ? { nome_usuario } : {},
                email_institucional ? { email_institucional } : {},
              ].filter(obj => Object.keys(obj).length > 0),
            },
          ],
        },
      });

      if (duplicate) {
        return NextResponse.json(
          { message: "Nome de usuário ou email já está em uso" },
          { status: 400 }
        );
      }
    }

    // Preparar dados para atualização
    const updateData: {
      nome_usuario?: string;
      email_institucional?: string;
      senha?: string;
      tipo_de_usuario?: "USUARIO" | "ADMIN";
      telefone?: string | null;
    } = {};

    if (nome_usuario) updateData.nome_usuario = nome_usuario;
    if (email_institucional) updateData.email_institucional = email_institucional;
    if (senha) updateData.senha = await bcrypt.hash(senha, 10);
    if (tipo_de_usuario) updateData.tipo_de_usuario = tipo_de_usuario;
    if (telefone !== undefined) updateData.telefone = telefone || null;

    const usuario = await prisma.usuario.update({
      where: { id: parseInt(id) },
      data: updateData,
      select: {
        id: true,
        nome_usuario: true,
        email_institucional: true,
        tipo_de_usuario: true,
        telefone: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({ usuario });
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    return NextResponse.json({ message: "Erro ao atualizar usuário" }, { status: 500 });
  }
}

// DELETE - Excluir usuário
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Verificar se usuário existe
    const existingUser = await prisma.usuario.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingUser) {
      return NextResponse.json({ message: "Usuário não encontrado" }, { status: 404 });
    }

    await prisma.usuario.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: "Usuário excluído com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
    return NextResponse.json({ message: "Erro ao excluir usuário" }, { status: 500 });
  }
}
