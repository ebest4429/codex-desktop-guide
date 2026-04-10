import Breadcrumb from "@/components/Breadcrumb";
import CardList from "@/components/Card";
import Link from "next/link";

// 개요 페이지 — Codex Desktop이란?
// 취지: 처음 방문하는 사용자에게 제품을 소개하는 첫 페이지.
//       핵심 특징 카드 + 주요 기능 목록 + 시작하기 링크 구성.

const highlights = [
  {
    icon: "✦",
    title: "AI 코딩 에이전트",
    description: "코드 작성, 디버깅, 리팩터링을 자연어로 지시합니다.",
  },
  {
    icon: "⚡",
    title: "스킬로 확장",
    description: "Figma, GitHub, Slack 등 외부 서비스를 스킬로 연결합니다.",
  },
  {
    icon: "🔄",
    title: "자동화 스레드",
    description: "코드 품질 점검, 릴리즈 노트 등을 예약 실행합니다.",
  },
  {
    icon: "⚙",
    title: "자유로운 커스터마이징",
    description: "성격, 지침, 외형을 내 작업 방식에 맞게 조정합니다.",
  },
];

const features = [
  {
    title: "멀티모달 입력",
    description: "텍스트, 이미지, 파일을 함께 입력하여 AI와 대화합니다.",
    href: "/features/multimodal",
  },
  {
    title: "코드 실행",
    description: "코드를 직접 실행하고 결과를 즉시 확인합니다.",
    href: "/features/code-execution",
  },
  {
    title: "웹 검색",
    description: "최신 정보를 웹에서 검색하여 답변에 반영합니다.",
    href: "/features/web-search",
  },
  {
    title: "파일 처리",
    description: "문서, 이미지, 코드 파일을 업로드하여 분석합니다.",
    href: "/features/file-handling",
  },
  {
    title: "확장 기능",
    description: "스킬과 MCP 연동으로 기능 범위를 넓힙니다.",
    href: "/features/extensions",
  },
  {
    title: "자동화",
    description: "스레드를 예약 실행하여 반복 작업을 자동화합니다.",
    href: "/threads",
  },
];

export default function OverviewPage() {
  return (
    <div className="max-w-3xl">
      <Breadcrumb items={[{ label: "개요" }]} />

      {/* 제목 */}
      <h1
        className="text-2xl font-semibold mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        Codex Desktop이란?
      </h1>

      {/* 한 줄 설명 */}
      <p
        className="text-sm leading-relaxed mb-8"
        style={{ color: "var(--text-secondary)" }}
      >
        Codex Desktop은 개발자를 위한 AI 코딩 에이전트 데스크톱 앱입니다.
        자연어로 코드를 작성·수정하고, 외부 서비스를 연결하며,
        반복 작업을 자동화할 수 있습니다.
      </p>

      {/* 핵심 특징 카드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border p-4"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span style={{ color: "var(--accent)", fontSize: "16px" }}>
                {item.icon}
              </span>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                {item.title}
              </span>
            </div>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* 주요 기능 */}
      <h2
        className="text-base font-semibold mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        주요 기능
      </h2>
      <div className="mb-10">
        <CardList items={features} defaultMode="card" />
      </div>

      {/* 시작하기 CTA */}
      <div
        className="rounded-lg border p-5"
        style={{
          borderColor: "var(--accent)",
          backgroundColor: "var(--accent-muted)",
        }}
      >
        <p
          className="text-sm font-medium mb-1"
          style={{ color: "var(--text-primary)" }}
        >
          처음 사용하시나요?
        </p>
        <p
          className="text-xs mb-3"
          style={{ color: "var(--text-secondary)" }}
        >
          빠른 시작 가이드에서 설치부터 첫 실행까지 단계별로 안내합니다.
        </p>
        <Link
          href="/overview/get-started"
          className="inline-block text-xs px-3 py-1.5 rounded font-medium transition-colors"
          style={{ backgroundColor: "var(--accent)", color: "#fff" }}
        >
          빠른 시작 가이드 →
        </Link>
      </div>
    </div>
  );
}
