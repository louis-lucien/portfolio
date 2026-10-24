"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiMessageCircle,
  FiUsers,
  FiBookOpen,
  FiHeadphones,
  FiRefreshCw,
  FiShare2,
  FiStar,
} from "react-icons/fi";
import { softSkills } from "@/config/portfolio";

const icons: Record<string, React.ReactNode> = {
  message: <FiMessageCircle size={20} />,
  users: <FiUsers size={20} />,
  teach: <FiBookOpen size={20} />,
  listen: <FiHeadphones size={20} />,
  adapt: <FiRefreshCw size={20} />,
  coordinate: <FiShare2 size={20} />,
};

export default function SoftSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  if (!softSkills?.items?.length) return null;

  return (
    <section id="soft-skills" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm text-[var(--color-primary-light)] font-mono">
              04.
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {softSkills.heading}
            </h2>
            <div className="h-px flex-1 bg-[var(--color-border)]" />
          </div>
          {softSkills.description && (
            <p className="text-[var(--color-muted)] text-[15px] max-w-xl ml-9">
              {softSkills.description}
            </p>
          )}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.items.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -4 }}
              className="card rounded-2xl p-6 border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:shadow-xl hover:shadow-[var(--color-primary)]/10 transition-all duration-500 group"
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary-light)] mb-4 group-hover:scale-110 transition-transform duration-300">
                {icons[skill.icon] || <FiStar size={20} />}
              </div>
              <h3 className="text-base font-semibold mb-2 group-hover:text-[var(--color-primary-light)] transition-colors">
                {skill.name}
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
