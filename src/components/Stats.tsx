"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  certifications,
  projects,
  skills,
  about,
} from "@/config/portfolio";

function useCountUp(target: number, start: boolean, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return val;
}

function StatValue({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const n = useCountUp(value, active);
  return (
    <span className="gradient-text text-4xl sm:text-5xl font-bold tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const techCount = skills.categories.reduce(
    (sum, c) => sum + (c.items?.length || 0),
    0
  );

  const stats = [
    { value: certifications.items.length, suffix: "+", label: "Certifications" },
    { value: projects.items.length, suffix: "", label: "Projets" },
    { value: techCount, suffix: "+", label: "Technologies" },
    { value: about.pillars.length, suffix: "", label: "Domaines d'expertise" },
  ];

  return (
    <section ref={ref} className="px-6 -mt-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-3xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-border)]"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-[var(--color-surface)] px-6 py-8 text-center flex flex-col items-center justify-center gap-2"
            >
              <StatValue value={s.value} suffix={s.suffix} active={inView} />
              <span className="text-xs sm:text-sm uppercase tracking-wider text-[var(--color-muted)]">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
