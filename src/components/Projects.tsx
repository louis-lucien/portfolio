"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiArrowUpRight, FiX } from "react-icons/fi";
import { projects } from "@/config/portfolio";
import RichText from "@/components/RichText";

type Project = (typeof projects.items)[number];

function projectImage(p: Project): string | null {
  const img = (p as Record<string, unknown>).image;
  return typeof img === "string" && img !== "" ? img : null;
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selected, setSelected] = useState<Project | null>(null);

  // Close on Escape + lock body scroll while the detail modal is open.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [selected]);

  const featured = projects.items.filter((p) => p.featured);
  const others = projects.items.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm text-[var(--color-primary-light)] font-mono">
              03.
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">{projects.heading}</h2>
            <div className="h-px flex-1 bg-[var(--color-border)]" />
          </div>
          <p className="text-[var(--color-muted)] text-[15px] max-w-xl ml-9">
            Cliquez sur un projet pour découvrir le détail, le contexte et les
            technologies utilisées.
          </p>
        </motion.div>

        {/* Featured projects - large */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => {
            const img = projectImage(project);
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelected(project)}
                whileHover={{ y: -6 }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(project);
                  }
                }}
                className="card rounded-2xl group cursor-pointer relative overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:shadow-2xl hover:shadow-[var(--color-primary)]/10 transition-all duration-500"
              >
                {/* Project image */}
                {img ? (
                  <div className="relative h-48 bg-[var(--color-surface)] overflow-hidden">
                    <Image
                      src={img}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/40 to-transparent" />
                  </div>
                ) : null}

                {/* Warm ambient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/[0.06] via-transparent to-[var(--color-primary)]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 px-3 py-1 text-[10px] font-mono tracking-[0.2em] uppercase text-[var(--color-accent-light)]">
                      En vedette &middot; {project.category}
                    </span>
                    <motion.div
                      animate={hoveredIndex === i ? { x: 3, y: -3 } : { x: 0, y: 0 }}
                      className="text-[var(--color-dim)] group-hover:text-[var(--color-primary-light)] transition-colors"
                    >
                      <FiArrowUpRight size={20} />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--color-primary-light)] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <RichText
                    html={project.description}
                    className="text-sm text-[var(--color-muted)] leading-relaxed mb-6 line-clamp-4"
                  />

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 6).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-[var(--color-primary)]/[0.06] border border-[var(--color-primary)]/10 text-xs text-[var(--color-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 6 && (
                      <span className="px-3 py-1.5 text-xs text-[var(--color-dim)]">
                        +{project.tags.length - 6}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between border-t border-[var(--color-border)] pt-4">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary-light)] group-hover:gap-2.5 transition-all">
                      Voir le détail
                      <FiArrowUpRight size={15} />
                    </span>
                    <div className="flex gap-4">
                      {project.github && project.github !== "" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          aria-label="Code source"
                          className="text-[var(--color-muted)] hover:text-[var(--color-primary-light)] transition-colors"
                        >
                          <FiGithub size={16} />
                        </a>
                      )}
                      {project.live && project.live !== "" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          aria-label="Voir en ligne"
                          className="text-[var(--color-muted)] hover:text-[var(--color-primary-light)] transition-colors"
                        >
                          <FiExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other projects - smaller */}
        <div className="grid md:grid-cols-2 gap-6">
          {others.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              onClick={() => setSelected(project)}
              whileHover={{ y: -4 }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(project);
                }
              }}
              className="card rounded-xl p-6 group cursor-pointer border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:shadow-xl hover:shadow-[var(--color-primary)]/10 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono tracking-wider uppercase text-[var(--color-accent-light)]">
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
              <RichText
                html={project.description}
                className="text-sm text-[var(--color-muted)] leading-relaxed mb-4 line-clamp-3"
              />
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] text-[var(--color-dim)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--color-primary-light)] opacity-0 group-hover:opacity-100 transition-opacity">
                  Détail <FiArrowUpRight size={12} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              className="absolute inset-0 bg-[var(--color-background)]/80 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative z-10 w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl overflow-hidden"
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                aria-label="Fermer"
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center bg-[var(--color-background)]/70 backdrop-blur text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-background)] transition-colors"
              >
                <FiX size={18} />
              </button>

              <div className="overflow-y-auto">
              {projectImage(selected) ? (
                <div className="relative h-52 sm:h-60 bg-[var(--color-surface-light)]">
                  <Image
                    src={projectImage(selected) as string}
                    alt={selected.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/30 to-transparent" />
                </div>
              ) : (
                <div className="h-2 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-secondary)]" />
              )}

              <div className="p-8">
                <span className="inline-flex items-center rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 px-3 py-1 text-[10px] font-mono tracking-[0.2em] uppercase text-[var(--color-accent-light)] mb-4">
                  {selected.featured ? "En vedette · " : ""}
                  {selected.category}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold mb-5">
                  {selected.title}
                </h3>

                <RichText
                  html={selected.description}
                  className="text-[15px] text-[var(--color-muted)] leading-[1.8] mb-6"
                />

                {selected.tags.length > 0 && (
                  <div className="mb-7">
                    <span className="block text-[11px] uppercase tracking-wider text-[var(--color-dim)] mb-2.5">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selected.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-lg bg-[var(--color-primary)]/[0.06] border border-[var(--color-primary)]/10 text-xs text-[var(--color-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {((selected.github && selected.github !== "") ||
                  (selected.live && selected.live !== "")) && (
                  <div className="flex flex-wrap gap-3">
                    {selected.live && selected.live !== "" && (
                      <a
                        href={selected.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                      >
                        <FiExternalLink size={15} /> Voir le projet
                      </a>
                    )}
                    {selected.github && selected.github !== "" && (
                      <a
                        href={selected.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm text-[var(--color-primary-light)] hover:bg-[var(--color-primary)]/10 transition-colors"
                      >
                        <FiGithub size={15} /> Code source
                      </a>
                    )}
                  </div>
                )}
              </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
