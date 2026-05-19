"use client";

import { useState } from "react";

import { RefreshButton } from "./RefreshButton";

interface RefreshableBulletsProps {
  original: string[];
  company: string;
}

export function RefreshableBullets({ original, company }: RefreshableBulletsProps) {
  const [bullets, setBullets] = useState(original);
  const [loading, setLoading] = useState(false);

  async function handleRefresh() {
    setLoading(true);
    setBullets([]);
    try {
      const text = original.map((b, i) => `${i + 1}. ${b}`).join("\n");
      const res = await fetch("/api/rephrase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, section: `${company} experience bullets` }),
      });
      if (!res.ok || !res.body) throw new Error("Request failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let result = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        result += decoder.decode(value, { stream: true });
        const lines = result
          .split("\n")
          .map((l) => l.replace(/^\d+\.\s*/, "").trim())
          .filter(Boolean);
        setBullets(lines);
      }
    } catch {
      setBullets(original);
    } finally {
      setLoading(false);
    }
  }

  const displayed = bullets.length > 0 ? bullets : original;

  return (
    <div className="group">
      <div className="mt-2 flex items-center justify-end opacity-0 transition-opacity group-hover:opacity-100 print:hidden">
        <RefreshButton onRefresh={handleRefresh} loading={loading} />
      </div>
      <ul className="mt-1 space-y-2 pl-4 print:mt-1.5 print:space-y-1">
        {displayed.map((b, i) => (
          <li
            key={i}
            className="relative text-[15px] leading-relaxed text-zinc-700 before:absolute before:-left-4 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-zinc-400 before:content-[''] dark:text-zinc-300 dark:before:bg-zinc-600 print:before:bg-zinc-500 print:text-xs print:leading-snug"
          >
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
