// 사용법 동적 라우트 — Phase 3에서 콘텐츠 작성 예정
// generateStaticParams: output: 'export' 정적 빌드 필수. Phase 3에서 실제 slug로 교체.
export function generateStaticParams() {
  return [
    { slug: "basic" },
    { slug: "chat" },
    { slug: "files" },
  ];
}

export default async function UsagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div>
      <h1
        className="text-2xl font-semibold mb-2"
        style={{ color: "var(--text-primary)" }}
      >
        사용법: {slug}
      </h1>
      <p style={{ color: "var(--text-muted)" }}>콘텐츠 준비 중 (Phase 3)</p>
    </div>
  );
}
