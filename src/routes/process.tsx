import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — How I Build · Icha Victory" },
      {
        name: "description",
        content:
          "A calm, predictable path from idea to launch — Discovery, Planning, Design & Development, Testing, Launch & Growth.",
      },
      { property: "og:title", content: "Process — How I Build" },
      {
        property: "og:description",
        content: "The five-step rhythm I use to ship software products founders trust.",
      },
    ],
  }),
  component: ProcessPage,
});

const steps = [
  {
    n: "01",
    t: "Discovery",
    d: "We pressure-test the idea, scope the wedge and agree on what success looks like before a single line of code is written.",
    bullets: [
      "Stakeholder interviews and user research review",
      "Competitive landscape and constraints mapping",
      "Wedge definition and explicit non-goals",
      "Success metrics tied to business outcomes",
    ],
    deliverables: ["Discovery brief", "Risks & assumptions log", "Recommended scope"],
  },
  {
    n: "02",
    t: "Planning",
    d: "We turn the brief into a buildable plan — architecture, milestones, risks. Tight specs that survive contact with reality.",
    bullets: [
      "System architecture and data model",
      "Milestone-based delivery roadmap",
      "Tooling, integrations and infra decisions",
      "Estimated cost, timeline and team shape",
    ],
    deliverables: ["Technical plan", "Milestone schedule", "Cost & timeline proposal"],
  },
  {
    n: "03",
    t: "Design & Development",
    d: "Cross-functional sprints. Design and engineering shipping in lockstep — weekly demos, no surprise weeks.",
    bullets: [
      "Component-driven UI and design system",
      "Production-grade backend and APIs",
      "Weekly demo + written progress notes",
      "Continuous deployment from day one",
    ],
    deliverables: ["Working software", "Design system", "Staging environment"],
  },
  {
    n: "04",
    t: "Testing",
    d: "Manual + automated. Performance, accessibility and edge cases hardened before anyone outside the team sees it.",
    bullets: [
      "Unit, integration and end-to-end tests",
      "Performance & Core Web Vitals tuning",
      "Accessibility audit (WCAG AA target)",
      "Security review and load testing",
    ],
    deliverables: ["Test reports", "Performance budget", "Launch readiness checklist"],
  },
  {
    n: "05",
    t: "Launch & Growth",
    d: "Calm launches, analytics in place, and the second-week iteration loop that actually moves the metric.",
    bullets: [
      "Phased rollout and feature flagging",
      "Analytics, error tracking and alerting",
      "Onboarding flows and lifecycle messaging",
      "Two-week retro and growth recommendations",
    ],
    deliverables: ["Live product", "Analytics dashboard", "Growth roadmap"],
  },
];

const principles = [
  { t: "Tight scope, fast loops", d: "Short cycles, real demos. We adjust on evidence, not opinions." },
  { t: "Boring tech where it counts", d: "I pick proven tools for the load-bearing parts. Novelty earns its place." },
  { t: "Written, not whispered", d: "Decisions live in docs. You can hand this work to the next engineer." },
  { t: "Production-first mindset", d: "Day one is day one in prod. Errors, logging and metrics from the start." },
];

function ProcessPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      <section className="mx-auto max-w-6xl px-4 pt-40 pb-16 md:pt-48">
        <Reveal>
          <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground/50" />
            How I work
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="text-display text-gradient text-[clamp(2.5rem,7vw,6.5rem)]">
            A calm, predictable<br />
            <em className="italic font-normal text-muted-foreground">path to launch.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The same five-step rhythm whether we're shipping a landing page or a full
            platform. Tight scope, written decisions, weekly demos. No mystery weeks.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 md:pb-32">
        <div className="relative flex flex-col gap-12">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 0.05}>
              <article className="grid gap-8 rounded-3xl surface-card p-8 md:grid-cols-12 md:gap-10 md:p-12">
                <div className="md:col-span-4">
                  <div className="grid h-14 w-14 place-items-center rounded-full glass font-mono text-sm">
                    {s.n}
                  </div>
                  <h2 className="mt-6 text-display text-gradient text-3xl md:text-4xl">{s.t}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
                <div className="md:col-span-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">What happens</div>
                  <ul className="mt-4 space-y-3 text-sm text-foreground">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-foreground/60" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-3">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Deliverables</div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {s.deliverables.map((d) => (
                      <li key={d} className="rounded-full hairline px-3 py-1.5 text-xs">{d}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 md:pb-32">
        <Reveal>
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span className="h-px w-8 bg-muted-foreground/50" />
                Principles
              </div>
              <h2 className="text-display text-gradient text-[clamp(2rem,4.5vw,3.5rem)]">
                The way I think about the work.
              </h2>
            </div>
          </div>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-3xl hairline bg-hairline md:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.t} delay={(i % 2) * 0.06}>
              <div className="h-full bg-background p-8 md:p-10">
                <h3 className="text-lg font-medium tracking-tight">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-32">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl surface-card p-10 md:flex-row md:items-center md:p-14">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Ready when you are</div>
            <h3 className="mt-3 text-display text-gradient text-3xl md:text-5xl">
              Let's scope something real.
            </h3>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            Book a discovery call <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
