import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [loading, setLoading] = useState(false);

  return (
    <section id="contact" className="section-y relative">
      <div className="container-pro">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10">
          <div data-reveal>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">Contact</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">
              Let's <span className="gradient-text">talk</span>.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Mentorship, collaborations, or just a hello — pick the channel that works for you.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="https://wa.me/9779842612207"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 glass rounded-2xl p-4 shadow-card-soft hover:-translate-y-0.5 transition-transform"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl gradient-brand shadow-glow">
                  <MessageCircle className="h-5 w-5 text-primary-foreground" />
                </span>
                <span>
                  <p className="text-xs text-muted-foreground">WhatsApp Business</p>
                  <p className="font-display font-semibold">+977 9842612207</p>
                </span>
              </a>
              <a
                href="mailto:hello@hritikyadav.com"
                className="flex items-center gap-4 glass rounded-2xl p-4 shadow-card-soft hover:-translate-y-0.5 transition-transform"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl gradient-brand shadow-glow">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </span>
                <span>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-display font-semibold">hello@hritikyadav.com</p>
                </span>
              </a>
              <div className="flex items-center gap-4 glass rounded-2xl p-4 shadow-card-soft">
                <span className="grid h-12 w-12 place-items-center rounded-xl gradient-brand shadow-glow">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </span>
                <span>
                  <p className="text-xs text-muted-foreground">Call</p>
                  <p className="font-display font-semibold">+977 9842612207</p>
                </span>
              </div>
            </div>
          </div>

          <form
            data-reveal
            className="glass rounded-3xl p-6 sm:p-8 shadow-card-soft space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                toast.success("Message sent! I'll get back to you soon.");
                (e.target as HTMLFormElement).reset();
              }, 700);
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" required className="mt-2 h-11 rounded-xl bg-background/60" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required className="mt-2 h-11 rounded-xl bg-background/60" placeholder="you@email.com" />
              </div>
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" className="mt-2 h-11 rounded-xl bg-background/60" placeholder="What's this about?" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" required rows={5} className="mt-2 rounded-xl bg-background/60" placeholder="Tell me a bit more..." />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full gradient-brand text-primary-foreground border-0 rounded-xl shadow-glow hover:opacity-90"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
