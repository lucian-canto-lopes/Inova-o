"use client";
import { useState } from "react";
import '../globals.css';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

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
            <form className="space-y-4">
              {/* Usuário */}
              <div>
                <label htmlFor="user" className="sr-only">Usuário</label>
                <input
                  id="user"
                  type="text"
                  placeholder="Usuário"
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:border-[#A4CF75] focus:ring-2 focus:ring-[#A4CF75]/30 outline-none transition"
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
                    className="w-full px-4 py-2.5 pr-10 rounded-xl border border-zinc-300 focus:border-[#A4CF75] focus:ring-2 focus:ring-[#A4CF75]/30 outline-none transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-zinc-500 hover:text-zinc-700"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
                <div className="mt-2">
                  <a href="#" className="text-sm text-zinc-500 hover:underline">
                    Esqueceu a senha?
                  </a>
                </div>
              </div>

              {/* Requerir acesso */}
              <p className="text-center text-xs text-zinc-500">Requerir acesso</p>

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
