import React from "react";

function PrimaryButton({ label, variant = "primary" }) {
  return <button className={`primary-button button-${variant}`}>{label}</button>;
}

export default PrimaryButton;