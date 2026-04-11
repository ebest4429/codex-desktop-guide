import type { Metadata } from "next";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

// 레이아웃 구조 변경 (Phase 4 모바일 반응형)
// 취지: 모바일 사이드바 토글 상태를 TitleBar-Sidebar 간 공유해야 하므로
//       LayoutShell(클라이언트 컴포넌트)로 분리. layout.tsx는 서버 컴포넌트 유지.

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
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
