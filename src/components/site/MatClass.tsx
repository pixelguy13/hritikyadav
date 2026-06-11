import { Button } from "@/components/ui/button";
import { CheckCircle2, GraduationCap, ArrowRight } from "lucide-react";

const features = [
  "Entrance preparation support",
  "Curated study resources",
  "Live guidance sessions",
  "MCQ practice & test series",
  "Future structured courses",
  "Community of aspirants",
];

export function MatClass() {
  return (
    <section id="mat" className="section-y relative">
      <div className="container-pro">
        <div className="relative overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-16 gradient-hero shadow-glow" data-reveal>
          <div
            className="absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-40 blur-3xl gradient-brand"
            aria-hidden
          />
          <div
            className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--cyan-glow)" }}
            aria-hidden
          />

          <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs font-medium">
                <GraduationCap className="h-3.5 w-3.5" />
                MAT Class by Hritik
              </div>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Your shortcut to a <span className="text-[oklch(0.92_0.12_200)]">medical seat</span>.
              </h2>
              <p className="mt-5 text-white/85 text-lg max-w-xl">
                MAT Class is a focused entrance prep program built by a medical student who's been there.
                Real strategies, smart practice, and the mentorship I wish I had.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-deep-blue hover:bg-white/90 rounded-xl shadow-glow border-0"
                >
                  <a href="#contact">
                    Join MAT Class
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  <a href="#youtube">See free content</a>
                </Button>
              </div>
            </div>

            <div className="glass rounded-3xl p-6 sm:p-8 bg-white/10 border-white/20">
              <p className="text-white/80 text-sm font-medium uppercase tracking-widest">
                What's inside
              </p>
              <ul className="mt-5 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-white">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[oklch(0.92_0.12_200)] mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
