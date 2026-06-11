import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { MatClass } from "@/components/site/MatClass";
import { YouTube } from "@/components/site/YouTube";
import { LinksHub } from "@/components/site/LinksHub";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { ThemeProvider } from "@/lib/theme";
import { useReveal } from "@/lib/use-reveal";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hritik Yadav — MBBS Student, Educator & Creator" },
      {
        name: "description",
        content:
          "Personal brand of Hritik Yadav — MBBS student at KUSMS, founder of MAT Class, and creator helping future doctors crack medical entrance exams.",
      },
      { property: "og:title", content: "Hritik Yadav — MBBS Student, Educator & Creator" },
      {
        property: "og:description",
        content:
          "Mentorship, MBBS vlogs, study strategies, and MAT Class by Hritik — built for future doctors.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
}

function Page() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MatClass />
        <YouTube />
        <LinksHub />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster richColors position="top-center" />
    </div>
  );
}
