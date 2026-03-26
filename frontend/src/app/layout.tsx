import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Syne } from "next/font/google";
import Script from "next/script";

import { ToastProvider } from "@/components/ToastProvider";
import { socials } from "@/data/socials";

import "./globals.css";

const syne = Syne({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const ibmPlex = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex",
  display: "swap",
});

const siteUrl = "https://grantfoster.dev";
const siteName = "Grant Foster";
const siteTitle = "Grant Foster | AI Staff Engineer";
const ogImagePath = "/opengraph-image";
const siteDescription =
  "Bittensor miner & operator, developing AI trading systems and self-improving UI. Agentic backends, distributed infrastructure, and the experiments in between.";

const sameAs = socials.flatMap((s) =>
  "href" in s &&
  typeof s.href === "string" &&
  /^https?:\/\//.test(s.href)
    ? [s.href]
    : [],
);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: siteName,
      url: siteUrl,
      description: siteDescription,
      email: "mailto:grantdfoster@gmail.com",
      jobTitle: "AI Staff Engineer",
      sameAs,
      worksFor: {
        "@type": "Organization",
        name: "BimRoss",
        url: "https://bimross.com",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  applicationName: siteName,
  category: "technology",
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/icon", type: "image/png" }],
  },
  title: {
    default: siteTitle,
    template: "%s · Grant Foster",
  },
  description: siteDescription,
  keywords: [
    "Grant Foster",
    "Bittensor",
    "Subnet 42",
    "Subnet Signal",
    "Cycler",
    "GoTrader",
    "Invoice Pilot",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "Grant Foster - AI staff engineer, Bittensor miner, and operator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImagePath],
    creator: "@geeeeeeemoney",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html
      lang="en"
      className={`${syne.variable} ${ibmPlex.variable} h-full overflow-hidden bg-white text-zinc-950`}
    >
      <body className="relative z-0 h-dvh overflow-hidden bg-white text-zinc-950 antialiased">
        <Script
          id="ld-json-grantfoster"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <ToastProvider>
          <div className="relative z-10 flex h-full min-h-0 flex-col overflow-hidden">
            {children}
          </div>
        </ToastProvider>
        {gaMeasurementID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaMeasurementID}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
