import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header variant="dark" />

      <main>
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <h1>
                OTP 인증 시스템이 결합된
                <br />
                일회용 암호화 파일 공유 서비스
              </h1>
              <p className="lead">
                파일은 보내는 사람의 브라우저에서 암호화되어 올라갑니다. 받는 사람은 링크를 열고 OTP 코드를
                입력해야 파일을 받을 수 있고, 받는 순간 서버에서 파일이 지워집니다.
              </p>
              <div className="hero-actions">
                <Link href="/send" className="btn btn-bright">
                  파일 보내기
                </Link>
                <Link href="/#flow" className="btn btn-ghost">
                  동작 방식 보기
                </Link>
              </div>
            </div>

            <div>
              <div className="ticket" aria-hidden="true">
                <div className="ticket-file">
                  <span className="ticket-name">
                    계약서_최종.pdf
                    <i className="ticket-strike" />
                  </span>
                  <span className="ticket-size">2.4MB</span>
                </div>
                <div className="ticket-track">
                  <span className="ticket-fill" />
                  <span className="ticket-dot" />
                </div>
                <ol className="ticket-stages">
                  <li className="s1">업로드</li>
                  <li className="s2">OTP 인증</li>
                  <li className="s3">삭제</li>
                </ol>
              </div>
              <p className="sr-only">
                파일이 업로드되고, OTP 인증을 거쳐 한 번 전송된 뒤 서버에서 삭제되는 과정을 보여 주는 장면입니다.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="flow">
          <div className="wrap">
            <h2>이렇게 전달됩니다</h2>
            <p className="section-sub">서버는 암호문만 잠시 보관하고, 열람이 끝나면 바로 지웁니다.</p>
            <ol className="flow">
              <li>
                <span className="flow-n">1단계</span>
                <h3>보내는 사람이 올립니다</h3>
                <p>
                  브라우저가 파일을 암호화한 뒤 암호문만 서버로 보냅니다. 복호화 키는 서버로 가지 않고, 링크의 #
                  뒤에만 담깁니다.
                </p>
              </li>
              <li>
                <span className="flow-n">2단계</span>
                <h3>받는 사람이 인증합니다</h3>
                <p>
                  링크를 열고 OTP를 요청하면 6자리 코드가 만들어집니다. 3분 안에 코드를 입력해야 파일이 내려옵니다.
                </p>
              </li>
              <li className="burn">
                <span className="flow-n">3단계</span>
                <h3>받으면 사라집니다</h3>
                <p>받는 사람의 브라우저에서 복호화하고, 서버에 있던 파일은 전송 직후 삭제됩니다.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="section section-white" id="features">
          <div className="wrap">
            <h2>세 가지 기능</h2>
            <p className="section-sub">각 기능은 하나의 위협을 막기 위해 들어갑니다.</p>
            <div className="features">
              <div className="feature">
                <h3>클라이언트 측 암호화</h3>
                <div>
                  <p>
                    AES-256-GCM으로 브라우저 안에서 암호화합니다. 서버에는 암호문만 있으므로 서버 관리자도 파일 내용을
                    볼 수 없습니다.
                  </p>
                  <p>복호화 키는 링크의 # 뒤(Fragment)에 들어가서 서버 로그에도 남지 않습니다.</p>
                </div>
              </div>
              <div className="feature">
                <h3>OTP 기반 동적 인증</h3>
                <div>
                  <p>
                    링크만 알아서는 열 수 없습니다. 받을 때마다 새 6자리 코드가 발급되고, 3분 안에 입력한 경우에만
                    암호문을 내려줍니다.
                  </p>
                  <p>코드를 5번 틀리면 파일을 삭제해서 무차별 대입을 막습니다.</p>
                </div>
              </div>
              <div className="feature">
                <h3>일회성 저장과 완전 파기</h3>
                <div>
                  <p>
                    업로드된 암호문은 내려받기 전까지 대기합니다. 인증을 통과한 한 번의 요청에만 전송하고, 직후
                    메모리와 디스크에서 지웁니다.
                  </p>
                  <p>받는 사람이 열지 않아도 정한 만료 시간(10분, 1시간, 24시간)이 지나면 삭제됩니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="effects">
          <div className="wrap">
            <h2>기대 효과</h2>
            <p className="section-sub">서버를 믿지 않아도 되는 구조를 목표로 합니다.</p>
            <ul className="effects">
              <li>
                <h3>서버를 신뢰하지 않는 파일 전달</h3>
                <p>서버 관리자나 해커가 저장소를 열어도 파일 내용을 볼 수 없습니다.</p>
              </li>
              <li>
                <h3>링크가 유출돼도 열리지 않음</h3>
                <p>별도 경로로 전달된 OTP가 없으면 열 수 없고, 한 번 열면 파일이 삭제됩니다.</p>
              </li>
              <li>
                <h3>설치 없이 브라우저에서</h3>
                <p>회원가입이나 프로그램 설치 없이 링크를 열어 바로 받을 수 있습니다.</p>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
