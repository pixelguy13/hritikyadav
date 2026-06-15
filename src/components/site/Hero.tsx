import { Button } from "@/components/ui/button";
import { Play, GraduationCap, MessageCircle, Sparkles } from "lucide-react";
import portraitAsset from "@/assets/hritik-portrait.jpg.asset.json";
import heroBg from "@/assets/hero-bg.jpg";

const portrait = portraitAsset.url;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div
        className="absolute inset-0 -z-10 opacity-70 dark:opacity-90"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-background/70 dark:bg-background/60" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-[600px] -z-10"
        style={{ background: "var(--gradient-radial)" }}
        aria-hidden
      />

      <div className="container-pro">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-medium text-foreground/80">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span>MBBS Student · Educator · Creator</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Hi, I'm <span className="gradient-text">Hritik Yadav</span>
              <span className="block text-foreground/80 text-3xl sm:text-4xl lg:text-5xl font-semibold mt-4">
                Future doctor. Mentor. Storyteller.
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              <strong className="text-foreground">3rd year MBBS student</strong> at Kathmandu University
              School of Medical Sciences, founder of <strong className="text-foreground">MAT Class by Hritik</strong>,
              and a creator helping future doctors succeed while documenting my MBBS journey.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="gradient-brand text-primary-foreground border-0 rounded-xl shadow-glow hover:opacity-90"
              >
                <a href="#youtube">
                  <Play className="h-4 w-4" />
                  Watch YouTube
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl glass border-border/60"
              >
                <a href="#mat">
                  <GraduationCap className="h-4 w-4" />
                  Join MAT Class
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-xl">
                <a href="#contact">
                  <MessageCircle className="h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </div>

            <dl className="grid grid-cols-3 gap-6 pt-6 max-w-md">
              {[
                { k: "3rd Yr", v: "MBBS · KUSMS" },
                { k: "1000+", v: "Students mentored" },
                { k: "100%", v: "Honest journey" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="text-2xl sm:text-3xl font-display font-bold gradient-text">{s.k}</dt>
                  <dd className="text-xs text-muted-foreground mt-1">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-6 rounded-[2rem] gradient-brand opacity-30 blur-2xl animate-pulse-glow" aria-hidden />
              <div className="relative glass rounded-[2rem] p-3 shadow-card-soft">
                <img
                  src={portrait}
                  alt="Hritik Yadav, MBBS student and medical educator"
                  width={896}
                  height={1152}
                  className="rounded-[1.5rem] w-full h-auto object-cover"
                />
                <div className="absolute -bottom-5 -left-5 glass rounded-2xl p-4 shadow-card-soft animate-float">
                  <p className="text-xs text-muted-foreground">Currently studying</p>
                  <p className="font-display font-semibold text-sm">MBBS · KUSMS</p>
                </div>
                <div className="absolute -top-5 -right-5 glass rounded-2xl p-4 shadow-card-soft animate-float" style={{ animationDelay: "1.5s" }}>
                  <p className="text-xs text-muted-foreground">Founder</p>
                  <p className="font-display font-semibold text-sm">MAT Class</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
