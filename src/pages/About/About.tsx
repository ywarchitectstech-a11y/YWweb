import styles from "./About.module.scss";
import HERO_IMG from "../../assets/abouthero.webp";
import BUILDING1_IMG from "../../assets/AboutusImg1.jpg";
import TEAM_IMG from "../../assets/CeoImage.jpeg";
import BUILDING2_IMG from "../../assets/aboutProject2.jpeg";
import logo from "../../assets/logo.png";
import ShinyText from "../../components/ShinyText";
// ─── Placeholder images — replace with actual project assets ───────────────────
// Hero: mountain landscape with group of people

// Building exterior 1 — warm toned residential tower

export default function AboutUs() {
  return (
    <main className={styles.page}>
      {/* ── 1. HERO BANNER ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <img
          src={HERO_IMG}
          alt="YW Architects team at mountain landscape"
          className={styles.heroImage}
        />
        <img className={styles.logo} src={logo} alt="" />
        <ShinyText
          className={styles.heroText}
          text="Designed For Living, Built For Life"
          speed={2}
          delay={0}
          color="#d4d4d4ff"
          shineColor="#ffffff"
          spread={220}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
        />
        {/* <h2 className={styles.heroText}>Designed For Living, Built For Life</h2> */}
      </section>

      {/* ── 2. LARGE QUOTE ─────────────────────────────────────────── */}
      <section className={styles.quoteSection}>
        <div className={styles.quoteInner}>
          <p className={styles.quoteText}>
            Our work strives to enhance our sense of surroundings, identity and
            relationship to others and the physical spaces we inhabit.
          </p>
        </div>
      </section>

      {/* ── 3. THE YW STORY IN SHORT ───────────────────────────────── */}
      <section className={styles.introSection}>
        <div className={styles.introGrid}>
          <span className={styles.sectionLabel}>The YW story in short</span>
          <p className={styles.introBody}>
            Founded in 2010, YW Architects is a multidisciplinary architecture
            practice delivering intelligent design solutions across diverse
            scales and typologies. Our work spans public and private
            developments, adaptive reuse, landscape design, interiors, and
            infrastructure. The practice is led by <b>Yogesh Wakchaure</b>,
            Founder and Principal Architect, whose vision and strategic
            leadership shape the firm’s design philosophy and execution
            standards. With extensive experience in architectural planning and
            project coordination, he ensures every project reflects clarity,
            technical precision, and long-term value.
            <br />
            <br /> We operate through a collaborative, systems-led approach,
            integrating clients, developers, and specialist teams into a single,
            informed process. By strategically guiding each project from concept
            to execution, we ensure outcomes that are economically viable,
            technically sound, and built for long-term performance.
          </p>
        </div>
      </section>

      {/* ── 4. STAGGERED GALLERY: BUILDING + TEAM ─────────────────── */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryGrid}>
          <div className={styles.galleryBuildingWrap}>
            <img
              src={BUILDING1_IMG}
              alt="YW Architects residential building exterior"
              className={styles.galleryBuildingImg}
            />
          </div>
          <div className={styles.galleryTeamWrap}>
            <img
              src={TEAM_IMG}
              alt="YW Architects team"
              className={styles.galleryTeamImg}
            />
          </div>
        </div>
      </section>

      {/* ── 5. ALL SCALES ──────────────────────────────────────────── */}
      <section className={styles.allScalesSection}>
        <div className={styles.allScalesGrid}>
          <span className={styles.sectionLabel}>All scales</span>
          <p className={styles.allScalesBody}>
            YW Architects was built on a shared passion for design precision and
            systemic thinking. Over the past decade, we have established strong
            foundations through rigorous collaboration, technical depth, and an
            uncompromising attention to detail. Our portfolio spans an
            extraordinary range of scales — from designing micro-ecologies such
            as bird habitats and material prototypes to delivering cultural
            institutions, commercial environments, and large-scale urban
            masterplans. We design across architecture, landscape,
            infrastructure, interiors, and product systems — including
            furniture, paving, and environmentally responsive construction
            materials. While landmark developments often define public
            perception, we believe innovation happens at every scale. Each
            intervention, whether intimate or metropolitan, is approached as
            part of a larger ecosystem — balancing creative ambition with
            economic, regulatory, and performance constraints. Through strategic
            collaboration and data-informed processes, we transform complex
            briefs into intelligent, buildable, and future-ready environments.
          </p>
        </div>
      </section>

      {/* ── 6. SECOND BUILDING IMAGE ───────────────────────────────── */}
      <section className={styles.buildingSection}>
        <div className={styles.buildingSectionInner}>
          <div className={styles.buildingImgWrap}>
            <img
              src={BUILDING2_IMG}
              alt="YW Architects building exterior wide angle"
              className={styles.buildingImg}
            />
          </div>
        </div>
      </section>

      {/* ── 7. ENVIRONMENTAL & CULTURAL SENSITIVITY / FUTURE ───────── */}
      <section className={styles.futureSection}>
        <div className={styles.futureGrid}>
          <span className={styles.sectionLabel}>
            Environmental and cultural sensitivity
          </span>
          <div className={styles.futureContent}>
            <h2 className={styles.futureHeading}>
              Designing a Better Future — Intelligently
            </h2>
            <p className={styles.futureBody}>
              Our ambition is clear: to elevate the quality of the world around
              us and, in doing so, improve the lives it supports. <br /> Since
              its inception, YW Architects has been guided by principles of
              simplicity, usefulness, and enduring elegance. We design systems
              that connect people to place — from a single interior environment
              to an entire urban district — always considering performance,
              longevity, and cultural relevance. <br /> Environmental and social
              responsibility have shaped our thinking from the very beginning.
              Inspired by early global sustainability frameworks, we embraced
              the belief that design must be a positive force for the planet.
              Today, that commitment has evolved into a regenerative approach —
              integrating sustainable materials, energy-positive strategies,
              water intelligence, carbon reduction, and circular waste systems
              into every project.
              <br /> But sustainability alone is not enough. <br />
              We see architecture as part of a broader living ecosystem — one
              that supports both human and non-human habitats. By combining
              advanced science, emerging technologies, and cultural awareness,
              we create environments that are not only efficient, but
              restorative. Our leadership model breaks traditional silos.
              Architects, technologists, environmental specialists, and
              strategists work as one integrated intelligence. Through
              collaborative processes and strong project governance, we deliver
              measurable impact — socially, environmentally, and economically.
              <br />
              Each project becomes a learning system — informing the next,
              refining our methods, and strengthening our contribution to the
              built environment.
              <br /> At YW Architects, design is not simply about construction.
              It is about shaping resilient futures — responsibly,
              intelligently, and with purpose.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
