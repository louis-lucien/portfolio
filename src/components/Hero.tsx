"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiArrowDown } from "react-icons/fi";
import { personal, hero } from "@/config/portfolio";

function TypingText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = texts[index];
    if (!isDeleting && displayed === current) {
      setTimeout(() => setIsDeleting(true), 2500);
      return;
    }
    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }
    const speed = isDeleting ? 25 : 55;
    setTimeout(() => {
      setDisplayed(
        isDeleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1)
      );
    }, speed);
  }, [displayed, isDeleting, index, texts]);

  useEffect(() => {
    tick();
  }, [tick]);

  return (
    <span>
      {displayed}
      <span className="animate-[blink_1s_infinite] text-[var(--color-primary-light)]/60">
        |
      </span>
    </span>
  );
}

function DataFlowAnimation() {
  const [particles, setParticles] = useState<
    { id: number; x: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-px"
          style={{ left: `${p.x}%`, top: "-5%" }}
          animate={{ y: ["0vh", "110vh"] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[var(--color-primary)]/20 to-transparent" />
        </motion.div>
      ))}
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[var(--color-primary)]/[0.04] rounded-full blur-[160px] animate-[float_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[var(--color-secondary)]/[0.03] rounded-full blur-[140px] animate-[float_12s_ease-in-out_infinite_2s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-accent)]/[0.02] rounded-full blur-[180px]" />

      <DataFlowAnimation />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-primary) 0.8px, transparent 0.8px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 text-center">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-[var(--color-primary)]/30 shadow-lg shadow-[var(--color-primary)]/20 relative z-10 bg-[var(--color-surface)]">
              <Image
                src="/images/profile.jpg"
                alt={`${personal.firstName} ${personal.lastName}`}
                width={192}
                height={192}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-secondary)] opacity-20 blur-xl animate-[pulse-glow_4s_ease-in-out_infinite]" />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass text-sm text-[var(--color-accent-light)]">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-[pulse-glow_3s_ease-in-out_infinite]" />
            {hero.greeting}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] mb-4"
        >
          {personal.firstName}{" "}
          <span className="gradient-text">{personal.lastName}</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-sm tracking-[0.3em] uppercase text-[var(--color-dim)] mb-6 font-mono"
        >
          {personal.tagline}
        </motion.p>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="h-10 mb-8 text-xl sm:text-2xl font-light text-[var(--color-primary-light)]"
        >
          {mounted && <TypingText texts={hero.roles} />}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed mb-12"
        >
          {hero.subtitle}
        </motion.p>

        {/* Data chain visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex items-center justify-center gap-3 mb-14 flex-wrap"
        >
          {["Software", "Data", "Intelligence"].map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.7 + i * 0.2 }}
              className="flex items-center gap-3"
            >
              <span className="px-4 py-2 rounded-lg glass text-sm text-[var(--color-accent-light)] font-medium">
                {step}
              </span>
              {i < 2 && (
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="text-[var(--color-primary-light)]/40"
                >
                  →
                </motion.span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="flex items-center justify-center gap-5"
        >
          <motion.a
            href="#about"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-[var(--color-background)] font-semibold text-sm hover:from-[var(--color-primary-light)] hover:to-[var(--color-accent)] transition-all duration-300 shadow-lg shadow-[var(--color-primary)]/10"
          >
            {hero.cta}
            <FiArrowDown size={16} />
          </motion.a>

          {personal.socials.github && (
            <motion.a
              href={personal.socials.github}
              whileHover={{ y: -3 }}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-primary-light)] transition-colors duration-300"
            >
              <FiGithub size={20} />
            </motion.a>
          )}
          {personal.socials.linkedin && (
            <motion.a
              href={personal.socials.linkedin}
              whileHover={{ y: -3 }}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-primary-light)] transition-colors duration-300"
            >
              <FiLinkedin size={20} />
            </motion.a>
          )}
        </motion.div>

        {/* Scroll */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-primary-light)] transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <FiArrowDown size={18} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
