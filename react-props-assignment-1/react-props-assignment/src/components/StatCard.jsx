import React from "react";

function StatCard({ value, label, icon }) {
  return (
    <article className="stat-card">
      <span className="stat-icon">{icon}</span>
      <div><strong>{value}</strong><span>{label}</span></div>
    </article>
  );
}

export default StatCard;