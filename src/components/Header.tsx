import Link from "next/link";

export default function Header({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <header className={`site-header ${variant === "dark" ? "dark" : ""}`}>
      <div className="wrap">
        <Link href="/" className="brand">
          열렸조
        </Link>
        <nav className="nav" aria-label="주요 메뉴">
          <Link href="/#flow">동작 방식</Link>
          <Link href="/team">팀 소개</Link>
          <Link href="/send">파일 보내기</Link>
        </nav>
      </div>
    </header>
  );
}
