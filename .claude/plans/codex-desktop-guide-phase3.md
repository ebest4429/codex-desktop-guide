# Phase 3 — 콘텐츠 구현

> 참조: `.claude/plans/codex-desktop-guide-master.md`
> 사전설계: `.claude/plans/designs/codex-desktop-guide-phase3.md`
> **이 Phase의 목표:** Phase 2에서 만든 빈 페이지(29개)에 실제 콘텐츠를 채운다.
> 공통 컴포넌트(Card, Accordion, Breadcrumb, CodeBlock, Badge)를 활용한다.
> 검색 기능은 Phase 4. 이 Phase는 콘텐츠만 완성.

---

## 작업 항목

### 1. 개요 섹션 (2페이지)

> 취지: 가장 먼저 보는 페이지. 제품 이해와 시작 흐름을 안내.
> 우선순위 1순위.

- ✅ `/overview` — Codex Desktop이란?
  - 제품 소개 (한 줄 설명 + 핵심 특징 카드)
  - 주요 기능 카드 목록 (Card 컴포넌트)
  - 시작하기 링크

- ✅ `/overview/get-started` — 빠른 시작
  - 설치 방법
  - 첫 실행 흐름
  - 다음 단계 안내

### 2. 사용법 섹션 (3페이지)

> 취지: 기본 조작법. 신규 사용자가 두 번째로 보는 섹션.
> 우선순위 1순위.

- ✅ `/usage/basic` — 기본 사용법
- ✅ `/usage/chat` — 대화 시작하기
- ✅ `/usage/files` — 파일 작업

> 각 페이지 구조: Breadcrumb → 제목(h1) → 설명 → Accordion 상세

### 3. 주요기능 섹션 (5페이지)

> 취지: 핵심 기능 설명. 실제 사용 사례와 예시 포함.
> 우선순위 2순위.

- ✅ `/features/multimodal` — 멀티모달 입력
- ✅ `/features/code-execution` — 코드 실행
- ✅ `/features/web-search` — 웹 검색
- ✅ `/features/file-handling` — 파일 처리
- ✅ `/features/extensions` — 확장 기능

### 4. 구독 / 스킬 / MCP 섹션 (3페이지)

> 취지: 확장 기능 및 플랜 안내. 독립 섹션 중 핵심 3개.
> 우선순위 2순위.

- ✅ `/subscription` — 구독 플랜 안내
- ✅ `/skills` — 스킬 소개 및 사용법
- ✅ `/mcp` — MCP 연동 안내

### 5. 메뉴소개 섹션 (13페이지)

> 취지: 각 메뉴 항목 상세 설명. 참조 문서 성격.
> 우선순위 3순위.

- ✅ `/menu/file` — 파일
- ✅ `/menu/edit` — 편집
- ✅ `/menu/view` — 보기
- ✅ `/menu/tools` — 도구
- ✅ `/menu/settings` — 설정
- ✅ `/menu/project` — 프로젝트
- ✅ `/menu/threads` — 스레드
- ✅ `/menu/model-select` — 모델 선택
- ✅ `/menu/context-menu` — 컨텍스트
- ✅ `/menu/skills-menu` — 스킬
- ✅ `/menu/mcp-menu` — MCP
- ✅ `/menu/help` — 도움말
- ✅ `/menu/updates` — 업데이트

> 각 페이지 구조: Breadcrumb → 메뉴명 → 메뉴 항목 목록(Accordion)

### 6. 모델 / 컨텍스트 / 스레드 섹션 (3페이지)

> 취지: 고급 기능 설명. 우선순위 4순위.

- 🔲 `/model` — 모델 선택 안내
- 🔲 `/context` — 컨텍스트 관리
- 🔲 `/threads` — 스레드 관리

---

## 완료 조건

- [ ] 개요 2페이지 콘텐츠 완성
- [ ] 사용법 3페이지 콘텐츠 완성
- [ ] 주요기능 5페이지 콘텐츠 완성
- [ ] 구독/스킬/MCP 3페이지 콘텐츠 완성
- [ ] 메뉴소개 13페이지 콘텐츠 완성
- [ ] 모델/컨텍스트/스레드 3페이지 콘텐츠 완성
- [ ] Phase 4 사전설계 존재 확인 (`designs/codex-desktop-guide-phase4.md`)

---

## 참고

- 콘텐츠 소스: `.Source-Files/image/` 스크린샷 참조
- 검색 기능 연결은 Phase 4
- 모바일 반응형 보완은 Phase 4
- 항목 순서: 1 → 2 → 3 → 4 → 5 → 6 (우선순위 순서 준수)
