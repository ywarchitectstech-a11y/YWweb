import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectPage.module.scss";
import HeroImg from "./HeroImg.jpg";
import FullImage from "./FullImage.jpg";
import LeftImg from "./HeroImg.jpg";
import RightImg from "./HeroImg.jpg";
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";

const images = [
  {
    id: 1,
    src: RightImg,
    title: "Residential Tower",
    orientation: "landscape",
  },
  { id: 2, src: HeroImg, title: "Commercial Complex", orientation: "portrait" },
  {
    id: 3,
    src: HeroImg,
    title: "Mixed Use Development",
    orientation: "landscape",
  },
  { id: 4, src: RightImg, title: "Modern Facade", orientation: "portrait" },
  { id: 5, src: HeroImg, title: "Shopping Mall", orientation: "landscape" },
  { id: 6, src: RightImg, title: "Interior Lobby", orientation: "portrait" },
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
            <div className={styles.leftText}>KALP 99</div>
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
            <Link to="/projects">Projects</Link> - KALP 99
          </p>
          <p className={styles.aboutText}>
            This project, located in <strong>Chovisawadi, Pune</strong>, was
            conceived as a{" "}
            <strong>mixed-use residential and commercial development</strong>{" "}
            designed to address the client’s requirement for a contemporary
            housing solution with strong street-level retail presence.
            <br />
            The core vision was to create a space that embodies{" "}
            <strong>
              modern simplicity, vertical elegance, and functional efficiency
            </strong>
            , while responding thoughtfully to its urban context and prominent
            corner positioning.
            <br />
            The design explores a{" "}
            <strong>
              rhythmic façade concept articulated through vertical fins and
              recessed balconies
            </strong>
            , creating depth, shading, and a distinct architectural identity.
            <br />
            The interplay of <strong>solid and glazed surfaces</strong> enhances
            natural light penetration while maintaining privacy and thermal
            comfort.
            <br />
            The lower levels are activated with{" "}
            <strong>transparent commercial frontages</strong>, strengthening the
            building’s connection to the street and encouraging pedestrian
            engagement.
            <br />
            Careful planning ensures{" "}
            <strong>
              efficient circulation, optimized floor layouts, and
              well-ventilated residential units above
            </strong>
            .
            <br />
            Material selection emphasizes{" "}
            <strong>durability and timeless aesthetics</strong>, combining
            warm-toned cladding elements with neutral finishes and glass
            accents.
            <br />
            Ultimately, the project reflects{" "}
            <strong>
              YW Architects’ commitment to functionally efficient and
              experientially enriching environments
            </strong>
            , enhancing everyday urban living while contributing to the
            character of Chovisawadi.
          </p>
          <div className={styles.stats}>
            <div className={styles.row}>
              <div className={styles.col}>
                <p>Status</p>
                <h4>To be initiated</h4>
              </div>

              <div className={styles.col}>
                <p>Project Type</p>
                <h4>Residential + Commercial</h4>
              </div>

              <div className={styles.col}>
                <p>Location</p>
                <h4>Chovisawadi, Pune, Maharashtra.</h4>
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
                  Built-up area : 16,153.31 sq.m <br />
                  High rise towers : 13 floors <br />
                  Commercial : G +1 floors
                </h4>
              </div>

              <div className={styles.col}>
                <p>Client</p>
                <h4>MARUTI CONSTRUCTIONS</h4>
              </div>

              <div className={styles.col}>
                <p>Services Provided</p>
                <h4>
                  Concept & architectural design <br />
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
