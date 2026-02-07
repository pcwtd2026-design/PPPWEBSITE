import Link from "next/link";

const NAV = [
  { href: "/", label: "HOME" },
  { href: "/who-we-are", label: "WHO WE ARE" },
  { href: "/who-are-you", label: "WHO ARE YOU" },
  { href: "/reels", label: "REELS" },
];

export default function Shell({ active, children }: { active: string; children: React.ReactNode }) {
  return (
    <div className="page">
      <div className="banner">
        <img src="/banner-k2.jpg" alt="K2 banner" />
      </div>

      <div className="bottom">
        <div className="titleStrip">
          <div className="title">PICTURE POSSIBLE PRODUCTIONS</div>
        </div>

        <div className="menuBar">
          <nav className="menu" aria-label="Primary navigation">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={active === n.href ? "active" : ""}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        <main className="content">
          <div className="contentInner">{children}</div>
        </main>
      </div>
    </div>
  );
}
