import { ALL_CRYPTO_IMPLEMENTED, CRYPTO_MODULES } from "@/lib/crypto/status";

/** 암호 기능이 아직 비어 있을 때 작업 화면 위에 보여 주는 안내 */
export default function DummyNotice() {
  if (ALL_CRYPTO_IMPLEMENTED) return null;
  const todo = CRYPTO_MODULES.filter((m) => !m.implemented).map((m) => m.title);
  return (
    <div className="notice" role="note">
      <div>
        <strong>이 화면은 모양만 있습니다.</strong>
        파일 올리기, 링크 만들기, OTP 인증, 받기, 삭제 등 모든 기능이 아직 구현되지 않았습니다.
        (미구현: {todo.join(", ")}, 서버 저장소)
      </div>
    </div>
  );
}
