# Phase 3 사전설계 — 콘텐츠 구현

> 참조: `.claude/plans/codex-desktop-guide-master.md`
> **이 문서의 목적:** Phase 2 완료 후 Phase 3 구현 범위와 순서를 사전 정의.
> Phase 3 활성화 시 이 문서를 기반으로 `plans/codex-desktop-guide-phase3.md` 작성.

---

## Phase 3 목표

Phase 2에서 만든 빈 페이지(29개)에 실제 콘텐츠를 채운다.
공통 컴포넌트(Card, Accordion, Breadcrumb, CodeBlock, Badge)를 활용한다.
검색 기능은 Phase 4. 이 Phase는 콘텐츠만 완성.

---

## 전제 조건 (Phase 2 완료 사항)

| 항목 | 확정값 |
|------|--------|
| 레이아웃 | 사이드바(180~400px 리사이즈) + 헤더(90px) + 메인 2단 |
| 사이드바 | 실시간 필터, MAIN_NAV 4섹션 + 구분선 + INDEPENDENT_NAV 6항목, 활성 표시 |
| 컴포넌트 | Card(카드/리스트 전환), Accordion(다중 열기), Breadcrumb, CodeBlock(복사), Badge(4variant) |
| 라우트 | 29개 빈 페이지 존재 |
| 배포 | https://ebest4429.github.io/codex-desktop-guide/ |
| 스택 | Next.js 16 + Tailwind v4 + Pretendard CDN |

---

## 구현 항목 및 순서

### 1. 개요 섹션 (2페이지)

우선순위 1순위. 가장 먼저 보는 페이지.

- `/overview` — Codex Desktop이란?
  - 제품 소개 (한 줄 설명 + 핵심 특징 3~5개)
  - 주요 기능 카드 목록 (Card 컴포넌트)
  - 시작하기 링크

- `/overview/get-started` — 빠른 시작
  - 설치 방법
  - 첫 실행 흐름
  - 다음 단계 안내

### 2. 사용법 섹션 (3페이지)

우선순위 1순위.

- `/usage/basic` — 기본 사용법
- `/usage/chat` — 대화 시작하기
- `/usage/files` — 파일 작업

각 페이지 구조: Breadcrumb → 제목 → 설명 → 아코디언 상세 + 코드블록/배지 활용

### 3. 주요기능 섹션 (5페이지)

우선순위 2순위.

- `/features/multimodal` — 멀티모달 입력
- `/features/code-execution` — 코드 실행
- `/features/web-search` — 웹 검색
- `/features/file-handling` — 파일 처리
- `/features/extensions` — 확장 기능

### 4. 구독 / 스킬 / MCP 섹션 (3페이지)

우선순위 2순위.

- `/subscription` — 구독 플랜 안내
- `/skills` — 스킬 소개 및 사용법
- `/mcp` — MCP 연동 안내

### 5. 메뉴소개 섹션 (13페이지)

우선순위 3순위. 각 메뉴 항목 상세 설명.

- `/menu/file`, `/menu/edit`, `/menu/view`, `/menu/tools`, `/menu/settings`
- `/menu/project`, `/menu/threads`, `/menu/model-select`, `/menu/context-menu`
- `/menu/skills-menu`, `/menu/mcp-menu`, `/menu/help`, `/menu/updates`

각 페이지 구조: Breadcrumb → 메뉴명 → 메뉴 항목 목록(Accordion)

### 6. 모델 / 컨텍스트 / 스레드 / 설정 섹션 (3페이지)

우선순위 4순위.

- `/model` — 모델 선택 안내
- `/context` — 컨텍스트 관리
- `/threads` — 스레드 관리

---

## 콘텐츠 작성 기준

- 실제 Codex Desktop 화면 기반으로 작성 (스크린샷 `.Source-Files/image/` 참조)
- 각 페이지: Breadcrumb 필수, 제목(h1), 설명(본문), 상세(Accordion)
- 코드 예시는 CodeBlock, 버전/플랜 표시는 Badge
- 우선순위 순서 준수: 1→2→3→4→5→6

---

## 완료 조건

- [ ] 개요 2페이지 콘텐츠 완성
- [ ] 사용법 3페이지 콘텐츠 완성
- [ ] 주요기능 5페이지 콘텐츠 완성
- [ ] 구독/스킬/MCP 3페이지 콘텐츠 완성
- [ ] 메뉴소개 13페이지 콘텐츠 완성
- [ ] 모델/컨텍스트/스레드 3페이지 콘텐츠 완성
- [ ] Phase 4 사전설계 작성 (`designs/codex-desktop-guide-phase4.md`)

---

## 참고

- 검색 기능 연결은 Phase 4.
- 모바일 반응형 보완은 Phase 4.
- 콘텐츠 소스: `.Source-Files/image/` 스크린샷 참조.
