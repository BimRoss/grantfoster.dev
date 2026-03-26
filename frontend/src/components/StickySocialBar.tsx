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
      className="relative z-[60] w-full shrink-0 border-t border-white/80 bg-gradient-to-b from-white/58 via-white/42 to-white/28 shadow-[inset_0_1px_0_rgba(255,255,255,0.98),0_-10px_36px_rgba(0,0,0,0.06)] backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:from-white/52 supports-[backdrop-filter]:via-white/36 supports-[backdrop-filter]:to-white/22"
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
            "group relative flex aspect-square w-full min-w-0 items-center justify-center border-r border-white/65 bg-gradient-to-b from-white/72 via-white/52 to-white/40 shadow-[0_0_0_1px_rgba(255,255,255,0.45),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-xl backdrop-saturate-150 transition-[background-color,transform,box-shadow,filter] last:border-r-0 hover:from-white/88 hover:via-white/72 hover:to-white/58 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.65),inset_0_1px_0_rgba(255,255,255,1)] active:scale-[0.98] focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-zinc-400/60";
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
