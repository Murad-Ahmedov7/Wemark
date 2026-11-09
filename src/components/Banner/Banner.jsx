import styles from "./Banner.module.css";

export default function Banner({ title, image }) {
  const lines = title ? title.split("\n").map((line) => line.trim()) : [];

  return (
    <section className={styles.banner}>
      <div className={styles.bgWrapper}>
        {image && (
          <img src={image} alt="WM xSchool Banner" className={styles.bgImage} />
        )}
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>
          {lines.map((line, index) => (
            <span
              key={index}
              className={`${styles.line} ${styles[`line${index + 1}`] || ""}`}
            >
              {line}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
