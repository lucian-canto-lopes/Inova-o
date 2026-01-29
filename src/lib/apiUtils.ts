// Funções utilitárias para as APIs

export type DimensaoTipo = "disciplinas" | "eventos" | "motores" | "negocios";

export function toFloat(value: any): number {
  if (!value) return 0.0;
  if (Number(value)) return parseFloat(value);
  value = value.replace(",", ".");
  return parseFloat(value);
}

export function toArray(value: any): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return value
    .toString()
    .split(/\s*[;,]\s*/)
    .filter((s: string) => s.trim());
}
