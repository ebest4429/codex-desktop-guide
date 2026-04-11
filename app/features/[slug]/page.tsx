import Breadcrumb from "@/components/Breadcrumb";
import Accordion from "@/components/Accordion";
import { notFound } from "next/navigation";

// 주요기능 동적 라우트 — 5페이지 콘텐츠 (multimodal / code-execution / web-search / file-handling / extensions)
// 취지: generateStaticParams로 정적 빌드. 각 슬러그별 콘텐츠 데이터 객체로 분리.

export function generateStaticParams() {
  return [
    { slug: "multimodal" },
    { slug: "code-execution" },
    { slug: "web-search" },
    { slug: "file-handling" },
    { slug: "extensions" },
  ];
}

// ── 멀티모달 입력 콘텐츠 ─────────────────────────────────────
const multimodalContent = {
  title: "멀티모달 입력",
  description: "Codex Desktop은 텍스트 외에 이미지, 파일 등 다양한 형식의 입력을 지원합니다.",
  items: [
    {
      title: "이미지 입력",
      defaultOpen: true,
      content: (
        <div className="space-y-3 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>대화 입력창에 이미지를 직접 첨부하여 분석을 요청할 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>입력창에 이미지 파일 드래그 앤 드롭</li>
            <li>클립보드에서 이미지 붙여넣기 (Ctrl+V)</li>
            <li>스크린샷, 다이어그램, UI 목업 등 모든 이미지 형식 지원</li>
          </ul>
          <div
            className="mt-2 px-3 py-2 rounded"
            style={{
              backgroundColor: "var(--bg-tertiary)",
              borderLeft: "2px solid var(--accent)",
            }}
          >
            예시: 스크린샷을 붙여넣고 &ldquo;이 에러 메시지의 원인이 뭐야?&rdquo; 라고 질문
          </div>
        </div>
      ),
    },
    {
      title: "파일 첨부",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>텍스트 기반 파일을 첨부하면 Codex가 내용을 직접 읽고 분석합니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>소스 코드 파일 (모든 언어 지원)</li>
            <li>텍스트 파일 (.txt, .md, .csv 등)</li>
            <li>PDF 문서</li>
          </ul>
          <p className="mt-1">여러 파일을 동시에 첨부하여 비교·분석도 가능합니다.</p>
        </div>
      ),
    },
    {
      title: "혼합 입력",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>텍스트·이미지·파일을 한 번에 조합하여 요청할 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>이미지 + 코드 파일을 함께 첨부하여 맥락 있는 질문</li>
            <li>여러 이미지를 비교 분석 요청</li>
            <li>파일 내용을 기반으로 이미지 생성 지시</li>
          </ul>
        </div>
      ),
    },
    {
      title: "지원 이미지 형식",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <div className="flex flex-wrap gap-2">
            {["PNG", "JPG / JPEG", "GIF", "WEBP", "BMP", "SVG"].map((fmt) => (
              <span
                key={fmt}
                className="px-2 py-0.5 rounded font-mono"
                style={{
                  backgroundColor: "var(--bg-tertiary)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                }}
              >
                {fmt}
              </span>
            ))}
          </div>
          <p className="mt-2">파일 크기 제한은 모델 및 플랜에 따라 다를 수 있습니다.</p>
        </div>
      ),
    },
  ],
};

