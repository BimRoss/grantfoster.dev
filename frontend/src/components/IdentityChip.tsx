import type { Principal } from "@/data/principals";

export function IdentityChip({ principal }: { principal: Principal }) {
  return (
    <div className="flex flex-col gap-2 print:gap-1">
      <div className="flex items-center gap-2 print:gap-1.5">
        <span
          aria-hidden
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-black/20 bg-white font-mono text-[10px] font-semibold uppercase tracking-wider text-zinc-700 dark:border-white/25 dark:bg-zinc-950 dark:text-zinc-200 print:h-5 print:w-5 print:text-[9px]"
        >
          {principal.initials}
        </span>
        <div className="flex flex-col leading-tight">
          <span className="font-display text-sm font-semibold text-zinc-900 dark:text-zinc-100 print:text-xs">
            {principal.name}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400 print:text-[9px]">
            {principal.role}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 pl-8 print:gap-x-4 print:gap-y-0.5 print:pl-7">
        {principal.handles.map(({ href, Icon, label, external }) => (
          <a
            key={href}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex items-center gap-1.5 rounded-full border border-black/15 px-2.5 py-1 font-mono text-xs text-zinc-600 transition-colors hover:border-black/30 hover:text-zinc-950 dark:border-white/15 dark:text-zinc-400 dark:hover:border-white/30 dark:hover:text-white print:rounded-none print:border-0 print:p-0 print:text-zinc-600"
          >
            <Icon className="h-3.5 w-3.5 shrink-0 print:hidden" />
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
