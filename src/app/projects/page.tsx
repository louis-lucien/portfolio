import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-20">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
