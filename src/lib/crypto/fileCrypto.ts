/**
 * 파일 암호화 모듈 (담당: 김명준)  --  브라우저에서 실행됩니다.
 *
 * 지금은 미구현 상태입니다. 아래 두 함수는 데이터를 그대로 돌려주는 더미라서
 * 파일이 암호화되지 않은 채 서버에 저장됩니다. 화면 흐름을 확인하는 용도로만 쓰세요.
 *
 * 구현할 때 참고할 설계
 *  - 키: crypto.getRandomValues 로 32바이트(AES-256) 생성, Web Crypto API(crypto.subtle) 사용
 *  - 알고리즘: AES-GCM, 매번 새 12바이트 IV 생성. 암호문 앞에 IV를 붙여 함께 저장
 *  - 키 전달: base64url 문자열로 바꿔 링크의 # 뒤(Fragment)에만 넣는다. 서버로 보내지 않는다.
 *  - 복호화: GCM 인증 태그 검증에 실패하면 예외를 던진다. (변조 탐지)
 *  - 선택: 파일명도 같은 키로 암호화해서 메타데이터 노출을 줄인다.
 *  - 큰 파일: 청크 단위 암호화 (청크마다 IV를 다르게, 순서 변조를 막는 방법 필요)
 */

export interface EncryptResult {
  /** 서버로 보낼 암호문 */
  ciphertext: ArrayBuffer;
  /** 링크의 # 뒤에 넣을 복호화 키 (문자열) */
  key: string;
}

export const DUMMY_KEY = "NOT-IMPLEMENTED";

export async function encryptFile(plain: ArrayBuffer): Promise<EncryptResult> {
  // TODO(김명준): AES-256-GCM 암호화로 교체
  return { ciphertext: plain, key: DUMMY_KEY };
}

export async function decryptFile(ciphertext: ArrayBuffer, key: string): Promise<ArrayBuffer> {
  void key;
  // TODO(김명준): AES-256-GCM 복호화로 교체. 태그 검증에 실패하면 throw
  return ciphertext;
}
