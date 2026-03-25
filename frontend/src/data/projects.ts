export type Project = {
  id: string;
  title: string;
  blurb: string;
  image: string;
  /** When set, the card links out */
  href?: string;
};

export const projects: Project[] = [
  {
    id: "subnet-signal",
    title: "Subnet Signal",
    blurb: "Bittensor subnet intelligence and tooling.",
    image: "/subnet-signal.jpeg",
    href: "https://subnetsignal.com",
  },
  {
    id: "gotrader",
    title: "GoTrader",
    blurb: "Trading stack and automation.",
    image: "/gotrader.jpeg",
    href: "https://gotrader.gopher-ai.com",
  },
  {
    id: "cycler",
    title: "Cycler",
    blurb: "Side project and experiments.",
    image: "/cycler.jpeg",
  },
];
