import Image from "next/image";
import Link from "next/link";

import { RefreshableParagraph } from "@/components/resume/RefreshableParagraph";
import { HERO_SUMMARY } from "@/data/site";

export function Hero() {
  return (
    <section
      className="relative w-full shrink-0 overflow-x-hidden bg-white px-5 pt-16 pb-6 dark:bg-zinc-950 md:px-10 md:pt-16 md:pb-8"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="hero-reveal flex flex-col gap-5">
          <div className="min-w-0 max-w-2xl text-left md:flex md:shrink-0 md:flex-col md:justify-center lg:max-w-3xl">
            <p className="border-l-2 border-black/40 pl-4 font-mono text-[10px] font-medium leading-relaxed tracking-[0.2em] text-zinc-800 dark:border-white/30 dark:text-zinc-400 sm:text-xs sm:tracking-[0.18em]">
              staff product engineer — applied AI · agentic infrastructure
            </p>
            <h1
              id="hero-heading"
              className="font-display mt-3 flex flex-row flex-wrap items-end gap-x-0 gap-y-1 sm:mt-7 sm:flex-nowrap"
            >
              <span className="sr-only">Grant Foster</span>
              <Image
                src="/logo.png"
                alt="Grant Foster wordmark"
                width={522}
                height={582}
                priority
                className="h-20 w-auto shrink-0 brightness-0 dark:invert sm:h-24 md:h-28 lg:h-32"
              />
              <span
                className="-ml-1 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-black dark:text-white sm:-ml-1.5 md:-ml-1 lg:-ml-1 md:text-7xl lg:text-8xl"
                aria-hidden
              >
                rantFoster
              </span>
            </h1>
            <div className="mt-4 md:mt-0">
              <RefreshableParagraph
                original={HERO_SUMMARY}
                section="hero summary"
                className="font-sans text-[15px] leading-6 text-zinc-900 dark:text-zinc-300 md:text-lg md:leading-relaxed lg:text-xl"
              />
            </div>
            <div className="mt-6 md:mt-8">
              <Link
                href="/resume"
                className="flex w-full items-center justify-center gap-2 border border-black/80 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-zinc-900 transition-colors hover:bg-black hover:text-white dark:border-white/70 dark:text-zinc-100 dark:hover:bg-white dark:hover:text-black sm:inline-flex sm:w-auto sm:justify-start"
              >
                View Resume
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
