# Phase 2 사전설계 — 기본 UI 구현

> 참조: `.claude/plans/codex-desktop-guide-master.md`
> **이 문서의 목적:** Phase 1에서 확정된 설계를 바탕으로 Phase 2 구현 범위와 순서를 사전 정의.
> Phase 2 활성화 시 이 문서를 기반으로 `plans/codex-desktop-guide-phase2.md` 작성.
> 구현 중 설계 수정이 최소화되도록 이 시점에 최대한 구체적으로 정의한다.

---

## Phase 2 목표

Next.js + Tailwind CSS 기반으로 전체 레이아웃·테마·네비게이션을 구현한다.
콘텐츠는 없어도 되며, 빈 페이지로 구조만 완성하는 것이 목표.

---

## 전제 조건 (Phase 1 확정 사항)

| 항목 | 확정값 |
|------|--------|
| 프레임워크 | Next.js (App Router) |
| CSS | Tailwind CSS |
| 배포 | Vercel |
| 폰트 | Pretendard |
| 테마 | 다크 전용 |
| 배경 | `#0d0d0d` (기본), `#1a1a1a` (카드), `#111111` (사이드바) |
| 텍스트 | `#f5f5f5` (기본), `#b0b0b0` (보조), `#e0e0e0` (사이드바) |
| 강조색 | `#10a37f` |
| 경계선 | `#2a2a2a` |
| 네비게이션 | 사이드바 (리사이즈 가능 + 필터링 입력창) |
| 레이아웃 | 카드형 / 리스트형 |

---

## 구현 항목 및 순서

### 1. 프로젝트 초기 설정

- Next.js 프로젝트 생성 (App Router)
- Tailwind CSS 설정
- Pretendard 폰트 설정 (`@font-face` 또는 CDN)
- 다크 테마 전역 CSS 변수 정의
- 기본 디렉토리 구조 생성

```
src/
├── app/
│   ├── layout.tsx       ← 전체 레이아웃 (사이드바 + 메인)
│   ├── page.tsx         ← 루트 → /overview 리다이렉트
│   ├── overview/
│   ├── usage/
│   ├── features/
│   ├── menu/
│   ├── model/
│   ├── context/
│   ├── subscription/
│   ├── skills/
│   ├── threads/
│   └── mcp/
├── components/
│   ├── Sidebar/
│   ├── SearchBar/
│   ├── Card/
│   ├── Accordion/
│   └── Breadcrumb/
└── styles/
    └── globals.css
```

### 2. 전역 레이아웃 구현

> 취지: 모든 페이지에서 공유하는 레이아웃. 사이드바 + 메인 영역 구조.

- `app/layout.tsx` — 사이드바 + 콘텐츠 영역 2단 레이아웃
- 타이틀 영역 (80px~100px) + 검색바 중앙배치
- 반응형 고려 (데스크톱 우선)

### 3. 사이드바 컴포넌트

> 취지: 핵심 컴포넌트. 리사이즈와 필터링이 메인 UX.

- 리사이즈 가능 (drag handle, min/max width 제한)
- 필터링 입력창 (실시간 메뉴 항목 필터)
- 메인 섹션 (개요 / 사용법 / 주요기능 / 메뉴소개)
- 구분선
- 독립 섹션 (모델 / 컨텍스트 / 구독 / 스킬 / 스레드 / MCP)
- 현재 페이지 활성 표시

### 4. 공통 컴포넌트 구현

- **SearchBar** — 타이틀 하단 중앙, 전체 페이지 검색 (Phase 4에서 기능 연결)
- **Card** — 제목 + 설명 + 링크, 카드형/리스트형 전환 가능
- **Accordion** — 열림/닫힘, 다중 열기 가능
- **Breadcrumb** — 현재 위치 표시
- **구분선** — 사이드바 섹션 분리용

### 5. 페이지 라우트 생성 (빈 페이지)

각 URL에 빈 페이지 파일 생성. 콘텐츠는 Phase 3에서 채운다.

| URL | 파일 경로 |
|-----|----------|
| `/overview` | `app/overview/page.tsx` |
| `/overview/get-started` | `app/overview/get-started/page.tsx` |
| `/usage/[slug]` | `app/usage/[slug]/page.tsx` |
| `/features/[slug]` | `app/features/[slug]/page.tsx` |
| `/menu/[slug]` | `app/menu/[slug]/page.tsx` |
| `/model` | `app/model/page.tsx` |
| `/context` | `app/context/page.tsx` |
| `/subscription` | `app/subscription/page.tsx` |
| `/skills` | `app/skills/page.tsx` |
| `/threads` | `app/threads/page.tsx` |
| `/mcp` | `app/mcp/page.tsx` |

### 6. Vercel 배포 연결

- GitHub 레포 생성 및 연결
- Vercel 프로젝트 연결
- 배포 확인

---

## 완료 조건

- [ ] Next.js + Tailwind 초기 설정 완료
- [ ] 전역 레이아웃 (사이드바 + 메인) 구현 완료
- [ ] 사이드바 리사이즈 + 필터링 동작 확인
- [ ] 공통 컴포넌트 4종 이상 구현 완료
- [ ] 모든 라우트 빈 페이지로 존재 확인
- [ ] Vercel 배포 확인

---

## 참고

- 콘텐츠 작성은 Phase 3. Phase 2는 껍데기(레이아웃·컴포넌트·라우트)만 완성.
- 검색 기능 연결은 Phase 4.
- 모바일 반응형은 Phase 4에서 보완. Phase 2는 데스크톱 우선.
