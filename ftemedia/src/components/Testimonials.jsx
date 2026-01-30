export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials reveal">
      <div className="wrap">
        <div className="section-title">Testimonials</div>
        <div className="section-sub">
          What our clients say about working with us
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              “FTE Media completely transformed our online presence. Engagement
              and leads increased within weeks.”
            </p>
            <div className="testimonial-author">
              <strong>Rahul Sharma</strong>
              <span>Startup Founder</span>
            </div>
          </div>

          <div className="testimonial-card">
            <p>
              “Creative, fast, and extremely professional. Their campaigns feel
              premium and effective.”
            </p>
            <div className="testimonial-author">
              <strong>Ananya Verma</strong>
              <span>Brand Manager</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
