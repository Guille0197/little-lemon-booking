import React from "react";
import { Link } from "react-router-dom";

const specials = [
  { name: "Greek salad", price: "$12.99", description: "Crisp lettuce, peppers, olives and house-made feta, finished with a bright lemon dressing.", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=85", alt: "Fresh Mediterranean salad with colorful vegetables" },
  { name: "Lemon dessert", price: "$6.50", description: "A little sunshine on a plate: delicate lemon cream, buttery crust and a hint of sweetness.", image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=85", alt: "A slice of lemon dessert on a plate" },
  { name: "Grilled fish", price: "$19.50", description: "Fresh catch, simply grilled with herbs, olive oil and seasonal Mediterranean vegetables.", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85", alt: "Grilled fish served with fresh herbs and vegetables" },
];

const testimonials = [
  { name: "Sofia M.", quote: "The food tastes like a holiday by the sea. The team made us feel right at home." },
  { name: "Daniel R.", quote: "A lovely neighborhood spot. The Greek salad and lemon dessert are a must." },
  { name: "Amira K.", quote: "Warm service, beautiful flavors and an atmosphere that makes you want to stay." },
];

const experiences = [
  { number: "01", title: "Fresh & seasonal", description: "Bright ingredients, thoughtfully prepared." },
  { number: "02", title: "Made to be shared", description: "Family recipes and Mediterranean warmth." },
  { number: "03", title: "Your seat, sorted", description: "Choose a date and time in just a few steps." },
];

function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">A little taste of the Mediterranean</p>
            <h1>Little Lemon</h1>
            <p className="hero-location">Chicago</p>
            <p className="hero-description">Family recipes, fresh ingredients and a table waiting just for you. Come hungry, leave happy.</p>

            <div className="hero-actions">
              <Link className="button button-primary hero-cta" to="/booking">
                <span className="hero-cta-icon" aria-hidden="true">↗</span>
                <span className="hero-cta-label">
                  <strong>Reserve your table</strong>
                  <small>Choose your date &amp; time</small>
                </span>
                <span className="hero-cta-arrow" aria-hidden="true">→</span>
              </Link>
              <a className="hero-secondary-link" href="#specials">Explore this week’s menu <span aria-hidden="true">↓</span></a>
            </div>

            <ul className="hero-trust-row" aria-label="Little Lemon highlights">
              <li><span aria-hidden="true">✦</span> Family-owned</li>
              <li><span aria-hidden="true">✦</span> Mediterranean flavors</li>
            </ul>
          </div>
          <div className="hero-image-wrap">
            <img className="hero-image"
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=90"
              alt="A colorful Mediterranean spread made with fresh ingredients" />
            <span className="hero-image-note">Fresh, seasonal, made with love</span>
            <span className="hero-image-stamp" aria-hidden="true">A LITTLE<br />LEMON<br /><span>✦</span></span>
          </div>
        </div>
        <div className="hero-decoration" aria-hidden="true" />
      </section>

      <section className="experience-strip" aria-label="The Little Lemon experience">
        <div className="experience-inner">
          {experiences.map((item) => (
            <article className="experience-item" key={item.number}>
              <span className="experience-number">{item.number}</span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="specials-section content-section" id="specials">
        <div className="section-heading">
          <div><p className="eyebrow">Made fresh for you</p><h2>This week’s specials</h2></div>
          <Link className="button button-dark" to="/booking">Book your table <span aria-hidden="true">→</span></Link>
        </div>
        <div className="specials-grid">
          {specials.map((item) => (
            <article className="special-card" key={item.name}>
              <img src={item.image} alt={item.alt} loading="lazy" />
              <div className="special-card-content">
                <div className="special-card-title"><h3>{item.name}</h3><span>{item.price}</span></div>
                <p>{item.description}</p>
                <Link to="/booking" aria-label={`Reserve a table to enjoy ${item.name}`}>Reserve a table <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <div className="content-section">
          <div className="center-heading"><p className="eyebrow">Kind words from our guests</p><h2>A seat at our table feels like home.</h2></div>
          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <p className="testimonial-rating" aria-label="5 out of 5 stars">★★★★★</p>
                <blockquote>“{item.quote}”</blockquote>
                <p className="testimonial-name">{item.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section content-section" id="about">
        <div className="about-copy">
          <p className="eyebrow">Our story</p>
          <h2>Good food brings us together.</h2>
          <p>Little Lemon is a family-owned Mediterranean restaurant in Chicago. We bring a modern touch to the flavors we grew up with, celebrating seasonal ingredients, generous plates and the joy of sharing a meal.</p>
          <p>Whether it’s a quick lunch, a long dinner or a special celebration, there’s always room at our table.</p>
          <Link className="text-link" to="/booking">Come visit us <span aria-hidden="true">→</span></Link>
        </div>
        <div className="about-image-grid">
          <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85" alt="A welcoming restaurant dining room" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=85" alt="A chef preparing a fresh dish in the kitchen" loading="lazy" />
        </div>
      </section>

      <section className="final-cta-section">
        <div className="final-cta-inner">
          <div className="final-cta-copy">
            <p className="eyebrow eyebrow-light">Something delicious is waiting</p>
            <h2>Good evenings start with a seat at our table.</h2>
            <p>Bring your favorite people. We’ll take care of the rest.</p>
          </div>
          <Link className="button button-primary final-cta-button" to="/booking">
            Reserve your table <span aria-hidden="true">→</span>
          </Link>
          <span className="final-cta-lemon" aria-hidden="true">🍋</span>
        </div>
      </section>

      <Link className="mobile-booking-cta" to="/booking">
        <span>Reserve your table</span><span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
export default HomePage;
