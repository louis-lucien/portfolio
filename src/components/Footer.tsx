"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personal } from "@/config/portfolio";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Name */}
        <h3 className="text-xl font-bold text-[var(--color-foreground)]">
          {personal.lastName} {personal.firstName}
        </h3>

        {/* Title */}
        <p className="text-sm text-[var(--color-muted)]">{personal.title}</p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {personal.socials.github && (
            <motion.a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-primary-light)] hover:border-[var(--color-primary)]/30 transition-all duration-300"
            >
              <FiGithub size={18} />
            </motion.a>
          )}
          {personal.socials.linkedin && (
            <motion.a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-primary-light)] hover:border-[var(--color-primary)]/30 transition-all duration-300"
            >
              <FiLinkedin size={18} />
            </motion.a>
          )}
          <motion.a
            href={`mailto:${personal.email}`}
            whileHover={{ y: -2 }}
            className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-primary-light)] hover:border-[var(--color-primary)]/30 transition-all duration-300"
          >
            <FiMail size={18} />
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-[var(--color-dim)] pt-4">
          &copy; {new Date().getFullYear()} {personal.lastName}{" "}
          {personal.firstName}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
