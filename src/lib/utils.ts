export function parseDateISO(s?: string) {
  if (!s) return undefined;
  const d = new Date(s);
  return isNaN(d.getTime()) ? undefined : d;
}

export function rangeWhere(field: string, from?: Date, to?: Date) {
  if (!from && !to) return {};
  const cond: any = {};
  if (from) cond.gte = from;
  if (to) {
    const end = new Date(to);
    end.setDate(end.getDate() + 1); // inclui o dia final
    cond.lt = end;
  }
  return { [field]: cond };
}