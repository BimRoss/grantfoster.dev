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
    image: "/mixt.jpeg",
    href: "https://subnetsignal.com",
  },
  {
    id: "gotrader",
    title: "GoTrader",
    blurb: "Trading stack and automation.",
    image: "/gas-pump-games.jpeg",
    href: "https://gotrader.gopher-ai.com",
  },
  {
    id: "cycler",
    title: "Cycler",
    blurb: "Side project and experiments.",
    image: "/cycler.jpeg",
  },
];
