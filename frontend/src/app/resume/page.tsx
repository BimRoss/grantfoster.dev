import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Resume — Grant Foster",
  description:
    "Staff Product Engineer with 12+ years shipping 0-to-1 products at startups. TypeScript, React, Go, Kubernetes.",
  alternates: { canonical: "/resume" },
};

const competencies = [
  "0-to-1 product development",
  "Full-stack ownership (product → infrastructure)",
  "Real-time & latency-sensitive systems",
  "Physical-world data pipelines",
  "Agent orchestration & MCP",
  "Distributed systems at scale",
  "Consumer-facing product design",
  "Platform reliability & cloud operations",
];

const experience = [
  {
    company: "BimRoss",
    title: "Founding Full Stack Engineer",
    location: "Los Angeles, CA",
    period: "February 2026 – Present",
    bullets: [
      "Shipped a Slack-native product for MakeACompany.ai so operators can spin up AI-native teams where they already work: clear onboarding, durable conversation context, and backend orchestration that surfaces as everyday chat rather than a separate AI console.",
      "Deployed Model Context Protocol (MCP) servers and a distributed agent orchestration layer — structured tool routing, concurrent worker dispatch, and traceable runs — so multi-agent deployments stay debuggable under real load.",
      "Built Subnet Signal — a Next.js app using D3 to beautifully visualize metadata across Bittensor subnets. Architected a custom Twitter scraper to feed real-world activity into a sentiment pipeline that drove live trading decisions.",
      "Owned the full release loop: container builds, tag-driven CI/CD, GitOps-style manifest promotion, and rollout health monitoring.",
    ],
  },
  {
    company: "Gopher",
    title: "Staff Engineer",
    location: "San Francisco, CA",
    period: "January 2024 – January 2026",
    bullets: [
      "Architected GoTrader, an AI-powered trading product where agents compete in live markets. Sustained 1,000+ concurrent sessions with sub-100ms updates, leveraging a WebSocket buffer to stack incoming events to prevent DOM thrashing.",
      "Built the execution fabric behind agentic workloads: worker pools, concurrent pub/sub dispatches, and operational visibility so latency-sensitive runs stayed ordered and diagnosable.",
      "Shipped a self-serve data dashboard where customers could explore and export AI-ready datasets, live, in seconds. Leveraging a decentralized mining network, I aggregated web, Twitter, Reddit, LinkedIn, and TikTok data to power real-world insights.",
      "Kept the always-on stack releasable and observable on Kubernetes with Azure hosted nodes: CI/CD, pod health, and test discipline so async teams could ship around the clock.",
    ],
  },
  {
    company: "Autograph",
    title: "Senior Full Stack Developer",
    location: "Los Angeles, CA",
    period: "October 2021 – January 2024",
    bullets: [
      "Built the checkout infrastructure behind major NFT drops with Tom Brady, Tiger Woods, and other top-tier athletes — handled $100K–$500K in purchase volume within minutes of launch without downtime.",
      "Designed server-side queueing for thousands of simultaneous checkouts so ordering stayed fair under spike load; owned the APIs and data paths end to end.",
      "Integrated Algolia with Next.js for marketplace search — typically under 50ms across millions of indexed items.",
      "Delivered FastAPI services for PGA Tour live gameplay: real-time scoring, leaderboards, and GraphQL-shaped APIs for web and mobile clients.",
    ],
  },
  {
    company: "Bloquity",
    title: "Lead Full Stack Developer (Contract)",
    location: "New York, NY",
    period: "January 2021 – October 2021",
    bullets: [
      "First technical hire — designed the data model, picked the stack, and shipped a tokenized real estate platform from zero.",
      "Built interactive property visualizations with Three.js and D3.js; full-stack deployment with Nuxt.js and Hardhat.",
    ],
  },
  {
    company: "Voyansi",
    title: "Chief Technology Officer",
    location: "Remote",
    period: "February 2020 – January 2021",
    bullets: [
      "Led a team of 5 senior and 2 junior engineers across international time zones; shaped technical strategy and kept teams aligned on delivery priorities.",
      "Mentored engineers on testing, production readiness, and shipping discipline; delivered bespoke products that generated hundreds of thousands in client revenue.",
      "Built point cloud processing and data tooling for construction automation; negotiated contracts with international clients.",
    ],
  },
  {
    company: "WeWork",
    title: "Data Visualization Engineer",
    location: "New York, NY",
    period: "November 2018 – February 2020",
    bullets: [
      "Automated the pipeline from raw point cloud scans through existing-conditions modeling to finished office layouts — processing roughly 200,000 square feet of real-world space per week using Python tooling I designed and built.",
      "Developed Dot Deployer, an internal release tool built on Electron and the GitHub API that managed software rollouts across 10,000+ employees.",
      "Built Vue.js applications and D3.js visualizations that brokers and real estate teams used to make acquisition decisions on physical assets.",
      "Delivered a multi-week Data Culture curriculum in Singapore, training 100+ employees on SQL and data-informed decision making.",
    ],
  },
  {
    company: "SHoP Architects",
    title: "Designer",
    location: "New York, NY",
    period: "December 2013 – November 2018",
    bullets: [
      "Wrote Python plugins to automate drawing production and construction administration workflows across large-scale architectural projects.",
    ],
  },
];

