"use client";

import { useCallback } from "react";

import { socials } from "@/data/socials";

import { EmailSocialLink } from "./EmailSocialLink";
import { useSiteToast } from "./ToastProvider";

const CALL_TOAST_MESSAGE = "email me instead";

export function StickySocialBar() {
  const { showToast } = useSiteToast();

  const onCallClick = useCallback(() => {
    showToast(CALL_TOAST_MESSAGE);
  }, [showToast]);

  const n = socials.length;

  return (
    <div className="relative z-[60] w-full shrink-0 border-t border-white/70 bg-gradient-to-b from-white/55 via-white/40 to-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_-8px_32px_rgba(0,0,0,0.05)] backdrop-blur-2xl backdrop-saturate-150">
      <nav aria-labelledby="social-heading" className="mx-auto w-full max-w-7xl">
        <h2 id="social-heading" className="sr-only">
          Social & contact
        </h2>
        <div
          className="grid w-full"
          style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}
        >
        {socials.map(({ label, icon: Icon, ...rest }) => {
          const className =
            "group relative flex aspect-square w-full min-w-0 items-center justify-center border-r border-white/50 bg-white/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-md transition-[background-color,transform,box-shadow] last:border-r-0 hover:bg-white/75 hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_0_0_1px_rgba(255,255,255,0.4)] active:scale-[0.98] focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-zinc-400/60";
          const iconSize =
            label === "SoundCloud" ? "size-7 shrink-0 text-black md:size-[1.75rem]" : "size-6 shrink-0 text-black md:size-7";
          const icon = <Icon className={iconSize} aria-hidden />;

          if ("action" in rest && rest.action === "call") {
            return (
              <button
                key={label}
                type="button"
                className={className}
                aria-label={label}
                onClick={onCallClick}
              >
                {icon}
              </button>
            );
          }

          const href = "href" in rest ? rest.href : "";
          if (href.startsWith("mailto:")) {
            return (
              <EmailSocialLink key={label} href={href} className={className} aria-label={label}>
                {icon}
              </EmailSocialLink>
            );
          }
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
              aria-label={label}
            >
              {icon}
            </a>
          );
        })}
        </div>
      </nav>
    </div>
  );
}
