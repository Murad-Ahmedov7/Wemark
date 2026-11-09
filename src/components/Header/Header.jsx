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

        <button type="button" className={styles.mobileMenuBtn}>
          Menu
        </button>
      </div>
    </header>
  );
}
