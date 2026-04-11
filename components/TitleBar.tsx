"use client";

// TitleBar — 전체 상단 타이틀 영역
// 취지: 검색 기능 포기 결정(2026-04-12)에 따라 검색창 제거.
//       모바일에서는 햄버거 버튼 표시 + 헤더 높이 축소.
//       desktop: 110px / mobile: CSS 변수로 70px 적용.

import { usePathname } from "next/navigation";

interface TitleBarProps {
  onMenuToggle: () => void;
}

// ── NAV 데이터 (Sidebar와 동일 구조 유지) ──────────────────────
const MAIN_NAV = [
  {
    title: "개요",
    items: [
      { label: "Codex Desktop이란?", href: "/overview" },
      { label: "빠른 시작", href: "/overview/get-started" },
    ],
  },
  {
    title: "사용법",
    items: [
      { label: "기본 사용법", href: "/usage/basic" },
      { label: "대화 시작하기", href: "/usage/chat" },
      { label: "파일 작업", href: "/usage/files" },
    ],
  },
  {
    title: "주요기능",
    items: [
      { label: "멀티모달 입력", href: "/features/multimodal" },
      { label: "코드 실행", href: "/features/code-execution" },
      { label: "웹 검색", href: "/features/web-search" },
      { label: "파일 처리", href: "/features/file-handling" },
      { label: "확장 기능", href: "/features/extensions" },
    ],
  },
  {
    title: "메뉴소개",
    items: [
      { label: "파일", href: "/menu/file" },
      { label: "편집", href: "/menu/edit" },
      { label: "보기", href: "/menu/view" },
      { label: "도구", href: "/menu/tools" },
      { label: "설정", href: "/menu/settings" },
      { label: "프로젝트", href: "/menu/project" },
      { label: "스레드", href: "/menu/threads" },
      { label: "모델 선택", href: "/menu/model-select" },
      { label: "컨텍스트", href: "/menu/context-menu" },
      { label: "스킬", href: "/menu/skills-menu" },
      { label: "MCP", href: "/menu/mcp-menu" },
      { label: "도움말", href: "/menu/help" },
      { label: "업데이트", href: "/menu/updates" },
    ],
  },
];

const INDEPENDENT_NAV = [
  { label: "모델", href: "/model" },
  { label: "컨텍스트", href: "/context" },
  { label: "구독", href: "/subscription" },
  { label: "스킬", href: "/skills" },
  { label: "스레드", href: "/threads" },
  { label: "MCP", href: "/mcp" },
];

// ── pathname → 섹션 + 페이지 레이블 ───────────────────────────
function getPageInfo(pathname: string): { section: string | null; page: string } | null {
  for (const section of MAIN_NAV) {
    for (const item of section.items) {
      if (item.href === pathname) {
        return { section: section.title, page: item.label };
      }
    }
  }
  for (const item of INDEPENDENT_NAV) {
    if (item.href === pathname) {
      return { section: null, page: item.label };
    }
  }
  return null;
}

export default function TitleBar({ onMenuToggle }: TitleBarProps) {
  const pathname = usePathname();

  const pageInfo = getPageInfo(pathname);

  return (
    <header
      className="flex-shrink-0 w-full border-b"
      style={{
        height: "var(--header-height)",
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="h-full flex items-center px-4 md:px-8 gap-3">

        {/* 모바일 햄버거 버튼 */}
        <button
          onClick={onMenuToggle}
          className="md:hidden flex-shrink-0 p-1.5 rounded-md transition-colors"
          style={{ color: "var(--text-secondary)" }}
          aria-label="메뉴 열기"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* 좌측: 사이트 타이틀 */}
        <div
          className="text-lg md:text-2xl font-bold flex-shrink-0 tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          Codex Desktop 가이드
        </div>

        {/* 중앙: 현재 선택 경로 (모바일에서 숨김) */}
        <div className="hidden md:flex flex-1 justify-center">
          {pageInfo && (
            <div
              className="flex items-center gap-2.5 text-base"
              style={{ color: "var(--text-secondary)" }}
            >
              {pageInfo.section && (
                <>
                  <span className="font-medium">{pageInfo.section}</span>
                  <span style={{ color: "var(--text-muted)" }}>·</span>
                </>
              )}
              <span className="font-semibold text-lg" style={{ color: "var(--text-primary)" }}>
                {pageInfo.page}
              </span>
            </div>
          )}
        </div>

        {/* 우측 균형용 여백 — 데스크톱에서만 */}
        <div className="hidden md:block flex-shrink-0" style={{ width: "220px" }} />

      </div>
    </header>
  );
}