// ── 코드 실행 콘텐츠 ──────────────────────────────────────────
const codeExecutionContent = {
  title: "코드 실행",
  description: "Codex Desktop은 로컬 환경에서 코드를 직접 실행하고 결과를 확인할 수 있습니다.",
  items: [
    {
      title: "로컬 코드 실행",
      defaultOpen: true,
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>Codex가 작성한 코드를 로컬 터미널에서 바로 실행하여 결과를 검증합니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>실행 전 승인 요청으로 안전하게 제어 가능</li>
            <li>실행 결과(stdout/stderr)가 대화 컨텍스트에 자동 포함</li>
            <li>오류 발생 시 Codex가 자동으로 원인을 분석하고 수정</li>
          </ul>
        </div>
      ),
    },
    {
      title: "터미널 통합",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>메인 영역 하단 터미널 패널에서 직접 명령을 실행할 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Ctrl+J로 터미널 패널 토글</li>
            <li>Codex가 제안한 명령어를 클릭 한 번으로 실행</li>
            <li>실행 기록이 대화와 연동되어 맥락 유지</li>
          </ul>
        </div>
      ),
    },
    {
      title: "작업 트리 격리",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>코드 수정 작업은 Git worktree에 격리되어 원본 코드에 영향을 주지 않습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>각 작업은 독립된 worktree에서 실행</li>
            <li>변경 사항을 검토 후 선택적으로 병합</li>
            <li>Diff 패널(Alt+Ctrl+B)에서 변경 전후 비교</li>
          </ul>
        </div>
      ),
    },
    {
      title: "승인 정책 설정",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>Settings → 구성에서 코드 실행 승인 정책을 조정할 수 있습니다.</p>
          <div className="space-y-2 mt-1">
            {[
              { label: "On request", desc: "명시적으로 요청할 때만 자동 실행" },
              { label: "샌드박스 설정", desc: "Codex가 실행할 수 있는 명령 범위를 제한" },
            ].map((item) => (
              <div key={item.label} className="flex gap-3">
                <span className="font-medium min-w-[100px]" style={{ color: "var(--accent)" }}>
                  {item.label}
                </span>
                <span>{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ],
};

// ── 웹 검색 콘텐츠 ────────────────────────────────────────────
const webSearchContent = {
  title: "웹 검색",
  description: "Codex Desktop은 최신 정보가 필요할 때 웹을 직접 검색하여 답변에 반영할 수 있습니다.",
  items: [
    {
      title: "웹 검색 사용",
      defaultOpen: true,
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>Codex가 필요하다고 판단하면 자동으로 웹을 검색하거나, 직접 요청할 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>최신 라이브러리 문서, 버전 정보 조회</li>
            <li>공식 문서 확인 및 예제 탐색</li>
            <li>실시간 정보(보안 취약점, 패키지 업데이트 등) 검색</li>
          </ul>
          <div
            className="mt-2 px-3 py-2 rounded"
            style={{
              backgroundColor: "var(--bg-tertiary)",
              borderLeft: "2px solid var(--accent)",
            }}
          >
            예시: &ldquo;React 19의 새로운 기능을 검색해서 요약해줘&rdquo;
          </div>
        </div>
      ),
    },
    {
      title: "검색 결과 활용",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>검색 결과는 대화 컨텍스트에 포함되어 후속 질문에도 활용됩니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>출처 URL과 함께 정보를 인용</li>
            <li>여러 소스를 종합하여 답변 구성</li>
            <li>검색 결과를 바탕으로 코드 즉시 작성</li>
          </ul>
        </div>
      ),
    },
    {
      title: "MCP를 통한 확장 검색",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>MCP(Model Context Protocol) 서버를 연결하면 더 강력한 검색 기능을 사용할 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>특정 문서 DB 검색 (예: Context7)</li>
            <li>사내 위키 또는 Notion 연동</li>
            <li>GitHub 이슈·PR 검색</li>
          </ul>
          <p className="mt-1">MCP 연동 방법은 <span style={{ color: "var(--accent)" }}>MCP 섹션</span>을 참고하세요.</p>
        </div>
      ),
    },
  ],
};

