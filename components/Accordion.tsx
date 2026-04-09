"use client";

import { useState } from "react";

// ===================================================
// Accordion 컴포넌트 — 다중 열기 가능
// Phase 3 콘텐츠 상세 섹션에서 사용
// ===================================================

type AccordionItem = {
  title: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
};

type AccordionProps = {
  items: AccordionItem[];
};

function AccordionPanel({ item }: { item: AccordionItem }) {
  const [isOpen, setIsOpen] = useState(item.defaultOpen ?? false);

  return (
    <div
      className="border rounded-lg overflow-hidden"
      style={{ borderColor: "var(--border)" }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors"
        style={{
          backgroundColor: isOpen ? "var(--bg-tertiary)" : "var(--bg-secondary)",
          color: "var(--text-primary)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor =
            "var(--bg-tertiary)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor = isOpen
            ? "var(--bg-tertiary)"
            : "var(--bg-secondary)";
        }}
      >
        <span className="text-sm font-medium">{item.title}</span>
        <span
          className="text-base transition-transform duration-200 select-none"
          style={{
            color: "var(--text-muted)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            display: "inline-block",
          }}
        >
          ▾
        </span>
      </button>

      {isOpen && (
        <div
          className="px-4 py-3 text-sm"
          style={{
            backgroundColor: "var(--bg-primary)",
            color: "var(--text-secondary)",
            borderTop: "1px solid var(--border)",
          }}
        >
          {item.content}
        </div>
      )}
    </div>
  );
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => (
        <AccordionPanel key={i} item={item} />
      ))}
    </div>
  );
}
