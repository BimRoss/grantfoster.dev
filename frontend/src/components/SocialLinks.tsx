import { socials } from "@/data/socials";

const labelTransition =
  "max-w-0 overflow-hidden whitespace-nowrap py-0 pl-0 pr-0 opacity-0 transition-[max-width,padding-left,padding-right,opacity] duration-700 ease-in-out motion-reduce:transition-none group-hover:max-w-[12rem] group-hover:pl-1 group-hover:pr-2.5 group-hover:opacity-100 group-focus-visible:max-w-[12rem] group-focus-visible:pl-1 group-focus-visible:pr-2.5 group-focus-visible:opacity-100 md:group-hover:pr-4 md:group-focus-visible:pr-4";

export function SocialLinks() {
  return (
    <nav
      aria-labelledby="social-heading"
      className="flex w-full flex-nowrap items-stretch gap-0 md:flex-wrap md:items-center md:justify-center md:gap-4"
    >
      {socials.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          className="group flex min-h-14 min-w-0 flex-1 basis-0 flex-row items-stretch justify-center overflow-hidden border-0 border-r border-neutral-200 bg-white text-sm font-medium text-[var(--foreground)] shadow-none transition-[transform,box-shadow] duration-200 ease-out last:border-r-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] md:h-14 md:min-w-14 md:shrink-0 md:flex-none md:justify-start md:rounded-2xl md:border md:border-neutral-200 md:shadow-sm md:last:border-r md:hover:-translate-y-0.5 md:hover:shadow-md"
          aria-label={label}
        >
          <span
            className="flex min-h-14 w-full min-w-0 flex-1 items-center justify-center max-md:flex-1 md:size-14 md:min-h-0 md:w-14 md:shrink-0 md:flex-none md:grow-0"
            aria-hidden
          >
            <Icon className="size-5 opacity-90 transition-opacity duration-200 group-hover:opacity-100 md:size-6" />
          </span>
          <span className={`hidden min-w-0 items-center md:flex ${labelTransition}`}>{label}</span>
        </a>
      ))}
    </nav>
  );
}
