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
    blurb:
      "A D3-based Bittensor news aggregator with an agentic backend—latest subnet alpha in one place. AI-ready data from Subnet 42 and Taostats API for a one-stop Bittensor news service.",
    image: "/subnet-signal.jpeg",
    href: "https://subnetsignal.com",
  },
  {
    id: "gotrader",
    title: "GoTrader",
    blurb:
      "AI-powered trading assistant with sentiment analysis and concurrent WebSocket connections for low-latency candlestick data.",
    image: "/gotrader.jpeg",
    href: "https://gotrader.gopher-ai.com",
  },
  {
    id: "cycler",
    title: "Cycler",
    blurb:
      "Cycler.io: web, iOS, and Android app for fitness instructors—harmonic, tempo-driven playlists in seconds. Inspired by your artists, songs, and genres; personalized classes in one click so you can focus on the workout.",
    image: "/cycler.jpeg",
  },
  {
    id: "gas-pump-games",
    title: "Gas Pump Games",
    blurb:
      "Cross-chain web3 gaming suite with Chainlink VRF and automation integrations for cryptographically verifiable outcomes.",
    image: "/gas-pump-games.jpeg",
  },
  {
    id: "mixt",
    title: "Mixt",
    blurb:
      "Mixt is a web application built on top of Spotify so DJs can find samples in seconds. Analyze your favorite playlists and harmonically mix them with the click of a button.",
    image: "/mixt.jpeg",
  },
];
