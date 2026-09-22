"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiCode, FiDatabase, FiCpu, FiTarget } from "react-icons/fi";
import { personal, about } from "@/config/portfolio";

const pillarIcons: Record<string, React.ReactNode> = {
  code: <FiCode size={24} />,
  database: <FiDatabase size={24} />,
  brain: <FiCpu size={24} />,
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-[var(--color-primary-light)] font-mono">
              01.
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {about.heading}
            </h2>
            <div className="h-px flex-1 bg-[var(--color-border)]" />
          </div>
        </motion.div>

        {/* Bio */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {personal.bio.map((p, i) => (
              <p
                key={i}
                className="text-[var(--color-muted)] leading-[1.9] mb-6 text-[15px]"
              >
                {p}
              </p>
            ))}

            {/* Vision statement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 rounded-2xl glass glow"
            >
              <div className="flex items-center gap-2 mb-3">
                <FiTarget className="text-[var(--color-primary-light)]" size={16} />
                <span className="text-xs tracking-widest uppercase text-[var(--color-primary-light)]">
                  Vision
                </span>
              </div>
              <p className="text-sm text-[var(--color-accent-light)] leading-relaxed italic">
                &ldquo;{about.vision}&rdquo;
              </p>
            </motion.div>
          </motion.div>

          {/* INTJ + Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* INTJ Card */}
            {about.showProfileType !== false && (<div className="card rounded-2xl p-7 mb-8">
              <div className="flex items-center justify-between mb-5">
                <span className="text-2xl font-bold gradient-text">INTJ-A</span>
                <span className="text-xs text-[var(--color-muted)] tracking-wider">
                  L&apos;Architecte
                </span>
              </div>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                {about.profileType.description}
              </p>
              <div className="space-y-3">
                {about.profileType.traits.map((trait, i) => (
                  <motion.div
                    key={trait.letter}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-xs font-bold text-[var(--color-primary-light)]">
                          {trait.letter}
                        </span>
                        <span className="text-xs text-[var(--color-muted)]">
                          {trait.name}
                        </span>
                      </div>
                      {about.showTraitValues !== false && (
                        <span className="text-xs font-mono text-[var(--color-dim)]">
                          {trait.value}%
                        </span>
                      )}
                    </div>
                    <div className="h-1 bg-[var(--color-surface)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: trait.value / 100 } : {}}
                        transition={{
                          duration: 1.2,
                          delay: 1 + i * 0.15,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] origin-left"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>)}

            {/* Values */}
            <div className="space-y-3">
              <span className="text-xs tracking-widest uppercase text-[var(--color-dim)] block mb-4">
                Mes valeurs
              </span>
              {personal.values.map((value, i) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-[var(--color-muted)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                  {value}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Three Pillars */}
        {about.showPillars !== false && (<><motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mb-6"
        >
          <span className="text-xs tracking-widest uppercase text-[var(--color-dim)] block mb-8">
            Profil hybride — La chaîne complète
          </span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {about.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
              className="card glow-border rounded-2xl p-7 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary-light)] mb-5 group-hover:bg-[var(--color-primary)]/20 group-hover:scale-110 transition-all duration-500">
                {pillarIcons[pillar.icon]}
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-[var(--color-primary-light)] transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {pillar.description}
              </p>
              {/* Step indicator */}
              <div className="mt-5 flex items-center gap-2">
                <span className="font-mono text-[10px] text-[var(--color-primary)]">
                  0{i + 1}
                </span>
                <div className="h-px flex-1 bg-[var(--color-border)]" />
                {i < 2 && (
                  <span className="text-[var(--color-primary-light)]/30 text-xs">→</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        </>)}
      </div>
    </section>
  );
}
