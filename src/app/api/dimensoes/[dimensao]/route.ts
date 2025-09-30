import { NextResponse } from "next/server";
import { PrismaClient } from "@/src/generated/prisma";

const prisma = new PrismaClient();

type dimensaoTipo = "disciplinas" | "eventos" | "motores" | "negocios";
interface Params {
  params: { dimensao: dimensaoTipo }
};

export async function GET(
  request: Request,
  { params }: Params
) {
  const { dimensao } = params;

  return NextResponse.json({ message: dimensao });
};

export async function POST(
  request: Request,
  { params }: Params
) {
  const { dimensao } = params;

  switch (dimensao) {
    case "disciplinas":
      console.log(request);
      break
    default:
      console.log(`Default Case: ${request}`)
  };
};