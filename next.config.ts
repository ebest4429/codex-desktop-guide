import type { NextConfig } from "next";

// GitHub Pages 정적 배포 설정
// 취지: GitHub Pages는 정적 파일만 제공. output: 'export'로 빌드 시 HTML/CSS/JS 파일 생성.
const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;
