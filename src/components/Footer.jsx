import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-container text-white px-4 py-3 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center gap-2">
        <span className="logo-text">⚡<strong>Boltify</strong></span>
        <small className="text-muted">© Boltify Security. All rights reserved.</small>
      </div>
      <div className="footer-links d-flex gap-3">
        <a href="#" className="text-info text-decoration-none">About</a>
        <a href="#" className="text-info text-decoration-none">Terms</a>
        <a href="#" className="text-info text-decoration-none">Privacy</a>
      </div>
    </footer>
  );
};

export default Footer;
