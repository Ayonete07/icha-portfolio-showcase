import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Let's build something remarkable · Icha Victory" },
      {
        name: "description",
        content:
          "Start a project with Icha Victory. WhatsApp, email, book a call or send a brief through the contact form.",
      },
      { property: "og:title", content: "Contact — Icha Victory" },
      {
        property: "og:description",
        content: "Let's build something remarkable. WhatsApp, email or book a 30-min intro call.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      <section className="relative mx-auto max-w-6xl px-4 pt-40 pb-16 md:pt-48">
        <div className="pointer-events-none absolute inset-x-4 top-20 -z-10 h-[400px] rounded-[3rem] bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.5_0_0/0.18),transparent_70%)]" />
        <Reveal>
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground/50" />
            Contact
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="text-display text-gradient text-[clamp(2.5rem,8vw,7rem)]">
            Let's build something<br />
            <em className="italic font-normal text-muted-foreground">remarkable.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tell me about what you're building. I respond personally to every message,
            usually within a few hours. Briefs, RFPs and rough ideas all welcome.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-3xl surface-card p-7 md:p-10"
            >
              <div className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name" id="name" placeholder="Ada Lovelace" />
                  <Field label="Email" id="email" type="email" placeholder="you@company.com" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Company" id="company" placeholder="Optional" />
                  <Field label="Budget (USD)" id="budget" placeholder="e.g. $10k – $40k" />
                </div>
                <div>
                  <label htmlFor="type" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Project type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Web App", "Mobile App", "AI / Agents", "Marketplace", "Fintech", "Website"].map((t) => (
                      <label key={t} className="cursor-pointer">
                        <input type="checkbox" className="peer sr-only" />
                        <span className="inline-flex items-center rounded-full hairline px-3 py-1.5 text-xs text-muted-foreground transition-colors peer-checked:bg-foreground peer-checked:text-background hover:text-foreground">
                          {t}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Project
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="What are you building? Where are you stuck? What does success look like?"
                    className="w-full resize-none rounded-2xl hairline bg-surface px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.01]"
                >
                  Send message <span>→</span>
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-3">
              <CtaCard
                label="WhatsApp"
                value="Chat with me"
                href="https://wa.me/2348000000000"
                hint="Fastest reply, usually within hours."
              />
              <CtaCard
                label="Email"
                value="hello@icha.ng"
                href="mailto:hello@icha.ng"
                hint="For briefs, RFPs and decks."
              />
              <CtaCard
                label="Book a call"
                value="30-min intro"
                href="#"
                hint="Pick a time that works for you."
              />
              <div className="mt-2 rounded-3xl surface-card p-7">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Working hours</div>
                <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Mon — Fri · 9am to 7pm WAT<br />
                  Async-friendly worldwide.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-32">
        <Reveal>
          <div className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground/50" />
            FAQ
          </div>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-3xl hairline bg-hairline md:grid-cols-2">
          {[
            { q: "How quickly can we start?", a: "Most engagements kick off within 1–2 weeks of the discovery call." },
            { q: "Do you take equity?", a: "Open to a hybrid of cash + equity for the right early-stage teams." },
            { q: "Do you work with non-technical founders?", a: "Often. I translate product vision into a buildable plan and own the engineering end-to-end." },
            { q: "What size of project is a good fit?", a: "From a tight 2-week sprint to multi-month platform builds — as long as the scope is real." },
          ].map((f, i) => (
            <Reveal key={f.q} delay={(i % 2) * 0.05}>
              <div className="h-full bg-background p-8">
                <div className="text-base font-medium">{f.q}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, id, type = "text", placeholder }: { label: string; id: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-full hairline bg-surface px-5 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}

function CtaCard({ label, value, hint, href }: { label: string; value: string; hint: string; href: string }) {
  return (
    <a
      href={href}
      className="group flex-1 rounded-3xl surface-card p-7 transition-colors hover:bg-surface"
    >
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
        <span className="transition-transform group-hover:translate-x-0.5">↗</span>
      </div>
      <div className="mt-6 text-2xl font-medium tracking-tight">{value}</div>
      <div className="mt-2 text-sm text-muted-foreground">{hint}</div>
    </a>
  );
}