// ── 파일 처리 콘텐츠 ──────────────────────────────────────────
const fileHandlingContent = {
  title: "파일 처리",
  description: "Codex Desktop은 로컬 파일을 읽고 분석하며, 수정하거나 새로 생성할 수 있습니다.",
  items: [
    {
      title: "파일 읽기 및 분석",
      defaultOpen: true,
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>열린 폴더의 파일을 Codex가 직접 읽어 분석합니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>소스 코드 파일 전체 구조 분석</li>
            <li>특정 파일을 대화에 언급하거나 @ 태그로 참조</li>
            <li>여러 파일 간 관계 파악 및 의존성 분석</li>
          </ul>
        </div>
      ),
    },
    {
      title: "파일 수정",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>Codex가 직접 파일을 수정하고 변경 사항을 제안합니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>수정 전 Diff 패널에서 변경 내용 미리보기</li>
            <li>승인 후 로컬 파일에 즉시 반영</li>
            <li>Git worktree 격리로 원본 보호</li>
          </ul>
        </div>
      ),
    },
    {
      title: "파일 생성",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>요청에 따라 새 파일을 생성하고 지정된 경로에 저장합니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>컴포넌트, 유틸리티, 설정 파일 등 생성</li>
            <li>기존 코드 스타일에 맞춰 자동 작성</li>
            <li>생성된 파일은 즉시 편집 및 추가 수정 요청 가능</li>
          </ul>
        </div>
      ),
    },
    {
      title: "대용량 코드베이스 처리",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>대규모 프로젝트에서도 컨텍스트를 효율적으로 관리합니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>필요한 파일만 선택적으로 컨텍스트에 포함</li>
            <li>컨텍스트 창 설정으로 포함 범위 조정</li>
            <li>.gitignore, AGENTS.md 등을 통해 제외 파일 지정</li>
          </ul>
        </div>
      ),
    },
  ],
};

// ── 확장 기능 콘텐츠 ──────────────────────────────────────────
const extensionsContent = {
  title: "확장 기능",
  description: "스킬, MCP 서버, 자동화 등 Codex Desktop의 확장 기능으로 작업 범위를 넓힐 수 있습니다.",
  items: [
    {
      title: "스킬 (Skills)",
      defaultOpen: true,
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>스킬은 반복 작업을 자동화하거나 Codex의 동작을 커스텀하는 확장 기능입니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>사이드바 &ldquo;스킬 및 앱&rdquo;에서 마켓플레이스 탐색 및 설치</li>
            <li>슬래시 명령어로 스킬 호출 (예: /commit, /review)</li>
            <li>사용자 정의 스킬 직접 작성 가능</li>
          </ul>
          <p className="mt-1">자세한 내용은 <span style={{ color: "var(--accent)" }}>스킬 섹션</span>을 참고하세요.</p>
        </div>
      ),
    },
    {
      title: "MCP 서버",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>MCP(Model Context Protocol) 서버를 연결하여 외부 도구와 데이터 소스를 통합합니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>데이터베이스, API, 검색 엔진 등 연동</li>
            <li>Settings → MCP에서 서버 추가 및 관리</li>
            <li>공개 MCP 서버 또는 자체 서버 구축 가능</li>
          </ul>
          <p className="mt-1">자세한 내용은 <span style={{ color: "var(--accent)" }}>MCP 섹션</span>을 참고하세요.</p>
        </div>
      ),
    },
    {
      title: "자동화 (Automation)",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>반복 작업을 예약 실행 스레드로 자동화할 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>사이드바 &ldquo;자동화&rdquo;에서 예약 스레드 설정</li>
            <li>일정 시간마다 자동으로 작업 실행</li>
            <li>빌드 체크, 리포트 생성 등 반복 업무에 활용</li>
          </ul>
        </div>
      ),
    },
    {
      title: "액션 (Actions)",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>자주 사용하는 명령어를 버튼으로 등록하여 빠르게 실행합니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Settings → 환경 → 액션에서 등록</li>
            <li>커스텀 셸 명령어를 원클릭으로 실행</li>
            <li>프로젝트별 액션을 독립적으로 관리</li>
          </ul>
        </div>
      ),
    },
  ],
};

// ── 라우트 맵 ────────────────────────────────────────────────
const contentMap: Record<string, typeof multimodalContent> = {
  multimodal: multimodalContent,
  "code-execution": codeExecutionContent,
  "web-search": webSearchContent,
  "file-handling": fileHandlingContent,
  extensions: extensionsContent,
};

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = contentMap[slug];
  if (!page) notFound();

  return (
    <div className="max-w-3xl">
      <Breadcrumb
        items={[
          { label: "주요기능" },
          { label: page.title },
        ]}
      />

      <h1
        className="text-2xl font-semibold mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        {page.title}
      </h1>
      <p
        className="text-sm leading-relaxed mb-8"
        style={{ color: "var(--text-secondary)" }}
      >
        {page.description}
      </p>

      <Accordion items={page.items} />
    </div>
  );
}
