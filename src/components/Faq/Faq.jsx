"use client";

import { useState } from "react";
import styles from "./Faq.module.css";

export default function Faq({ title, faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const titleLines = (title || "questions?\nwe’ve got answers.")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {titleLines.map((line, idx) => (
            <span key={idx} className={styles.titleLine}>
              {line}
            </span>
          ))}
        </h2>

        <div className={styles.accordionList}>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className={styles.accordionItem}>
                <button
                  type="button"
                  className={styles.questionButton}
                  onClick={() => toggleFaq(index)}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={styles.icon}>
                    <span className={styles.horizontalLine} />
                    {!isOpen && <span className={styles.verticalLine} />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    className={styles.answerWrapper}
                    dangerouslySetInnerHTML={{
                      __html: item.answer.replace("<p>&nbsp;</p>", ""),
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
