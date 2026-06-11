import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is MAT Class by Hritik?",
    a: "MAT Class is my entrance prep initiative offering guidance sessions, study resources, MCQ practice, and structured help for medical aspirants.",
  },
  {
    q: "Are mentorship sessions one-on-one?",
    a: "Yes. Mentorship is personalized to your goals, target colleges, current preparation level, and timeline.",
  },
  {
    q: "Do you offer brand or content collaborations?",
    a: "I work with edtech brands, institutes, and creators that genuinely add value to students. Reach out via the contact form.",
  },
  {
    q: "How can I get the latest content first?",
    a: "Subscribe on YouTube and join the newsletter below — long-form videos, shorts, and study drops in one place.",
  },
  {
    q: "Where are you currently studying?",
    a: "Kathmandu University School of Medical Sciences (KUSMS), pursuing MBBS.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-y relative">
      <div className="container-pro">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <div data-reveal>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">FAQ</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">
              Questions, <span className="gradient-text">answered</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Can't find what you're looking for? Send a message via the contact section below.
            </p>
          </div>
          <div className="glass rounded-3xl p-4 sm:p-6 shadow-card-soft" data-reveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b last:border-0">
                  <AccordionTrigger className="text-left font-display font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
