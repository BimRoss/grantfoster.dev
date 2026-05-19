"use client";

import { useState } from "react";

interface RefreshButtonProps {
  onRefresh: () => void;
  loading: boolean;
}

export function RefreshButton({ onRefresh, loading }: RefreshButtonProps) {
  return (
    <button
      onClick={onRefresh}
      disabled={loading}
      aria-label="Rephrase with AI"
      title="Rephrase with AI"
      className="ml-2 inline-flex items-center gap-1 rounded-full border border-black/10 px-2 py-0.5 font-mono text-[10px] text-zinc-400 transition-all hover:border-zinc-400 hover:text-zinc-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:text-zinc-500 dark:hover:border-zinc-500 dark:hover:text-zinc-300 print:hidden"
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={`h-3 w-3 shrink-0 ${loading ? "animate-spin" : ""}`}
        aria-hidden
      >
        {loading ? (
          <circle cx="8" cy="8" r="6" strokeDasharray="28" strokeDashoffset="10" />
        ) : (
          <path d="M13.5 8A5.5 5.5 0 1 1 8 2.5M13.5 2.5v3h-3" />
        )}
      </svg>
      {loading ? "thinking…" : "AI rephrase"}
    </button>
  );
}
