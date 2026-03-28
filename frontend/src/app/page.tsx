import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { StickySocialBar } from "@/components/StickySocialBar";

export default function Home() {
  return (
    <>
      <main id="main-content" className="flex min-h-0 flex-1 flex-col bg-white">
        <Hero />
        <section className="border-t border-black/10 px-6 py-12 md:px-10 md:py-16" aria-labelledby="start-here">
          <div className="mx-auto max-w-6xl">
            <h2 id="start-here" className="font-display text-2xl tracking-tight text-zinc-950 md:text-3xl">
              Start here
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-700 md:text-lg">
              Three places to see the proof: build logs, breakdowns, and the flagship product.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <a
                href="https://x.com/geeeeeeemoney"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-black/10 p-4 transition hover:border-black/25"
              >
                <p className="font-semibold text-zinc-950">Daily build posts on X</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-700">
                  Short execution logs, lessons, and what actually shipped.
                </p>
              </a>
              <a
                href="https://www.youtube.com/@geeeeemoney"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-black/10 p-4 transition hover:border-black/25"
              >
                <p className="font-semibold text-zinc-950">Long-form breakdowns</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-700">
                  Walkthroughs on AI systems, infrastructure, and operator leverage.
                </p>
              </a>
              <a
                href="https://subnetsignal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-black/10 p-4 transition hover:border-black/25"
              >
                <p className="font-semibold text-zinc-950">Flagship product: Subnet Signal</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-700">
                  Bittensor tooling for operators who want signal, not noise.
                </p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative z-20 flex shrink-0 flex-col" role="contentinfo">
        <StickySocialBar />
        <SiteFooter />
      </footer>
    </>
  );
}
