import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const canvas = document.getElementById("starCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let w, h, stars, animationId;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    stars = Array.from({ length: 140 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.3 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      o: Math.random() * 0.5 + 0.3
    }));

    function draw() {
      ctx.clearRect(0, 0, w, h);

      stars.forEach(s => {
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0 || s.x > w) s.vx *= -1;
        if (s.y < 0 || s.y > h) s.vy *= -1;

        ctx.beginPath();
        ctx.fillStyle = `rgba(120,140,255,${s.o})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="hero">
      {/* Animated background */}
      <canvas id="starCanvas" />
      <div className="hero-bg-gradient" />

      {/* Content */}
      <div className="hero-inner">
        <div className="hero-left">
          <span className="hero-pill">
            Podcasting for creators — content-first strategy
          </span>

          <h1 className="hero-title">
            <span className="highlight blue">Podcasting For VCs</span>
            <br />
            &amp; <span className="highlight beige">Tech Companies</span>
          </h1>

          <p className="hero-description">
            We help creators, founders and teams scale authority with long-form
            shows, bite-sized clips, and conversion-first websites.
          </p>

          <div className="hero-actions">
            <button className="primary-btn">Start a Project</button>
            <button className="secondary-btn">View Work</button>
          </div>
        </div>
      </div>
    </section>
  );
}
