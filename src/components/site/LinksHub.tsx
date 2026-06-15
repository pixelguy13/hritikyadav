import { Youtube, Instagram, Facebook, MessageCircle, Mail, GraduationCap } from "lucide-react";

const links = [
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@hritikyadav13", desc: "@hritikyadav13" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/_hritikyadav_/", desc: "@_hritikyadav_" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/hreet.eek", desc: "facebook.com/hreet.eek" },
  { icon: GraduationCap, label: "MAT Class", href: "#mat", desc: "Entrance prep" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/9779842612207", desc: "+977 9842612207" },
  { icon: Mail, label: "Email", href: "mailto:hritiky13@gmail.com", desc: "hritiky13@gmail.com" },
];

export function LinksHub() {
  return (
    <section id="links" className="py-10 relative">
      <div className="container-pro">
        <div className="glass rounded-3xl p-6 sm:p-8 shadow-card-soft" data-reveal>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold tracking-widest text-primary uppercase">Quick links</p>
              <h3 className="mt-1 font-display text-2xl font-bold">Find me everywhere</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex flex-col items-center gap-2 rounded-2xl p-4 bg-background/40 hover:bg-background/70 border border-border/50 hover:-translate-y-0.5 hover:shadow-glow transition-all text-center"
                title={l.desc}
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl gradient-brand shadow-glow">
                  <l.icon className="h-4 w-4 text-primary-foreground" />
                </span>
                <span className="font-display font-semibold text-sm leading-tight">{l.label}</span>
                <span className="text-[10px] text-muted-foreground truncate w-full">{l.desc}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
