# CONTEXT.md

## 프로젝트 정체성

**Codex Desktop 가이드 웹사이트**
Codex Desktop의 전체 기능과 사용법을 다루는 공식 가이드 웹사이트.

---

## 콘텐츠 구조 (예정)

- 개요
- 사용법
- 주요 내용 (상세)
- 메뉴별 소개 (상세)
- 기타: 모델 / 컨텍스트 / 구독 / 스킬 / 스레드 / MCP / 설정 페이지 메뉴별 상세 소개

---

## 디자인 방향

| 항목           | 값                                  |
| -------------- | ----------------------------------- |
| 테마           | 다크 테마                           |
| 폰트           | Pretendard                          |
| 소제목 폰트    | 16px~18px                           |
| 본문 최소 폰트 | 14px 이상                           |
| 타이틀 영역    | 80px~100px, 검색바 중앙배치         |
| 네비게이션     | 사이드바 (리사이즈 가능) 필터링구조 |
| 상세 영역      | 아코디언 컨테이너                   |
| 레이아웃 형식  | 카드형 / 리스트형                   |

---

## 기술 환경

| 항목     | 값                       |
| -------- | ------------------------ |
| OS       | Windows 10 Pro           |
| Shell    | bash (Git Bash)          |
| 기술스택 | Next.js + Tailwind CSS |
| 배포 | GitHub Pages |

---

## 디렉토리 구조

> Phase 1 기술스택 결정 후 확정

```
codex-desktop-guide/
├── .claude/          ← Claude Code 설정
│   ├── plans/        ← 플랜 파일
│   ├── hooks/        ← 훅 스크립트
│   ├── commands/     ← 커스텀 커맨드
│   └── skills/       ← 스킬 파일
├── app/              ← Next.js App Router (pages + layouts)
├── components/       ← 공통 컴포넌트 (Sidebar, Card, Accordion 등)
├── styles/           ← 전역 스타일 (현재 globals.css는 app/ 내)
├── public/           ← 정적 파일
├── next.config.ts    ← Next.js 설정
└── package.json
```
