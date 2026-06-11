import { GraduationCap, Award, Users, Compass, Heart, Mic } from "lucide-react";

const chips = [
  { icon: GraduationCap, label: "MBBS @ KUSMS" },
  { icon: Mic, label: "Medical Educator" },
  { icon: Users, label: "Content Creator" },
  { icon: Award, label: "Former Prefect" },
  { icon: Compass, label: "Ex-Scout Troop Leader" },
  { icon: Heart, label: "Ex-Rotaract Member" },
];

export function About() {
  return (
    <section id="about" className="section-y relative">
      <div className="container-pro">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start" data-reveal>
          <div>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">About me</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">
              A medical student on a <span className="gradient-text">mission to mentor</span>.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              I'm pursuing my MBBS at Kathmandu University School of Medical Sciences, and along the way
              I create content, teach entrance aspirants, and share the real story of medical college life.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              My goal is simple — help students crack medical entrance exams with clarity, strategy, and
              honest mentorship, while building a community of future doctors who learn from each other.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {chips.map((c) => (
              <div
                key={c.label}
                className="glass rounded-2xl p-5 shadow-card-soft hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl gradient-brand shadow-glow">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <p className="mt-4 font-display font-semibold">{c.label}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Part of who I am and how I show up for students.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
