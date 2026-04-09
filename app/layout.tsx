import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

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
        className="h-full flex"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <Sidebar />

        {/* 메인 래퍼 */}
        <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
          {/* 타이틀/검색 헤더 — 80px~100px, 검색바 중앙배치 */}
          <header
            className="flex-shrink-0 flex items-center justify-center border-b px-8"
            style={{
              height: "var(--header-height)",
              backgroundColor: "var(--bg-primary)",
              borderColor: "var(--border)",
            }}
          >
            <div className="w-full max-w-2xl">
              {/* 검색바 자리 — 기능은 Phase 4에서 구현 */}
              <div
                className="w-full h-10 rounded-lg border flex items-center px-4"
                style={{
                  backgroundColor: "var(--bg-tertiary)",
                  borderColor: "var(--border)",
                  color: "var(--text-muted)",
                }}
              >
                <span className="text-sm">검색...</span>
              </div>
            </div>
          </header>

          {/* 콘텐츠 영역 */}
          <main className="flex-1 overflow-y-auto p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
