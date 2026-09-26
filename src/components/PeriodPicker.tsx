"use client";

const MONTHS_FR = [
  "janv.", "févr.", "mars", "avr.", "mai", "juin",
  "juil.", "août", "sept.", "oct.", "nov.", "déc.",
];

function formatMonth(v: string): string {
  if (!v) return "";
  const [y, m] = v.split("-");
  const idx = parseInt(m, 10) - 1;
  const label = MONTHS_FR[idx];
  if (!label) return v;
  const cap = label.charAt(0).toUpperCase() + label.slice(1);
  return `${cap} ${y}`;
}

/** Build a human-readable period string from month inputs (YYYY-MM). */
export function buildPeriod(start: string, end: string, current: boolean): string {
  const s = formatMonth(start);
  const e = current ? "Présent" : formatMonth(end);
  if (!s && !e) return "";
  if (!s) return e;
  if (!e) return s;
  return `${s} — ${e}`;
}

export interface PeriodValue {
  startDate: string;
  endDate: string;
  current: boolean;
  period: string;
}

interface Props {
  value: { startDate: string; endDate: string; current: boolean };
  onChange: (v: PeriodValue) => void;
  inputClass: string;
  labelClass: string;
}

export default function PeriodPicker({ value, onChange, inputClass, labelClass }: Props) {
  const set = (patch: Partial<{ startDate: string; endDate: string; current: boolean }>) => {
    const next = { ...value, ...patch };
    onChange({ ...next, period: buildPeriod(next.startDate, next.endDate, next.current) });
  };

  return (
    <div>
      <label className={labelClass}>Période</label>
      <div className="flex flex-wrap items-center gap-2">
        <input
          type="month"
          value={value.startDate}
          onChange={(e) => set({ startDate: e.target.value })}
          className={inputClass + " !w-auto"}
        />
        <span className="text-[var(--color-dim)] text-sm">→</span>
        <input
          type="month"
          value={value.endDate}
          disabled={value.current}
          onChange={(e) => set({ endDate: e.target.value })}
          className={inputClass + " !w-auto disabled:opacity-40"}
        />
        <label className="flex items-center gap-1.5 text-xs text-[var(--color-muted)] cursor-pointer whitespace-nowrap">
          <input
            type="checkbox"
            checked={value.current}
            onChange={(e) => set({ current: e.target.checked, endDate: e.target.checked ? "" : value.endDate })}
            className="accent-[var(--color-primary)]"
          />
          En cours
        </label>
      </div>
    </div>
  );
}
