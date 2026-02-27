import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectPage.module.scss";
import HeroImg from "./Img (24).webp";
import FullImage from "./Img (22).webp";
import LeftImg from "./Img (13).webp";
import RightImg from "./Img (11).webp";
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
import img1 from "./Img (1).webp";
import img2 from "./Img (2).webp";
import img3 from "./Img (3).webp";
import img4 from "./Img (4).webp";
import img5 from "./Img (5).webp";
import img6 from "./Img (6).webp";
import img7 from "./Img (7).webp";
import img8 from "./Img (8).webp";
import img9 from "./Img (9).webp";
import img10 from "./Img (10).webp";
import img11 from "./Img (11).webp";
import img12 from "./Img (12).webp";
import img13 from "./Img (13).webp";
import img14 from "./Img (14).webp";
import img15 from "./Img (15).webp";
import img16 from "./Img (16).webp";
import img17 from "./Img (17).webp";
import img18 from "./Img (18).webp";
import img19 from "./Img (19).webp";
import img20 from "./Img (20).webp";
import img21 from "./Img (21).webp";
import img22 from "./Img (22).webp";
import img23 from "./Img (23).webp";
import img24 from "./Img (24).webp";
import img25 from "./Img (25).webp";

const images = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
  { id: 7, src: img7 },
  { id: 8, src: img8 },
  { id: 9, src: img9 },
  { id: 10, src: img10 },
  { id: 11, src: img11 },
  { id: 12, src: img12 },
  { id: 13, src: img13 },
  { id: 14, src: img14 },
  { id: 15, src: img15 },
  { id: 16, src: img16 },
  { id: 17, src: img17 },
  { id: 18, src: img18 },
  { id: 19, src: img19 },
  { id: 20, src: img20 },
  { id: 21, src: img21 },
  { id: 22, src: img22 },
  { id: 23, src: img23 },
  { id: 24, src: img24 },
  { id: 25, src: img25 },
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
            <div className={styles.leftText}>PLATINUM CITYLIGHTS</div>
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
            <Link to="/projects">Projects</Link> - PLATINUM CITYLIGHTS
          </p>
          <p className={styles.aboutText}>
            This project, located in <strong>Moshi, Pune</strong>, was conceived
            as a <strong>high-rise residential development</strong> designed to
            create premium yet efficient urban housing.
            <br />
            The core vision was to establish{" "}
            <strong>
              modernity, vertical elegance, and community-focused living
            </strong>
            .
            <br />
            The design explores{" "}
            <strong>vertical rhythm and façade modulation</strong>, enhancing
            natural illumination and panoramic views.
            <br />
            Strong vertical elements combined with{" "}
            <strong>repetitive balcony projections</strong> create a dynamic
            skyline presence.
            <br />
            The project fosters{" "}
            <strong>
              efficient planning, ventilation, and a refined residential
              identity
            </strong>
            .
          </p>
          {/* <div className={styles.stats}>
            
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
          </div> */}
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
