import Image from "next/image";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const inner = (
    <>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[var(--card)]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-medium tracking-tight text-[var(--foreground)]">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--muted)]">{project.blurb}</p>
        {project.href ? (
          <span className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Visit
          </span>
        ) : (
          <span className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            Preview
          </span>
        )}
      </div>
    </>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-xl outline-none ring-offset-2 ring-offset-[var(--background)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="group block rounded-xl outline-none ring-offset-2 ring-offset-[var(--background)]">
      {inner}
    </div>
  );
}
