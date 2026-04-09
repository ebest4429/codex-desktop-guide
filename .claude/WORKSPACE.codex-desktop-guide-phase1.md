# WORKSPACE.md

> 세션 시작 시 읽는다.
> **기본 읽기**: 현재 위치 + 남은 과제까지.
> **진행 이력**: 필요할 때만 추가 요청.

---

## 현재 위치

| 항목 | 값 |
|------|-----|
| PROJECT | codex-desktop-guide (Codex Desktop 가이드 웹사이트) |
| 현재 Phase | Phase 1 — 기술스택 협의 + 전체 구조 설계 |
| 상태 | ✅ Phase 1 전체 완료 — Phase 2 진입 준비 완료 |
| 현재 플랜 | `.claude/plans/codex-desktop-guide-phase1.md` |
| 마스터플랜 | `.claude/plans/codex-desktop-guide-master.md` |

---

## 남은 과제

Phase 1 작업 항목 순서대로 진행. 상세 내용은 `codex-desktop-guide-phase1.md` 참조.

완료:
- 항목 1: 기술스택 확정 — Next.js + Tailwind CSS + Vercel, 사이드바 리사이즈+필터링
- 항목 2: 페이지 구조 확정 — 최상위 메뉴 10개, 최대 1단계 중첩, 단순 URL 구조
- 항목 3: 콘텐츠 구조 확정 — 실제 화면 기반 전체 페이지 목록 + 우선순위 4단계

- 항목 4: 디자인 시스템 확정 — 색상(#0d0d0d배경/#f5f5f5텍스트/#10a37f강조), 타이포 8단계, 컴포넌트 8종

- 항목 5: Phase 2 사전설계 작성 완료 (designs/codex-desktop-guide-phase2.md)

다음 단계:
- Phase 2 진입 — WORKSPACE 전환 후 구현 시작
- Phase 2 내용: Next.js 초기설정 → 레이아웃 → 사이드바 → 컴포넌트 → 라우트 → Vercel 배포

---

## 진행 이력

### 2026-04-09 프로젝트 초기화

| 항목 | 내용 |
|------|------|
| 초기화 | template 플랜 전부 삭제, codex-desktop-guide 프로젝트로 신규 초기화 |
| 마스터플랜 | codex-desktop-guide-master.md 신규 작성 |
| Phase 1 플랜 | codex-desktop-guide-phase1.md 신규 작성 |
| 설정 파일 | CLAUDE.md, CONTEXT.md, RULES.md, 점검-scope.md 재작성 |
