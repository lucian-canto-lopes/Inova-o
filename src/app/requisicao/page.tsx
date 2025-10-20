// ...existing code...
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../globals.css";
// ...existing code...

export default function RequisicaoAcessoPage() {
  const router = useRouter();
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const cargos = [
    "Superuser AIT",
    "Professor(a)",
    "Direção UFOPA",
    "Coordenação UFOPA",
    "Colaborador(a)",
  ];

  const [form, setForm] = useState({
    usuario: "",
    cargo: "",
    email: "",
    senha: "",
    confirmar: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const validate = (): string | null => {
    if (!form.usuario.trim()) return "Informe o usuário.";
    if (!form.cargo) return "Selecione a ocupação/cargo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "E-mail inválido.";
    if (form.senha.length < 6) return "A senha deve ter pelo menos 6 caracteres.";
    if (form.senha !== form.confirmar) return "As senhas não conferem.";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);

    const error = validate();
    if (error) return setMsg({ ok: false, text: error });

    try {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 1000));
      setMsg({ ok: true, text: "Solicitação enviada! Aguarde aprovação do AIT." });
      setForm({ usuario: "", cargo: "", email: "", senha: "", confirmar: "" });
    } catch {
      setMsg({ ok: false, text: "Erro ao enviar. Tente novamente." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Faixa verde superior com botão voltar simples no canto esquerdo */}
      <div className="h-14 w-full bg-[#A4CF75] relative">
        <button
          type="button"
          onClick={() => router.push("/login")}
          aria-label="Voltar"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full text-zinc-800 hover:bg-[#91BB63]/20 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Avatares decorativos */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-yellow-400" />
            <div className="w-8 h-8 rounded-full bg-purple-500" />
            <div className="w-8 h-8 rounded-full bg-green-500" />
            <div className="w-6 h-6 rounded-full bg-zinc-800 text-white text-[10px] flex items-center justify-center">
              +1
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-3 text-zinc-800">
            CRIAR
          </h1>

          {/* Botão voltar para login */}
          

          {msg && (
            <div
              className={`mb-4 rounded-xl px-4 py-3 border ${
                msg.ok
                  ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                  : "bg-rose-50 border-rose-200 text-rose-800"
              }`}
            >
              {msg.text}
            </div>
          )}

          <form
            onSubmit={onSubmit}
            className="bg-white rounded-2xl border border-zinc-200 shadow-lg p-6 space-y-4"
          >
            {/* Usuário */}
            <input
              id="usuario"
              type="text"
              placeholder="Usuário"
              value={form.usuario}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 text-black placeholder:text-zinc-400 focus:border-[#A4CF75] focus:ring-2 focus:ring-[#A4CF75]/30 outline-none transition"
            />

            {/* Cargo */}
            <div className="relative">
              <select
                id="cargo"
                value={form.cargo}
                onChange={handleChange}
                className="w-full appearance-none px-4 py-2.5 rounded-xl border border-zinc-300 bg-white text-black focus:border-[#A4CF75] focus:ring-2 focus:ring-[#A4CF75]/30 outline-none transition"
              >
                <option value="">Ocupação/Cargo</option>
                {cargos.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500">
                ▾
              </span>
            </div>

            {/* E-mail */}
            <input
              id="email"
              type="email"
              placeholder="E-mail"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 text-black placeholder:text-zinc-400 focus:border-[#A4CF75] focus:ring-2 focus:ring-[#A4CF75]/30 outline-none transition"
            />

            {/* Criar senha */}
            <div className="relative">
              <input
                id="senha"
                type={showPass1 ? "text" : "password"}
                placeholder="Criar senha"
                value={form.senha}
                onChange={handleChange}
                className="w-full px-4 py-2.5 pr-12 rounded-xl border border-zinc-300 text-black placeholder:text-zinc-400 focus:border-[#A4CF75] focus:ring-2 focus:ring-[#A4CF75]/30 outline-none transition"
              />
              <button
                type="button"
                onClick={() => setShowPass1((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-700 cursor-pointer"
                aria-label={showPass1 ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPass1 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                       className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12Z" />
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0Z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                       className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 002.458 12c1.274 4.057 5.065 7 9.542 7 1.575 0 3.068-.364 4.437-1.01" />
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3 3l18 18" />
                  </svg>
                )}
              </button>
            </div>

            {/* Confirmar senha */}
            <div className="relative">
              <input
                id="confirmar"
                type={showPass2 ? "text" : "password"}
                placeholder="Confirmar senha"
                value={form.confirmar}
                onChange={handleChange}
                className="w-full px-4 py-2.5 pr-12 rounded-xl border border-zinc-300 text-black placeholder:text-zinc-400 focus:border-[#A4CF75] focus:ring-2 focus:ring-[#A4CF75]/30 outline-none transition"
              />
              <button
                type="button"
                onClick={() => setShowPass2((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-700 cursor-pointer"
                aria-label={showPass2 ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPass2 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                       className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12Z" />
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0Z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                       className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 002.458 12c1.274 4.057 5.065 7 9.542 7a9.966 9.966 0 007.02-3.02m1.73-2.725a9.964 9.964 0 001.25-2.255c-1.274-4.057-5.065-7-9.542-7-1.575 0-3.068.364-4.437 1.01" />
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3 3l18 18" />
                  </svg>
                )}
              </button>
            </div>

            {/* Botões */}
            <div className="flex items-center justify-between pt-1">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 rounded-xl bg-[#A4CF75] text-black font-medium border border-[#91BB63] hover:brightness-95 disabled:opacity-60 transition"
              >
                {loading ? "Cadastrando..." : "Cadastrar"}
              </button>

              <label className="flex items-center gap-2 text-sm text-zinc-600 select-none">
                <input
                  type="checkbox"
                  className="rounded border-zinc-300 text-[#A4CF75] focus:ring-[#A4CF75]/50"
                />
                Lembrar
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
// ...existing code...