# Phase 2 — 기본 UI 구현

> 참조: `.claude/plans/codex-desktop-guide-master.md`
> 사전설계: `.claude/plans/designs/codex-desktop-guide-phase2.md`
> **이 Phase의 목표:** Next.js + Tailwind CSS 기반으로 레이아웃·테마·네비게이션 구현.
> 콘텐츠는 없어도 된다. 빈 페이지로 구조만 완성하는 것이 목표.

---

## 작업 항목

### 1. 프로젝트 초기 설정

> 취지: 이후 모든 구현의 기반. 설정이 잘못되면 전체가 흔들린다.
> Tailwind + Pretendard + CSS 변수를 이 단계에서 완전히 잡는다.

- ✅ Next.js 프로젝트 생성 (App Router)
- ✅ Tailwind CSS 설정
- ✅ Pretendard 폰트 설정
- ✅ 다크 테마 전역 CSS 변수 정의 (색상 팔레트 적용)
- ✅ 기본 디렉토리 구조 생성 (app/, components/, styles/)

### 2. 전역 레이아웃 구현

> 취지: 모든 페이지에서 공유하는 껍데기. 사이드바 + 메인 2단 구조.
> 타이틀 영역(80px~100px) + 검색바 중앙배치 포함.

- ✅ `app/layout.tsx` — 사이드바 + 콘텐츠 영역 2단 레이아웃
- ✅ 타이틀 영역 + 검색바 (자리만 잡기, 기능은 Phase 4)
- ✅ 루트(`/`) → `/overview` 리다이렉트

### 3. 사이드바 컴포넌트

> 취지: 핵심 UX. 리사이즈와 필터링이 이 프로젝트의 차별점.
> 사이드바가 완성되어야 전체 네비게이션 흐름을 검증할 수 있다.

- ✅ 사이드바 기본 레이아웃 (너비 고정 → 리사이즈)
- ✅ drag handle 리사이즈 (min/max width 제한)
- ✅ 필터링 입력창 (실시간 메뉴 항목 필터)
- ✅ 메인 섹션 메뉴 (개요 / 사용법 / 주요기능 / 메뉴소개)
- ✅ 구분선
- ✅ 독립 섹션 (모델 / 컨텍스트 / 구독 / 스킬 / 스레드 / MCP)
- ✅ 현재 페이지 활성 표시

### 4. 공통 컴포넌트 구현

> 취지: Phase 3 콘텐츠 작성 시 바로 사용할 컴포넌트.
> 이 단계에서 완성해야 Phase 3에서 컴포넌트 작업 없이 콘텐츠에 집중할 수 있다.

- ✅ Card 컴포넌트 (카드형 / 리스트형 전환)
- ✅ Accordion 컴포넌트 (다중 열기 가능)
- ✅ Breadcrumb 컴포넌트
- ✅ 코드 블록 컴포넌트
- ✅ 배지/태그 컴포넌트 (버전, 플랜 표시용)

### 5. 페이지 라우트 생성 (빈 페이지)

> 취지: 모든 URL이 존재해야 사이드바 네비게이션을 실제로 검증할 수 있다.
> 콘텐츠는 Phase 3에서 채운다.

- ✅ 개요 라우트 (`/overview`, `/overview/get-started`)
- ✅ 사용법 라우트 (`/usage/[slug]`)
- ✅ 주요기능 라우트 (`/features/[slug]`)
- ✅ 메뉴소개 라우트 (`/menu/[slug]`)
- ✅ 독립 섹션 라우트 (`/model`, `/context`, `/subscription`, `/skills`, `/threads`, `/mcp`)

### 6. GitHub Pages 배포 연결

> 취지: 배포 환경을 초기에 확보해야 이후 단계에서 실제 URL로 검증 가능.
> 변경: 초기 플랜에 Vercel로 기록됐으나 실제 결정은 GitHub Pages였음. 누락된 결정 반영.

- ✅ GitHub 레포 생성 및 초기 커밋 (ebest4429/codex-desktop-guide)
- 🔄 GitHub Pages 배포 설정 (next.config.ts output: 'export' + GitHub Actions)
- 🔲 배포 확인 (빈 페이지 정상 렌더링)

---

## 완료 조건

- [x] Next.js + Tailwind 초기 설정 완료 및 로컬 실행 확인
- [x] 전역 레이아웃 (사이드바 + 메인) 렌더링 확인
- [x] 사이드바 리사이즈 + 필터링 동작 확인
- [x] 공통 컴포넌트 5종 구현 완료
- [x] 모든 라우트 빈 페이지로 존재 및 사이드바 네비게이션 동작 확인
- [ ] GitHub Pages 배포 URL 확인

---

## 참고

- 콘텐츠 작성은 Phase 3. 이 Phase는 껍데기(레이아웃·컴포넌트·라우트)만 완성.
- 검색 기능 연결은 Phase 4.
- 모바일 반응형은 Phase 4에서 보완. 이 Phase는 데스크톱 우선.
- 항목 순서: 1 → 2 → 3 → 4 → 5 → 6 (순서 준수)
