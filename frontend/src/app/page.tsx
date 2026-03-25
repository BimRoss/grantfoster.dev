import { ProjectCard } from "@/components/ProjectCard";
import { SocialLinks } from "@/components/SocialLinks";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="page-grain relative z-0 min-h-dvh">
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-6xl flex-col px-5 pb-16 pt-14 md:px-10 md:pb-20 md:pt-20">
        <header className="mb-12 md:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-[var(--muted)]">
            grantfoster.dev
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-medium tracking-tight text-[var(--foreground)] md:text-5xl">
            Grant Foster
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            Building on Bittensor, trading infra, and side projects — reach me anywhere below.
          </p>
        </header>

        <section aria-labelledby="social-heading" className="mb-14 md:mb-20">
          <h2 id="social-heading" className="sr-only">
            Social & contact
          </h2>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)]/80 p-5 backdrop-blur-sm md:p-6">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
              Connect
            </p>
            <SocialLinks />
          </div>
        </section>

        <section aria-labelledby="work-heading" className="flex min-h-0 flex-1 flex-col">
          <h2
            id="work-heading"
            className="mb-6 font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--foreground)] md:mb-8 md:text-3xl"
          >
            Work & projects
          </h2>
          <div className="min-h-0 flex-1 overflow-y-auto pr-1 md:max-h-[calc(100dvh-24rem)] md:pr-2">
            <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-3">
              {projects.map((project) => (
                <li key={project.id}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
