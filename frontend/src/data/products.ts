export type ProductCta =
  | { kind: "link"; label: string; href: string }
  | { kind: "toast"; label: string; message: string };

/** Stacked hero CTAs — same chip pattern as bimross-website */
export const productCTAs: ProductCta[] = [
  { kind: "link", label: "GitHub", href: "https://github.com/geeeeemoney" },
  { kind: "link", label: "Subnet Signal", href: "https://subnetsignal.com" },
  { kind: "link", label: "X Agent", href: "https://x.com/subnet_signal" },
  { kind: "toast", label: "Thread Pilot", message: "coming soon" },
  { kind: "toast", label: "Joanne", message: "coming soon" },
  { kind: "link", label: "my company", href: "https://bimross.com" },
];
