import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(
  request: Request,
) {
  const { email } = await request.json();

  const user = await prisma.usuario.findUnique({
    where: {
      email_institucional: email
    }
  });

  if (!user) return NextResponse.json({ error: "Usuário não foi encontrado" }, { status: 404 });

  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    }
  });

  try {
    const info = await transporter.sendMail({
      from: `INOVA-O <${testAccount.user}>`,
      to: user.email_institucional,
      subject: "Recuperação de senha",
      text: "Apenas um teste",
      html: `
    <h3>Você solicitou a recuperação de senha</h3>
    <p>
      <a href="http://localhost:3000/login">Clique aqui para recuperar sua senha</a>
    </p>
    <p>Isso é apenas um mockup.</p>
    `,
    });

    console.log("Email info: ", info.messageId);
    return NextResponse.json({ msg: "Email enviado com sucesso", previewUrl: nodemailer.getTestMessageUrl(info) }, { status: 200 });
  }
  catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}