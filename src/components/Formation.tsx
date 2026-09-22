"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBookOpen } from "react-icons/fi";
import { formation } from "@/config/portfolio";

export default function Formation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="formation" className="py-32 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-primary)]/[0.012] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-[var(--color-primary-light)] font-mono">
              04.
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {formation.heading}
            </h2>
            <div className="h-px flex-1 bg-[var(--color-border)]" />
          </div>
          <p className="text-[var(--color-muted)] text-[15px] leading-relaxed mt-4 max-w-2xl">
            {formation.intro}
          </p>

          {/* Progression arc */}
          <div className="flex items-center gap-3 mt-8 flex-wrap">
            {["Software Engineering", "Data Engineering", "Intelligence Artificielle"].map(
              (step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.2 }}
                  className="flex items-center gap-3"
                >
                  <span className="px-4 py-2 rounded-lg glass text-sm text-[var(--color-accent-light)] font-medium">
                    {step}
                  </span>
                  {i < 2 && (
                    <motion.span
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4,
                      }}
                      className="text-[var(--color-primary)]"
                    >
                      →
                    </motion.span>
                  )}
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary-light)]/30 via-[var(--color-primary)]/15 to-transparent origin-top hidden md:block"
          />

          <div className="space-y-10">
            {formation.items.map((item, i) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                className="group relative md:pl-16"
              >
                {/* Dot */}
                <div className="hidden md:block absolute left-[14px] top-8 w-[23px] h-[23px] rounded-full border-2 border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-colors duration-500">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.2 }}
                    className="absolute inset-[4px] rounded-full bg-[var(--color-primary)]/40 group-hover:bg-[var(--color-primary)] transition-colors duration-500"
                  />
                </div>

                <div className="card glow-border rounded-2xl p-7">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <FiBookOpen
                          size={14}
                          className="text-[var(--color-primary-light)]"
                        />
                        <span className="font-mono text-xs text-[var(--color-primary)]">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary-light)] transition-colors duration-300">
                        {item.degree}
                      </h3>
                      <p className="text-sm text-[var(--color-primary-light)] mt-1">
                        {item.speciality}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-[var(--color-muted)] mb-3">
                    {item.school}
                  </p>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