const skills = [
  { area: "Languages & UI", detail: "TypeScript, JavaScript, Go, Python, SQL · React, Next.js, Vue/Nuxt · HTML/CSS, SSR" },
  { area: "Backend & APIs", detail: "REST, GraphQL, Node, FastAPI, Go · WebSockets, NATS · MCP & agent orchestration" },
  { area: "Data", detail: "PostgreSQL, Redis, MongoDB · pipelines, modeling, migrations" },
  { area: "Cloud / Infra", detail: "Kubernetes, Docker · Azure, AWS, GCP · CI/CD, GitHub Actions, GitOps" },
  { area: "Testing & Ops", detail: "Ginkgo, Gomega, pytest · observability, SLOs, logging · incidents, on-call" },
  { area: "Agentic Frameworks", detail: "Claude Code, Cursor, Temporal, LangChain" },
];

export default function ResumePage() {
  return (
    <main className="min-h-dvh bg-white px-4 pt-20 pb-12 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100 sm:px-6 md:px-10 md:pt-20 md:pb-16 print:px-0 print:py-0">
      <div className="mx-auto max-w-3xl print:max-w-none">

        {/* Nav row — hidden on print */}

        {/* Header */}
        <header className="border-b border-black/10 pb-8 dark:border-white/10 print:pb-3">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white md:text-5xl print:text-3xl">
            Grant Foster
          </h1>
          <p className="mt-2 font-mono text-sm text-zinc-500 dark:text-zinc-400 print:mt-1 print:text-xs">
            Staff Product Engineer — TypeScript · Python · Go · React · Docker · Kubernetes
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-zinc-600 print:mt-2 print:gap-x-4">
            <a href="https://linkedin.com/in/grantdfoster" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-950">linkedin.com/in/grantdfoster</a>
            <a href="https://github.com/geeeeemoney" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-950">github.com/geeeeemoney</a>
            <a href="mailto:grantdfoster@gmail.com" className="transition-colors hover:text-zinc-950">grantdfoster@gmail.com</a>
            <a href="tel:+13144025801" className="transition-colors hover:text-zinc-950">(314) 402-5801</a>
          </div>
        </header>

        {/* Summary */}
        <section className="mt-8 print:mt-4">
          <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-lg print:text-sm print:leading-snug">
            Staff-level engineer building products people actually use — from the screen they touch to the services that keep it running. I have over a decade of experience shipping 0-to-1 across startups and enterprises, and owning the stack from product design to observable infrastructure. I&apos;ve spent years integrating software with the real world: generating building geometry, integrating live sensor feeds, and operating in markets that punish latency. My recent work focuses on applied AI and deploying reliable, agentic systems at scale. I close the gap between what engineers build and the customers who use it with real world validation.
          </p>
        </section>

        {/* Core Competencies */}
        <section className="mt-8 print:mt-4">
          <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Core Competencies
          </h2>
          <div className="mt-3 flex flex-wrap gap-2 print:mt-2 print:gap-1">
            {competencies.map((c) => (
              <span key={c} className="border border-black/15 px-3 py-1 text-sm text-zinc-600 dark:border-white/15 dark:text-zinc-400 print:px-2 print:py-0.5 print:text-xs">
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-10 print:mt-5">
          <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Experience
          </h2>
          <div className="mt-6 space-y-10 print:mt-3 print:space-y-5">
            {experience.map((job) => (
              <div key={job.company}>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <div className="min-w-0">
                    <span className="font-display text-lg font-semibold text-zinc-950 dark:text-white print:text-base">{job.company}</span>
                    <span className="ml-2 text-base text-zinc-600 dark:text-zinc-400 print:text-sm">— {job.title}</span>
                  </div>
                  <span className="font-mono text-xs text-zinc-400 sm:shrink-0 sm:text-right">{job.location} · {job.period}</span>
                </div>
                <ul className="mt-3 space-y-2 pl-4 print:mt-1.5 print:space-y-1">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="relative text-[15px] leading-relaxed text-zinc-700 before:absolute before:-left-4 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-zinc-400 before:content-[''] dark:text-zinc-300 dark:before:bg-zinc-600 print:before:bg-zinc-500 print:text-xs print:leading-snug">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-10 border-t border-black/10 pt-8 dark:border-white/10 print:mt-5 print:pt-4">
          <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Technical Skills
          </h2>
          <dl className="mt-4 space-y-2 print:mt-2 print:space-y-1">
            {skills.map((s) => (
              <div key={s.area} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-2">
                <dt className="sm:w-44 sm:shrink-0 font-mono text-xs font-semibold text-zinc-500 dark:text-zinc-400">{s.area}</dt>
                <dd className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 print:text-xs print:leading-snug">{s.detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Education */}
        <section className="mt-10 border-t border-black/10 pt-8 dark:border-white/10 print:mt-5 print:pt-4">
          <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Education
          </h2>
          <div className="mt-4 print:mt-2">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <span className="font-display text-base font-semibold text-zinc-950 dark:text-zinc-100 print:text-sm">Bachelor of Architecture</span>
                <span className="ml-2 text-sm text-zinc-600 dark:text-zinc-400">— Syracuse University</span>
              </div>
              <span className="font-mono text-xs text-zinc-400">Syracuse, NY · 2013</span>
            </div>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 print:text-xs">5-year professional degree · graduated in the top percentile of the School of Architecture</p>
          </div>
        </section>

        <p className="mt-10 border-t border-black/10 pb-16 pt-6 font-mono text-xs text-zinc-400 dark:border-white/10 print:pb-0">
          References available upon request.
        </p>
      </div>
    </main>
  );
}
