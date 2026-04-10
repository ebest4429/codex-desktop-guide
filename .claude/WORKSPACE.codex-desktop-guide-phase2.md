# WORKSPACE.md

> 세션 시작 시 읽는다.
> **기본 읽기**: 현재 위치 + 남은 과제까지.
> **진행 이력**: 필요할 때만 추가 요청.

---

## 현재 위치

| 항목 | 값 |
|------|-----|
| PROJECT | codex-desktop-guide (Codex Desktop 가이드 웹사이트) |
| 현재 Phase | Phase 2 — 기본 UI 구현 |
| 상태 | 🔄 진행 중 — 항목 1~5 + GitHub 레포 완료. GitHub Pages 배포 설정 진행 필요 |
| 현재 플랜 | `.claude/plans/codex-desktop-guide-phase2.md` |
| 마스터플랜 | `.claude/plans/codex-desktop-guide-master.md` |

---

## 남은 과제

Phase 2 작업 항목 순서대로 진행. 상세 내용은 `codex-desktop-guide-phase2.md` 참조.

완료:
- 항목 1: Next.js 16 + Tailwind v4 프로젝트 초기 설정, Pretendard 폰트, 다크테마 CSS 변수
- 항목 2: 전역 레이아웃 (사이드바 + 메인 2단), 헤더/검색바 자리, 루트→/overview 리다이렉트
- 항목 3: Sidebar 컴포넌트 (리사이즈 drag handle, 실시간 필터, 활성 표시)
- 항목 4: Card, Accordion, Breadcrumb, CodeBlock, Badge 컴포넌트 5종
- 항목 5: 11개 라우트 빈 페이지 생성 (overview, usage/[slug], features/[slug], menu/[slug], 독립 6개)

진행 예정:
- 항목 6: GitHub Pages 배포 확인
  - next.config.ts output: 'export' + basePath: '/codex-desktop-guide' + images.unoptimized: true 설정 완료
  - .github/workflows/deploy.yml 작성 완료 (peaceiris/actions-gh-pages@v4)
  - 로컬 빌드 검증 완료 (33페이지 정적 생성)
  - GitHub push 후 Actions 실행 확인 + Pages 설정 활성화 필요

---

## 진행 이력

### 2026-04-10 점검-연결·점검-구현 수정

| 항목 | 내용 |
|------|------|
| 배포 방식 수정 | Vercel → GitHub Pages (마스터플랜·CONTEXT·Phase2플랜·WORKSPACE 4곳 일괄 수정) |
| next.config.ts | output: 'export' 추가 (GitHub Pages 정적 빌드 필수) |
| 동적 라우트 | generateStaticParams() 3개 파일 추가 (usage/features/menu) |
| CONTEXT.md | 디렉토리 구조 실제 구현 반영 (app/components/styles/) |
| 점검-scope.md | HOOK_GUIDE·SKILL_GUIDE 경로 수정 + 구현 대상 등록 |
| GitHub 레포 | ebest4429/codex-desktop-guide public 생성 + push 완료 |

### 2026-04-09 Phase 2 전환

| 항목 | 내용 |
|------|------|
| Phase 1 완료 | 기술스택·페이지구조·콘텐츠구조·디자인시스템·사전설계 전체 확정 |
| WORKSPACE 아카이브 | WORKSPACE.codex-desktop-guide-phase1.md |
| Phase 2 진입 | 사전설계(designs/codex-desktop-guide-phase2.md) 기반으로 구현 시작 |
