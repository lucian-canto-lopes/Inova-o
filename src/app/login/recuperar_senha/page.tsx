"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RecuperarSenhaPage() {
    const [email, setEmail] = useState("");
    const [enviado, setEnviado] = useState(false);
    const [erro, setErro] = useState("");
    const [url, setUrl] = useState("");
    const router = useRouter();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErro("");
        setEnviado(false);
        try {
            const req = await fetch("/api/auth/recuperar_senha", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({email: email})
            });

            if (!req.ok) {
                const text = await req.text()
                throw new Error(text);
            }

            const res = await req.json()

            setUrl(res.previewUrl)
            setEnviado(true);
        } catch (err: any) {
            setErro("Erro ao enviar e-mail. Tente novamente.");
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Faixa verde no topo */}
            <div className="h-14 w-full bg-[#A4CF75] relative">
                {/* Setinha de voltar */}
                <button
                    onClick={() => router.back()}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center p-2 rounded-full hover:bg-[#91BB63]/30 transition"
                    aria-label="Voltar"
                >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path d="M15 19l-7-7 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

            {/* Centro */}
            <div className="flex-1 flex items-center justify-center px-4">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 tracking-tight text-zinc-800">
                        RECUPERAÇÃO
                    </h1>
                    <div className="bg-white rounded-2xl border border-zinc-200 shadow-lg p-6">
                        {enviado ? (
                            <div className="text-center text-green-700 font-medium">
                                {"Email enviado (de mentirinha) "}
                                <a href={url} >Preview do Email</a>
                            </div>
                        ) : (
                            <form className="space-y-4" onSubmit={onSubmit}>
                                <div>
                                    <label htmlFor="email" className="sr-only">E-mail</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="E-mail"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 focus:border-[#A4CF75] focus:ring-2 focus:ring-[#A4CF75]/30 outline-none transition text-black"
                                    />
                                </div>
                                {erro && <div className="text-red-600 text-sm text-center">{erro}</div>}
                                <button
                                    type="submit"
                                    className="w-full py-2 rounded-xl bg-[#A4CF75] text-black font-medium border border-[#91BB63] hover:brightness-95 transition"
                                >
                                    Enviar
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
