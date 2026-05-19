import { socials } from "./socials";

export const SITE_URL = "https://grantfoster.dev";
export const SITE_NAME = "Grant Foster";
export const SITE_TITLE = "Grant Foster | Serial Creator";
export const OG_IMAGE_PATH = "/opengraph-image";
export const BIMROSS_DESCRIPTION =
  "BimRoss is a single-person LLC focused on building distributed infrastructure, agentic-powered backend systems, and self-improving UI's. We focus on Bittensor infrastructure, AI products, and operator tooling for teams that need secure execution, reliable operations, and incentive alignment.";

export const siteDescription =
  "Staff-level engineer shipping 0-to-1 across startups and enterprises — product design to observable infrastructure. Integrating software with the real world for over a decade. Available.";

const sameAs = socials.flatMap((s) =>
  "href" in s && typeof s.href === "string" && /^https?:\/\//.test(s.href) ? [s.href] : [],
);

/** Public project directory — JSON-LD ItemList, /projects.json */
export const projects = [
  {
    name: "Subnet Signal",
    url: "https://subnetsignal.com",
    description: "D3-based Bittensor news aggregator with an agentic backend — subnet alpha and sentiment signals in one place.",
  },
  {
    name: "MakeACompany",
    url: "https://makeacompany.ai",
    description: "Slack-native product for spinning up AI-native teams with durable conversation context and backend orchestration.",
  },
  {
    name: "Invoice Pilot",
    url: "https://getinvoicepilot.com",
    description: "Automation for invoicing and operational admin workflows.",
  },
  {
    name: "Cycler",
    url: "https://cycler.io",
    description: "Web, iOS, and Android app for fitness instructors — harmonic, tempo-driven playlists in seconds.",
  },
  {
    name: "BimRoss",
    url: "https://bimross.com",
    description: BIMROSS_DESCRIPTION,
  },
];

const PUBLIC_EMAIL = "grantdfoster@gmail.com";

/** Machine-readable profile for agents (mirrors /profile.json). */
export const siteProfile = {
  type: "Person",
  name: SITE_NAME,
  url: SITE_URL,
  description: siteDescription,
  email: PUBLIC_EMAIL,
  jobTitle: "AI Staff Engineer",
  sameAs,
  knowsAbout: [
    "Bittensor",
    "Subnet 42",
    "distributed systems",
    "AI trading systems",
    "agentic backends",
  ],
  worksFor: {
    type: "Organization",
    name: "BimRoss",
    url: "https://bimross.com",
    description: BIMROSS_DESCRIPTION,
  },
  projects: projects.map((p) => ({
    name: p.name,
    url: p.url,
    description: p.description,
  })),
  endpoints: {
    profileJson: `${SITE_URL}/profile.json`,
    projectsJson: `${SITE_URL}/projects.json`,
    llmsTxt: `${SITE_URL}/llms.txt`,
  },
};

/**
 * Root layout JSON-LD — literal <script type="application/ld+json"> in HTML
 * for crawlers and readiness scanners.
 */
export function buildRootJsonLd() {
  const logoUrl = `${SITE_URL}/icon`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: siteDescription,
        inLanguage: "en-US",
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE_NAME,
        url: SITE_URL,
        description: siteDescription,
        email: PUBLIC_EMAIL,
        jobTitle: "AI Staff Engineer",
        image: {
          "@type": "ImageObject",
          url: logoUrl,
          contentUrl: logoUrl,
        },
        sameAs,
        knowsAbout: [
          "Bittensor",
          "Subnet 42",
          "distributed systems",
          "AI trading systems",
          "agentic backends",
        ],
        worksFor: {
          "@type": "Organization",
          name: "BimRoss",
          url: "https://bimross.com",
          description: BIMROSS_DESCRIPTION,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: `${SITE_NAME} — Home`,
        description: siteDescription,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en-US",
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#projects`,
        name: "Projects and properties",
        numberOfItems: projects.length,
        itemListElement: projects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.name,
          item: {
            "@type": "WebApplication",
            name: p.name,
            url: p.url,
            description: p.description,
          },
        })),
      },
    ],
  };
}

