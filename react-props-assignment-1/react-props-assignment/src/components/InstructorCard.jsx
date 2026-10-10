import React from "react";

function InstructorCard({ name, role, image, courses }) {
  return (
    <article className="instructor-card">
      <img src={image} alt={name} className="instructor-photo" />
      <div className="instructor-info"><h3>{name}</h3><p>{role}</p><span>{courses}</span></div>
      <span className="instructor-arrow">↗</span>
    </article>
  );
}

export default InstructorCard;