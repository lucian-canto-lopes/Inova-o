"use client";
import { useState } from "react";
import Link from "next/link";


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Faixa verde no topo */}
      <div className="h-14 w-full bg-[#A4CF75]" />

      {/* Centro */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Título */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 tracking-tight text-zinc-800">
            SEJA BEM VINDO
          </h1>

          {/* Card */}
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-lg p-6">
            <form className="space-y-4" onSubmit={onSubmit}>
              {/* Usuário */}
              <div>
                <label htmlFor="user" className="sr-only">Usuário</label>
                <input
                  id="user"
                  type="text"
                  placeholder="Usuário"
                  autoComplete="username"
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:border-[#A4CF75] focus:ring-2 focus:ring-[#A4CF75]/30 outline-none transition text-black"
                />
              </div>

              {/* Senha */}
              <div>
                <label htmlFor="password" className="sr-only">Senha</label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Senha"
                    autoComplete="current-password"
                    className="w-full px-4 py-2.5 pr-10 rounded-xl border border-zinc-300 focus:border-[#A4CF75] focus:ring-2 focus:ring-[#A4CF75]/30 outline-none transition text-black"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-700"
                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  >
                    {showPassword ? (
                      // Olho aberto
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0Z" />
                      </svg>
                    ) : (
                      // Olho fechado
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 002.458 12c1.274 4.057 5.065 7 9.542 7a9.966 9.966 0 007.02-3.02m1.73-2.725a9.964 9.964 0 001.25-2.255c-1.274-4.057-5.065-7-9.542-7-1.575 0-3.068.364-4.437 1.01" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                      </svg>
                    )}
                  </button>
                </div>

                <div className="mt-2 flex items-center justify-between text-sm">
                  <Link href="/login/recuperar_senha" className="text-zinc-500 hover:underline">
                    Esqueceu a senha?
                  </Link>
                  <a href="/requisicao" className="text-zinc-600 hover:underline">
                    Requerir acesso
                  </a>
                </div>
              </div>

              {/* Ações */}
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-[#A4CF75] text-black font-medium border border-[#91BB63] hover:brightness-95 transition w-32"
                >
                  Iniciar
                </button>
                <label className="flex items-center gap-2 text-sm text-zinc-600 select-none">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="rounded border-zinc-300 text-[#A4CF75] focus:ring-[#A4CF75]/50"
                  />
                  Lembrar
                </label>
              </div>

              {/* Divisor */}
              <div className="flex items-center gap-2 my-4">
                <div className="h-px flex-1 bg-zinc-200" />
                <span className="text-xs text-zinc-500">OU</span>
                <div className="h-px flex-1 bg-zinc-200" />
              </div>

              {/* Visitante */}
              <button
                type="button"
                onClick={() => (window.location.href = "/visitante")}
                className="w-full py-2 rounded-xl bg-[#5C7AEA] text-white font-medium hover:brightness-95 transition"
              >
                Entrar como visitante
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
