const tiles = [
  { tall: true, label: "College Life", hue: "from-[oklch(0.4_0.18_255)] to-[oklch(0.7_0.16_205)]" },
  { tall: false, label: "Workshops", hue: "from-[oklch(0.32_0.14_245)] to-[oklch(0.6_0.18_215)]" },
  { tall: false, label: "Events", hue: "from-[oklch(0.45_0.18_265)] to-[oklch(0.78_0.16_200)]" },
  { tall: true, label: "Content Creation", hue: "from-[oklch(0.28_0.13_258)] to-[oklch(0.72_0.18_210)]" },
  { tall: false, label: "Study Sessions", hue: "from-[oklch(0.36_0.16_250)] to-[oklch(0.68_0.17_205)]" },
  { tall: false, label: "Medical Camps", hue: "from-[oklch(0.3_0.14_245)] to-[oklch(0.7_0.16_205)]" },
  { tall: true, label: "Mentorship", hue: "from-[oklch(0.4_0.18_260)] to-[oklch(0.74_0.17_200)]" },
  { tall: false, label: "Behind the Scenes", hue: "from-[oklch(0.34_0.15_252)] to-[oklch(0.66_0.17_210)]" },
];

export function Gallery() {
  return (
    <section id="gallery" className="section-y relative">
      <div className="container-pro">
        <div className="max-w-2xl" data-reveal>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Gallery</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">
            Moments from the <span className="gradient-text">journey</span>.
          </h2>
        </div>

        <div className="mt-12 columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]" data-reveal>
          {tiles.map((t, i) => (
            <div
              key={i}
              className={`mb-4 break-inside-avoid rounded-2xl overflow-hidden shadow-card-soft group relative ${
                t.tall ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${t.hue}`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(1_0_0/0.25),transparent_60%)]" />
              <div className="absolute inset-0 flex items-end p-5">
                <div>
                  <p className="text-white/70 text-xs uppercase tracking-widest">Hritik Yadav</p>
                  <p className="text-white font-display font-semibold text-lg">{t.label}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
