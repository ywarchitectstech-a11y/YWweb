import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectPage.module.scss";
import HeroImg from "./Img (2).webp";
import FullImage from "./Img (3).webp";
import LeftImg from "./Img (4).webp";
import RightImg from "./Img (1).webp";
import img1 from "./Img (1).webp";
import img2 from "./Img (2).webp";
import img3 from "./Img (3).webp";
import img4 from "./Img (4).webp";
import img5 from "./Img (5).webp";
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
const images = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
];

export default function AdhyaratanProjectPage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className={styles.DetailedPage}>
      <div className={styles.heroSection}>
        {" "}
        <AnimatedSection>
          <div className={styles.textSection}>
            <div className={styles.leftText}>MANTRA 360</div>
            <div className={styles.RightText}>
              <p>Residential + Commercial</p>
            </div>
          </div>{" "}
        </AnimatedSection>
        <div className={styles.heroImage}>
          <AnimatedSection>
            <img src={HeroImg} alt="" />
          </AnimatedSection>
        </div>
      </div>
      <div className={styles.AboutSection}>
        <div className={styles.leftSide}>
          <h4 onClick={() => setOpen(true)}> Gallery</h4>
        </div>
        <div className={styles.rightSide}>
          <p className={styles.headText}>
            <Link to="/projects">Projects</Link> - MANTRA 360
          </p>
          <p className={styles.aboutText}>
            This project, located in <strong>Talegaon</strong>, was conceived as
            a <strong>community-oriented residential development</strong>.
            <br />
            The vision was to create a space that integrates{" "}
            <strong>nature, openness, and sustainable living</strong>.
            <br />
            The design organizes towers around{" "}
            <strong>shared open spaces</strong>.
            <br />
            It emphasizes{" "}
            <strong>
              natural light, ventilation, and community interaction
            </strong>
            .
            <br />
            The project delivers a{" "}
            <strong>human-centric and connected living environment</strong>.
          </p>
          <div className={styles.stats}>
            {/* Row 1 */}
            <div className={styles.row}>
              <div className={styles.col}>
                <p>Status</p>
                <h4>On Going</h4>
              </div>

              <div className={styles.col}>
                <p>Project Type</p>
                <h4>Residential + Commercial</h4>
              </div>

              <div className={styles.col}>
                <p>Location</p>
                <h4>Charholi, Pune, Maharashtra.</h4>
              </div>

              <div className={styles.col}>
                <p>SOW</p>
                <h4>
                  Architectural planning, design, statutory approvals &
                  sanctioning.
                </h4>
              </div>
            </div>

            {/* Row 2 */}
            <div className={`${styles.row} ${styles.three}`}>
              <div className={styles.col}>
                <p>Size</p>
                <h4>
                  Plot area : 4200.00 sq.m <br />
                  Built-up area : 12,902.00 sq.m <br />
                  High rise towers : 12 floors <br />
                  Commercial : G +3 floors
                </h4>
              </div>

              <div className={styles.col}>
                <p>Client</p>
                <h4>BRAMHAND REALTY</h4>
              </div>

              <div className={styles.col}>
                <p>Services Provided</p>
                <h4>
                  Concept & architectural design, <br />
                  Sanction drawings & authority submissions <br />
                  DCR compliance & documentation <br />
                  Municipal approvals & NOCs
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ImagesSection}>
        <img src={FullImage} className={styles.FullImage} alt="" />
        <div className={styles.images}>
          <div className={styles.imageWrapper}>
            <img src={LeftImg} alt="Plan View" />
          </div>

          <div className={`${styles.imageWrapper} ${styles.up}`}>
            <img src={RightImg} alt="Building View" />
          </div>
        </div>
      </div>
      {open && (
        <div
          className={styles.overlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className={styles.popup}>
            <div className={styles["close-btn"]}>
              <button
                className={styles["close-x"]}
                onClick={() => setOpen(false)}
                aria-label="Close gallery"
              >
                ✕
              </button>
            </div>

            <div className={styles["img-list"]}>
              {images.map((img) => (
                <div
                  key={img.id}
                  className={`${styles["img-item"]} ${styles[img.orientation]}`}
                >
                  <img src={img.src} alt={img.title} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
