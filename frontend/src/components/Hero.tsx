"use client";

import Image from "next/image";

import NetworkBackdrop from "@/components/NetworkBackdrop";
import { productCTAs } from "@/data/products";

import { useSiteToast } from "./ToastProvider";

const ctaClassName =
  "hero-cta inline-flex min-h-[52px] min-w-[12rem] items-center justify-center border border-white/25 bg-gradient-to-br from-white/[0.08] to-transparent px-10 py-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-zinc-50 shadow-[0_0_0_1px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-white/45 hover:from-white/[0.14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 md:min-w-[14rem] md:px-12 md:py-5";

export function Hero() {
  const { showToast } = useSiteToast();

  return (
    <>
      <section
        className="relative flex min-h-0 flex-1 flex-col justify-center px-5 py-6 md:px-10 md:py-8"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 z-0">
          <NetworkBackdrop />
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_85%_55%_at_50%_35%,rgba(255,255,255,0.04),transparent_60%)]"
          aria-hidden
        />

        <div className="pointer-events-none relative z-10 mx-auto w-full max-w-6xl">
          <div className="hero-reveal flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12 lg:gap-16">
            <div className="pointer-events-auto min-w-0 max-w-2xl text-left lg:max-w-3xl">
              <p className="border-l-2 border-white/35 pl-4 font-mono text-[10px] font-medium leading-relaxed tracking-[0.2em] text-zinc-300 sm:text-xs sm:tracking-[0.18em]">
                serial creator, good enough DJ
              </p>
              <h1
                id="hero-heading"
                aria-label="Grant Foster"
                className="font-display mt-5 flex flex-row flex-wrap items-end gap-x-2 gap-y-1 sm:mt-7 sm:flex-nowrap sm:gap-x-3 md:gap-x-4"
              >
                <Image
                  src="/logo.png"
                  alt=""
                  width={522}
                  height={582}
                  priority
                  aria-hidden
                  className="h-20 w-auto shrink-0 sm:h-24 md:h-28 lg:h-32"
                />
                <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-5xl font-semibold leading-[0.95] tracking-tight text-transparent md:text-7xl lg:text-8xl">
                  rantFoster
                </span>
              </h1>
              <p className="mt-5 font-sans text-base leading-relaxed text-zinc-400 md:mt-7 md:text-lg md:leading-relaxed lg:text-xl">
                Bittensor infrastructure, trading systems, and self-improving UI—from agentic backends
                to the experiments in between.
              </p>
            </div>

            <div className="pointer-events-auto flex w-full shrink-0 flex-col gap-4 sm:max-w-md md:w-auto md:items-end md:gap-5">
              {productCTAs.map((cta) => {
                if (cta.kind === "toast") {
                  return (
                    <button
                      key={cta.label}
                      type="button"
                      onClick={() => showToast(cta.message)}
                      className={ctaClassName}
                    >
                      {cta.label}
                    </button>
                  );
                }
                return (
                  <a
                    key={cta.href}
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ctaClassName}
                  >
                    {cta.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
