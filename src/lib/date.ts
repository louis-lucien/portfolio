/** Format an ISO date (YYYY-MM-DD) as a short French date, e.g. "20 nov. 2024". */
export function formatDate(d: string): string {
  const date = new Date(d);
  if (isNaN(date.getTime())) return d;
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
