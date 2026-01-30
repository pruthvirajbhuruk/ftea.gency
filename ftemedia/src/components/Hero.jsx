import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // 🔥 PASTE YOUR FULL CANVAS PARTICLE CODE HERE
    // replace: document.getElementById('heroCanvas')
    // with: canvasRef.current
  }, []);

  return (
    <section className="hero">
      <div className="hero-left">
        <h1>FTE MEDIA — We build websites & craft viral clips</h1>
        <p className="hero-sub">
          Performance-first, design-forward, built to scale.
        </p>

        <div className="hero-cta">
          <button className="btn-primary hover-target">Start a Project</button>
          <a href="#work" className="cta hover-target">View Work</a>
        </div>
      </div>

      <div className="hero-canvas-wrap">
        <canvas ref={canvasRef} width="720" height="360" />
      </div>
    </section>
  );
}
