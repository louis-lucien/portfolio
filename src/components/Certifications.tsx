"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import {
  FiAward,
  FiChevronDown,
  FiChevronUp,
  FiX,
  FiZoomIn,
  FiFileText,
} from "react-icons/fi";
import { certifications } from "@/config/portfolio";

type Cert = (typeof certifications.items)[number];

function certPdf(c: Cert): string {
  const p = (c as Record<string, unknown>).pdf;
  return typeof p === "string" ? p : "";
}

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const highlighted = certifications.items.filter((c) => c.highlight);
  const others = certifications.items.filter((c) => !c.highlight);
  const displayed = showAll ? certifications.items : highlighted;

  return (
    <>
      <section id="certifications" className="py-32 px-6" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary-light)]">
                <FiAward size={20} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                {certifications.heading}
              </h2>
            </div>
          </motion.div>

          {/* Certifications grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayed.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              >
                {/* Card */}
                <div className="card glow-border rounded-2xl overflow-hidden group h-full">
                    {/* Header */}
                    <div className="p-5 pb-3">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary-light)] shrink-0">
                          <FiAward size={16} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold text-[var(--color-foreground)] leading-snug mb-1 group-hover:text-[var(--color-primary-light)] transition-colors duration-300">
                            {cert.name}
                          </h3>
                          <p className="text-xs text-[var(--color-muted)]">
                            {cert.issuer}{" "}
                            <span className="text-[var(--color-dim)]">
                              &bull; {cert.date}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Certificate media: image preview, else PDF preview */}
                    {"image" in cert && cert.image ? (
                      <div
                        className="relative mx-5 mb-4 rounded-xl overflow-hidden cursor-pointer bg-[var(--color-surface)]"
                        onClick={() => setLightbox(cert.image as string)}
                      >
                        <div className="aspect-[16/10] relative">
                          <Image
                            src={cert.image as string}
                            alt={cert.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-[var(--color-background)]/60 backdrop-blur-sm flex items-center justify-center text-[var(--color-primary-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <FiZoomIn size={14} />
                        </div>
                      </div>
                    ) : certPdf(cert) ? (
                      <a
                        href={certPdf(cert)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/pdf relative mx-5 mb-4 block rounded-xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)]"
                      >
                        <div className="aspect-[16/10] relative">
                          <iframe
                            src={`${certPdf(cert)}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                            title={cert.name}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full pointer-events-none"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)]/40 to-transparent opacity-0 group-hover/pdf:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-2 right-2 inline-flex items-center gap-1 rounded-lg bg-[var(--color-background)]/70 backdrop-blur-sm px-2 py-1 text-[10px] font-semibold text-[var(--color-primary-light)]">
                          <FiFileText size={11} /> PDF
                        </div>
                      </a>
                    ) : null}

                    {/* Extra PDF link when an image is already the main visual */}
                    {certPdf(cert) && "image" in cert && cert.image && (
                      <div className="px-5 pb-5 -mt-1">
                        <a
                          href={certPdf(cert)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-primary-light)] hover:underline"
                        >
                          <FiFileText size={13} /> Voir le certificat (PDF)
                        </a>
                      </div>
                    )}

                    {/* Skills tags */}
                    {"skills" in cert &&
                      (cert as { skills?: string[] }).skills && (
                        <div className="px-5 pb-5 flex flex-wrap gap-2">
                          {(cert as { skills: string[] }).skills.map((s) => (
                            <span
                              key={s}
                              className="px-3 py-1 rounded-full text-xs border border-[var(--color-border)] text-[var(--color-muted)]"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                  </div>
              </motion.div>
            ))}
          </div>

          {/* Toggle */}
          {others.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="text-center mt-10"
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm text-[var(--color-primary-light)] hover:bg-[var(--color-primary)]/10 transition-colors duration-300"
              >
                {showAll ? (
                  <>
                    Voir moins <FiChevronUp size={16} />
                  </>
                ) : (
                  <>
                    Voir les {others.length} autres certifications{" "}
                    <FiChevronDown size={16} />
                  </>
                )}
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[var(--color-background)]/90 backdrop-blur-xl flex items-center justify-center p-6 cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden border border-[var(--color-border)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Certificate"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[var(--color-background)]/80 backdrop-blur-sm flex items-center justify-center text-[var(--color-foreground)] hover:text-[var(--color-primary-light)] transition-colors"
              >
                <FiX size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
