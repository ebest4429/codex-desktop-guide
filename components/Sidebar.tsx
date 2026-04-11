"use client";

// Sidebar — 네비게이션 전용
// 취지: 타이틀 영역에 검색창 통합 후 사이드바 검색창·필터 로직 완전 제거.
//       순수 네비게이션 목록만 유지. 리사이즈 기능은 데스크톱에서만 유지.
//       모바일: fixed 오버레이로 햄버거 토글. isOpen/onClose prop으로 제어.

import { useRef, useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

const SIDEBAR_DEFAULT_WIDTH = 260;
const SIDEBAR_MIN_WIDTH = 180;
const SIDEBAR_MAX_WIDTH = 400;

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [width, setWidth] = useState(SIDEBAR_DEFAULT_WIDTH);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startWidth = useRef(0);

  // 리사이즈 핸들러
  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      isDragging.current = true;
      startX.current = e.clientX;
      startWidth.current = width;
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    },
    [width]
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const delta = e.clientX - startX.current;
      const newWidth = Math.min(
        SIDEBAR_MAX_WIDTH,
        Math.max(SIDEBAR_MIN_WIDTH, startWidth.current + delta)
      );
      setWidth(newWidth);
    };

    const onMouseUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <aside
      className={[
        "flex-shrink-0 flex flex-col border-r overflow-y-auto transition-transform duration-200 ease-in-out",
        // 모바일: fixed 오버레이 — 햄버거 토글로 열고 닫음
        "fixed inset-y-0 left-0 z-40 h-full",
        isOpen ? "translate-x-0" : "-translate-x-full",
        // 데스크톱: 일반 레이아웃 내 배치, 리사이즈 가능
        "md:relative md:translate-x-0 md:z-auto",
      ].join(" ")}
      style={{
        width,
        minWidth: SIDEBAR_MIN_WIDTH,
        maxWidth: SIDEBAR_MAX_WIDTH,
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border)",
      }}
    >
      {/* 모바일 닫기 버튼 */}
      <div className="md:hidden flex justify-end px-3 pt-3">
        <button
          onClick={onClose}
          className="p-1.5 rounded-md transition-colors"
          style={{ color: "var(--text-secondary)" }}
          aria-label="메뉴 닫기"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* 네비게이션 목록 */}
      <nav className="flex-1 pt-3 pb-8">
        {/* 메인 섹션 */}
        {MAIN_NAV.map((section) => (
          <div key={section.title} className="mb-1">
            <div
              className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--text-muted)" }}
            >
              {section.title}
            </div>
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-4 py-1.5 text-sm rounded-sm mx-1 transition-colors"
                  style={{
                    color: isActive ? "var(--accent)" : "var(--text-secondary)",
                    backgroundColor: isActive ? "var(--accent-muted)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-hover)";
                      (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    }
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}

        {/* 구분선 */}
        <div
          className="my-2 mx-4 border-t"
          style={{ borderColor: "var(--border)" }}
        />

        {/* 독립 섹션 */}
        {INDEPENDENT_NAV.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center px-4 py-1.5 text-sm rounded-sm mx-1 transition-colors"
              style={{
                color: isActive ? "var(--accent)" : "var(--text-secondary)",
                backgroundColor: isActive ? "var(--accent-muted)" : "transparent",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-hover)";
                  (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                }
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* 리사이즈 drag handle */}
      <div
        onMouseDown={onMouseDown}
        className="absolute top-0 right-0 w-1 h-full cursor-col-resize transition-colors hover:bg-current"
        style={{ color: "var(--accent)" }}
        title="사이드바 너비 조절"
      />
    </aside>
  );
}
