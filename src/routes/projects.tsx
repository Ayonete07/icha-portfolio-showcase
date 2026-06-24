import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import pLogistics from "@/assets/project-logistics.jpg";
import pHealth from "@/assets/project-health.jpg";
import pEscrow from "@/assets/project-escrow.jpg";
import pAi from "@/assets/project-ai.jpg";
import pSaas from "@/assets/project-saas.jpg";
import pFintech from "@/assets/project-fintech.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Icha Victory · Selected Work" },
      {
        name: "description",
        content:
          "A complete archive of products Icha Victory has shipped — logistics, healthtech, marketplaces, AI, SaaS and fintech.",
      },
      { property: "og:title", content: "Projects — Icha Victory" },
      {
        property: "og:description",
        content: "Selected work across logistics, healthtech, AI, SaaS, fintech and marketplaces.",
      },
    ],
  }),
  component: ProjectsPage,
});

const all = [
  { tag: "Logistics", year: "2025", role: "Lead engineer", title: "Continental dispatch & tracking platform", desc: "Real-time fleet visibility, route optimization and self-serve customer tracking — now moving 40k+ shipments monthly across three regions.", stack: ["React", "Node", "Postgres", "Mapbox"], img: pLogistics },
  { tag: "HealthTech", year: "2024", role: "Full stack", title: "Patient-first care companion", desc: "Telehealth, appointment booking and medication adherence reminders for a multi-clinic network in West Africa.", stack: ["React Native", "Supabase", "Twilio"], img: pHealth },
  { tag: "Marketplace", year: "2024", role: "Founding engineer", title: "Escrow-backed creator marketplace", desc: "Buyer-seller protection with milestone payouts, dispute resolution and a fully audited transaction ledger.", stack: ["Next.js", "Stripe Connect", "Postgres"], img: pEscrow },
  { tag: "AI", year: "2025", role: "Solo build", title: "Multi-agent operations platform", desc: "Composable agents that triage support, draft content and automate internal ops — wired into Slack, HubSpot and Notion.", stack: ["OpenAI", "LangGraph", "TanStack"], img: pAi },
  { tag: "SaaS", year: "2023", role: "Lead engineer", title: "Revenue intelligence dashboard", desc: "Unified pipeline, retention and forecasting for B2B revenue teams. Replaced a tangle of spreadsheets for a 60-person org.", stack: ["React", "Node", "ClickHouse"], img: pSaas },
  { tag: "FinTech", year: "2024", role: "Full stack", title: "Multi-currency wallet & cards", desc: "KYC-compliant onboarding, virtual cards and instant cross-border transfers for African freelancers.", stack: ["React Native", "Node", "Mono", "Stripe"], img: pFintech },
  { tag: "Logistics", year: "2023", role: "Backend", title: "Last-mile driver ops suite", desc: "Driver app + dispatcher console with proof-of-delivery, signature capture and live ETA broadcasts.", stack: ["Flutter", "Node", "Redis"], img: pLogistics },
  { tag: "AI", year: "2025", role: "Solo build", title: "Sales copilot for SDR teams", desc: "RAG-powered research and outreach drafting that plugs into existing CRMs without ripping out the workflow.", stack: ["OpenAI", "Pinecone", "Next.js"], img: pAi },
  { tag: "SaaS", year: "2022", role: "Founding engineer", title: "Creator subscription platform", desc: "Membership tiers, gated content and recurring billing — launched in six weeks for a media startup.", stack: ["Next.js", "Stripe", "Postgres"], img: pSaas },
];

function ProjectsPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      <section className="mx-auto max-w-6xl px-4 pt-40 pb-16 md:pt-48">
        <Reveal>
          <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground/50" />
            Projects · 2022 — 2025
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="text-display text-gradient text-[clamp(2.5rem,7vw,6.5rem)]">
            Every product I've<br />
            <em className="italic font-normal text-muted-foreground">shipped that's worth showing.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A long-form archive across logistics, healthtech, marketplaces, AI, SaaS and fintech.
            Some shipped as founding engineer, some as a hired gun, all built to be used in production.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 md:pb-32">
        <div className="flex flex-col gap-10">
          {all.map((p, i) => (
            <Reveal key={p.title + i} delay={(i % 3) * 0.06}>
              <article className="group grid gap-6 overflow-hidden rounded-3xl surface-card md:grid-cols-12 md:gap-0">
                <div className="md:col-span-7 overflow-hidden">
                  <div className="aspect-[16/10] h-full w-full overflow-hidden">
                    <motion.img
                      src={p.img}
                      alt={p.title}
                      width={1280}
                      height={896}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-8 p-8 md:col-span-5 md:p-10">
                  <div>
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      <span>{p.tag} · {p.year}</span>
                      <span>{p.role}</span>
                    </div>
                    <h2 className="mt-5 text-2xl font-medium tracking-tight md:text-3xl">{p.title}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full hairline px-3 py-1 text-xs text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-32">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl surface-card p-10 md:flex-row md:items-center md:p-14">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Next</div>
            <h3 className="mt-3 text-display text-gradient text-3xl md:text-5xl">
              Have a product in mind?
            </h3>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            Start a project <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
