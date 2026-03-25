import { socials } from "@/data/socials";

export function SocialLinks() {
  return (
    <nav aria-label="Social links" className="flex flex-wrap items-center gap-x-2 gap-y-3 sm:gap-x-3">
      {socials.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          className="group flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-sm text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        >
          <Icon className="size-4 shrink-0 opacity-80 group-hover:opacity-100" aria-hidden />
          <span className="sr-only sm:not-sr-only sm:inline">{label}</span>
        </a>
      ))}
    </nav>
  );
}
