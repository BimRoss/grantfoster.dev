export type ProductCta =
  | { kind: "link"; label: string; href: string }
  | { kind: "toast"; label: string; message: string };

/** Stacked hero CTAs — same chip pattern as bimross-website */
export const productCTAs: ProductCta[] = [
  { kind: "link", label: "Subnet Signal", href: "https://subnetsignal.com" },
  { kind: "toast", label: "Thread Pilot", message: "coming soon" },
  { kind: "toast", label: "Joanne", message: "coming soon" },
  { kind: "link", label: "my company", href: "https://bimross.com" },
];
