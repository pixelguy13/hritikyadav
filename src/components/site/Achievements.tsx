import { Trophy } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="section-y relative">
      <div className="container-pro">
        <div className="glass rounded-3xl p-10 sm:p-14 text-center max-w-3xl mx-auto shadow-card-soft" data-reveal>
          <div className="inline-grid h-14 w-14 place-items-center rounded-2xl gradient-brand shadow-glow mx-auto">
            <Trophy className="h-7 w-7 text-primary-foreground" />
          </div>
          <p className="mt-5 text-sm font-semibold tracking-widest text-primary uppercase">Achievements</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold">
            More achievements <span className="gradient-text">coming soon</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            This space is reserved for milestones from medical college, MAT Class, and the channel.
            Watch this section grow.
          </p>
        </div>
      </div>
    </section>
  );
}
