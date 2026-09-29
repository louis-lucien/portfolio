import Navigation from "@/components/Navigation";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog",
  description:
    "Articles sur le développement web, la data science et l'intelligence artificielle.",
};

export default function BlogPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-20">
        <Blog />
      </div>
      <Footer />
    </main>
  );
}
