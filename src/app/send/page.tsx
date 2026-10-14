import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DummyNotice from "@/components/DummyNotice";
import SendClient from "./SendClient";

export const metadata: Metadata = { title: "파일 보내기 | 열렸조" };

export default function SendPage() {
  return (
    <>
      <Header />
      <main className="page-main">
        <div className="wrap">
          <div className="page-narrow">
            <h1 className="page-title">파일 보내기</h1>
            <p className="page-lead">
              파일을 고르면 브라우저에서 암호화해 올리고, 받는 사람에게 줄 일회용 링크를 만듭니다.
            </p>
            <DummyNotice />
            <SendClient />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
