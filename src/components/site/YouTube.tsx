import { Button } from "@/components/ui/button";
import { Youtube, ExternalLink } from "lucide-react";

const videos = [
  { id: "dQw4w9WgXcQ", title: "A day in my MBBS life at KUSMS" },
  { id: "dQw4w9WgXcQ", title: "How I cracked the medical entrance exam" },
  { id: "dQw4w9WgXcQ", title: "My honest first year of medical college" },
];

export function YouTube() {
  return (
    <section id="youtube" className="section-y relative">
      <div className="container-pro">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6" data-reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">YouTube</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">
              The <span className="gradient-text">Hritik Yadav</span> channel.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Vlogs from medical college, study tips that actually work, and the unfiltered side of becoming a doctor.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="gradient-brand text-primary-foreground border-0 rounded-xl shadow-glow hover:opacity-90 w-fit"
          >
            <a href="https://www.youtube.com/@hritikyadav13" target="_blank" rel="noreferrer">
              <Youtube className="h-4 w-4" />
              Visit Channel
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal>
          {videos.map((v, i) => (
            <article key={i} className="glass rounded-2xl overflow-hidden shadow-card-soft hover:-translate-y-1 transition-transform">
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
                <h3 className="font-display font-semibold leading-snug">{v.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">Hritik Yadav · YouTube</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
