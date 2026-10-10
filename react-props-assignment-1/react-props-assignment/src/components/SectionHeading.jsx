import React from "react";

function SectionHeading({ eyebrow, title, description, linkText, centered = false }) {
  return (
    <div className={`section-heading ${centered ? "centered" : ""}`}>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {linkText && <a className="text-link" href="#courses">{linkText}</a>}
    </div>
  );
}

export default SectionHeading;