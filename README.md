# 열렸조: OTP 인증 시스템이 결합된 일회용 암호화 파일 공유 서비스

암호학 팀 프로젝트 프로토타입입니다. 팀 열렸조(팀장 김명준, 팀원 김용현, 박민지)가 Next.js와 TypeScript로 만들고 있습니다.

**현재 상태: 화면 뼈대만 있고, 모든 기능이 미구현입니다.** 파일 올리기, 링크 만들기, OTP 인증, 받기, 삭제는 아직 동작하지 않습니다.

## 팀과 역할

| 이름 | 직책 | 담당 | 파일 |
| --- | --- | --- | --- |
| 김명준 | 팀장 | 파일 암호화, 서버 저장소 | `src/lib/crypto/fileCrypto.ts` |
| 김용현 | 팀원 | 전자서명과 무결성 | `src/lib/crypto/integrity.ts` |
| 박민지 | 팀원 | OTP 인증 | `src/lib/crypto/otp.ts` |

담당과 구현 여부는 `src/lib/crypto/status.ts` 한 곳에서 관리하며, 팀 소개 페이지의 개발 현황 표에 그대로 반영됩니다.

## 화면

- `/` 소개 화면 (개요, 동작 방식, 기능, 기대 효과)
- `/team` 팀 소개 (팀원별 역할, 개발 현황)
- `/send` 파일 보내기 (화면만 있고 비활성)

## 실행하기

Node.js 20.9 이상이 필요합니다.

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다.

## 폴더 구조

```text
src/
  app/
    page.tsx            소개 화면
    team/page.tsx       팀 소개
    send/               파일 보내기 (page.tsx, SendClient.tsx)
    layout.tsx          공통 레이아웃, 전역 스타일 삽입
  components/           Header, Footer, DummyNotice
  lib/
    crypto/             암호 기능 자리 (fileCrypto, otp, integrity, status)
    team.ts             팀 소개 데이터
    types.ts, format.ts 상수와 보조 함수
  styles/globalStyles.ts  전체 스타일 (CSS 파일 없이 TS로 관리)
```

## 앞으로 할 일

각자 맡은 파일의 `TODO`를 채우고, 구현을 마치면 `status.ts`의 `implemented`를 `true`로 바꿉니다. 업로드, OTP 발급, 받기, 삭제 같은 서버 기능은 이후에 추가합니다.
