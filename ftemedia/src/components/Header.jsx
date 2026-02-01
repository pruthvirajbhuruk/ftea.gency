import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="premium-header">
      {/* LEFT – Brand */}
      <div className="header-brand">
  <span className="brand-mark">✦</span>
  <span className="brand-text">FTE</span>
</div>

      {/* CENTER – Navigation in floating pill */}
      <nav className="header-nav-pill">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#cases">Case Studies</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* RIGHT – CTA */}
      <div className="header-cta">
        <button className="cta-pill">Book a Call</button>
      </div>

      {/* MOBILE TOGGLE */}
      <button
        className={`mobile-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#services" onClick={() => setOpen(false)}>Services</a>
        <a href="#cases" onClick={() => setOpen(false)}>Case Studies</a>
        <a href="#blog" onClick={() => setOpen(false)}>Blog</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        <button className="cta-pill mobile-cta">Book a Call</button>
      </div>
    </header>
  );
}
