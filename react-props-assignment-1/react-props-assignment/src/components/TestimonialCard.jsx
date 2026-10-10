import React from "react";

function TestimonialCard({ quote, name, role, image, rating }) {
  return (
    <article className="testimonial-card">
      <div className="quote-mark">“</div>
      <div className="stars" aria-label={`${rating} out of 5 stars`}>{"★".repeat(rating)}</div>
      <p className="quote-text">{quote}</p>
      <div className="quote-person">
        <img src={image} alt={name} />
        <div><strong>{name}</strong><span>{role}</span></div>
      </div>
    </article>
  );
}

export default TestimonialCard;