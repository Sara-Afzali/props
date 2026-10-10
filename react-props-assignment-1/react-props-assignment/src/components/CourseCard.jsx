import React from "react";

function CourseCard({ title, instructor, price, category, duration, icon, color, rating }) {
  return (
    <article className="course-card">
      <div className={`course-art ${color}`}>
        <span className="course-category">{category}</span>
        <span className="course-icon" aria-hidden="true">{icon}</span>
        <span className="rating">★ {rating}</span>
      </div>
      <div className="course-body">
        <div className="course-meta"><span>◷ {duration}</span><span>Online</span></div>
        <h3>{title}</h3>
        <p className="instructor-name">By {instructor}</p>
        <div className="course-bottom"><strong>${price}</strong><button aria-label={`View ${title}`}>↗</button></div>
      </div>
    </article>
  );
}

export default CourseCard;