import Breadcrumb from "@/components/Breadcrumb";
import Accordion from "@/components/Accordion";

// 스레드 페이지 — Phase 3 콘텐츠 구현
// 취지: 스레드 개념, 관리 방법, 자동화 스레드 안내

export default function ThreadsPage() {
  const items = [
    {
      title: "스레드란?",
      defaultOpen: true,
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>
            스레드는 Codex와 나누는 하나의 독립된 대화 단위입니다.
            각 스레드는 고유한 컨텍스트, 모델 설정, 대화 기록을 가집니다.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>작업 단위 또는 주제별로 스레드를 분리하면 효율적</li>
            <li>스레드 간 컨텍스트는 공유되지 않음</li>
            <li>모든 스레드는 사이드바에 자동 저장됨</li>
          </ul>
        </div>
      ),
    },
    {
      title: "스레드 생성 및 탐색",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <div className="space-y-2">
            {[
              { action: "새 스레드 시작", how: "사이드바 상단 '새 스레드' 클릭 또는 Ctrl+N" },
              { action: "스레드 전환", how: "사이드바에서 원하는 스레드 클릭" },
              { action: "이전/다음 스레드", how: "Ctrl+Shift+[ / Ctrl+Shift+]" },
            ].map((item) => (
              <div key={item.action} className="flex gap-3">
                <span className="font-medium min-w-[120px]" style={{ color: "var(--text-primary)" }}>
                  {item.action}
                </span>
                <span>{item.how}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "스레드 관리",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>사이드바에서 스레드를 우클릭하거나 Threads 메뉴를 사용합니다.</p>
          <div className="space-y-2 mt-1">
            {[
              { action: "이름 변경", desc: "스레드 제목을 알아보기 쉽게 변경합니다." },
              { action: "고정", desc: "자주 쓰는 스레드를 사이드바 상단에 고정합니다." },
              { action: "보관", desc: "완료된 스레드를 보관하여 목록을 정리합니다." },
              { action: "삭제", desc: "불필요한 스레드를 영구 삭제합니다." },
            ].map((item) => (
              <div key={item.action} className="flex gap-3">
                <span className="font-medium min-w-[80px]" style={{ color: "var(--accent)" }}>
                  {item.action}
                </span>
                <span>{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "자동화 스레드",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>사이드바 &ldquo;자동화&rdquo;에서 예약 실행 스레드를 설정할 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>일정 주기(매일, 매시간 등)로 자동 실행</li>
            <li>빌드 상태 체크, 리포트 생성 등 반복 업무에 활용</li>
            <li>실행 기록은 자동화 탭에서 확인 가능</li>
          </ul>
          <div
            className="mt-2 px-3 py-2 rounded"
            style={{
              backgroundColor: "var(--bg-tertiary)",
              borderLeft: "2px solid var(--accent)",
            }}
          >
            예시: &ldquo;매일 오전 9시에 PR 목록을 요약해줘&rdquo;
          </div>
        </div>
      ),
    },
    {
      title: "스레드 효율적 활용",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>스레드를 잘 구분하면 컨텍스트 오염 없이 작업 집중도를 높일 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>기능 단위로 스레드 분리 (예: &ldquo;로그인 기능&rdquo;, &ldquo;결제 API&rdquo;)</li>
            <li>긴 작업이 끝나면 새 스레드로 컨텍스트 초기화</li>
            <li>참조용 스레드는 이름을 명확히 붙여 고정</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-3xl">
      <Breadcrumb items={[{ label: "스레드" }]} />

      <h1
        className="text-2xl font-semibold mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        스레드
      </h1>
      <p
        className="text-sm leading-relaxed mb-8"
        style={{ color: "var(--text-secondary)" }}
      >
        스레드는 Codex와의 독립된 대화 단위입니다. 작업별로 분리하여 컨텍스트를 효율적으로 관리하세요.
      </p>

      <Accordion items={items} />
    </div>
  );
}
