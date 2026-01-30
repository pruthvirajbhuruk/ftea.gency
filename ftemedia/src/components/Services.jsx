import { useRef } from "react";
import useReveal from "../hooks/useReveal";

export default function Services() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="services" ref={ref} className="services-wrapper reveal">
      <div className="services-container">

        <div className="service-card hover-target" data-side="left">
          <div className="service-tag">Website Dev</div>
          <h2>Premium Website Development</h2>
          <p>High-performance websites built to convert.</p>
          <ul>
            <li>⚡ 48hr MVP Delivery</li>
            <li>🚀 Next.js / Vercel</li>
            <li>📱 Fully responsive</li>
          </ul>
          <button className="service-btn">Book Website Build →</button>
        </div>

        <div className="service-card hover-target" data-side="right">
          <div className="service-tag">Content</div>
          <h2>Short-Form Content Repurposing</h2>
          <p>Turn long-form content into viral shorts.</p>
          <ul>
            <li>🎬 Premium Editing</li>
            <li>🧠 Hook-Driven Scripts</li>
            <li>📈 Algorithm Optimization</li>
          </ul>
          <button className="service-btn">Get Editing Plan →</button>
        </div>

      </div>
    </section>
  );
}
