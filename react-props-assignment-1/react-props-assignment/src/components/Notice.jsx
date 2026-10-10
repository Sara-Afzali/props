import React from "react";

function Notice({ type, title, message }) {
  return (
    <aside className={`notice notice-${type}`} role="status">
      <span className="notice-icon">{type === "success" ? "✓" : "i"}</span>
      <div><strong>{title}</strong><p>{message}</p></div>
    </aside>
  );
}

export default Notice;