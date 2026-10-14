/** 서버가 파일 하나에 대해 기억하는 진행 상태 */
export type FileStatus =
  | "waiting" // 업로드됨, 받는 사람을 기다리는 중
  | "otp-issued" // 받는 사람이 OTP를 요청해 코드가 발급됨
  | "downloaded" // 한 번 전송되고 서버에서 삭제됨
  | "expired" // 만료 시간이 지나 삭제됨
  | "locked" // OTP를 너무 많이 틀려 삭제됨
  | "deleted"; // 보내는 사람이 직접 파기함

export const LIVE_STATUSES: FileStatus[] = ["waiting", "otp-issued"];

/** 받는 사람에게 보여 줄 수 있는 공개 정보 (OTP, 보내는 사람 토큰은 포함하지 않음) */
export interface PublicFileMeta {
  id: string;
  name: string;
  size: number;
  createdAt: number;
  expiresAt: number;
  status: FileStatus;
  digest: string;
  signature: string;
  attemptsLeft: number;
  otpExpiresAt: number | null;
}

/** 보내는 사람 화면용 상태 (OTP 코드 포함) */
export interface SenderFileStatus {
  id: string;
  name: string;
  size: number;
  expiresAt: number;
  status: FileStatus;
  otp: { code: string; expiresAt: number } | null;
  attemptsLeft: number;
}

export const MAX_FILE_BYTES = 20 * 1024 * 1024; // 20MB
export const OTP_TTL_MS = 3 * 60 * 1000; // OTP 유효 시간 3분
export const MAX_OTP_ATTEMPTS = 5; // 이 횟수만큼 틀리면 파일을 삭제

export const EXPIRY_OPTIONS = [
  { label: "10분", ms: 10 * 60 * 1000 },
  { label: "1시간", ms: 60 * 60 * 1000 },
  { label: "24시간", ms: 24 * 60 * 60 * 1000 },
] as const;

export const DEFAULT_EXPIRY_MS = EXPIRY_OPTIONS[1].ms;
