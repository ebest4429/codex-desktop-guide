// ===================================================
// Badge / Tag 컴포넌트 — 버전, 플랜, 상태 표시용
// Phase 3 콘텐츠 페이지에서 기능 태그 표시에 사용
// ===================================================

type BadgeVariant = "accent" | "muted" | "warning" | "info";

type BadgeProps = {
  label: string;
  variant?: BadgeVariant;
};

const VARIANT_STYLES: Record<BadgeVariant, { bg: string; color: string }> = {
  accent: { bg: "var(--accent-muted)", color: "var(--accent)" },
  muted: { bg: "var(--bg-tertiary)", color: "var(--text-muted)" },
  warning: { bg: "rgba(234, 179, 8, 0.15)", color: "#ca8a04" },
  info: { bg: "rgba(59, 130, 246, 0.15)", color: "#60a5fa" },
};

export default function Badge({ label, variant = "accent" }: BadgeProps) {
  const { bg, color } = VARIANT_STYLES[variant];
  return (
    <span
      className="inline-flex items-center text-xs px-2 py-0.5 rounded-full font-medium"
      style={{ backgroundColor: bg, color }}
    >
      {label}
    </span>
  );
}
