import { Link } from "react-router-dom";
import SEO from "@/components/SEO/SEO";
import PageTransition from "@/components/PageTransition/PageTransition";
import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";
import styles from "./Landing.module.scss";
import project1 from "../../assets/projects/Project1.jpg";
import project2 from "../../assets/projects/Project2.jpg";
import project3 from "../../assets/projects/Project3.jpeg";
import project4 from "../../assets/projects/Project4.jpeg";
import { useRef, useState, useCallback } from "react";
import heroImg from "@/assets/LandingPageHero2.png";
import project11 from "@/assets/project-1.jpg";
import project22 from "@/assets/project-2.jpg";
// import project33 from "@/assets/project-3.jpg";
import processImg from "@/assets/process-1.jpg";
import sustainImg from "@/assets/sustainability.jpg";
import LatestProject from "./LatestProjects.jsx";
import DisciplineImg from "../../assets/DisciplineImg.png";
function DisciplineItem({ label, img, onMouseEnter, onMouseLeave }) {
  return (
    <li
      className={styles.disciplineItem}
      onMouseEnter={() => onMouseEnter(img)}
      onMouseLeave={onMouseLeave}
    >
      {label}
    </li>
  );
}
const Landing = () => {
  const [visible, setVisible] = useState(false);
  const [activeImg, setActiveImg] = useState(null);
  const imgRef = useRef(null);
  const rafRef = useRef(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  const lerp = (a, b, t) => a + (b - a) * t;

  const animateLoop = useCallback(() => {
    currentPos.current.x = lerp(
      currentPos.current.x,
      targetPos.current.x,
      0.08,
    );
    currentPos.current.y = lerp(
      currentPos.current.y,
      targetPos.current.y,
      0.08,
    );
    if (imgRef.current) {
      imgRef.current.style.left = `${currentPos.current.x + 250}px`;
      imgRef.current.style.top = `${currentPos.current.y}px`;
    }
    rafRef.current = requestAnimationFrame(animateLoop);
  }, []);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    targetPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, []);

  const handleEnter = useCallback(
    (img) => {
      setActiveImg(img);
      setVisible(true);
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(animateLoop);
    },
    [animateLoop],
  );

  const handleLeave = useCallback(() => {
    setVisible(false);
    cancelAnimationFrame(rafRef.current);
  }, []);

  const disciplines = [
    { label: "Master Planning", img: project11 },
    { label: "Landscape Architecture", img: project2 },
    { label: "Interior Design", img: project22 },
    { label: "Landscape Design", img: project4 },
    { label: "Infrastructure", img: DisciplineImg },
  ];
  return (
    <PageTransition>
      <SEO
        title="YW Architects | Global Architecture & Urban Intelligence Studio"
        description="YW Architects is a global studio blending architecture and urban intelligence. Master planning, landscape architecture, interior design, and infrastructure."
        keywords="architects, architecture, urban planning, interior design, landscape architecture, YW Architects, Pune"
      />

      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroImage}>
            <img src={heroImg} alt="Modern architectural building at dusk" />
          </div>
          <div className={styles.heroContent}>
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              YW Architects is a global studio blending architecture & urban
              intelligence.
            </motion.h1>
          </div>
        </section>

        {/* Disciplines */}
        <section className={styles.disciplines} id="disciplines">
          <AnimatedSection>
            <div className={styles.disciplinesGrid}>
              <h2 className={styles.sectionTitle}>Disciplines</h2>

              <ul
                className={styles.disciplinesList}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleLeave}
              >
                {disciplines.map(({ label, img }) => (
                  <li
                    key={label}
                    className={styles.disciplineItem}
                    onMouseEnter={() => handleEnter(img)}
                  >
                    <span>{label}</span>
                  </li>
                ))}

                {/* Floating preview image — lives inside ul for relative positioning */}
                <div
                  ref={imgRef}
                  className={`${styles.hoverPreview} ${visible ? styles.visible : ""}`}
                  aria-hidden="true"
                >
                  {activeImg && <img src={activeImg} alt="" key={activeImg} />}
                </div>
              </ul>
            </div>
          </AnimatedSection>
        </section>

        {/* Highlighted Projects */}
        {/* <section className={styles.projects} id="projects">
          <div className={styles.projectsInner}>
            <AnimatedSection>
              <h2 className={styles.sectionTitle}>Highlighted Projects</h2>
            </AnimatedSection>
            <div className={styles.projectsGrid}>
              <AnimatedSection delay={0.1}>
                <div className={styles.projectCard}>
                  <div style={{ overflow: "hidden" }}>
                    <img src={project1} alt="ADHYA RATAN residential project" />
                  </div>
                  <div className={styles.projectInfo}>
                    <h4>ADHYA RATAN</h4>
                    <span className={styles.projectType}>
                      Residential • Commercial
                    </span>
                    <p className={styles.projectDesc}>
                      Architectural planning, design, statutory approvals &
                      monitoring
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className={styles.projectCard}>
                  <div style={{ overflow: "hidden" }}>
                    <img src={project2} alt="Urban development project" />
                  </div>
                  <div className={styles.projectInfo}>
                    <h4>ADHYA RATAN</h4>
                    <span className={styles.projectType}>
                      Residential • Commercial
                    </span>
                    <p className={styles.projectDesc}>
                      Architectural planning, design, statutory approvals &
                      monitoring
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className={styles.projectCard}>
                  <div style={{ overflow: "hidden" }}>
                    <img src={project3} alt="Commercial high-rise project" />
                  </div>
                  <div className={styles.projectInfo}>
                    <h4>ADHYA RATAN</h4>
                    <span className={styles.projectType}>
                      Residential • Commercial
                    </span>
                    <p className={styles.projectDesc}>
                      Architectural planning, design, statutory approvals &
                      monitoring
                    </p>
                  </div>
                </div>
              </AnimatedSection>{" "}
              <AnimatedSection delay={0.2}>
                <div className={styles.projectCard}>
                  <div style={{ overflow: "hidden" }}>
                    <img src={project2} alt="Urban development project" />
                  </div>
                  <div className={styles.projectInfo}>
                    <h4>ADHYA RATAN</h4>
                    <span className={styles.projectType}>
                      Residential • Commercial
                    </span>
                    <p className={styles.projectDesc}>
                      Architectural planning, design, statutory approvals &
                      monitoring
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className={styles.projectCard}>
                  <div style={{ overflow: "hidden" }}>
                    <img src={project3} alt="Commercial high-rise project" />
                  </div>
                  <div className={styles.projectInfo}>
                    <h4>ADHYA RATAN</h4>
                    <span className={styles.projectType}>
                      Residential • Commercial
                    </span>
                    <p className={styles.projectDesc}>
                      Architectural planning, design, statutory approvals &
                      monitoring
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section> */}

        <LatestProject />
        {/* About Section */}
        <section className={styles.about}>
          <AnimatedSection>
            <div className={styles.aboutHeader}>
              <h2 className={styles.sectionTitle}>About Us</h2>
              <Link to="/about" className={styles.knowMore}>
                Know More →
              </Link>
            </div>
          </AnimatedSection>
          <div className={styles.aboutGrid}>
            <AnimatedSection>
              <p className={styles.aboutText}>
                Our work strives to enhance our sense of surroundings, identity
                and relationship to others and the physical spaces we inhabit
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className={styles.aboutRight}>
                <p>
                  YW Architects is a multidisciplinary architecture practice
                  delivering intelligent design solutions across diverse scales
                  and typologies. Our work spans public and private
                  developments, adaptive reuse, landscape design, interiors, and
                  infrastructure.
                </p>
              </div>
            </AnimatedSection>
            <div className={styles.establisheddiv}>
              {" "}
              <p className={styles.established}>Established for 16 years.</p>
            </div>
            <div className={styles.statsGrid}>
              <AnimatedSection delay={0.2}>
                {" "}
                <div className={styles.statRow}>
                  <span>Urban Development Projects</span>
                  <span>7</span>
                </div>
                <div className={styles.statRow}>
                  <span>Private Villa</span>
                  <span>22</span>
                </div>
                <div className={styles.statRow}>
                  <span>Hospitality & Wellness</span>
                  <span>9</span>
                </div>
                <div className={styles.statRow}>
                  <span>Luxury Interior Projects</span>
                  <span>189</span>
                </div>
                <div className={styles.statRow}>
                  <span>Commercial Interiors</span>
                  <span>75</span>
                </div>
              </AnimatedSection>{" "}
            </div>
          </div>
        </section>

        {/* <section className={styles.network}>
          <div className={styles.networkInner}>
            <AnimatedSection>
              <h2 className={styles.networkTitle}>
                Supported by a global network
              </h2>
            </AnimatedSection>
          </div>
        </section> */}

        {/* Testimonial */}
        <section className={styles.testimonial}>
          <AnimatedSection>
            <h2 className={styles.testimonialTitle}>What Our Client Say</h2>
            <blockquote className={styles.testimonialQuote}>
              "The high-rise tower design is elegant, modern, and highly
              efficient, while the apartment layouts are exceptionally well
              planned"
              <br />
            </blockquote>
            <div className={styles.testimonialdir}>
              {" "}
              <strong>Mr. Chetan Salunke</strong>
              <p className={styles.testimonialAuthor}>
                Director At Shubh Properties
              </p>
            </div>
          </AnimatedSection>
        </section>

        {/* Process */}
        <section className={styles.process} id="articles">
          <div className={styles.processInner}>
            <div className={styles.processGrid}>
              <AnimatedSection>
                <div className={`${styles.processCard} ${styles.pcard1}`}>
                  <img src={processImg} alt="Architectural scale models" />
                  <h4>Our process</h4>
                  <p>
                    Our unique process has been fine-tuned since our beginnings
                    in 2010. Learn more about our trans-disciplinary approach to
                    architecture and design.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className={`${styles.processCard} ${styles.pcard2}`}>
                  <img src={sustainImg} alt="Sustainable architecture" />
                  <h4>Sustainability and Responsibility</h4>
                  <p>
                    We have been guided by a deep commitment to environmental
                    and cultural sensitivity.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Landing;
