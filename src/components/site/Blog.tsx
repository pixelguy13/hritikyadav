import { BookOpen } from "lucide-react";

const posts = [
  { tag: "Coming soon", title: "How to study Anatomy without burning out", date: "Soon" },
  { tag: "Coming soon", title: "My exact CEE preparation timeline", date: "Soon" },
  { tag: "Coming soon", title: "Life lessons from year one of MBBS", date: "Soon" },
];

export function Blog() {
  return (
    <section id="blog" className="section-y relative">
      <div className="container-pro">
        <div className="flex items-end justify-between gap-6 flex-wrap" data-reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">Blog</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">
              Long-form, <span className="gradient-text">soon</span>.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              A space for deeper essays on medicine, studying, and the inner game of becoming a doctor.
            </p>
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6" data-reveal>
          {posts.map((p, i) => (
            <article key={i} className="glass rounded-3xl p-6 shadow-card-soft hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="grid h-8 w-8 place-items-center rounded-lg gradient-brand text-primary-foreground">
                  <BookOpen className="h-4 w-4" />
                </span>
                <span className="uppercase tracking-widest">{p.tag}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
