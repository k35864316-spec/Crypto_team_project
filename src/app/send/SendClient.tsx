"use client";

import { EXPIRY_OPTIONS, MAX_FILE_BYTES } from "@/lib/types";
import { formatBytes } from "@/lib/format";

/** 화면 뼈대만 남긴 보내기 폼. 아무 기능도 연결되어 있지 않습니다. */
export default function SendClient() {
  return (
    <>
      <div className="panel">
        <h2>1. 파일 고르기</h2>
        <p className="panel-sub">파일 하나를 {formatBytes(MAX_FILE_BYTES)}까지 보낼 수 있습니다.</p>
        <label className="dropzone">
          <input type="file" disabled />
          <span className="big">파일을 끌어다 놓거나 눌러서 고르세요</span>
          <span className="small">고른 파일은 이 브라우저 밖으로 나가기 전에 암호화됩니다.</span>
        </label>
      </div>

      <div className="panel">
        <h2>2. 보관 시간 정하기</h2>
        <p className="panel-sub">받는 사람이 열지 않아도 이 시간이 지나면 파일이 삭제됩니다.</p>
        <div className="segmented" role="radiogroup" aria-label="보관 시간">
          {EXPIRY_OPTIONS.map((o) => (
            <label key={o.ms}>
              <input type="radio" name="expiry" value={o.ms} disabled />
              <span>{o.label}</span>
            </label>
          ))}
        </div>
        <div className="actions">
          <button type="button" className="btn btn-primary" disabled>
            암호화하고 링크 만들기
          </button>
        </div>
      </div>
    </>
  );
}
