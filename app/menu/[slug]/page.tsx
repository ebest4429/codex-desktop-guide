import Breadcrumb from "@/components/Breadcrumb";
import Accordion from "@/components/Accordion";
import { notFound } from "next/navigation";

// 메뉴소개 동적 라우트 — 13페이지 콘텐츠
// 취지: 각 메뉴 항목 상세 설명. 참조 문서 성격. Accordion으로 항목별 구성.

export function generateStaticParams() {
  return [
    { slug: "file" },
    { slug: "edit" },
    { slug: "view" },
    { slug: "tools" },
    { slug: "settings" },
    { slug: "project" },
    { slug: "threads" },
    { slug: "model-select" },
    { slug: "context-menu" },
    { slug: "skills-menu" },
    { slug: "mcp-menu" },
    { slug: "help" },
    { slug: "updates" },
  ];
}

// ── 공통 타입 ─────────────────────────────────────────────────
type MenuItem = { label: string; shortcut?: string; desc: string };

function MenuItemList({ items }: { items: MenuItem[] }) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item.label} className="flex gap-3 text-xs">
          <div className="min-w-[160px] flex items-start gap-2">
            <span className="font-medium" style={{ color: "var(--text-primary)" }}>
              {item.label}
            </span>
            {item.shortcut && (
              <code
                className="px-1.5 py-0.5 rounded font-mono text-[10px]"
                style={{
                  backgroundColor: "var(--bg-tertiary)",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                }}
              >
                {item.shortcut}
              </code>
            )}
          </div>
          <span style={{ color: "var(--text-secondary)" }}>{item.desc}</span>
        </div>
      ))}
    </div>
  );
}

// ── File 메뉴 ─────────────────────────────────────────────────
const fileContent = {
  title: "File",
  description: "파일과 폴더 관련 기본 작업을 수행합니다.",
  items: [
    {
      title: "기본 파일 작업",
      defaultOpen: true,
      content: (
        <MenuItemList
          items={[
            { label: "New Thread", shortcut: "Ctrl+N", desc: "새 대화 스레드를 시작합니다." },
            { label: "Open Folder...", shortcut: "Ctrl+O", desc: "작업할 로컬 폴더를 선택합니다." },
            { label: "Open Recent", desc: "최근에 열었던 폴더 목록에서 선택합니다." },
            { label: "Close Folder", desc: "현재 열린 폴더를 닫습니다." },
          ]}
        />
      ),
    },
    {
      title: "설정 및 종료",
      content: (
        <MenuItemList
          items={[
            { label: "Settings", shortcut: "Ctrl+,", desc: "Settings 페이지를 엽니다." },
            { label: "Quit", shortcut: "Ctrl+Q", desc: "Codex Desktop을 종료합니다." },
          ]}
        />
      ),
    },
  ],
};

// ── Edit 메뉴 ─────────────────────────────────────────────────
const editContent = {
  title: "Edit",
  description: "텍스트 편집과 클립보드 관련 기능을 제공합니다.",
  items: [
    {
      title: "편집 작업",
      defaultOpen: true,
      content: (
        <MenuItemList
          items={[
            { label: "Undo", shortcut: "Ctrl+Z", desc: "마지막 작업을 취소합니다." },
            { label: "Redo", shortcut: "Ctrl+Y", desc: "취소한 작업을 다시 실행합니다." },
            { label: "Cut", shortcut: "Ctrl+X", desc: "선택한 텍스트를 잘라냅니다." },
            { label: "Copy", shortcut: "Ctrl+C", desc: "선택한 텍스트를 복사합니다." },
            { label: "Paste", shortcut: "Ctrl+V", desc: "클립보드 내용을 붙여넣습니다." },
            { label: "Select All", shortcut: "Ctrl+A", desc: "현재 입력창의 전체 텍스트를 선택합니다." },
          ]}
        />
      ),
    },
    {
      title: "검색",
      content: (
        <MenuItemList
          items={[
            { label: "Find", shortcut: "Ctrl+F", desc: "대화 내에서 텍스트를 검색합니다." },
          ]}
        />
      ),
    },
  ],
};

