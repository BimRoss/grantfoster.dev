import type { Metadata } from "next";

const projects = [
  {
    name: "Subnet Signal",
    url: "https://subnetsignal.com",
    description: "Bittensor tools and signals for operators and builders.",
  },
  {
    name: "GoTrader",
    url: "https://gotrader.gopher-ai.com",
    description: "AI-assisted trading system and related experimentation.",
  },
  {
    name: "Invoice Pilot",
    url: "https://getinvoicepilot.com",
    description: "Automation for invoicing and operational admin workflows.",
  },
  {
    name: "Cycler",
    url: "https://cycler.io",
    description: "Product experiments and iterative automation tooling.",
  },
  {
    name: "BimRoss",
    url: "https://bimross.com",
    description: "Primary company site and infrastructure operator profile.",
  },
];

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Project directory for Grant Foster, including Subnet Signal, GoTrader, Invoice Pilot, and Cycler.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="min-h-dvh bg-white px-6 py-16 text-zinc-950 md:px-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="font-display text-4xl tracking-tight md:text-5xl">Projects</h1>
        <p className="text-base leading-relaxed text-zinc-800 md:text-lg">
          Public projects and properties associated with my work.
        </p>
        <ul className="space-y-4">
          {projects.map((project) => (
            <li key={project.url} className="rounded border border-zinc-200 p-4">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-950 underline-offset-2 hover:underline"
              >
                {project.name}
              </a>
              <p className="mt-1 text-sm leading-relaxed text-zinc-700">{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
