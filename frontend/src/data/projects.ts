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
  {
    id: "minergraph",
    title: "Minergraph",
    blurb:
      "Kubernetes-hosted monitoring app for Bittensor mining fleets. Plug in a subnet number, your wallet, and immediately visualize your miners' performance on any subnet.",
    image: "/minergraph.png",
  },
  {
    id: "mining",
    title: "Mining",
    blurb:
      "Kubernetes infrastructure as code for Bittensor miners: health checks, auto-recovery (re-registration), and cron jobs.",
    image: "/mining.png",
  },
  {
    id: "azure",
    title: "Azure",
    blurb:
      "Cost improvements on Azure Kubernetes nodes by moving from DCsv2 to DCsv3 TEE instances—better price/performance for confidential workloads.",
    image: "/azure.png",
  },
  {
    id: "subnet42",
    title: "Subnet 42",
    blurb:
      "Ran and operated Subnet 42, Gopher's real-time data network, providing cryptographically proven, secure data pipelines on Bittensor in a decentralized manner.",
    image: "/subnet42.png",
  },
  {
    id: "replies",
    title: "Replies",
    blurb:
      "Agent-based reply agent for X—finds high-impression tweets and drafts relevant replies to grow your account.",
    image: "/replies.png",
  },
];