// ── View 메뉴 ─────────────────────────────────────────────────
const viewContent = {
  title: "View",
  description: "화면 레이아웃과 패널 표시 여부를 제어합니다.",
  items: [
    {
      title: "패널 토글",
      defaultOpen: true,
      content: (
        <MenuItemList
          items={[
            { label: "Toggle Sidebar", shortcut: "Ctrl+B", desc: "왼쪽 사이드바 표시/숨기기를 전환합니다." },
            { label: "Toggle Terminal", shortcut: "Ctrl+J", desc: "하단 터미널 패널을 열거나 닫습니다." },
            { label: "Toggle Diff Panel", shortcut: "Alt+Ctrl+B", desc: "코드 변경 Diff 패널을 열거나 닫습니다." },
          ]}
        />
      ),
    },
    {
      title: "확대/축소",
      content: (
        <MenuItemList
          items={[
            { label: "Zoom In", shortcut: "Ctrl+=", desc: "인터페이스를 확대합니다." },
            { label: "Zoom Out", shortcut: "Ctrl+-", desc: "인터페이스를 축소합니다." },
            { label: "Reset Zoom", shortcut: "Ctrl+0", desc: "확대/축소를 기본값으로 초기화합니다." },
            { label: "Toggle Full Screen", shortcut: "F11", desc: "전체 화면 모드로 전환합니다." },
          ]}
        />
      ),
    },
  ],
};

// ── Tools 메뉴 ────────────────────────────────────────────────
const toolsContent = {
  title: "Tools",
  description: "개발 도구와 Codex 고유 기능을 실행합니다.",
  items: [
    {
      title: "Codex 도구",
      defaultOpen: true,
      content: (
        <MenuItemList
          items={[
            { label: "Run Task", desc: "현재 스레드에서 작업을 즉시 실행합니다." },
            { label: "Stop Task", desc: "실행 중인 작업을 중단합니다." },
            { label: "Open Terminal", shortcut: "Ctrl+J", desc: "터미널 패널을 엽니다." },
          ]}
        />
      ),
    },
    {
      title: "개발자 도구",
      content: (
        <MenuItemList
          items={[
            { label: "Developer Tools", shortcut: "F12", desc: "Chromium 개발자 도구를 엽니다 (디버깅용)." },
            { label: "Reload", shortcut: "Ctrl+R", desc: "앱 창을 새로고침합니다." },
          ]}
        />
      ),
    },
  ],
};

// ── Settings 메뉴 ─────────────────────────────────────────────
const settingsContent = {
  title: "Settings",
  description: "Codex Desktop의 모든 설정을 관리합니다.",
  items: [
    {
      title: "개인 설정",
      defaultOpen: true,
      content: (
        <MenuItemList
          items={[
            { label: "개인 맞춤 설정", desc: "Codex의 응답 어조, 언어, 맞춤형 지침을 설정합니다." },
            { label: "테마", desc: "라이트/다크 테마를 선택합니다." },
            { label: "언어", desc: "인터페이스 표시 언어를 변경합니다." },
          ]}
        />
      ),
    },
    {
      title: "작업 환경",
      content: (
        <MenuItemList
          items={[
            { label: "환경", desc: "프로젝트별 실행 환경(env 파일, 스크립트, 액션)을 설정합니다." },
            { label: "구성", desc: "승인 정책, 샌드박스 범위를 설정합니다." },
            { label: "작업 트리", desc: "worktree 자동 삭제 정책과 보관 수를 설정합니다." },
          ]}
        />
      ),
    },
    {
      title: "연동 및 계정",
      content: (
        <MenuItemList
          items={[
            { label: "구독", desc: "현재 플랜 확인 및 업그레이드, 결제 관리를 합니다." },
            { label: "MCP", desc: "MCP 서버를 추가하고 관리합니다." },
            { label: "연결된 계정", desc: "GitHub 등 외부 계정 연결 상태를 확인합니다." },
          ]}
        />
      ),
    },
  ],
};

// ── Project 메뉴 ──────────────────────────────────────────────
const projectContent = {
  title: "Project",
  description: "현재 열린 프로젝트 폴더와 관련된 작업을 제공합니다.",
  items: [
    {
      title: "프로젝트 작업",
      defaultOpen: true,
      content: (
        <MenuItemList
          items={[
            { label: "Open Folder...", shortcut: "Ctrl+O", desc: "새 프로젝트 폴더를 엽니다." },
            { label: "Open Recent", desc: "최근 프로젝트 목록을 표시합니다." },
            { label: "Close Folder", desc: "현재 프로젝트 폴더를 닫습니다." },
            { label: "Reveal in Explorer", desc: "현재 폴더를 파일 탐색기에서 엽니다." },
          ]}
        />
      ),
    },
    {
      title: "환경 설정",
      content: (
        <MenuItemList
          items={[
            { label: "Project Settings", desc: "현재 프로젝트의 환경 설정 페이지를 엽니다." },
            { label: "Edit AGENTS.md", desc: "프로젝트 루트의 AGENTS.md 파일을 편집합니다." },
          ]}
        />
      ),
    },
  ],
};

