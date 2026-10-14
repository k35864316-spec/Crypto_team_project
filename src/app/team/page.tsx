import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CRYPTO_MODULES } from "@/lib/crypto/status";
import { TEAM, TEAM_NAME } from "@/lib/team";

export const metadata: Metadata = { title: "팀 소개 | 열렸조" };

export default function TeamPage() {
  return (
    <>
      <Header />
      <main>
        <section className="team-head">
          <div className="wrap">
            <h1 className="page-title">팀 소개</h1>
          </div>
        </section>

        <section className="team-block" id="team">
          <div className="wrap">
            <h2>팀원과 역할</h2>
            <p className="section-sub">
              {TEAM_NAME}은 세 사람이 각자 낸 아이디어를 하나로 합쳐 이 서비스를 만들고 있습니다. 대칭키, 공개키,
              전자서명, OTP의 동작 원리를 함께 공부하고 직접 구현하는 것이 목표입니다.
            </p>
            <ul className="team">
              {TEAM.map((m) => (
                <li key={m.name} className="member">
                  <div className="member-who">
                    <h3>
                      {m.name}
                      <span className={`position ${m.position === "팀장" ? "" : "plain"}`}>{m.position}</span>
                    </h3>
                    <p className="idea">처음 낸 아이디어: {m.idea}</p>
                  </div>
                  <ul className="duties">
                    {m.duties.map((d) => (
                      <li key={d.title}>
                        <strong>{d.title}</strong>
                        <p>{d.detail}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="team-block team-block-last" id="status">
          <div className="wrap">
            <h2>개발 현황</h2>
            <p className="section-sub">
              현재는 화면만 있고 모든 기능이 비어 있습니다. 각자 맡은 파일의 TODO를 채우면 됩니다.
            </p>
            <div className="table-scroll">
              <table className="roles">
                <thead>
                  <tr>
                    <th scope="col">기능</th>
                    <th scope="col">상태</th>
                    <th scope="col">담당</th>
                    <th scope="col">파일</th>
                  </tr>
                </thead>
                <tbody>
                  {CRYPTO_MODULES.map((m) => (
                    <tr key={m.id}>
                      <td>{m.title}</td>
                      <td>
                        <span className={`chip ${m.implemented ? "chip-ok" : "chip-todo"}`}>
                          {m.implemented ? "구현됨" : "미구현"}
                        </span>
                      </td>
                      <td>{m.owner}</td>
                      <td className="path">{m.file}</td>
                    </tr>
                  ))}
                  <tr>
                    <td>서버 저장소</td>
                    <td>
                      <span className="chip chip-todo">미구현</span>
                    </td>
                    <td>김명준</td>
                    <td className="path">src/lib/server/store.ts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
