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
    <div
      className="relative z-[60] w-full shrink-0 border-t border-black/10 bg-gradient-to-b from-white/[0.22] via-white/[0.14] to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.62),0_-8px_24px_rgba(0,0,0,0.045)] backdrop-blur-md backdrop-saturate-110 supports-[backdrop-filter]:from-white/[0.18] supports-[backdrop-filter]:via-white/[0.08] supports-[backdrop-filter]:to-transparent"
    >
      <nav aria-labelledby="social-heading" className="w-full">
        <h2 id="social-heading" className="sr-only">
          Social & contact
        </h2>
        <div
          className="grid w-full"
          style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}
        >
        {socials.map(({ label, icon: Icon, ...rest }) => {
          const className =
            "social-cell group relative flex aspect-square w-full min-w-0 items-center justify-center border-r border-black/10 transition-[transform,border-color,box-shadow,background,opacity,filter] duration-[2000ms] ease-in-out last:border-r-0 active:scale-[0.98] hover:scale-[1.04] focus-visible:scale-[1.04] focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-zinc-400/60 md:aspect-auto md:h-[5.5rem] md:max-h-[5.5rem] md:px-3 md:py-2.5";
          const icon = (
            <span className="social-icon-shell" aria-hidden>
              <Icon
                className={
                  label === "SoundCloud"
                    ? "social-icon social-icon--soundcloud shrink-0"
                    : "social-icon shrink-0"
                }
                aria-hidden
              />
            </span>
          );

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
