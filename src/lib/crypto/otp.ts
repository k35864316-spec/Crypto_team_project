/**
 * OTP 인증 모듈 (담당: 박민지)  --  서버(Route Handler)에서 실행됩니다.
 *
 * 지금은 미구현 상태입니다. OTP가 항상 "123456" 이므로 보안 기능으로 쓰면 안 됩니다.
 *
 * 구현할 때 참고할 설계
 *  - generateOtp: 받는 사람이 요청할 때마다 새 6자리 코드를 만든다. (HMAC-SHA256 기반 HOTP/TOTP 등)
 *  - verifyOtp: 시간 차이로 정보가 새지 않도록 상수 시간 비교를 쓴다.
 *  - 유효 시간(3분), 시도 횟수 제한(5회), 재사용 방지는 src/lib/types.ts 의 상수와
 *    src/lib/server/store.ts 의 흐름이 이미 처리합니다. 여기서는 코드 생성과 비교만 바꾸면 됩니다.
 */

export const DUMMY_OTP = "123456";

export function generateOtp(): string {
  // TODO(박민지): HMAC 기반 OTP 생성으로 교체
  return DUMMY_OTP;
}

export function verifyOtp(input: string, expected: string): boolean {
  // TODO(박민지): 상수 시간 비교 등 안전한 검증으로 교체
  return input === expected;
}
