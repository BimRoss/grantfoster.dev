import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const sansBody = Figtree({
  subsets: ["latin"],
  variable: "--font-sans-body",
});

export const metadata: Metadata = {
  title: "Grant Foster",
  description: "Builder — subnet tooling, trading, and experiments.",
  metadataBase: new URL("https://grantfoster.dev"),
  openGraph: {
    title: "Grant Foster",
    description: "Builder — subnet tooling, trading, and experiments.",
    url: "https://grantfoster.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sansBody.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
