import { Youtube, Instagram, Facebook, Stethoscope } from "lucide-react";

const socials = [
  { icon: Youtube, href: "https://www.youtube.com/@hritikyadav13", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com/_hritikyadav_/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/hreet.eek", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-10">
      <div className="container-pro py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl gradient-brand shadow-glow">
                <Stethoscope className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="font-display font-bold text-lg">
                Hritik <span className="gradient-text">Yadav</span>
              </span>
            </div>
            <p className="mt-4 text-muted-foreground max-w-md">
              3rd year MBBS student at Kathmandu University School of Medical Sciences — helping future
              doctors succeed while documenting the journey.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl glass hover:gradient-brand hover:text-primary-foreground transition-colors"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display font-semibold mb-3">Explore</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground">About</a></li>
              <li><a href="#mat" className="hover:text-foreground">MAT Class</a></li>
              <li><a href="#youtube" className="hover:text-foreground">YouTube</a></li>
              <li><a href="#links" className="hover:text-foreground">Links</a></li>
              <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="font-display font-semibold mb-3">Get in touch</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>WhatsApp: +977 9842612207</li>
              <li>Email: hritiky13@gmail.com</li>
              <li>Dhulikhel, Nepal</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row gap-3 justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Hritik Yadav. All rights reserved.</p>
          <p>Built with care · For future doctors.</p>
        </div>
      </div>
    </footer>
  );
}
