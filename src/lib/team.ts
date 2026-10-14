import { CRYPTO_MODULES } from "@/lib/crypto/status";

/** 팀 소개 구간에서 보여 주는 팀원 정보 */
export interface Duty {
  title: string;
  detail: string;
}

export interface Member {
  name: string;
  position: "팀장" | "팀원";
  /** 브레인스토밍에서 처음 낸 아이디어 */
  idea: string;
  duties: Duty[];
}

export const TEAM_NAME = "열렸조";

// 암호 모듈의 담당과 설명은 status.ts 하나만 고치면 이곳에도 반영됩니다.
const dutiesOf = (owner: string): Duty[] =>
  CRYPTO_MODULES.filter((m) => m.owner === owner).map((m) => ({ title: m.title, detail: m.detail }));

export const TEAM: Member[] = [
  {
    name: "김명준",
    position: "팀장",
    idea: "일회용 암호화 파일 공유 서비스",
    duties: [
      ...dutiesOf("김명준"),
      {
        title: "서버 저장소",
        detail: "암호문을 임시로 저장하고, 만료 처리와 한 번 전송 후 삭제까지 파일의 생명주기를 관리합니다.",
      },
    ],
  },
  {
    name: "김용현",
    position: "팀원",
    idea: "OTP 인증 시스템",
    duties: dutiesOf("김용현"),
  },
  {
    name: "박민지",
    position: "팀원",
    idea: "안전한 문서 유통 및 전자서명 시스템",
    duties: dutiesOf("박민지"),
  },
];
