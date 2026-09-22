"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiTerminal, FiDatabase, FiCpu } from "react-icons/fi";
import { skills } from "@/config/portfolio";

const catIcons: Record<string, React.ReactNode> = {
  terminal: <FiTerminal size={20} />,
  database: <FiDatabase size={20} />,
  brain: <FiCpu size={20} />,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-32 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-primary)]/[0.015] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-[var(--color-primary-light)] font-mono">
              02.
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {skills.heading}
            </h2>
            <div className="h-px flex-1 bg-[var(--color-border)]" />
          </div>
        </motion.div>

        {/* Data chain visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <span className="text-xs tracking-widest uppercase text-[var(--color-dim)] block mb-5">
            {skills.chain.title}
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            {skills.chain.steps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="flex items-center gap-2"
              >
                <span className="px-4 py-2 rounded-lg bg-[var(--color-primary)]/[0.08] border border-[var(--color-primary)]/15 text-sm text-[var(--color-accent-light)] font-medium">
                  {step}
                </span>
                {i < skills.chain.steps.length - 1 && (
                  <motion.span
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    className="text-[var(--color-primary)]"
                  >
                    →
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill categories — badge layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + catIndex * 0.2 }}
              className="card glow-border rounded-2xl p-7"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary-light)]">
                  {catIcons[category.icon]}
                </div>
                <h3 className="text-base font-semibold text-[var(--color-accent-light)]">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {category.items.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.6 + catIndex * 0.15 + i * 0.05,
                    }}
                    className="px-3.5 py-1.5 rounded-full text-sm border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-primary-light)] hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/[0.06] transition-all duration-300 cursor-default"
                  >
                    {skill.name}{skills.showLevels && <span className="ml-1.5 text-xs text-[var(--color-dim)]">{skill.level}%</span>}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
