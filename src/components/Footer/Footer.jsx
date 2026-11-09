import styles from "./Footer.module.css";

const sitemapLinks = [
  "Case Studies",
  "Services",
  "About",
  "Career",
  "Blog",
  "News",
  "Vacancies",
];

const socialLinks = ["Instagram", "LinkedIn", "YouTube"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* 1. Yuxarı hissə: 4 Sütun və Yuxarı Ox */}
        <div className={styles.topSection}>
          <div className={styles.columns}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Sitemap</h3>
              <ul className={styles.linkList}>
                {sitemapLinks.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Follow Us On</h3>
              <ul className={styles.linkList}>
                {socialLinks.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Office</h3>
              <ul className={styles.linkList}>
                <li>Alibeyov Gardashlari 27,</li>
                <li>Sabail, Sabah Residence</li>
              </ul>
            </div>

            <div className={styles.column}>
              <h3 className={styles.columnTitle}>For Partnerships</h3>
              <ul className={styles.linkList}>
                <li>
                  <a href="mailto:partnership@wemark.az">
                    partnership@wemark.az
                  </a>
                </li>
                <li>
                  <a href="tel:+994515555555">+994 51 555 55 55</a>
                </li>
              </ul>
            </div>
          </div>

          <a href="#" className={styles.scrollTopBtn} aria-label="Scroll to top">
            <svg
              width="60"
              height="78"
              viewBox="0 0 60 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 76V4M30 4L3 31M30 4L57 31"
                stroke="#8E8E93"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* 2. Orta hissə: Böyük Wemark Loqosu */}
        <div className={styles.giantLogoWrapper}>
          <img
            src="/logo.svg"
            alt="Wemark"
            className={styles.giantLogo}
          />
        </div>

        {/* 3. Aşağı hissə: Copyright və Dil seçimi */}
        <div className={styles.bottomSection}>
          <div className={styles.bottomLeft}>
            <span>COPYRIGHT © 2024 WEMARK</span>
            <a href="#">TERMS &amp; PRIVACY</a>
          </div>

          <div className={styles.languageSwitch}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>AZƏRBAYCAN DİLİ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
