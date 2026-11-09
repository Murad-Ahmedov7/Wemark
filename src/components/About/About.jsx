"use client";

import { useState, useEffect } from "react";
import styles from "./About.module.css";

export default function About({ title, description, images = [] }) {
  const loopImages = [...images, ...images, ...images];
  const [activeIndex, setActiveIndex] = useState(images.length + 1);

  const paragraphs = description
    ? description
        .split("\n")
        .map((p) => p.trim())
        .filter((p) => p !== "")
    : [];

  const titleLines = title
    ? title.split("\n").map((line) => line.trim())
    : ["About", "xSchool"];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev <= 1 ? images.length : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev >= loopImages.length - 2 ? images.length * 2 - 1 : prev + 1
    );
  };

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3500);

    return () => clearInterval(timer);
  }, [images.length, activeIndex]);

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <h2 className={styles.title}>
            {titleLines.map((line, idx) => (
              <span key={idx} className={styles.titleLine}>
                {line === "xSchool" ? (
                  <>
                    <span className={styles.lowercaseX}>x</span>SCHOOL
                  </>
                ) : (
                  line.toUpperCase()
                )}
              </span>
            ))}
          </h2>

          <a href="#program" className={styles.goToLink}>
            Go to xSchool
          </a>
        </div>

        <div className={styles.descriptionWrapper}>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.description}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {images.length > 0 && (
        <div className={styles.sliderWrapper}>
          <button
            type="button"
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={handlePrev}
          >
            ←
          </button>

          <div
            className={styles.sliderTrack}
            style={{
              "--active-index": activeIndex,
            }}
          >
            {loopImages.map((item, index) => (
              <div
                key={index}
                className={styles.slide}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={item.image}
                  alt="xSchool"
                  className={styles.slideImage}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={handleNext}
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}
