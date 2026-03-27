import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { buildAboutPageJsonLd, siteDescription } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: siteDescription,
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={buildAboutPageJsonLd()} />
      <main id="main-content" className="min-h-dvh bg-white px-6 py-16 text-zinc-950 md:px-10">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="font-display text-4xl tracking-tight md:text-5xl">About Grant Foster</h1>
          <p className="text-base leading-relaxed text-zinc-800 md:text-lg">{siteDescription}</p>
          <ul className="list-disc space-y-2 pl-6 text-zinc-800">
            <li>Name: Grant Foster</li>
            <li>Role: AI Staff Engineer</li>
            <li>Primary domain: grantfoster.dev</li>
            <li>Company: BimRoss (https://bimross.com)</li>
          </ul>
        </div>
      </main>
    </>
  );
}
