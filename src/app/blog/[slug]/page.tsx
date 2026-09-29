import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RichText from "@/components/RichText";
import { formatDate } from "@/lib/date";
import { blog, personal } from "@/config/portfolio";

export function generateStaticParams() {
  return blog.posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blog.posts.find((p) => p.slug === slug);
  if (!post) return { title: "Article introuvable" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blog.posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main>
      <Navigation />
      <article className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary-light)] transition-colors mb-8"
          >
            <FiArrowLeft size={16} /> Retour au blog
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-muted)] mb-10">
            <span className="inline-flex items-center gap-2">
              <Image
                src="/images/profile.jpg"
                alt={`${personal.firstName} ${personal.lastName}`}
                width={28}
                height={28}
                className="rounded-full object-cover border border-[var(--color-border)]"
              />
              {personal.firstName} {personal.lastName}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FiCalendar size={14} /> {formatDate(post.date)}
            </span>
            {post.readTime && (
              <span className="inline-flex items-center gap-1.5">
                <FiClock size={14} /> {post.readTime}
              </span>
            )}
          </div>

          {post.image && (
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-10 bg-[var(--color-surface-light)]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <RichText html={post.content} className="article" />
        </div>
      </article>
      <Footer />
    </main>
  );
}
