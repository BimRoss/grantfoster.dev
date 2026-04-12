import { socials } from "@/data/socials";

const labelTransition =
  "max-w-0 overflow-hidden whitespace-nowrap pl-0 opacity-0 transition-[max-width,padding-left,opacity] duration-300 ease-in-out motion-reduce:transition-none group-hover:max-w-[12rem] group-hover:pl-2 group-hover:opacity-100 group-focus-visible:max-w-[12rem] group-focus-visible:pl-2 group-focus-visible:opacity-100";

export function SocialLinks() {
  return (
    <nav
      aria-labelledby="social-heading"
      className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
    >
      {socials.map((social) => {
        if ("action" in social) {
          return null;
        }

        const { label, href, icon: Icon } = social;
        return (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="group inline-flex h-14 min-w-14 shrink-0 items-center justify-start rounded-2xl border border-neutral-200 bg-white px-3 text-sm font-medium text-[var(--foreground)] shadow-sm transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            aria-label={label}
          >
            <Icon
              className="size-6 shrink-0 opacity-90 transition-opacity duration-200 group-hover:opacity-100"
              aria-hidden
            />
            <span className={labelTransition}>{label}</span>
          </a>
        );
      })}
    </nav>
  );
}
