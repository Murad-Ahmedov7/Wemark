import styles from "./Marquee.module.css";

export default function Marquee({ textSlider }) {
  if (!textSlider) return null;

  const items = [
    textSlider.xline1,
    textSlider.xline2,
    textSlider.xline3,
  ].filter(Boolean);

  // Zolağın ekran boyu kəsilmədən sonsuz axması üçün sözləri təkrarlayırıq
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <section className={styles.marqueeSection}>
      {/* 1-ci Sətir (Sola doğru hərəkət edir) */}
      <div className={styles.row}>
        <div className={styles.trackLeft}>
          {repeatedItems.map((text, index) => (
            <div key={index} className={styles.item}>
              <span className={styles.text}>{text}</span>
              <span className={styles.star}>*</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2-ci Sətir (Sağa doğru hərəkət edir) */}
      <div className={styles.row}>
        <div className={styles.trackRight}>
          {repeatedItems.map((text, index) => (
            <div key={index} className={styles.item}>
              <span className={styles.text}>{text}</span>
              <span className={styles.star}>*</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
