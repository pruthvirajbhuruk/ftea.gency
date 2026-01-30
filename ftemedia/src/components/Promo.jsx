export default function Promo() {
  return (
    <section className="promo">
      <div className="promo-inner">
        <div>
          <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 8 }}>
            Podcasting for creators — content-first strategy
          </div>

          <div className="promo-title">
            <span className="barred bar-blue">Podcasting For VCs</span><br />
            <span className="barred bar-brown">& Tech Companies</span>
          </div>

          <div className="promo-desc">
            We help creators, founders and teams scale authority with long-form shows,
            bite-sized clips, and conversion-first websites.
          </div>
        </div>
      </div>
    </section>
  );
}
