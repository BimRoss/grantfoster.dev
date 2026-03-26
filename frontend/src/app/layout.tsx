import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Syne } from "next/font/google";
import Script from "next/script";

import { JsonLd } from "@/components/JsonLd";
import { ToastProvider } from "@/components/ToastProvider";
import {
  buildRootJsonLd,
  OG_IMAGE_PATH,
  siteDescription,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/data/site";

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

const rootJsonLd = buildRootJsonLd();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  applicationName: SITE_NAME,
  category: "technology",
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/icon", type: "image/png" }],
  },
  title: {
    default: SITE_TITLE,
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
    title: SITE_TITLE,
    description: siteDescription,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: "Grant Foster - AI staff engineer, Bittensor miner, and operator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: siteDescription,
    images: [OG_IMAGE_PATH],
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
      {/* Extensions (e.g. ColorZilla) inject attrs on <body> before hydration — suppress avoids false-positive mismatch warnings in dev */}
      <body
        className="relative z-0 h-dvh overflow-hidden bg-white text-zinc-950 antialiased"
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only absolute left-4 top-4 z-[10001] bg-white px-4 py-2 text-sm text-zinc-950 ring-1 ring-zinc-300 focus:not-sr-only focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-zinc-700"
        >
          Skip to main content
        </a>
        <JsonLd data={rootJsonLd} />
        <ToastProvider>
          <div className="relative z-10 flex h-full min-h-0 flex-col overflow-x-hidden overflow-y-auto">
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
