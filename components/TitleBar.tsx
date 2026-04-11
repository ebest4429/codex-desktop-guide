"use client";

// TitleBar — 전체 상단 타이틀 영역
// 취지: 사이드바 검색창 제거 후 검색 기능을 타이틀 영역으로 통합.
//       pathname 기반으로 현재 선택된 섹션·페이지를 중앙 상단에 표시.
//       검색창은 타이틀 영역 내 하단 중앙 배치.

import { useState } from "react";
import { usePathname } from "next/navigation";

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

export default function TitleBar() {
  const pathname = usePathname();
  const [search, setSearch] = useState("");

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
      <div className="h-full flex flex-col justify-center px-6 gap-2">

        {/* 상단 행: 좌측 사이트명 + 중앙 선택 경로 */}
        <div className="flex items-center">
          {/* 좌측: 사이트 타이틀 */}
          <div
            className="text-base font-semibold flex-shrink-0"
            style={{ color: "var(--text-primary)" }}
          >
            Codex Desktop 가이드
          </div>

          {/* 중앙: 현재 선택 경로 */}
          <div className="flex-1 flex justify-center">
            {pageInfo && (
              <div
                className="flex items-center gap-2 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {pageInfo.section && (
                  <>
                    <span>{pageInfo.section}</span>
                    <span style={{ color: "var(--text-muted)" }}>·</span>
                  </>
                )}
                <span style={{ color: "var(--text-primary)" }}>{pageInfo.page}</span>
              </div>
            )}
          </div>

          {/* 우측: 균형용 여백 (사이트 타이틀과 동일 너비) */}
          <div className="flex-shrink-0" style={{ width: "180px" }} />
        </div>

        {/* 하단 행: 중앙 배치 검색창 */}
        <div className="flex justify-center">
          <div
            className="relative flex items-center"
            style={{ width: "min(560px, 100%)" }}
          >
            {/* 검색 아이콘 */}
            <svg
              className="absolute left-3 pointer-events-none"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "var(--text-muted)" }}
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="검색... (준비 중)"
              className="w-full h-9 rounded-lg pl-9 pr-4 text-sm outline-none transition-colors"
              style={{
                backgroundColor: "var(--bg-tertiary)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
              }}
              onFocus={(e) => {
                (e.target as HTMLInputElement).style.borderColor = "var(--accent)";
              }}
              onBlur={(e) => {
                (e.target as HTMLInputElement).style.borderColor = "var(--border)";
              }}
            />
          </div>
        </div>

      </div>
    </header>
  );
}
