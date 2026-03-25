import Image from "next/image";
import { projects } from "@/data/projects";

/**
 * Static list for no-JS / crawlers: full copy and images in the document without
 * relying on hover, opacity, or client state.
 */
export function ProjectsFallback() {
  return (
    <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden bg-[var(--background)] [scrollbar-gutter:stable]">
      <h2 className="sr-only">Projects</h2>
      <ul className="mx-auto max-w-3xl list-none space-y-12 px-5 py-8 md:px-8 md:py-10 lg:px-12">
        {projects.map((project) => (
          <li key={project.id}>
            <article className="border-b border-[var(--border)] pb-12 last:border-b-0 last:pb-0">
              <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
                {project.title}
              </h3>
              <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 42rem"
                />
              </div>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                {project.blurb}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
