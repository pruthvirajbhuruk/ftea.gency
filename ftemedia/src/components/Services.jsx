import { useRef } from "react";
import useReveal from "../hooks/useReveal";

const services = [
  {
    tag: "Website",
    title: "Website Development",
    desc: "High-performance websites built to convert.",
    features: [
      "⚡ 48hr MVP Delivery",
      "🚀 Next.js / Vercel",
      "📱 Fully Responsive",
    ],
    cta: "Book Website Build →",
  },
  {
    tag: "Video",
    title: "Video Clipping",
    desc: "Turn long-form videos into viral short clips.",
    features: [
      "🎬 Premium Editing",
      "🧠 Hook-Based Cuts",
      "📈 Retention Optimized",
    ],
    cta: "Get Clips →",
  },
  {
    tag: "Influencers",
    title: "Influencer Marketing",
    desc: "Partner with creators that drive real sales.",
    features: [
      "🤝 Creator Outreach",
      "🎯 Niche Targeting",
      "📊 Campaign Tracking",
    ],
    cta: "Launch Campaign →",
  },
  {
    tag: "Local SEO",
    title: "Google My Business Optimization",
    desc: "Dominate local search & map rankings.",
    features: [
      "📍 Profile Optimization",
      "⭐ Review Strategy",
      "📈 Local Visibility Boost",
    ],
    cta: "Optimize GMB →",
  },
  {
    tag: "Social",
    title: "Content & Social Media Management",
    desc: "Consistent content that builds trust & growth.",
    features: [
      "📅 Content Planning",
      "✍️ Captions & Creatives",
      "📊 Analytics & Reporting",
    ],
    cta: "Manage My Socials →",
  },
  {
    tag: "Ads",
    title: "Performance Marketing",
    desc: "ROI-focused ads across Google & Meta.",
    features: [
      "🎯 Funnel Strategy",
      "💰 ROAS Optimization",
      "📈 Scalable Campaigns",
    ],
    cta: "Run Ads →",
  },
];

export default function Services() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="services" ref={ref} className="services-wrapper reveal">
      <div className="services-container">

        <h2 className="services-heading">
          What We Do Best
        </h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card hover-target"
              data-side={index % 2 === 0 ? "left" : "right"}
            >
              <div className="service-tag">{service.tag}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul>
                {service.features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button className="service-btn">{service.cta}</button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
