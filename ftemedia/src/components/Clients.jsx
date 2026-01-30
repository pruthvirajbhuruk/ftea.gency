export default function Clients() {
  return (
    <section id="clients" className="clients reveal">
      <div className="wrap" style={{ textAlign: "center", marginBottom: 18 }}>
        <div className="section-title">Portfolio & Clients</div>
        <div className="section-sub" style={{ color: "var(--muted)" }}>
          Brands we've helped (placeholders)
        </div>
      </div>

      <div className="wrap" style={{ display: "flex", gap: 18 }}>
        <button className="nav-arrow hover-target">◀</button>

        <div className="clients-track">
          <div className="client-item">
            <div className="client-circle" />
            <div className="client-label">Darknet Diaries</div>
          </div>
        </div>

        <button className="nav-arrow hover-target">▶</button>
      </div>
    </section>
  );
}
