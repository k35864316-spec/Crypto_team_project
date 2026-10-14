import type { Metadata } from "next";
import { globalStyles } from "@/styles/globalStyles";

export const metadata: Metadata = {
  title: "열렸조 | 일회용 암호화 파일 공유",
  description: "OTP 인증 시스템이 결합된 일회용 암호화 파일 공유 서비스 (암호학 팀 프로젝트)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
