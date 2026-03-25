"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 768px)").matches
    ) {
      return;
    }
    setOpen((v) => !v);
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
      toggle();
    },
    [toggle],
  );

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={open}
      aria-label={`${project.title}. Tap to show or hide details.`}
      onClick={toggle}
      onKeyDown={onKeyDown}
      className="group relative h-full min-h-0 w-full cursor-pointer overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--accent)]"
    >
      <div className="relative h-full min-h-[8rem] w-full md:min-h-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-opacity duration-300 ease-out ${
            open ? "opacity-50" : "opacity-100"
          } md:opacity-100 md:group-hover:opacity-50`}
          sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 20vw"
        />

        {/* Dark overlay: mobile when open, desktop on hover */}
        <div
          className={`absolute inset-0 bg-black/55 transition-opacity duration-300 ease-out ${
            open ? "opacity-100" : "opacity-0"
          } md:opacity-0 md:group-hover:opacity-100`}
          aria-hidden
        />

        {/* White text */}
        <div
          className={`absolute inset-0 flex flex-col justify-end p-3 text-white transition-opacity duration-300 ease-out sm:p-4 md:p-5 ${
            open ? "opacity-100" : "opacity-0"
          } md:opacity-0 md:group-hover:opacity-100`}
        >
          <h3 className="text-base font-semibold leading-tight tracking-tight drop-shadow-md sm:text-lg md:text-xl">
            {project.title}
          </h3>
          <p className="mt-1 max-h-[45vh] overflow-y-auto text-sm leading-snug text-white/95 drop-shadow-md sm:max-h-[40vh] sm:text-[0.9375rem] md:leading-relaxed">
            {project.blurb}
          </p>
        </div>
      </div>
    </div>
  );
}
