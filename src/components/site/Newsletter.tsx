import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section id="newsletter" className="section-y">
      <div className="container-pro">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 glass shadow-card-soft" data-reveal>
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full gradient-brand opacity-30 blur-3xl" aria-hidden />
          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium gradient-brand text-primary-foreground">
                <Mail className="h-3.5 w-3.5" />
                Newsletter
              </div>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight">
                Study tips & MBBS stories — <span className="gradient-text">in your inbox</span>.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Occasional, no-spam updates from my college life and MAT Class drops.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email) return;
                toast.success("Subscribed! Welcome to the journey.");
                setEmail("");
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Input
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl bg-background/60"
              />
              <Button type="submit" size="lg" className="gradient-brand text-primary-foreground border-0 rounded-xl shadow-glow hover:opacity-90">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
