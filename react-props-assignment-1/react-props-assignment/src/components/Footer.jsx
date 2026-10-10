import React from "react";

function Footer({ companyName, description, links, copyright }) {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-about"><a className="brand" href="#top">{companyName}<span>✳</span></a><p>{description}</p></div>
        <div className="footer-links">{links.map((link) => <a href="#courses" key={link}>{link}</a>)}</div>
        <div className="footer-social"><span>Follow the journey</span><div><a href="#top" aria-label="Instagram">ig</a><a href="#top" aria-label="LinkedIn">in</a><a href="#top" aria-label="YouTube">▶</a></div></div>
      </div>
      <div className="container footer-bottom"><span>{copyright}</span><span>Made for curious minds ♡</span></div>
    </footer>
  );
}

export default Footer;