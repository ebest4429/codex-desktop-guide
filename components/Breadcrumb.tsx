import Link from "next/link";

// ===================================================
// Breadcrumb 컴포넌트 — 현재 위치 경로 표시
// Phase 3 각 페이지 상단에서 사용
// ===================================================

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs mb-4">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <span style={{ color: "var(--text-muted)" }}>›</span>
            )}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="transition-colors"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--text-secondary)";
                }}
              >
                {item.label}
              </Link>
            ) : (
              <span
                style={{
                  color: isLast ? "var(--text-primary)" : "var(--text-secondary)",
                  fontWeight: isLast ? 500 : 400,
                }}
              >
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
