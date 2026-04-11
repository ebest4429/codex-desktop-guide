import Breadcrumb from "@/components/Breadcrumb";
import Accordion from "@/components/Accordion";

// 구독 페이지 — Phase 3 콘텐츠 구현
// 취지: Codex Desktop 플랜별 기능 차이와 구독 관리 방법 안내

export default function SubscriptionPage() {
  const items = [
    {
      title: "구독 플랜 종류",
      defaultOpen: true,
      content: (
        <div className="space-y-3 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>Codex Desktop은 여러 구독 플랜을 제공합니다. 사용 목적에 맞는 플랜을 선택하세요.</p>
          <div className="space-y-3 mt-2">
            {[
              {
                name: "Free",
                desc: "무료로 기본 기능을 체험할 수 있는 플랜입니다.",
                features: ["제한된 메시지 수", "기본 모델 사용", "단일 스레드"],
              },
              {
                name: "Pro",
                desc: "개인 개발자와 전문가를 위한 플랜입니다.",
                features: ["월정액 메시지 확장", "고급 모델(Claude Opus 등) 사용", "멀티 스레드", "스킬 마켓플레이스 접근"],
              },
              {
                name: "Team / Enterprise",
                desc: "팀 단위 협업과 기업 수준 관리 기능을 제공합니다.",
                features: ["팀원 관리 및 권한 설정", "통합 청구", "SSO 및 보안 정책", "우선 지원"],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className="p-3 rounded"
                style={{
                  backgroundColor: "var(--bg-tertiary)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="font-semibold mb-1 text-sm"
                  style={{ color: "var(--accent)" }}
                >
                  {plan.name}
                </div>
                <p className="mb-2">{plan.desc}</p>
                <ul className="list-disc list-inside space-y-0.5">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "구독 관리",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>현재 구독 상태 확인 및 플랜 변경은 Settings에서 할 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Settings → 구독에서 현재 플랜 및 만료일 확인</li>
            <li>플랜 업그레이드 / 다운그레이드 가능</li>
            <li>결제 수단 변경 및 청구 내역 조회</li>
          </ul>
        </div>
      ),
    },
    {
      title: "사용량 및 한도",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>플랜별 메시지 사용량과 한도를 확인할 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Settings → 구독에서 이번 달 사용량 확인</li>
            <li>한도 초과 시 다음 갱신일까지 제한 또는 업그레이드 필요</li>
            <li>Pro 플랜은 추가 크레딧 구매 가능</li>
          </ul>
        </div>
      ),
    },
    {
      title: "팀 플랜 설정",
      content: (
        <div className="space-y-2 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>Team 플랜에서는 팀원을 초대하고 권한을 관리할 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>이메일로 팀원 초대</li>
            <li>역할(관리자 / 멤버) 지정</li>
            <li>팀 전체 사용량 통합 관리</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-3xl">
      <Breadcrumb items={[{ label: "구독" }]} />

      <h1
        className="text-2xl font-semibold mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        구독 플랜
      </h1>
      <p
        className="text-sm leading-relaxed mb-8"
        style={{ color: "var(--text-secondary)" }}
      >
        Codex Desktop의 구독 플랜별 기능 차이와 구독 관리 방법을 안내합니다.
      </p>

      <Accordion items={items} />
    </div>
  );
}
