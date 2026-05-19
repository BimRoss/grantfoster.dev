"use client";

import { useEffect, useRef, useState } from "react";

import { RefreshButton } from "./RefreshButton";

interface Job {
  company: string;
  title: string;
  location: string;
  period: string;
  bullets: string[];
}

interface Props {
  job: Job;
}

function parseBullets(raw: string): string[] {
  return raw
    .split("\n")
    .map((l) => l.replace(/^\d+\.\s*/, "").trim())
    .filter(Boolean);
}

export function ExperienceEntry({ job }: Props) {
  const [displayBullets, setDisplayBullets] = useState(job.bullets);
  const [streamBullets, setStreamBullets] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [intro, setIntro] = useState(false);
  const introCancelRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const fullText = job.bullets.map((b, i) => `${i + 1}. ${b}`).join("\n");
    const totalMs = Math.max(600, Math.min(1200, fullText.length * 1.2));
    const tickMs = 24;
    const ticks = Math.max(1, Math.floor(totalMs / tickMs));
    const chunkSize = Math.max(6, Math.ceil(fullText.length / ticks));
    const initial = Math.min(fullText.length, Math.max(chunkSize, 15));

    setIntro(true);
    setStreamBullets(parseBullets(fullText.slice(0, initial)));
    let i = initial;

    const intervalId = setInterval(() => {
      i += chunkSize;
      if (i >= fullText.length) {
        setStreamBullets([]);
        setIntro(false);
        clearInterval(intervalId);
        introCancelRef.current = null;
      } else {
        setStreamBullets(parseBullets(fullText.slice(0, i)));
      }
    }, tickMs);

    introCancelRef.current = () => clearInterval(intervalId);
    return () => introCancelRef.current?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleRefresh() {
    introCancelRef.current?.();
    introCancelRef.current = null;
    setIntro(false);

    setLoading(true);
    setStreamBullets([]);
    let finalBullets = displayBullets;
    try {
      const text = job.bullets.map((b, i) => `${i + 1}. ${b}`).join("\n");
      const res = await fetch("/api/rephrase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, section: `${job.company} experience bullets` }),
      });
      if (!res.ok || !res.body) throw new Error("Request failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let result = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        result += decoder.decode(value, { stream: true });
        setStreamBullets(parseBullets(result));
      }
      const parsed = parseBullets(result);
      finalBullets = parsed.length > 0 ? parsed : job.bullets;
    } catch {
      finalBullets = job.bullets;
    } finally {
      setDisplayBullets(finalBullets);
      setStreamBullets([]);
      setLoading(false);
    }
  }

  const isWaiting = loading && streamBullets.length === 0;
  const isRewriting = loading && streamBullets.length > 0;
  const isIntroing = intro && streamBullets.length > 0;
  const shownBullets = isRewriting || isIntroing ? streamBullets : displayBullets;

  return (
    <div>
      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
        <div className="min-w-0">
          <span className="font-display text-lg font-semibold text-zinc-950 dark:text-white print:text-base">
            {job.company}
          </span>
          <span className="ml-2 text-base text-zinc-600 dark:text-zinc-400 print:text-sm">
            — {job.title}
          </span>
        </div>
        <div className="flex items-center justify-between sm:shrink-0 sm:justify-normal sm:gap-3">
          <span className="font-mono text-xs text-zinc-400 sm:text-right">
            {job.location} · {job.period}
          </span>
          <RefreshButton onRefresh={handleRefresh} loading={loading} />
        </div>
      </div>
      <ul
        className={`mt-3 space-y-2 pl-4 transition-opacity duration-200 print:mt-1.5 print:space-y-1 ${isWaiting ? "opacity-40" : "opacity-100"}`}
      >
        {shownBullets.map((b, i) => {
          const isLast = i === shownBullets.length - 1;
          return (
            <li
              key={i}
              className="relative text-[15px] leading-relaxed text-zinc-700 before:absolute before:-left-4 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-zinc-400 before:content-[''] dark:text-zinc-300 dark:before:bg-zinc-600 print:before:bg-zinc-500 print:text-xs print:leading-snug"
            >
              {b}
              {isRewriting && isLast && (
                <span className="ai-cursor ml-0.5 text-zinc-400 dark:text-zinc-500">▋</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
