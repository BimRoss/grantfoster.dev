import { ProjectCard } from "@/components/ProjectCard";
import { ProjectsFallback } from "@/components/ProjectsFallback";
import { SocialLinks } from "@/components/SocialLinks";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="relative z-0 flex h-dvh max-h-dvh flex-col overflow-hidden">
      <h1 className="sr-only">Grant Foster</h1>

      <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col overflow-hidden">
        <section
          aria-label="Projects"
          className="flex min-h-0 flex-1 flex-col overflow-hidden"
        >
          {/* When JS is off, the browser applies this block and hides the grid. When JS is on, noscript is not rendered — no duplicate layout, no hydration fight. */}
          <noscript>
            <style
              dangerouslySetInnerHTML={{
                __html: `.projects-enhanced{display:none!important}`,
              }}
            />
            <ProjectsFallback />
          </noscript>

          <div className="projects-enhanced flex h-full min-h-0 flex-1 flex-col overflow-hidden">
            <ul className="grid h-full min-h-0 w-full grid-cols-2 grid-rows-[repeat(5,minmax(0,1fr))] gap-2 bg-[var(--background)] p-2 lg:grid-cols-5 lg:grid-rows-[repeat(2,minmax(0,1fr))] lg:gap-3 lg:p-3">
              {projects.map((project) => (
                <li
                  key={project.id}
                  className="flex h-full min-h-0 flex-col overflow-hidden"
                >
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <footer className="shrink-0 border-t border-[var(--border)] bg-[var(--background)] px-0 py-0 md:px-8 md:py-6 lg:px-12">
        <h2 id="social-heading" className="sr-only">
          Social & contact
        </h2>
        <SocialLinks />
      </footer>
    </div>
  );
}
