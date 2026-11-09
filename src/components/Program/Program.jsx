import styles from "./Program.module.css";

export default function Program({ programs = [] }) {
  const program = programs[0];

  if (!program) return null;

  return (
    <section id="program" className={styles.programSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{program.title}</h2>

        <div
          className={styles.htmlContent}
          dangerouslySetInnerHTML={{ __html: program.description }}
        />
      </div>
    </section>
  );
}
