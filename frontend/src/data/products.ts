export type ProductCta =
  | { kind: "link"; label: string; href: string }
  | { kind: "toast"; label: string; message: string };

/** Stacked hero CTAs — same chip pattern as bimross-website */
export const productCTAs: ProductCta[] = [
  { kind: "link", label: "Follow on X", href: "https://x.com/geeeeeeemoney" },
  {
    kind: "link",
    label: "Join Build Log",
    href: "mailto:grantdfoster@gmail.com?subject=Join%20Grant%20Build%20Log",
  },
  { kind: "link", label: "See Best Work", href: "https://subnetsignal.com" },
  { kind: "link", label: "Watch on YouTube", href: "https://www.youtube.com/@geeeeemoney" },
  { kind: "link", label: "Run with BimRoss", href: "https://bimross.com" },
  { kind: "link", label: "Explore Cycler", href: "https://cycler.io" },
];
