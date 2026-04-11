import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TitleBar from "@/components/TitleBar";

// 레이아웃 구조 변경 (Phase 4)
// 취지: 사이드바 검색창 제거 + 타이틀 영역 전체 상단 배치.
//       타이틀바는 sticky로 스크롤 시에도 항상 상단 고정.
//       하단 영역: 사이드바(고정) + 메인 콘텐츠(스크롤)

export const metadata: Metadata = {
  title: "Codex Desktop 가이드",
  description: "Codex Desktop의 전체 기능과 사용법을 다루는 가이드",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body
        className="h-full flex flex-col"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        {/* 타이틀 영역 — sticky, 전체 너비 */}
        <div className="sticky top-0 z-50">
          <TitleBar />
        </div>

        {/* 하단 영역: 사이드바 + 콘텐츠 */}
        <div className="flex flex-1 min-h-0">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
