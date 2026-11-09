"use client";

import { useState } from "react";
import styles from "./Header.module.css";

const navItems = [
  "About",
  "Services",
  "Case Studies",
  "Career",
  "Blog",
  "xSchool",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logoWrapper}>
          <img src="/logo.svg" alt="Wemark" className={styles.logo} />
        </a>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item} className={styles.navItem}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#" className={styles.cta}>
          Let’s Talk
        </a>

        <button
          type="button"
          className={styles.mobileMenuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className={styles.mobileCta}
            onClick={() => setMenuOpen(false)}
          >
            Let’s Talk
          </a>
        </div>
      )}
    </header>
  );
}
