import { Button } from "@/components/ui/button";
import { CheckCircle2, GraduationCap, ArrowRight, Play } from "lucide-react";

const features = [
  "Entrance preparation support",
  "Curated study resources",
  "Live guidance sessions",
  "MCQ practice & test series",
  "Future structured courses",
  "Community of aspirants",
];

const demos = [
  { id: "1lF-g0842tA", title: "Orientation Video" },
  { id: "f4NQwDhQiIg", title: "Demo Class 1" },
  { id: "OdA-cOx559c", title: "Demo Class 2" },
];

export function MatClass() {
  return (
    <section id="mat" className="section-y relative">
      <div className="container-pro space-y-10">
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
            <div className="text-foreground">
              <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs font-medium">
                <GraduationCap className="h-3.5 w-3.5" />
                MAT Class by Hritik
              </div>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Your shortcut to a <span className="gradient-text">medical seat</span>.
              </h2>
              <p className="mt-5 text-foreground/80 text-lg max-w-xl">
                MAT Class is a focused entrance prep program built by a medical student who's been there.
                Real strategies, smart practice, and the mentorship I wish I had.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="gradient-brand text-primary-foreground border-0 rounded-xl shadow-glow hover:opacity-90"
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
                  className="rounded-xl glass border-border/60"
                >
                  <a href="#mat-demos">
                    <Play className="h-4 w-4" />
                    See free content
                  </a>
                </Button>
              </div>
            </div>

            <div className="glass rounded-3xl p-6 sm:p-8">
              <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest">
                What's inside
              </p>
              <ul className="mt-5 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div id="mat-demos" className="scroll-mt-24" data-reveal>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
            <div>
              <p className="text-sm font-semibold tracking-widest text-primary uppercase">Free MAT demos</p>
              <h3 className="mt-2 font-display text-3xl sm:text-4xl font-bold">
                Watch sample <span className="gradient-text">MAT classes</span>
              </h3>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {demos.map((v) => (
              <article key={v.id} className="glass rounded-2xl overflow-hidden shadow-card-soft hover:-translate-y-1 transition-transform">
                <div className="aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-display font-semibold leading-snug">{v.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">MAT Class · Free preview</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