// ── Threads 메뉴 ──────────────────────────────────────────────
const threadsContent = {
  title: "Threads",
  description: "대화 스레드를 관리하고 탐색합니다.",
  items: [
    {
      title: "스레드 탐색",
      defaultOpen: true,
      content: (
        <MenuItemList
          items={[
            { label: "New Thread", shortcut: "Ctrl+N", desc: "새 스레드를 시작합니다." },
            { label: "Previous Thread", shortcut: "Ctrl+Shift+[", desc: "이전 스레드로 이동합니다." },
            { label: "Next Thread", shortcut: "Ctrl+Shift+]", desc: "다음 스레드로 이동합니다." },
          ]}
        />
      ),
    },
    {
      title: "스레드 관리",
      content: (
        <MenuItemList
          items={[
            { label: "Rename Thread", desc: "현재 스레드의 이름을 변경합니다." },
            { label: "Delete Thread", desc: "현재 스레드를 삭제합니다." },
            { label: "Archive Thread", desc: "현재 스레드를 보관합니다." },
            { label: "Pin Thread", desc: "현재 스레드를 사이드바 상단에 고정합니다." },
          ]}
        />
      ),
    },
  ],
};

// ── Model Select 메뉴 ─────────────────────────────────────────
const modelSelectContent = {
  title: "Model",
  description: "현재 대화에서 사용할 AI 모델을 선택합니다.",
  items: [
    {
      title: "모델 선택",
      defaultOpen: true,
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>스레드마다 독립적으로 모델을 지정할 수 있습니다.</p>
          <div className="space-y-2 mt-2">
            {[
              { name: "claude-opus-4", desc: "가장 강력한 모델. 복잡한 추론과 대규모 코드베이스에 적합." },
              { name: "claude-sonnet-4", desc: "성능과 속도의 균형. 일반 개발 작업에 권장." },
              { name: "claude-haiku-4", desc: "빠른 응답 속도. 간단한 질문과 빠른 탐색에 적합." },
            ].map((m) => (
              <div
                key={m.name}
                className="px-3 py-2 rounded"
                style={{
                  backgroundColor: "var(--bg-tertiary)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="font-mono font-medium mb-0.5" style={{ color: "var(--accent)" }}>
                  {m.name}
                </div>
                <div>{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "모델 변경 방법",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <ul className="list-disc list-inside space-y-1">
            <li>메뉴 바 Model 클릭 후 원하는 모델 선택</li>
            <li>입력창 하단 모델 표시 영역에서도 변경 가능</li>
            <li>변경은 현재 스레드에만 적용됨 (다른 스레드에 영향 없음)</li>
          </ul>
        </div>
      ),
    },
  ],
};

// ── Context Menu ──────────────────────────────────────────────
const contextMenuContent = {
  title: "Context",
  description: "Codex가 참조하는 컨텍스트 범위를 설정합니다.",
  items: [
    {
      title: "컨텍스트 설정",
      defaultOpen: true,
      content: (
        <MenuItemList
          items={[
            { label: "Add File to Context", desc: "특정 파일을 현재 스레드 컨텍스트에 추가합니다." },
            { label: "Clear Context", desc: "현재 스레드의 컨텍스트를 초기화합니다." },
            { label: "Context Window Size", desc: "컨텍스트 창 크기를 조정합니다." },
          ]}
        />
      ),
    },
    {
      title: "컨텍스트 소스",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>Codex가 참조할 수 있는 컨텍스트 소스 종류입니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>열린 폴더의 파일 트리 전체</li>
            <li>대화에서 직접 언급하거나 첨부한 파일</li>
            <li>AGENTS.md 등 프로젝트 지시 파일</li>
            <li>MCP 서버가 제공하는 외부 데이터</li>
          </ul>
        </div>
      ),
    },
  ],
};

// ── Skills Menu ───────────────────────────────────────────────
const skillsMenuContent = {
  title: "Skills",
  description: "설치된 스킬을 탐색하고 실행합니다.",
  items: [
    {
      title: "스킬 목록",
      defaultOpen: true,
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>메뉴에서 설치된 스킬 전체 목록을 확인하고 바로 실행할 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>설치된 스킬이 알파벳 순으로 표시됩니다</li>
            <li>스킬 클릭 시 현재 스레드에서 즉시 실행</li>
            <li>마켓플레이스 바로가기 포함</li>
          </ul>
        </div>
      ),
    },
    {
      title: "스킬 관리",
      content: (
        <MenuItemList
          items={[
            { label: "Marketplace", desc: "스킬 마켓플레이스를 엽니다." },
            { label: "Manage Skills", desc: "설치된 스킬 관리 페이지를 엽니다." },
            { label: "Create Skill", desc: "새 커스텀 스킬 작성 흐름을 시작합니다." },
          ]}
        />
      ),
    },
  ],
};

// ── MCP Menu ──────────────────────────────────────────────────
const mcpMenuContent = {
  title: "MCP",
  description: "MCP 서버 연결 상태를 확인하고 관리합니다.",
  items: [
    {
      title: "서버 상태",
      defaultOpen: true,
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>메뉴에서 현재 연결된 MCP 서버 목록과 상태를 확인합니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>연결됨 / 연결 안됨 상태 표시</li>
            <li>서버 클릭으로 활성화 / 비활성화 전환</li>
            <li>연결 오류 시 상태 아이콘으로 표시</li>
          </ul>
        </div>
      ),
    },
    {
      title: "MCP 관리",
      content: (
        <MenuItemList
          items={[
            { label: "Add MCP Server", desc: "새 MCP 서버를 추가합니다 (Settings → MCP로 이동)." },
            { label: "Refresh Connections", desc: "모든 MCP 서버 연결을 재시도합니다." },
            { label: "MCP Settings", desc: "MCP 설정 페이지를 엽니다." },
          ]}
        />
      ),
    },
  ],
};

// ── Help 메뉴 ─────────────────────────────────────────────────
const helpContent = {
  title: "Help",
  description: "도움말 문서, 커뮤니티, 지원 리소스에 접근합니다.",
  items: [
    {
      title: "문서 및 리소스",
      defaultOpen: true,
      content: (
        <MenuItemList
          items={[
            { label: "Documentation", desc: "Codex Desktop 공식 문서를 브라우저에서 엽니다." },
            { label: "Keyboard Shortcuts", desc: "전체 키보드 단축키 목록을 표시합니다." },
            { label: "What's New", desc: "최신 업데이트 릴리스 노트를 확인합니다." },
          ]}
        />
      ),
    },
    {
      title: "지원",
      content: (
        <MenuItemList
          items={[
            { label: "Report Issue", desc: "버그 또는 문제를 GitHub 이슈로 제출합니다." },
            { label: "Community Forum", desc: "사용자 커뮤니티 포럼으로 이동합니다." },
            { label: "About Codex Desktop", desc: "앱 버전 정보 및 라이선스를 확인합니다." },
          ]}
        />
      ),
    },
  ],
};

// ── Updates 메뉴 ──────────────────────────────────────────────
const updatesContent = {
  title: "Updates",
  description: "Codex Desktop 업데이트를 확인하고 설치합니다.",
  items: [
    {
      title: "업데이트 확인",
      defaultOpen: true,
      content: (
        <MenuItemList
          items={[
            { label: "Check for Updates", desc: "최신 버전이 있는지 확인합니다." },
            { label: "Download Update", desc: "새 버전을 다운로드합니다 (업데이트 있을 때 활성화)." },
            { label: "Install and Restart", desc: "다운로드된 업데이트를 설치하고 재시작합니다." },
          ]}
        />
      ),
    },
    {
      title: "자동 업데이트 설정",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>Settings → 업데이트에서 자동 업데이트 동작을 설정할 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>자동 다운로드: 새 버전 출시 시 백그라운드에서 자동 다운로드</li>
            <li>자동 설치: 앱 재시작 시 자동으로 업데이트 적용</li>
            <li>업데이트 채널: Stable / Beta 선택 가능</li>
          </ul>
        </div>
      ),
    },
    {
      title: "릴리스 노트",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>각 버전의 변경 사항은 Help → What&apos;s New에서 확인할 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>신규 기능, 개선 사항, 버그 수정 내역 포함</li>
            <li>주요 업데이트는 앱 시작 시 알림으로 표시</li>
          </ul>
        </div>
      ),
    },
  ],
};

// ── 라우트 맵 ────────────────────────────────────────────────
const contentMap: Record<string, typeof fileContent> = {
  file: fileContent,
  edit: editContent,
  view: viewContent,
  tools: toolsContent,
  settings: settingsContent,
  project: projectContent,
  threads: threadsContent,
  "model-select": modelSelectContent,
  "context-menu": contextMenuContent,
  "skills-menu": skillsMenuContent,
  "mcp-menu": mcpMenuContent,
  help: helpContent,
  updates: updatesContent,
};

export default async function MenuPage({
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
          { label: "메뉴소개" },
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
