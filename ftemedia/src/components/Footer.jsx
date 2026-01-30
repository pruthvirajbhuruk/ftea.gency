export default function Footer() {
  return (
    <footer className="footer wrap">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <strong>FTE MEDIA</strong>
          <div style={{ color: "var(--muted)" }}>Website Dev · Clipping</div>
        </div>
        <div>© {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
}
