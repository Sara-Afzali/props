import React from "react";

function Navbar({ logo, menuItems, actionLabel }) {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="brand" href="#top" aria-label={logo}>{logo}<span>✳</span></a>
        <nav className="nav-links" aria-label="Main navigation">
          {menuItems.map((item) => <a href="#courses" key={item}>{item}</a>)}
        </nav>
        <button className="nav-cta">{actionLabel} <span>↗</span></button>
      </div>
    </header>
  );
}

export default Navbar;