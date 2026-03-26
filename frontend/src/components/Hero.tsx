"use client";

import Image from "next/image";
import { useRef } from "react";

import NetworkBackdrop, {
  type NetworkBackdropHandle,
} from "@/components/NetworkBackdrop";
import { productCTAs } from "@/data/products";

import { useSiteToast } from "./ToastProvider";

const ctaClassName =
  "hero-cta inline-flex min-h-[52px] min-w-[12rem] items-center justify-center border border-zinc-200/90 bg-white/78 px-10 py-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-zinc-900 shadow-[0_1px_0_rgba(255,255,255,0.65),0_8px_24px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-md transition hover:border-zinc-300 hover:bg-white/88 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900/40 md:bg-white md:shadow-[0_1px_0_rgba(255,255,255,0.9),0_8px_24px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,1)] md:backdrop-blur-none md:hover:bg-zinc-50 md:min-w-[14rem] md:px-12 md:py-5";

export function Hero() {
  const { showToast } = useSiteToast();
  const networkRef = useRef<NetworkBackdropHandle>(null);

  return (
    <>
      <section
        className="relative flex min-h-0 flex-1 flex-col justify-start bg-white px-5 pt-6 pb-4 md:justify-center md:px-10 md:py-8 md:pb-8"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 z-0">
          <NetworkBackdrop ref={networkRef} />
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_85%_55%_at_50%_35%,rgba(0,0,0,0.045),transparent_60%)]"
          aria-hidden
        />

        <div className="pointer-events-none relative z-10 mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col md:block md:flex-none">
          <div className="hero-reveal flex min-h-0 flex-1 flex-col gap-6 md:h-auto md:flex-none md:flex-row md:items-center md:justify-between md:gap-12 md:gap-y-8 lg:gap-16">
            <div
              className="pointer-events-auto min-w-0 max-w-2xl shrink-0 text-left max-md:cursor-pointer max-md:active:opacity-[0.92] max-md:transition-opacity lg:max-w-3xl"
              onClick={(e) => {
                if (
                  typeof window !== "undefined" &&
                  window.matchMedia("(min-width: 768px)").matches
                ) {
                  return;
                }
                networkRef.current?.triggerBurstAtClient(
                  e.clientX,
                  e.clientY,
                );
              }}
            >
              <p className="border-l-2 border-black/40 pl-4 font-mono text-[10px] font-medium leading-relaxed tracking-[0.2em] text-zinc-800 sm:text-xs sm:tracking-[0.18em]">
                serial creator, good enough DJ
              </p>
              <h1
                id="hero-heading"
                className="font-display mt-5 flex flex-row flex-wrap items-end gap-x-2 gap-y-1 sm:mt-7 sm:flex-nowrap sm:gap-x-3 md:gap-x-4"
              >
                <span className="sr-only">Grant Foster</span>
                <Image
                  src="/logo.png"
                  alt=""
                  width={522}
                  height={582}
                  priority
                  aria-hidden
                  className="h-20 w-auto shrink-0 brightness-0 sm:h-24 md:h-28 lg:h-32"
                />
                <span
                  className="text-5xl font-semibold leading-[0.95] tracking-tight text-black md:text-7xl lg:text-8xl"
                  aria-hidden
                >
                  rantFoster
                </span>
              </h1>
              <p className="mt-6 font-sans text-base leading-relaxed text-zinc-900 md:mt-8 md:text-lg md:leading-relaxed lg:text-xl">
                Bittensor miner & operator, I develop AI trading systems and self-improving UI.{" "}
                <br className="hidden md:block" aria-hidden />
                Agentic backends, distributed infrastructure, and the experiments in between.
              </p>
            </div>

            <div className="products-scroll pointer-events-auto flex min-h-0 w-full flex-1 flex-col gap-4 overflow-y-auto overscroll-y-contain pb-1 sm:max-w-md md:h-auto md:w-auto md:flex-none md:shrink-0 md:items-end md:overflow-visible md:gap-5 md:pb-0">
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
