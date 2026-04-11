"use client";

// LayoutShell — 모바일 사이드바 토글 상태 관리
// 취지: TitleBar(햄버거 버튼)와 Sidebar(오버레이) 간 공유 상태가 필요해
//       클라이언트 wrapper 컴포넌트로 분리. layout.tsx는 서버 컴포넌트로 유지.

import { useState } from "react";
import TitleBar from "./TitleBar";
import Sidebar from "./Sidebar";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* 타이틀 영역 — sticky */}
      <div className="sticky top-0 z-50">
        <TitleBar onMenuToggle={() => setSidebarOpen((v) => !v)} />
      </div>

      {/* 모바일 오버레이 배경 — 사이드바 외부 클릭 시 닫힘 */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 하단 영역: 사이드바 + 콘텐츠 */}
      <div className="flex flex-1 min-h-0">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">{children}</main>
      </div>
    </>
  );
}
