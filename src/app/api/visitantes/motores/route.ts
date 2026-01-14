import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";

export async function GET() {
  try {
    const motores = await prisma.motor.findMany({
      select: {
        dimensaoId: true,
        nome: true,
      },
      orderBy: { nome: "asc" },
    });

    return NextResponse.json(motores);
  } catch {
    return NextResponse.json([]);
  }
}
