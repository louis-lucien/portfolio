"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FiSend,
  FiMail,
  FiMapPin,
  FiPhone,
  FiArrowUpRight,
  FiCheckCircle,
  FiEye,
  FiDownload,
} from "react-icons/fi";
import { personal, contact } from "@/config/portfolio";

const cvUrl = (personal as { cvUrl?: string }).cvUrl || "";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio — message de ${form.name || "un visiteur"}`
    );
    const body = encodeURIComponent(
      `Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`
    );
    // Open the visitor's email client, pre-filled to the owner's address.
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const infos = [
    { icon: <FiMail size={18} />, label: "Email", value: personal.email },
    {
      icon: <FiMapPin size={18} />,
      label: "Localisation",
      value: personal.location,
    },
    { icon: <FiPhone size={18} />, label: "Téléphone", value: personal.phone },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-light)]/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-[var(--color-primary-light)] font-mono">
              08.
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {contact.heading}
            </h2>
            <div className="h-px flex-1 bg-[var(--color-border)]" />
          </div>
          <p className="text-[var(--color-muted)] max-w-xl text-[15px] leading-relaxed">
            {contact.description}
          </p>
          {cvUrl && (
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-[var(--color-background)] text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <FiEye size={15} /> Consulter mon CV
              </a>
              <a
                href={cvUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm text-[var(--color-primary-light)] hover:bg-[var(--color-primary)]/10 transition-colors"
              >
                <FiDownload size={15} /> Télécharger
              </a>
            </div>
          )}
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 space-y-5"
          >
            {infos.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl card"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary-light)] shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-[var(--color-muted)] mb-1">
                    {info.label}
                  </p>
                  <p className="text-sm text-[var(--color-foreground)]">
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <div className="pt-4 space-y-3">
              {personal.socials.github && (
                <a
                  href={personal.socials.github}
                  className="group flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary-light)] transition-colors"
                >
                  GitHub
                  <FiArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              )}
              {personal.socials.linkedin && (
                <a
                  href={personal.socials.linkedin}
                  className="group flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary-light)] transition-colors"
                >
                  LinkedIn
                  <FiArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              )}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="pt-6 border-t border-[var(--color-border)]"
            >
              <p className="text-sm text-[var(--color-muted)] italic leading-relaxed">
                &ldquo;{contact.quote}&rdquo;
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs text-[var(--color-muted)] mb-2.5 block tracking-wider uppercase">
                  Nom
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-[var(--color-surface-light)] border border-[var(--color-border)] text-[var(--color-foreground)] placeholder:text-[var(--color-dim)] focus:border-[var(--color-primary)]/40 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]/20 transition-all duration-300"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="text-xs text-[var(--color-muted)] mb-2.5 block tracking-wider uppercase">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-[var(--color-surface-light)] border border-[var(--color-border)] text-[var(--color-foreground)] placeholder:text-[var(--color-dim)] focus:border-[var(--color-primary)]/40 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]/20 transition-all duration-300"
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-[var(--color-muted)] mb-2.5 block tracking-wider uppercase">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={6}
                className="w-full px-5 py-3.5 rounded-xl bg-[var(--color-surface-light)] border border-[var(--color-border)] text-[var(--color-foreground)] placeholder:text-[var(--color-dim)] focus:border-[var(--color-primary)]/40 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]/20 transition-all duration-300 resize-none"
                placeholder="Parlez-moi de votre projet..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-[var(--color-background)] font-semibold flex items-center justify-center gap-2.5 hover:from-[var(--color-primary-light)] hover:to-[var(--color-accent)] transition-all duration-300 shadow-lg shadow-[var(--color-primary)]/10"
            >
              {submitted ? (
                <>
                  <FiCheckCircle size={18} /> Ouverture de votre messagerie…
                </>
              ) : (
                <>
                  <FiSend size={16} /> Envoyer le message
                </>
              )}
            </motion.button>

            <p className="text-xs text-[var(--color-dim)] text-center">
              Le bouton ouvre votre application email pré-remplie. Vous pouvez
              aussi m&apos;écrire directement à{" "}
              <a
                href={`mailto:${personal.email}`}
                className="text-[var(--color-primary-light)] hover:underline"
              >
                {personal.email}
              </a>
              .
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
