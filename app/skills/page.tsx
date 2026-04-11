import Breadcrumb from "@/components/Breadcrumb";
import Accordion from "@/components/Accordion";

// 스킬 페이지 — Phase 3 콘텐츠 구현
// 취지: 스킬 개념, 설치·사용법, 커스텀 스킬 작성 방법 안내

export default function SkillsPage() {
  const items = [
    {
      title: "스킬이란?",
      defaultOpen: true,
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>
            스킬은 Codex Desktop의 동작을 확장하거나 반복 작업을 자동화하는 기능 단위입니다.
            슬래시 명령어(/)로 호출하거나 대화 중 자동으로 트리거됩니다.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>커밋 메시지 생성, 코드 리뷰, PR 작성 등 개발 작업 자동화</li>
            <li>자주 쓰는 프롬프트를 재사용 가능한 스킬로 저장</li>
            <li>마켓플레이스에서 다른 사용자의 스킬을 설치하여 사용</li>
          </ul>
        </div>
      ),
    },
    {
      title: "스킬 설치",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>사이드바 &ldquo;스킬 및 앱&rdquo;에서 마켓플레이스를 통해 스킬을 설치합니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>사이드바 → 스킬 및 앱 → 마켓플레이스 탭 선택</li>
            <li>원하는 스킬 검색 후 설치 버튼 클릭</li>
            <li>설치된 스킬은 &ldquo;설치된 스킬&rdquo; 탭에서 확인</li>
          </ul>
        </div>
      ),
    },
    {
      title: "스킬 사용",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>설치된 스킬은 대화 입력창에서 슬래시 명령어로 호출합니다.</p>
          <div className="space-y-2 mt-2">
            {[
              { cmd: "/commit", desc: "스테이징된 변경 사항을 기반으로 커밋 메시지 생성" },
              { cmd: "/review", desc: "현재 코드 변경 사항에 대한 코드 리뷰 실행" },
              { cmd: "/docs", desc: "선택한 코드에 대한 문서 자동 생성" },
            ].map((item) => (
              <div key={item.cmd} className="flex gap-3">
                <code
                  className="px-2 py-0.5 rounded font-mono min-w-[80px]"
                  style={{
                    backgroundColor: "var(--bg-tertiary)",
                    color: "var(--accent)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {item.cmd}
                </code>
                <span>{item.desc}</span>
              </div>
            ))}
          </div>
          <p className="mt-2">입력창에 <code style={{ color: "var(--accent)" }}>/</code>를 입력하면 사용 가능한 스킬 목록이 표시됩니다.</p>
        </div>
      ),
    },
    {
      title: "커스텀 스킬 작성",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>나만의 스킬을 직접 작성하여 프로젝트에 추가할 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>프로젝트 내 <code style={{ color: "var(--accent)" }}>.claude/skills/</code> 디렉토리에 마크다운 파일로 작성</li>
            <li>프론트매터에 name, description, trigger 등을 정의</li>
            <li>팀원과 공유하려면 Git 리포지토리에 함께 커밋</li>
          </ul>
          <div
            className="mt-2 px-3 py-2 rounded font-mono text-xs"
            style={{
              backgroundColor: "var(--bg-tertiary)",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            <div style={{ color: "var(--text-muted)" }}># 스킬 파일 예시</div>
            <div>---</div>
            <div>name: my-review</div>
            <div>description: 코드 품질 리뷰</div>
            <div>---</div>
            <div>코드를 검토하고 개선점을 알려줘.</div>
          </div>
        </div>
      ),
    },
    {
      title: "스킬 관리",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>설치된 스킬은 사이드바 &ldquo;스킬 및 앱&rdquo; 탭에서 관리합니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>스킬 활성화 / 비활성화 토글</li>
            <li>스킬 설정 및 파라미터 수정</li>
            <li>불필요한 스킬 제거</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-3xl">
      <Breadcrumb items={[{ label: "스킬" }]} />

      <h1
        className="text-2xl font-semibold mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        스킬
      </h1>
      <p
        className="text-sm leading-relaxed mb-8"
        style={{ color: "var(--text-secondary)" }}
      >
        스킬을 사용하면 반복 작업을 자동화하고 Codex의 동작을 프로젝트에 맞게 확장할 수 있습니다.
      </p>

      <Accordion items={items} />
    </div>
  );
}
