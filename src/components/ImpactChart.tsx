"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export function ImpactChart({ data }: { data: { nome: string; alunos: number }[] }) {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-4 min-w-0" style={{ minWidth: 0 }}>
      <h3 className="font-semibold mb-3 text-sm text-zinc-700">Alunos em disciplinas de inovação</h3>
      <div className="w-full min-w-0">
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={data}>
            <CartesianGrid stroke="#eee" strokeDasharray="4 4" />
            <XAxis dataKey="nome" tick={{ fontSize: 10 }} />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line type="monotone" dataKey="alunos" stroke="#5C7AEA" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
