/**
 * 전자서명과 무결성 모듈 (담당: 김용현)
 *
 * 지금은 미구현 상태입니다. 해시와 서명은 빈 문자열이고, 검증은 항상 "미구현"으로 답합니다.
 *
 * 흐름
 *  - 보내는 사람 브라우저: 원본 파일의 digest(SHA-256)를 계산하고 signDigest 로 서명해 서버에 함께 올린다.
 *  - 받는 사람 브라우저: 복호화한 파일로 verifyIntegrity 를 호출해 해시와 서명을 확인한다.
 *  - 서버: hashToken 으로 보내는 사람 토큰을 해시해서 저장한다. (DB가 유출돼도 토큰 원문이 남지 않게)
 */

export type CheckState = "ok" | "fail" | "not-implemented";

export interface IntegrityResult {
  hash: CheckState;
  signature: CheckState;
}

/** 파일 내용의 SHA-256 해시를 16진수 문자열로 돌려준다. (브라우저) */
export async function hashBytes(data: ArrayBuffer): Promise<string> {
  void data;
  // TODO(김용현): crypto.subtle.digest("SHA-256", data) 로 교체
  return "";
}

/** 해시에 송신자의 전자서명을 붙인다. (브라우저) */
export async function signDigest(digest: string): Promise<string> {
  void digest;
  // TODO(김용현): ECDSA 또는 Ed25519 서명으로 교체. 공개키를 어떻게 전달할지도 정해야 합니다.
  return "";
}

/** 복호화된 파일이 해시와 서명에 맞는지 확인한다. (브라우저) */
export async function verifyIntegrity(
  plain: ArrayBuffer,
  digest: string,
  signature: string,
): Promise<IntegrityResult> {
  void plain;
  void digest;
  void signature;
  // TODO(김용현): 해시 재계산 비교 + 서명 검증으로 교체
  return { hash: "not-implemented", signature: "not-implemented" };
}

/** 보내는 사람 토큰을 저장용 해시로 바꾼다. (서버) */
export function hashToken(token: string): string {
  // TODO(김용현): SHA-256 해시로 교체. 지금은 원문을 그대로 저장합니다.
  return token;
}
