"use client";

import { useEffect, useRef, useState } from "react";

import { RefreshButton } from "./RefreshButton";

interface Props {
  original: string;
  section?: string;
  className?: string;
}

export function RefreshableParagraph({ original, section, className }: Props) {
  const [displayText, setDisplayText] = useState(original);
  const [streamBuffer, setStreamBuffer] = useState("");
  const [loading, setLoading] = useState(false);
  const [intro, setIntro] = useState(false);
  const introCancelRef = useRef<(() => void) | null>(null);

  // Intro on mount — same streaming idea as a rewrite, but softer:
  // faster pacing, no cursor, button stays idle.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const totalMs = Math.max(500, Math.min(1000, original.length * 1.8));
    const tickMs = 24;
    const ticks = Math.max(1, Math.floor(totalMs / tickMs));
    const chunkSize = Math.max(3, Math.ceil(original.length / ticks));

    setIntro(true);
    setStreamBuffer(original.slice(0, chunkSize));
    let i = chunkSize;

    const intervalId = setInterval(() => {
      i += chunkSize;
      if (i >= original.length) {
        setStreamBuffer("");
        setIntro(false);
        clearInterval(intervalId);
        introCancelRef.current = null;
      } else {
        setStreamBuffer(original.slice(0, i));
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
    setStreamBuffer("");
    let finalText = displayText;
    try {
      const res = await fetch("/api/rephrase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: original, section }),
      });
      if (!res.ok || !res.body) throw new Error("Request failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let result = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        result += decoder.decode(value, { stream: true });
        setStreamBuffer(result);
      }
      finalText = result || original;
    } catch {
      finalText = original;
    } finally {
      setDisplayText(finalText);
      setStreamBuffer("");
      setLoading(false);
    }
  }

  const isWaiting = loading && !streamBuffer;
  const isRewriting = loading && !!streamBuffer;
  const isIntroing = intro && !!streamBuffer;
  const shownText = isRewriting || isIntroing ? streamBuffer : displayText;

  return (
    <div className="print:contents">
      <div className="mb-2 flex justify-end print:hidden">
        <RefreshButton onRefresh={handleRefresh} loading={loading} />
      </div>
      <p
        className={`${className} transition-opacity duration-200 ${isWaiting ? "opacity-40" : "opacity-100"}`}
      >
        {shownText}
        {isRewriting && <span className="ai-cursor text-zinc-400 dark:text-zinc-500">▋</span>}
      </p>
    </div>
  );
}
