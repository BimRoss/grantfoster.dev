import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Syne } from "next/font/google";
import Script from "next/script";

import { ToastProvider } from "@/components/ToastProvider";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
  title: {
    default: "Grant Foster | AI Staff Engineer",
    template: "%s · Grant Foster",
  },
  description:
    "Bittensor miner & operator, developing AI trading systems and self-improving UI. Agentic backends, distributed infrastructure, and the experiments in between.",
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
    title: "Grant Foster | AI Staff Engineer",
    description:
      "Bittensor miner & operator, developing AI trading systems and self-improving UI. Agentic backends, distributed infrastructure, and the experiments in between.",
    url: siteUrl,
    siteName: "Grant Foster",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grant Foster | AI Staff Engineer",
    description:
      "Bittensor miner & operator, developing AI trading systems and self-improving UI. Agentic backends, distributed infrastructure, and the experiments in between.",
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
