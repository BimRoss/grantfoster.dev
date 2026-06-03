"use client";

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden className={className}>
      <path d="M6 1v7M3 5.5l3 3 3-3M1 9.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function DownloadButton() {
  const handleClick = () => window.print();
  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        aria-label="Download resume PDF"
        className="flex h-9 w-9 items-center justify-center text-zinc-400 transition-colors hover:text-zinc-950 dark:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400/60 sm:hidden"
      >
        <DownloadIcon className="h-[18px] w-[18px]" />
      </button>
      <button
        type="button"
        onClick={handleClick}
        className="hidden sm:inline-flex items-center gap-2 border border-black/80 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-zinc-900 transition-colors hover:bg-black hover:text-white dark:border-white/70 dark:text-white dark:hover:bg-white dark:hover:text-black"
      >
        <DownloadIcon className="h-3 w-3" />
        Download PDF
      </button>
    </>
  );
}
