import { Stethoscope, Clapperboard, Compass } from "lucide-react";

const items = [
  {
    icon: Stethoscope,
    title: "Medical Education",
    points: ["MBBS guidance", "Medical entrance preparation", "Study strategies & frameworks"],
  },
  {
    icon: Clapperboard,
    title: "Content Creation",
    points: ["MBBS vlogs", "Medical student life", "Educational videos & shorts"],
  },
  {
    icon: Compass,
    title: "Mentorship",
    points: ["CEE preparation guidance", "Personalized study planning", "Career & career-path advice"],
  },
];

export function WhatIDo() {
  return (
    <section id="what" className="section-y relative">
      <div
        className="absolute inset-x-0 top-0 h-full -z-10 opacity-60"
        style={{ background: "var(--gradient-radial)" }}
        aria-hidden
      />
      <div className="container-pro">
        <div className="max-w-2xl" data-reveal>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">What I do</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">
            Three lanes, <span className="gradient-text">one mission</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From textbook to camera to one-on-one guidance — here's how I help future doctors win.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6" data-reveal>
          {items.map((it) => (
            <article
              key={it.title}
              className="group relative glass rounded-3xl p-7 shadow-card-soft hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "var(--gradient-radial)" }}
                aria-hidden
              />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-brand shadow-glow">
                  <it.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{it.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {it.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full gradient-brand shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
