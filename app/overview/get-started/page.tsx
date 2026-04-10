"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

// 빠른 시작 페이지
// 취지: 신규 사용자가 Codex Desktop을 처음 설치하고 사용하기까지의
//       전체 흐름을 단계별로 안내. Accordion으로 각 단계 상세 표시.

const steps = [
  {
    step: "01",
    title: "다운로드 및 설치",
    summary: "Codex Desktop 설치 파일을 받아 설치합니다.",
    detail: (
      <div className="space-y-2">
        <p>공식 사이트에서 운영체제에 맞는 설치 파일을 다운로드합니다.</p>
        <ul className="list-disc list-inside space-y-1 text-xs" style={{ color: "var(--text-secondary)" }}>
          <li>macOS: .dmg 파일 실행 → 앱 폴더로 이동</li>
          <li>Windows: .exe 설치 파일 실행 → 안내에 따라 설치</li>
        </ul>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          최소 사양: macOS 13 이상 / Windows 10 이상
        </p>
      </div>
    ),
  },
  {
    step: "02",
    title: "첫 실행 및 로그인",
    summary: "앱을 실행하고 계정으로 로그인합니다.",
    detail: (
      <div className="space-y-2">
        <p>설치 후 Codex Desktop을 실행하면 로그인 화면이 나타납니다.</p>
        <ul className="list-disc list-inside space-y-1 text-xs" style={{ color: "var(--text-secondary)" }}>
          <li>기존 계정이 있다면 이메일/비밀번호 또는 소셜 로그인으로 진행</li>
          <li>신규 계정은 회원가입 후 이메일 인증 완료</li>
          <li>로그인 후 구독 플랜을 선택하거나 무료 플랜으로 시작</li>
        </ul>
      </div>
    ),
  },
  {
    step: "03",
    title: "첫 대화 시작",
    summary: "입력창에 질문이나 작업을 입력하여 AI와 대화를 시작합니다.",
    detail: (
      <div className="space-y-2">
        <p>메인 화면 하단 입력창에 원하는 작업을 자연어로 입력합니다.</p>
        <ul className="list-disc list-inside space-y-1 text-xs" style={{ color: "var(--text-secondary)" }}>
          <li>텍스트 입력 외에도 이미지, 파일 첨부 가능</li>
          <li>대화는 스레드 단위로 관리됩니다</li>
          <li>왼쪽 사이드바에서 이전 스레드를 불러올 수 있습니다</li>
        </ul>
        <div
          className="mt-2 px-3 py-2 rounded text-xs"
          style={{
            backgroundColor: "var(--bg-tertiary)",
            color: "var(--text-secondary)",
            borderLeft: "2px solid var(--accent)",
          }}
        >
          예시: &ldquo;이 파일의 버그를 찾아줘&rdquo;, &ldquo;React 컴포넌트 만들어줘&rdquo;
        </div>
      </div>
    ),
  },
  {
    step: "04",
    title: "스킬 설치 (선택)",
    summary: "Plugins 메뉴에서 필요한 스킬을 설치하여 기능을 확장합니다.",
    detail: (
      <div className="space-y-2">
        <p>상단 메뉴 Plugins → 스킬 탭에서 원하는 스킬을 검색하여 설치합니다.</p>
        <ul className="list-disc list-inside space-y-1 text-xs" style={{ color: "var(--text-secondary)" }}>
          <li>코딩: Netlify, Cloudflare, GitHub 등</li>
          <li>생산성: Slack, Gmail, Notion, Linear 등</li>
          <li>설치한 스킬은 Manage 탭에서 켜고 끌 수 있습니다</li>
        </ul>
      </div>
    ),
  },
  {
    step: "05",
    title: "외형 및 설정 조정 (선택)",
    summary: "Settings에서 테마, 폰트, 성격 등을 내 작업 스타일에 맞게 설정합니다.",
    detail: (
      <div className="space-y-2">
        <p>설정 메뉴에서 다양한 항목을 조정할 수 있습니다.</p>
        <ul className="list-disc list-inside space-y-1 text-xs" style={{ color: "var(--text-secondary)" }}>
          <li>Appearance: 색상 테마, 폰트 크기, 코드 폰트 변경</li>
          <li>개인 맞춤 설정: AI 응답 성격, 맞춤형 지침 추가</li>
          <li>구성: 승인 정책, 샌드박스 설정, 외부 에이전트 설정 가져오기</li>
        </ul>
      </div>
    ),
  },
];

const nextSteps = [
  { label: "기본 사용법", href: "/usage/basic", desc: "자주 쓰는 조작법 익히기" },
  { label: "주요 기능 살펴보기", href: "/features/multimodal", desc: "멀티모달, 코드 실행 등" },
  { label: "스킬 소개", href: "/skills", desc: "설치 가능한 스킬 전체 목록" },
  { label: "MCP 연동", href: "/mcp", desc: "외부 도구 연결 방법" },
];

export default function GetStartedPage() {
  return (
    <div className="max-w-3xl">
      <Breadcrumb
        items={[
          { label: "개요", href: "/overview" },
          { label: "빠른 시작" },
        ]}
      />

      <h1
        className="text-2xl font-semibold mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        빠른 시작
      </h1>
      <p
        className="text-sm leading-relaxed mb-8"
        style={{ color: "var(--text-secondary)" }}
      >
        Codex Desktop 설치부터 첫 대화까지, 5단계로 시작하는 방법을 안내합니다.
      </p>

      {/* 단계별 Accordion */}
      <div className="mb-10 space-y-3">
        {steps.map((s, i) => (
          <div
            key={i}
            className="rounded-lg border overflow-hidden"
            style={{ borderColor: "var(--border)" }}
          >
            <details className="group">
              <summary
                className="flex items-center gap-4 px-4 py-3 cursor-pointer select-none"
                style={{ backgroundColor: "var(--bg-secondary)" }}
              >
                <span
                  className="text-xs font-mono font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  {s.step}
                </span>
                <div className="flex-1">
                  <span
                    className="text-sm font-medium block"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {s.title}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {s.summary}
                  </span>
                </div>
                <span
                  className="text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  ▾
                </span>
              </summary>
              <div
                className="px-4 py-3 text-sm"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  color: "var(--text-secondary)",
                  borderTop: "1px solid var(--border)",
                }}
              >
                {s.detail}
              </div>
            </details>
          </div>
        ))}
      </div>

      {/* 다음 단계 */}
      <h2
        className="text-base font-semibold mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        다음 단계
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {nextSteps.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg border p-4 block transition-colors"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-tertiary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-secondary)";
            }}
          >
            <p
              className="text-sm font-medium mb-0.5"
              style={{ color: "var(--text-primary)" }}
            >
              {item.label}
            </p>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              {item.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
