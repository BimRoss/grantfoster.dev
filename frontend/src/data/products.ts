export type ProductCta =
  | { kind: "link"; label: string; href: string }
  | { kind: "toast"; label: string; message: string };

/** Stacked hero CTAs — same chip pattern as bimross-website */
export const productCTAs: ProductCta[] = [
  { kind: "toast", label: "Joanne", message: "Coming Soon!" },
  { kind: "link", label: "Subnet Signal", href: "https://subnetsignal.com" },
  { kind: "link", label: "GoTrader", href: "https://gotrader.gopher-ai.com" },
  { kind: "link", label: "Subnet 42", href: "https://taostats.io/subnets/netuid-42" },
  { kind: "link", label: "My Company", href: "https://bimross.com" },
];
