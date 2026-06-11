import { Youtube, Instagram, Facebook, MessageCircle, Mail, GraduationCap } from "lucide-react";

const links = [
  { icon: Youtube, label: "YouTube Channel", href: "https://www.youtube.com/@hritikyadav13", desc: "@hritikyadav13" },
  { icon: GraduationCap, label: "MAT Class by Hritik", href: "#mat", desc: "Entrance prep program" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/", desc: "Daily stories & reels" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/", desc: "Community & updates" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/9779842612207", desc: "+977 9842612207" },
  { icon: Mail, label: "Email", href: "mailto:hritiky13@gmail.com", desc: "hritiky13@gmail.com" },
];

export function LinksHub() {
  return (
    <section id="links" className="section-y relative">
      <div className="container-pro">
        <div className="text-center max-w-2xl mx-auto" data-reveal>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Find me everywhere</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">
            All my <span className="gradient-text">links</span> in one place.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Connect, learn, and follow my MBBS journey across platforms.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4" data-reveal>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group glass rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 hover:shadow-glow transition-all"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl gradient-brand shadow-glow shrink-0">
                <l.icon className="h-5 w-5 text-primary-foreground" />
              </span>
              <div className="min-w-0">
                <p className="font-display font-semibold leading-tight">{l.label}</p>
                <p className="text-xs text-muted-foreground truncate">{l.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
