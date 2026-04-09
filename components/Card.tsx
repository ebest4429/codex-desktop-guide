"use client";

import { useState } from "react";
import Link from "next/link";

// ===================================================
// Card 컴포넌트 — 카드형 / 리스트형 전환 지원
// Phase 3 콘텐츠 페이지에서 항목 목록 표시에 사용
// ===================================================

export type CardItem = {
  title: string;
  description?: string;
  href?: string;
  badge?: string;
};

type ViewMode = "card" | "list";

type CardProps = {
  item: CardItem;
  mode: ViewMode;
};

function CardItem({ item, mode }: CardProps) {
  const content =
    mode === "card" ? (
      <div
        className="rounded-lg border p-4 transition-colors"
        style={{
          backgroundColor: "var(--bg-secondary)",
          borderColor: "var(--border)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
          (e.currentTarget as HTMLElement).style.backgroundColor =
            "var(--bg-tertiary)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
          (e.currentTarget as HTMLElement).style.backgroundColor =
            "var(--bg-secondary)";
        }}
      >
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
            {item.title}
          </h3>
          {item.badge && <Badge label={item.badge} />}
        </div>
        {item.description && (
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            {item.description}
          </p>
        )}
      </div>
    ) : (
      <div
        className="flex items-center justify-between px-3 py-2 rounded-md border-b transition-colors"
        style={{
          borderColor: "var(--border)",
          color: "var(--text-primary)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor =
            "var(--bg-hover)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
        }}
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">{item.title}</span>
          {item.description && (
            <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
              {item.description}
            </span>
          )}
        </div>
        {item.badge && <Badge label={item.badge} />}
      </div>
    );

  if (item.href) {
    return <Link href={item.href}>{content}</Link>;
  }
  return content;
}

type CardListProps = {
  items: CardItem[];
  defaultMode?: ViewMode;
};

export default function CardList({ items, defaultMode = "card" }: CardListProps) {
  const [mode, setMode] = useState<ViewMode>(defaultMode);

  return (
    <div>
      {/* 뷰 전환 버튼 */}
      <div className="flex justify-end mb-3 gap-1">
        <button
          onClick={() => setMode("card")}
          className="px-2 py-1 text-xs rounded transition-colors"
          style={{
            backgroundColor:
              mode === "card" ? "var(--accent-muted)" : "transparent",
            color:
              mode === "card" ? "var(--accent)" : "var(--text-muted)",
            border: "1px solid",
            borderColor:
              mode === "card" ? "var(--accent)" : "var(--border)",
          }}
        >
          카드
        </button>
        <button
          onClick={() => setMode("list")}
          className="px-2 py-1 text-xs rounded transition-colors"
          style={{
            backgroundColor:
              mode === "list" ? "var(--accent-muted)" : "transparent",
            color:
              mode === "list" ? "var(--accent)" : "var(--text-muted)",
            border: "1px solid",
            borderColor:
              mode === "list" ? "var(--accent)" : "var(--border)",
          }}
        >
          목록
        </button>
      </div>

      {/* 카드/목록 렌더링 */}
      <div
        className={
          mode === "card"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            : "flex flex-col"
        }
      >
        {items.map((item, i) => (
          <CardItem key={i} item={item} mode={mode} />
        ))}
      </div>
    </div>
  );
}

// 배지 컴포넌트 (내부 사용)
function Badge({ label }: { label: string }) {
  return (
    <span
      className="text-xs px-1.5 py-0.5 rounded font-medium"
      style={{
        backgroundColor: "var(--accent-muted)",
        color: "var(--accent)",
      }}
    >
      {label}
    </span>
  );
}
