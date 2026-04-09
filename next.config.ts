import type { NextConfig } from "next";

// GitHub Pages 정적 배포 설정
// 취지: GitHub Pages는 정적 파일만 제공. output: 'export'로 빌드 시 HTML/CSS/JS 파일 생성.
// basePath: 프로젝트 레포 배포 시 URL이 /codex-desktop-guide/ 하위에 위치하므로 필수.
//           없으면 CSS/JS 경로가 루트 기준으로 잘못 생성되어 페이지가 깨짐.
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/codex-desktop-guide",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
