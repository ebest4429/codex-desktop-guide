import Breadcrumb from "@/components/Breadcrumb";
import Accordion from "@/components/Accordion";

// MCP 페이지 — Phase 3 콘텐츠 구현
// 취지: MCP 개념, 서버 추가 방법, 대표 활용 사례 안내

export default function McpPage() {
  const items = [
    {
      title: "MCP란?",
      defaultOpen: true,
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>
            MCP(Model Context Protocol)는 Codex Desktop과 외부 도구·데이터 소스를 연결하는
            표준 프로토콜입니다. MCP 서버를 통해 Codex의 접근 범위를 확장할 수 있습니다.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>데이터베이스, API, 검색 엔진 등 외부 시스템 연동</li>
            <li>Codex가 MCP 서버의 도구(tool)를 직접 호출</li>
            <li>공개 MCP 서버 사용 또는 자체 서버 구축 모두 가능</li>
          </ul>
        </div>
      ),
    },
    {
      title: "MCP 서버 추가",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>Settings → MCP에서 MCP 서버를 추가하고 관리합니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Settings → MCP → 서버 추가 버튼 클릭</li>
            <li>서버 이름, 실행 명령어(command), 환경 변수 입력</li>
            <li>추가된 서버는 목록에서 활성화 / 비활성화 가능</li>
          </ul>
          <div
            className="mt-2 px-3 py-2 rounded font-mono text-xs"
            style={{
              backgroundColor: "var(--bg-tertiary)",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            <div style={{ color: "var(--text-muted)" }}># 설정 예시 (mcp_servers.json)</div>
            <div>{`{`}</div>
            <div>&nbsp;&nbsp;<span style={{ color: "var(--accent)" }}>&quot;context7&quot;</span>: {`{`}</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&quot;command&quot;: &quot;npx&quot;,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&quot;args&quot;: [&quot;-y&quot;, &quot;@context7/mcp&quot;]</div>
            <div>&nbsp;&nbsp;{`}`}</div>
            <div>{`}`}</div>
          </div>
        </div>
      ),
    },
    {
      title: "대표 MCP 서버",
      content: (
        <div className="space-y-3 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>자주 사용되는 공개 MCP 서버 예시입니다.</p>
          <div className="space-y-2">
            {[
              {
                name: "Context7",
                desc: "라이브러리 최신 문서를 실시간으로 검색하여 Codex에 제공",
                pkg: "@context7/mcp",
              },
              {
                name: "Filesystem",
                desc: "지정된 디렉토리의 파일 시스템 접근 권한을 Codex에 부여",
                pkg: "@modelcontextprotocol/server-filesystem",
              },
              {
                name: "GitHub",
                desc: "GitHub 이슈, PR, 코드 검색 등을 Codex에서 직접 사용",
                pkg: "@modelcontextprotocol/server-github",
              },
              {
                name: "Brave Search",
                desc: "Brave 검색 엔진을 통한 웹 검색 기능 제공",
                pkg: "@modelcontextprotocol/server-brave-search",
              },
            ].map((server) => (
              <div
                key={server.name}
                className="p-3 rounded"
                style={{
                  backgroundColor: "var(--bg-tertiary)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="font-medium mb-0.5" style={{ color: "var(--text-primary)" }}>
                  {server.name}
                </div>
                <p className="mb-1">{server.desc}</p>
                <code style={{ color: "var(--accent)" }}>{server.pkg}</code>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "MCP 도구 사용",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>MCP 서버가 연결되면 Codex가 자동으로 관련 도구를 필요 시 호출합니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>도구 호출 전 승인 요청이 표시될 수 있음</li>
            <li>대화에서 &ldquo;Context7로 React 문서 확인해줘&rdquo;처럼 명시적 요청 가능</li>
            <li>사용된 도구와 결과는 대화 컨텍스트에 포함</li>
          </ul>
        </div>
      ),
    },
    {
      title: "커스텀 MCP 서버 구축",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>사내 시스템이나 독자적인 데이터 소스를 위한 MCP 서버를 직접 만들 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>MCP SDK(TypeScript / Python)로 서버 구현</li>
            <li>tool, resource, prompt 3가지 기능 타입 제공</li>
            <li>로컬 프로세스 또는 원격 서버로 실행 가능</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-3xl">
      <Breadcrumb items={[{ label: "MCP" }]} />

      <h1
        className="text-2xl font-semibold mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        MCP 연동
      </h1>
      <p
        className="text-sm leading-relaxed mb-8"
        style={{ color: "var(--text-secondary)" }}
      >
        MCP(Model Context Protocol) 서버를 연결하여 Codex Desktop의 기능을 외부 도구와 데이터 소스로 확장합니다.
      </p>

      <Accordion items={items} />
    </div>
  );
}
