import styles from "./Founder.module.css";

export default function Founder({ founders = [] }) {
  const founder = founders[0];

  if (!founder) return null;

  return (
    <section className={styles.founderSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>FOUNDER</h2>

        <div className={styles.content}>
          <div className={styles.imageCard}>
            <img
              src={founder.image}
              alt={founder.name}
              className={styles.founderImage}
            />

            <div className={styles.badge}>
              <span className={styles.badgeName}>{founder.name} - </span>
              <span className={styles.badgePosition}>{founder.position}</span>
            </div>
          </div>

          <div className={styles.textBlock}>
            <h3 className={styles.messageTitle}>{founder.title}</h3>
            <p className={styles.description}>{founder.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
