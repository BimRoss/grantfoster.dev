"use client";

import { useState } from "react";

import { RefreshButton } from "./RefreshButton";

interface RefreshableParagraphProps {
  original: string;
  section?: string;
  className?: string;
}

export function RefreshableParagraph({
  original,
  section,
  className,
}: RefreshableParagraphProps) {
  const [text, setText] = useState(original);
  const [loading, setLoading] = useState(false);

  async function handleRefresh() {
    setLoading(true);
    setText("");
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
        setText(result);
      }
    } catch {
      setText(original);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="group">
      <div className="mb-2 flex items-center justify-end opacity-0 transition-opacity group-hover:opacity-100 print:hidden">
        <RefreshButton onRefresh={handleRefresh} loading={loading} />
      </div>
      <p className={className}>{text || " "}</p>
    </div>
  );
}
