import Breadcrumb from "@/components/Breadcrumb";
import Accordion from "@/components/Accordion";

// 컨텍스트 페이지 — Phase 3 콘텐츠 구현
// 취지: 컨텍스트 개념, 관리 방법, 효율적 활용 방법 안내

export default function ContextPage() {
  const items = [
    {
      title: "컨텍스트란?",
      defaultOpen: true,
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>
            컨텍스트는 Codex가 응답을 생성할 때 참조하는 정보의 범위입니다.
            대화 내용, 첨부 파일, 열린 폴더의 코드, MCP 서버 데이터 등이 컨텍스트에 포함됩니다.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>컨텍스트가 풍부할수록 더 정확한 응답을 생성</li>
            <li>컨텍스트 창(window) 크기에는 한도가 있음</li>
            <li>스레드마다 독립적인 컨텍스트를 가짐</li>
          </ul>
        </div>
      ),
    },
    {
      title: "컨텍스트 소스",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>Codex가 참조하는 컨텍스트의 출처는 다음과 같습니다.</p>
          <div className="space-y-2 mt-1">
            {[
              { label: "대화 내용", desc: "현재 스레드의 전체 대화 기록" },
              { label: "첨부 파일", desc: "입력창에 드래그하거나 붙여넣은 파일·이미지" },
              { label: "프로젝트 파일", desc: "열린 폴더 내 코드 파일 (필요 시 자동 참조)" },
              { label: "AGENTS.md", desc: "프로젝트 루트의 지시 파일 (항상 포함)" },
              { label: "MCP 데이터", desc: "연결된 MCP 서버가 제공하는 외부 데이터" },
            ].map((s) => (
              <div key={s.label} className="flex gap-3">
                <span className="font-medium min-w-[120px]" style={{ color: "var(--text-primary)" }}>
                  {s.label}
                </span>
                <span>{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "컨텍스트 관리",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>컨텍스트가 너무 길어지면 응답 품질이 저하될 수 있습니다. 적절히 관리하세요.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>긴 대화는 새 스레드로 분리하여 컨텍스트를 리셋</li>
            <li>불필요한 파일 첨부를 줄여 컨텍스트 절약</li>
            <li>AGENTS.md에 프로젝트 핵심 정보를 정리하면 효율적</li>
            <li>Context 메뉴 → Clear Context로 컨텍스트 초기화 가능</li>
          </ul>
        </div>
      ),
    },
    {
      title: "컨텍스트 창 크기",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>컨텍스트 창 크기는 모델과 플랜에 따라 다릅니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Claude Opus / Sonnet: 최대 200K 토큰</li>
            <li>1토큰 ≈ 한국어 약 1~2자, 영어 약 4자</li>
            <li>컨텍스트 초과 시 오래된 내용부터 자동으로 잘림</li>
          </ul>
          <div
            className="mt-2 px-3 py-2 rounded"
            style={{
              backgroundColor: "var(--bg-tertiary)",
              borderLeft: "2px solid var(--accent)",
            }}
          >
            팁: 대규모 코드베이스 작업 시 필요한 파일만 명시적으로 언급하면 컨텍스트를 효율적으로 사용할 수 있습니다.
          </div>
        </div>
      ),
    },
    {
      title: "AGENTS.md 활용",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>프로젝트 루트에 AGENTS.md 파일을 만들면 매 스레드마다 자동으로 컨텍스트에 포함됩니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>프로젝트 구조, 코딩 컨벤션, 주의사항 기록</li>
            <li>자주 쓰는 명령어나 환경 정보 정리</li>
            <li>팀원과 공유하면 일관된 AI 응답 유지 가능</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-3xl">
      <Breadcrumb items={[{ label: "컨텍스트" }]} />

      <h1
        className="text-2xl font-semibold mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        컨텍스트
      </h1>
      <p
        className="text-sm leading-relaxed mb-8"
        style={{ color: "var(--text-secondary)" }}
      >
        Codex가 참조하는 컨텍스트의 개념과 효율적인 관리 방법을 안내합니다.
      </p>

      <Accordion items={items} />
    </div>
  );
}
