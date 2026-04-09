"use client";

import { useState } from "react";

// ===================================================
// CodeBlock 컴포넌트 — 코드 표시 + 복사 기능
// Phase 3 콘텐츠 페이지에서 사용
// ===================================================

type CodeBlockProps = {
  code: string;
  language?: string;
  filename?: string;
};

export default function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="rounded-lg overflow-hidden border"
      style={{ borderColor: "var(--border)" }}
    >
      {/* 헤더 */}
      <div
        className="flex items-center justify-between px-4 py-2 border-b"
        style={{
          backgroundColor: "var(--bg-tertiary)",
          borderColor: "var(--border)",
        }}
      >
        <div className="flex items-center gap-2">
          {filename && (
            <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
              {filename}
            </span>
          )}
          {language && (
            <span
              className="text-xs px-1.5 py-0.5 rounded"
              style={{
                backgroundColor: "var(--bg-active)",
                color: "var(--text-muted)",
              }}
            >
              {language}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="text-xs px-2 py-1 rounded transition-colors"
          style={{
            color: copied ? "var(--accent)" : "var(--text-muted)",
            backgroundColor: copied ? "var(--accent-muted)" : "transparent",
          }}
        >
          {copied ? "복사됨" : "복사"}
        </button>
      </div>

      {/* 코드 */}
      <pre
        className="p-4 overflow-x-auto text-sm leading-relaxed"
        style={{
          backgroundColor: "var(--bg-secondary)",
          color: "var(--text-primary)",
          fontFamily: "Consolas, 'Courier New', monospace",
          margin: 0,
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}
