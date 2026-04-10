import Breadcrumb from "@/components/Breadcrumb";
import Accordion from "@/components/Accordion";
import { notFound } from "next/navigation";

// 사용법 동적 라우트 — 3페이지 콘텐츠 (basic / chat / files)
// 취지: generateStaticParams로 정적 빌드. 각 슬러그별 콘텐츠 데이터 객체로 분리.

export function generateStaticParams() {
  return [
    { slug: "basic" },
    { slug: "chat" },
    { slug: "files" },
  ];
}

// ── 기본 사용법 콘텐츠 ───────────────────────────────────────
const basicContent = {
  title: "기본 사용법",
  description: "Codex Desktop의 인터페이스 구성과 자주 쓰는 기본 조작법을 소개합니다.",
  items: [
    {
      title: "인터페이스 구성",
      defaultOpen: true,
      content: (
        <div className="space-y-3">
          <p>Codex Desktop은 왼쪽 사이드바와 오른쪽 메인 영역으로 구성됩니다.</p>
          <div className="space-y-2">
            {[
              { label: "새 스레드", desc: "새 대화(스레드)를 시작합니다." },
              { label: "스킬 및 앱", desc: "스킬 마켓플레이스와 설치된 스킬을 관리합니다." },
              { label: "자동화", desc: "예약 실행 스레드를 설정하고 관리합니다." },
              { label: "스레드 목록", desc: "이전 대화 기록을 시간순으로 표시합니다." },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 text-xs">
                <span
                  className="font-medium min-w-[80px]"
                  style={{ color: "var(--accent)" }}
                >
                  {item.label}
                </span>
                <span style={{ color: "var(--text-secondary)" }}>{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "키보드 단축키",
      content: (
        <div className="space-y-2">
          {[
            { keys: "Ctrl+N", desc: "새 스레드 시작" },
            { keys: "Ctrl+O", desc: "폴더 열기" },
            { keys: "Ctrl+B", desc: "사이드바 토글" },
            { keys: "Ctrl+J", desc: "터미널 토글" },
            { keys: "Ctrl+,", desc: "설정 열기" },
            { keys: "Ctrl+F", desc: "검색" },
            { keys: "Ctrl+Shift+[", desc: "이전 스레드" },
            { keys: "Ctrl+Shift+]", desc: "다음 스레드" },
          ].map((item) => (
            <div key={item.keys} className="flex items-center gap-3 text-xs">
              <code
                className="px-2 py-0.5 rounded font-mono min-w-[120px]"
                style={{
                  backgroundColor: "var(--bg-tertiary)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border)",
                }}
              >
                {item.keys}
              </code>
              <span style={{ color: "var(--text-secondary)" }}>{item.desc}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "스레드란?",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>스레드는 Codex와 나누는 하나의 대화 단위입니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>각 스레드는 독립된 컨텍스트를 가집니다</li>
            <li>작업 단위 또는 주제별로 스레드를 분리하면 효율적입니다</li>
            <li>스레드는 사이드바 목록에 자동 저장되며 언제든 다시 열 수 있습니다</li>
            <li>자동화 스레드는 예약된 시간에 자동으로 실행됩니다</li>
          </ul>
        </div>
      ),
    },
    {
      title: "터미널 및 Diff 패널",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>메인 영역에는 채팅 외에 터미널과 Diff 패널을 함께 사용할 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>터미널 (Ctrl+J): 로컬 셸 명령어를 직접 실행</li>
            <li>Diff 패널 (Alt+Ctrl+B): 코드 변경 전후를 시각적으로 비교</li>
            <li>View 메뉴에서 각 패널의 표시 여부를 설정합니다</li>
          </ul>
        </div>
      ),
    },
  ],
};

// ── 대화 시작하기 콘텐츠 ──────────────────────────────────────
const chatContent = {
  title: "대화 시작하기",
  description: "새 스레드를 열고 Codex와 대화하는 방법을 안내합니다.",
  items: [
    {
      title: "새 스레드 시작",
      defaultOpen: true,
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>대화를 시작하는 방법은 두 가지입니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>사이드바 상단 <strong style={{ color: "var(--text-primary)" }}>새 스레드</strong> 클릭</li>
            <li>키보드 단축키 <code style={{ color: "var(--accent)" }}>Ctrl+N</code></li>
          </ul>
          <p className="mt-2">
            새 스레드를 열면 메인 영역에 입력창이 나타납니다.
            이전 대화와 독립된 새 컨텍스트에서 시작합니다.
          </p>
        </div>
      ),
    },
    {
      title: "메시지 입력 및 전송",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>하단 입력창에 작업 내용을 자연어로 입력합니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Enter: 메시지 전송</li>
            <li>Shift+Enter: 줄바꿈 (여러 줄 입력)</li>
            <li>이미지나 파일을 드래그 앤 드롭으로 첨부 가능</li>
          </ul>
          <div
            className="mt-2 px-3 py-2 rounded"
            style={{
              backgroundColor: "var(--bg-tertiary)",
              borderLeft: "2px solid var(--accent)",
            }}
          >
            예시: &ldquo;이 함수의 시간 복잡도를 분석해줘&rdquo;, &ldquo;README를 한국어로 번역해줘&rdquo;
          </div>
        </div>
      ),
    },
    {
      title: "승인 정책 (Approval Policy)",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>Codex가 파일을 수정하거나 명령을 실행할 때 승인 요청이 나타납니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong style={{ color: "var(--text-primary)" }}>On request</strong>: 명시적으로 요청할 때만 승인 요청</li>
            <li>승인 정책은 Settings → 구성에서 변경 가능</li>
            <li>샌드박스 설정으로 Codex가 실행할 수 있는 범위를 제한합니다</li>
          </ul>
        </div>
      ),
    },
    {
      title: "개인 맞춤 설정",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>Settings → 개인 맞춤 설정에서 Codex의 응답 방식을 조정할 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>성격(어조): 실용적, 상세한, 간결한 등 선택</li>
            <li>맞춤형 지침: 항상 적용할 지침을 텍스트로 입력</li>
          </ul>
        </div>
      ),
    },
  ],
};

// ── 파일 작업 콘텐츠 ──────────────────────────────────────────
const filesContent = {
  title: "파일 작업",
  description: "로컬 폴더를 열고 파일을 분석하거나 코드를 수정하는 방법을 안내합니다.",
  items: [
    {
      title: "폴더 열기",
      defaultOpen: true,
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>Codex Desktop은 로컬 프로젝트 폴더를 기준으로 작업합니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>File → Open Folder... (Ctrl+O)로 작업 디렉토리 선택</li>
            <li>선택한 폴더가 Codex의 작업 컨텍스트가 됩니다</li>
            <li>Settings → 환경에서 여러 프로젝트를 관리합니다</li>
          </ul>
        </div>
      ),
    },
    {
      title: "파일 및 이미지 첨부",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>대화 입력창에서 파일을 직접 첨부할 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>입력창에 파일 드래그 앤 드롭</li>
            <li>클립보드에서 이미지 붙여넣기 (Ctrl+V)</li>
            <li>지원 형식: 소스 코드, 텍스트, 이미지(PNG, JPG 등), PDF</li>
          </ul>
        </div>
      ),
    },
    {
      title: "로컬 환경 설정",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>Settings → 환경에서 각 프로젝트별 실행 환경을 세밀하게 설정합니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>환경 파일 경로: 프로젝트별 .env 파일 지정</li>
            <li>설정 스크립트: 환경 초기화 시 실행할 셸 스크립트</li>
            <li>정리 스크립트: 작업 트리 삭제 전 실행할 스크립트</li>
            <li>액션: 자주 쓰는 커맨드를 버튼으로 등록</li>
          </ul>
        </div>
      ),
    },
    {
      title: "작업 트리 (Worktree)",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>Codex는 코드 수정 작업을 작업 트리 단위로 격리하여 실행합니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>각 작업은 별도의 Git worktree에서 진행되어 원본에 영향을 주지 않습니다</li>
            <li>작업 완료 후 변경 사항을 검토하고 병합할 수 있습니다</li>
            <li>Settings → 작업 트리에서 자동 삭제 정책과 보관 수를 설정합니다</li>
          </ul>
        </div>
      ),
    },
  ],
};

// ── 라우트 맵 ────────────────────────────────────────────────
const contentMap: Record<string, typeof basicContent> = {
  basic: basicContent,
  chat: chatContent,
  files: filesContent,
};

export default async function UsagePage({
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
          { label: "사용법" },
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
