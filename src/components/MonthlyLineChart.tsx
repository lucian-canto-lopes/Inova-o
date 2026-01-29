"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export function MonthlyLineChart({ data }: { data: { month: string; valor: number }[] }) {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 p-4 min-w-0" style={{ minWidth: 0 }}>
      <h3 className="font-semibold mb-3 text-sm text-zinc-700">Evolução mensal (Negócios)</h3>
      <div className="w-full min-w-0">
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={data}>
            <CartesianGrid stroke="#eee" strokeDasharray="4 4" />
            <XAxis dataKey="month" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line type="monotone" dataKey="valor" stroke="#4C7F16" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}