/**
 * 암호 모듈별 구현 현황.
 * 모듈을 구현했다면 해당 항목의 implemented 를 true 로 바꾸세요.
 * 화면의 안내 배너와 소개 페이지의 "개발 현황" 표가 이 값을 그대로 보여 줍니다.
 */
export interface CryptoModule {
  id: "file" | "otp" | "integrity";
  title: string;
  detail: string;
  owner: string;
  file: string;
  implemented: boolean;
}

export const CRYPTO_MODULES: CryptoModule[] = [
  {
    id: "file",
    title: "파일 암호화",
    detail: "AES-256-GCM으로 브라우저에서 암호화하고 복호화합니다. 키는 링크의 # 뒤에 담습니다.",
    owner: "김명준",
    file: "src/lib/crypto/fileCrypto.ts",
    implemented: false,
  },
  {
    id: "otp",
    title: "OTP 인증",
    detail: "6자리 코드를 발급하고 검증합니다. 유효 시간은 3분이고, 반복해서 틀리면 파일을 잠급니다.",
    owner: "박민지",
    file: "src/lib/crypto/otp.ts",
    implemented: false,
  },
  {
    id: "integrity",
    title: "전자서명과 무결성",
    detail: "SHA-256 해시로 파일이 바뀌지 않았는지, 전자서명으로 보낸 사람이 맞는지 확인합니다.",
    owner: "김용현",
    file: "src/lib/crypto/integrity.ts",
    implemented: false,
  },
];

export const ALL_CRYPTO_IMPLEMENTED = CRYPTO_MODULES.every((m) => m.implemented);
