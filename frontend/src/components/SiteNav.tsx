"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { EmailIcon, GitHubIcon, LinkedInIcon } from "@/data/socialIcons";

import { DownloadButton } from "../app/resume/DownloadButton";
import { EmailSocialLink } from "./EmailSocialLink";
import { ThemeToggle } from "./ThemeToggle";

const iconClass = "flex h-9 w-9 items-center justify-center text-zinc-400 transition-colors hover:text-zinc-950 dark:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400/60";
const svgClass = "h-[18px] w-[18px]";

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Site navigation"
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-white px-4 py-1.5 dark:bg-zinc-950 md:px-6 print:hidden"
    >
      <div>
        {pathname === "/resume" && (
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-400 transition-colors hover:text-zinc-950 dark:hover:text-white"
          >
            ← grantfoster.dev
          </Link>
        )}
      </div>
      <div className="flex items-center gap-0.5">
        <a
          href="https://linkedin.com/in/grantdfoster"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={iconClass}
        >
          <LinkedInIcon className={svgClass} />
        </a>
        <a
          href="https://github.com/geeeeemoney"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={iconClass}
        >
          <GitHubIcon className={svgClass} />
        </a>
        <EmailSocialLink
          href="mailto:grantdfoster@gmail.com"
          aria-label="Email"
          className={iconClass}
        >
          <EmailIcon className={svgClass} />
        </EmailSocialLink>
        <ThemeToggle />
        {pathname === "/resume" && <DownloadButton />}
      </div>
    </nav>
  );
}
