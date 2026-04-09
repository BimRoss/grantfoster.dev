import Image from "next/image";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

const cardBase =
  "group flex w-full flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-md outline-none transition duration-300 ease-out hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl";

const cardFocus =
  "focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";

export function ProjectCard({ project }: Props) {
  const inner = (
    <>
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-neutral-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 20vw"
        />
      </div>
      <div className="flex shrink-0 flex-col gap-1.5 px-5 pb-5 pt-6 text-left md:px-6 md:pb-6">
        <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--muted)]">{project.blurb}</p>
      </div>
    </>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cardBase} ${cardFocus}`}
      >
        {inner}
      </a>
    );
  }

  return <div className={cardBase}>{inner}</div>;
}
