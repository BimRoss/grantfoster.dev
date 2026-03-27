import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** Paths that must not redirect to `/` (first-party pages + route handlers + SEO + OG). */
const ALLOWED = new Set([
  "/",
  "/about",
  "/projects",
  "/profile.json",
  "/projects.json",
  "/robots.txt",
  "/sitemap.xml",
  "/icon",
  "/opengraph-image",
  "/twitter-image",
]);

function normalizePathname(pathname: string): string {
  if (pathname !== "/" && pathname.endsWith("/")) {
    return pathname.replace(/\/+$/, "") || "/";
  }
  return pathname;
}

export function proxy(request: NextRequest) {
  const pathname = normalizePathname(request.nextUrl.pathname);

  if (pathname.startsWith("/.well-known/")) {
    return NextResponse.next();
  }

  if (ALLOWED.has(pathname)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url), 308);
}

export const config = {
  matcher: [
    /*
     * Run proxy for all paths except Next internals and typical static assets
     * (public files like llms.txt, *.svg still resolve without hitting redirect logic).
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg|woff2?|txt)$).*)",
  ],
};
