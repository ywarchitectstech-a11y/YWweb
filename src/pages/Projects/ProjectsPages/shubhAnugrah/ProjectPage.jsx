import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectPage.module.scss";
import HeroImg from "./Img2.webp";
import FullImage from "./Img10.webp";
import LeftImg from "./Img11.webp";
import RightImg from "./Img12.webp";
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
// import img1 from "./Img (1).webp";
// import img2 from "./Img (2).webp";
// import img3 from "./Img (3).webp";
// import img4 from "./Img (4).webp";
import Img1 from "./Img1.webp";
import Img2 from "./Img2.webp";
import Img3 from "./Img3.webp";
import Img4 from "./Img4.webp";
import Img5 from "./Img5.webp";
import Img6 from "./Img6.webp";
import Img7 from "./Img7.webp";
import Img8 from "./Img8.webp";
import Img9 from "./Img9.webp";
import Img10 from "./Img10.webp";
import Img11 from "./Img11.webp";
import Img12 from "./Img12.webp";
import Img13 from "./Img13.webp";
const images = [
  {
    id: 1,
    src: Img1,
    title: "Residential Tower Aerial",
    orientation: "landscape",
  },
  { id: 2, src: Img2, title: "Front Elevation", orientation: "portrait" },
  { id: 3, src: Img3, title: "Corner View", orientation: "landscape" },
  { id: 4, src: Img4, title: "Top View Planning", orientation: "landscape" },
  { id: 5, src: Img5, title: "Facade Design", orientation: "portrait" },
  { id: 6, src: Img6, title: "Evening Elevation", orientation: "portrait" },
  { id: 7, src: Img7, title: "Side Perspective", orientation: "landscape" },
  { id: 8, src: Img8, title: "Night Lighting View", orientation: "landscape" },
  { id: 9, src: Img9, title: "Main Entrance View", orientation: "portrait" },
  {
    id: 10,
    src: Img10,
    title: "Landscape Integration",
    orientation: "landscape",
  },
  { id: 11, src: Img11, title: "Balcony Detail", orientation: "portrait" },
  {
    id: 12,
    src: Img12,
    title: "Street View Perspective",
    orientation: "landscape",
  },
  { id: 13, src: Img13, title: "Final Render Shot", orientation: "portrait" },
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
            <div className={styles.leftText}>SHUBH ANUGRAH</div>
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
            <Link to="/projects">Projects</Link> - SHUBH ANUGRAH
          </p>
          <p className={styles.aboutText}>
            This project, located in <strong>Charholi, Pune</strong>, was
            conceived as a <strong>residential + commercial development</strong>
            .
            <br />
            The vision was to create a{" "}
            <strong>
              balanced urban address integrating living and retail
            </strong>
            .
            <br />
            The design features{" "}
            <strong>
              clean vertical elements, recessed balconies, and warm accent
              panels
            </strong>
            .
            <br />A <strong>glazed commercial block</strong> enhances street
            interaction while maintaining residential privacy.
            <br />
            The project ensures{" "}
            <strong>efficient planning, movement, and user experience</strong>.
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
