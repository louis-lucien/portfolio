"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiCalendar, FiArrowRight } from "react-icons/fi";
import { blog, personal } from "@/config/portfolio";
import { formatDate } from "@/lib/date";

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">{blog.heading}</span>
          </h2>
          <p className="text-[var(--color-muted)] text-[15px] max-w-2xl mx-auto leading-relaxed">
            {blog.description}
          </p>
        </motion.div>

        {blog.posts.length === 0 ? (
          <p className="text-center text-[var(--color-dim)]">
            Les articles arrivent bientôt.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blog.posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="card group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:shadow-2xl hover:shadow-[var(--color-primary)]/10 transition-all duration-500"
                >
                  {/* Cover */}
                  <div className="relative h-48 overflow-hidden bg-[var(--color-surface-light)]">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 via-[var(--color-accent)]/10 to-[var(--color-secondary)]/20" />
                    )}
                    {post.readTime && (
                      <span className="absolute top-3 right-3 rounded-lg bg-[var(--color-background)]/80 backdrop-blur px-2.5 py-1 text-xs font-semibold text-[var(--color-foreground)]">
                        {post.readTime}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    {/* Meta */}
                    <div className="mb-3 flex items-center gap-2 text-xs text-[var(--color-muted)]">
                      <Image
                        src="/images/profile.jpg"
                        alt={`${personal.firstName} ${personal.lastName}`}
                        width={24}
                        height={24}
                        className="rounded-full object-cover border border-[var(--color-border)]"
                      />
                      <span className="inline-flex items-center gap-1.5">
                        <FiCalendar size={13} /> {formatDate(post.date)}
                      </span>
                    </div>

                    <h3 className="mb-2 text-lg font-bold leading-snug group-hover:text-[var(--color-primary-light)] transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-[var(--color-muted)] line-clamp-3">
                      {post.excerpt}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-light)] group-hover:gap-3 transition-all">
                      Lire l&apos;article <FiArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
