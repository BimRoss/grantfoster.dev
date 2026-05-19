"use client";

interface Props {
  onRefresh: () => void;
  loading: boolean;
}

function SparkleIcon({ spinning }: { spinning: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-3.5 w-3.5 shrink-0"
      style={spinning ? { animation: "ai-sparkle-spin 1.8s linear infinite" } : undefined}
      aria-hidden
    >
      {/* Curved 4-pointed star — same geometry as the Gemini / Google AI sparkle */}
      <path d="M12 2C12 7.523 7.523 12 2 12C7.523 12 12 16.477 12 22C12 16.477 16.477 12 22 12C16.477 12 12 7.523 12 2Z" />
    </svg>
  );
}

export function RefreshButton({ onRefresh, loading }: Props) {
  return (
    <button
      onClick={onRefresh}
      disabled={loading}
      aria-label="Rewrite with AI"
      title="Rewrite with AI"
      className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/60 px-2.5 py-1 font-mono text-[10px] text-zinc-400 backdrop-blur-sm transition-colors hover:border-black/20 hover:text-zinc-600 disabled:cursor-not-allowed dark:border-white/10 dark:bg-zinc-900/60 dark:text-zinc-500 dark:hover:border-white/20 dark:hover:text-zinc-300 print:hidden"
    >
      <SparkleIcon spinning={loading} />
      {loading ? "rewriting…" : "rewrite"}
    </button>
  );
}
