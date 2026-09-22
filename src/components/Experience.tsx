"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase } from "react-icons/fi";
import { experience } from "@/config/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-[var(--color-primary-light)] font-mono">
              05.
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {experience.heading}
            </h2>
            <div className="h-px flex-1 bg-[var(--color-border)]" />
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary-light)]/30 via-[var(--color-accent)]/15 to-transparent origin-top hidden md:block"
          />

          <div className="space-y-10">
            {experience.items.map((exp, i) => (
              <motion.div
                key={exp.period}
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
                  <div className="flex items-center gap-2 mb-3">
                    <FiBriefcase
                      size={14}
                      className="text-[var(--color-primary-light)]"
                    />
                    <span className="font-mono text-xs text-[var(--color-primary)]">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary-light)] transition-colors duration-300 mb-1">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-[var(--color-primary)] block mb-4">
                    {exp.company}
                  </span>

                  <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-[var(--color-primary)]/[0.06] border border-[var(--color-primary)]/10 text-xs text-[var(--color-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
