# WORKFLOW.md — 탬플릿 구조 전체 흐름 조망

> 이 파일은 프로젝트 주제와 무관한 탬플릿 구조 자체의 흐름을 담는다.
> 점진적으로 수정·완성된다. 완성 시점 = 탬플릿 완성 시점.
> 참조: `.claude/plans/template-master.md`

---

## 1. 신규 프로젝트 초기화 흐름

```mermaid
flowchart TD
    A[사용자: /초기화 실행] --> B[대분류 11개 목록 제시]
    B --> C[사용자 대분류 선택]
    C --> D[AI 질문·제안 ↔ 협의\n소분류·프로젝트 성격 결정]
    D --> E{분류 변경?}
    E -- 예 --> C
    E -- 아니오 --> F[골격 확정\n임시 체크리스트 + 검증 파일 생성]
    F --> G[마스터플랜 1차 초안 작성]
    G --> H[사용자 검토·수정 협의]
    H --> I[전체 설계도 작성\nplans/designs/blueprint]
    I --> J[마스터플랜 확정\n설계도 파일 연결]
    J --> K[훅: 초기화 검증 파일 확인]
    K --> L{초기화 완료?}
    L -- 미완 --> H
    L -- 완료 --> M[페이지플랜 작성 가능]
```

---

## 2. 세션 운영 흐름

```mermaid
flowchart TD
    A[세션 시작] --> B[훅: 강제 읽기\n마스터플랜 + 페이지플랜 + WORKSPACE]
    B --> C[현재 위치 파악\n남은 과제 확인]
    C --> D[작업 진행]
    D --> E[플랜 항목 🔲→🔄]
    E --> F[구현]
    F --> G{AI 판단:\n점검 필요?}
    G -- 예 --> H[AI: /점검-연결 또는\n/점검-구현 실행 권고]
    H --> I{사용자 결정}
    I -- 실행 --> J[점검 실행 → 정합 확인]
    J --> F
    I -- 생략 --> K
    G -- 아니오 --> K[플랜 항목 🔄→✅]
    K --> L[WORKSPACE 업데이트]
    L --> M[커밋]
```

---

## 3. 문제 발생 처리 흐름 (돌발상황 / 완료 페이지 사후보수)

```mermaid
flowchart TD
    A[문제 발생\n돌발상황 또는 완료 페이지 사후보수] --> B[새 플랜 생성\nhotfix 또는 신규 페이지플랜]
    B --> C[/점검-연결, /점검-구현 실행\n기존 설계도·지침과 정합 확인]
    C --> D[설계도 먼저 보완\n설계도가 항상 기준]
    D --> E[완료된 페이지플랜은 완료 상태 유지\n불변]
    E --> F[보완된 설계도 기준으로\n새 플랜·지침 일치]
    F --> G[구현]
    G --> H[WORKSPACE 업데이트 → 커밋]
```

---

## 4. Phase 전환 흐름

```mermaid
flowchart TD
    A[현재 Phase 완료 조건 충족] --> B[WORKSPACE.md →\nWORKSPACE.플랜명.md 이름 변경]
    B --> C[새 WORKSPACE.md 작성]
    C --> D[마스터플랜 활성 플랜 포인터 수정]
    D --> E[plans/designs/ 사전설계 참조하여\n새 페이지플랜 작성]
    E --> F[훅: 아카이브 여부 자동 검증]
    F --> G[새 Phase 시작]
```

---

## 5. 문서 구조 및 연결 관계

```mermaid
graph TD
    CM[CLAUDE.md\n지침·원칙] --> WF[WORKFLOW.md\n전체 흐름 조망]
    CM --> CTX[CONTEXT.md\n프로젝트 구조]
    CM --> RU[RULES.md\n작업 원칙]

    MP[마스터플랜\nmaster.md\n방향·목표·단계] --> BP[전체 설계도\nblueprint.md\n워크플로우·구조]
    MP --> PP[페이지플랜\nphase1.md\n구현 단계]
    BP --> PP
    PP --> WS[WORKSPACE.md\n현재 위치·남은 과제]

    MP -.참조.-> CM
    PP -.참조.-> MP
```

---

> **범례**
> - 실선: 직접 연결·참조
> - 점선: 간접 참조
> - 이 파일은 현재 Phase 1 진행 중인 설계 기준이며 Phase 2 구현 완료 후 보완된다
