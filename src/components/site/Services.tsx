import { Users, BookOpenCheck, Compass, Handshake, Clapperboard } from "lucide-react";

const services = [
  { icon: Users, title: "Mentorship Sessions", desc: "1:1 sessions tailored to your goals, gaps, and timeline." },
  { icon: BookOpenCheck, title: "Academic Guidance", desc: "Subject-level strategy, revision plans, and study systems." },
  { icon: Compass, title: "Entrance Counseling", desc: "Decoding CEE, college choices, and application strategy." },
  { icon: Handshake, title: "Educational Collaborations", desc: "Partnerships with edtechs, institutes, and student bodies." },
  { icon: Clapperboard, title: "Content Collaborations", desc: "Brand integrations and creator collabs aligned with my audience." },
];

export function Services() {
  return (
    <section id="services" className="section-y relative">
      <div className="container-pro">
        <div className="max-w-2xl" data-reveal>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Services</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">
            How we can <span className="gradient-text">work together</span>.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal>
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative glass rounded-3xl p-7 shadow-card-soft overflow-hidden hover:-translate-y-1.5 transition-all"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full gradient-brand opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" aria-hidden />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-brand shadow-glow">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
