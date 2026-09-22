"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiArrowUpRight } from "react-icons/fi";
import { projects } from "@/config/portfolio";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-[var(--color-primary-light)] font-mono">
              03.
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {projects.heading}
            </h2>
            <div className="h-px flex-1 bg-[var(--color-border)]" />
          </div>
        </motion.div>

        {/* Featured projects - large */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {projects.items
            .filter((p) => p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="card glow-border rounded-2xl group cursor-pointer relative overflow-hidden"
              >
                {/* Project image */}
                {(project as Record<string, unknown>).image ? (
                  <div className="relative h-48 bg-[var(--color-surface)] overflow-hidden">
                    <Image
                      src={(project as Record<string, unknown>).image as string}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/40 to-transparent" />
                  </div>
                ) : null}

                {/* Ambient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-light)]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 p-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--color-primary-light)]">
                      En vedette &middot; {project.category}
                    </span>
                    <motion.div
                      animate={
                        hoveredIndex === i
                          ? { x: 3, y: -3 }
                          : { x: 0, y: 0 }
                      }
                      className="text-[var(--color-dim)] group-hover:text-[var(--color-primary-light)] transition-colors"
                    >
                      <FiArrowUpRight size={20} />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--color-primary-light)] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-[var(--color-primary)]/[0.06] border border-[var(--color-primary)]/10 text-xs text-[var(--color-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && project.github !== "" && (
                      <a
                        href={project.github}
                        onClick={(e) => e.stopPropagation()}
                        className="text-[var(--color-muted)] hover:text-[var(--color-primary-light)] transition-colors"
                      >
                        <FiGithub size={16} />
                      </a>
                    )}
                    {project.live && project.live !== "" && (
                      <a
                        href={project.live}
                        onClick={(e) => e.stopPropagation()}
                        className="text-[var(--color-muted)] hover:text-[var(--color-primary-light)] transition-colors"
                      >
                        <FiExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other projects - smaller */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.items
            .filter((p) => !p.featured)
            .map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="card glow-border rounded-xl p-6 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[var(--color-dim)]">
                    {project.category}
                  </span>
                  <FiArrowUpRight
                    size={16}
                    className="text-[var(--color-dim)] group-hover:text-[var(--color-primary-light)] transition-colors"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-primary-light)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] text-[var(--color-dim)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
