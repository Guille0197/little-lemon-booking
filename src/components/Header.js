import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Menu", to: "/#specials" },
  { label: "Book a table", to: "/booking", cta: true },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Little Lemon home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">🍋</span>
          <span className="brand-copy">
            <span className="brand-name">Little Lemon</span>
            <span className="brand-tagline">MEDITERRANEAN KITCHEN</span>
          </span>
        </Link>
        <button className="menu-toggle" type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen} aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}>
          <span /><span /><span />
        </button>
        <nav id="primary-navigation"
          className={`primary-navigation ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation">
          <ul>
            {navigation.map((item) => (
              <li className={item.cta ? "nav-cta-item" : undefined} key={item.label}>
                {item.to.startsWith("/#")
                  ? <a href={item.to} onClick={closeMenu}>{item.label}</a>
                  : <NavLink to={item.to} onClick={closeMenu}
                      className={({ isActive }) => [
                        item.cta ? "nav-cta" : "",
                        isActive && item.to !== "/" ? "active" : "",
                      ].filter(Boolean).join(" ")}>
                      {item.label}{item.cta && <span aria-hidden="true">→</span>}
                    </NavLink>}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
