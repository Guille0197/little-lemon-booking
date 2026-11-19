import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-lemon" aria-hidden="true">🍋</span>
          <div>
            <p className="footer-name">Little Lemon</p>
            <p className="footer-note">A little taste of the Mediterranean.</p>
          </div>
        </div>
        <div>
          <h2>Explore</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><a href="/#specials">Our menu</a></li>
          </ul>
        </div>
        <div>
          <h2>Visit us</h2>
          <address>Chicago, Illinois<br />Monday – Sunday<br />11:00 AM – 10:00 PM</address>
        </div>
        <div>
          <h2>Say hello</h2>
          <ul>
            <li><a href="mailto:hello@littlelemon.example">Email us</a></li>
            <li><a href="tel:+13125550142">(312) 555-0142</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Little Lemon</span>
        <span>Made with care, served with a little zest.</span>
      </div>
    </footer>
  );
}
export default Footer;
