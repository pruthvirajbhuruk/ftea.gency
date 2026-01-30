export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Thanks — we will reply soon!");
    e.target.reset();
  };

  return (
    <section id="contact" className="reveal">
      <div className="wrap" style={{ maxWidth: 900 }}>
        <div className="section-title">Let's work</div>
        <p className="section-sub" style={{ color: "var(--muted)" }}>
          Send a brief and we’ll reply fast.
        </p>

        <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
          <input placeholder="Your name" required />
          <input type="email" placeholder="Email" required />
          <textarea rows="4" placeholder="Project brief" required />
          <button className="btn-primary hover-target">Send</button>
        </form>
      </div>
    </section>
  );
}
