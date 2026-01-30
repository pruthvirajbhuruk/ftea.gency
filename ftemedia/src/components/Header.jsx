export default function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="brand">
          <div className="logo">FM</div>
          <div>
            <div style={{ fontWeight: 800 }}>FTE MEDIA</div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>
              Website Dev • Clipping
            </div>
          </div>
        </div>

        <div className="navlinks">
          <a href="#services" className="hover-target">Services</a>
          <a href="#clients" className="hover-target">Clients</a>
          <a href="#testimonials" className="hover-target">Testimonials</a>
          <a href="#contact" className="cta hover-target">BOOK A CALL</a>
        </div>
      </nav>
    </header>
  );
}
