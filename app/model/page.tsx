import Breadcrumb from "@/components/Breadcrumb";
import Accordion from "@/components/Accordion";

// 모델 페이지 — Phase 3 콘텐츠 구현
// 취지: 모델별 특성과 선택 기준, 변경 방법 안내

export default function ModelPage() {
  const items = [
    {
      title: "모델 종류",
      defaultOpen: true,
      content: (
        <div className="space-y-3 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>Codex Desktop은 Claude 모델 패밀리를 사용합니다. 작업 성격에 맞는 모델을 선택하세요.</p>
          <div className="space-y-2 mt-2">
            {[
              {
                name: "claude-opus-4",
                badge: "가장 강력",
                desc: "복잡한 추론, 대규모 코드베이스 분석, 긴 컨텍스트 처리에 최적화된 최상위 모델입니다.",
                uses: ["복잡한 아키텍처 설계", "대규모 리팩토링", "심층 코드 분석"],
              },
              {
                name: "claude-sonnet-4",
                badge: "균형",
                desc: "성능과 응답 속도의 균형이 뛰어난 모델입니다. 대부분의 개발 작업에 권장됩니다.",
                uses: ["일반 코드 작성", "버그 수정", "문서 작성"],
              },
              {
                name: "claude-haiku-4",
                badge: "빠름",
                desc: "빠른 응답이 필요한 간단한 작업에 적합한 경량 모델입니다.",
                uses: ["간단한 질문", "빠른 탐색", "코드 설명"],
              },
            ].map((m) => (
              <div
                key={m.name}
                className="p-3 rounded"
                style={{
                  backgroundColor: "var(--bg-tertiary)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono font-medium" style={{ color: "var(--accent)" }}>
                    {m.name}
                  </span>
                  <span
                    className="px-1.5 py-0.5 rounded text-[10px]"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {m.badge}
                  </span>
                </div>
                <p className="mb-1">{m.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {m.uses.map((u) => (
                    <span
                      key={u}
                      className="px-2 py-0.5 rounded text-[10px]"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {u}
                    </span>
                  ))}
                </div>
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
          <p>모델은 스레드마다 독립적으로 설정할 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>메뉴 바 <strong style={{ color: "var(--text-primary)" }}>Model</strong> 클릭 후 원하는 모델 선택</li>
            <li>입력창 하단 모델 표시 영역을 클릭하여 변경</li>
            <li>변경은 현재 스레드에만 적용 (다른 스레드에 영향 없음)</li>
          </ul>
        </div>
      ),
    },
    {
      title: "모델 선택 기준",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>작업 특성에 따라 모델을 선택하면 비용과 속도를 최적화할 수 있습니다.</p>
          <div className="space-y-1 mt-1">
            {[
              { situation: "복잡한 설계·분석 작업", model: "Opus" },
              { situation: "일반 코딩·디버깅 작업", model: "Sonnet (권장)" },
              { situation: "빠른 답변·단순 조회", model: "Haiku" },
            ].map((r) => (
              <div key={r.situation} className="flex gap-3">
                <span className="min-w-[160px]">{r.situation}</span>
                <span style={{ color: "var(--accent)" }}>{r.model}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "플랜별 모델 접근",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>사용 가능한 모델은 구독 플랜에 따라 다를 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Free 플랜: 기본 모델(Haiku 계열) 사용</li>
            <li>Pro 플랜: Opus, Sonnet 포함 전체 모델 사용</li>
            <li>플랜 확인은 Settings → 구독에서 가능</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-3xl">
      <Breadcrumb items={[{ label: "모델" }]} />

      <h1
        className="text-2xl font-semibold mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        모델
      </h1>
      <p
        className="text-sm leading-relaxed mb-8"
        style={{ color: "var(--text-secondary)" }}
      >
        작업 목적에 맞는 Claude 모델을 선택하여 성능과 속도를 최적화합니다.
      </p>

      <Accordion items={items} />
    </div>
  );
}
