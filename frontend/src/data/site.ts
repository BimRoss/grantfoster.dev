import { socials } from "./socials";

export const SITE_URL = "https://grantfoster.dev";
export const SITE_NAME = "Grant Foster";
export const SITE_TITLE = "Grant Foster | AI Staff Engineer";
export const OG_IMAGE_PATH = "/opengraph-image";

export const siteDescription =
  "I build and operate profitable AI systems for Bittensor teams. Follow for daily build logs, infrastructure lessons, and experiments shipped in public.";

const sameAs = socials.flatMap((s) =>
  "href" in s && typeof s.href === "string" && /^https?:\/\//.test(s.href) ? [s.href] : [],
);

/** Public project directory — /projects, JSON-LD ItemList, /projects.json */
export const projects = [
  {
    name: "Subnet Signal",
    url: "https://subnetsignal.com",
    description: "Bittensor tools and signals for operators and builders.",
  },
  {
    name: "Thread Pilot",
    url: SITE_URL,
    description:
      "AI-assisted drafting for threads and long-form social workflows (coming soon).",
  },
  {
    name: "Invoice Pilot",
    url: "https://getinvoicepilot.com",
    description: "Automation for invoicing and operational admin workflows.",
  },
  {
    name: "Cycler",
    url: "https://cycler.io",
    description: "Product experiments and iterative automation tooling.",
  },
  {
    name: "Joanne",
    url: SITE_URL,
    description: "Resume and job-search workflows (coming soon).",
  },
  {
    name: "BimRoss",
    url: "https://bimross.com",
    description: "Primary company site and infrastructure operator profile.",
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

export function buildAboutPageJsonLd() {
  const url = `${SITE_URL}/about`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "About Grant Foster",
        description: `About Grant Foster: ${siteDescription}`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "About", item: url },
        ],
      },
    ],
  };
}

export function buildProjectsPageJsonLd() {
  const url = `${SITE_URL}/projects`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "Grant Foster projects",
        description:
          "Project directory for Grant Foster, including Subnet Signal, Thread Pilot, Invoice Pilot, and Cycler.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Projects", item: url },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${url}#list`,
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
