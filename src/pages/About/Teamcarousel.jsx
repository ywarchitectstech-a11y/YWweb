import { useRef, useState, useEffect } from "react";
import styles from "./TeamCarousel.module.scss";
import yogeshImg from "../../assets/CeoImg.jpeg";
import Img1 from "../../assets/team/Img(1).jpeg";
import Img1Png from "../../assets/team/Img(1).png";

import Img2 from "../../assets/team/Img(2).jpeg";
import Img2Png from "../../assets/team/Img(2).png";

import Img3 from "../../assets/team/Img(3).jpeg";
import Img4 from "../../assets/team/Img(4).jpeg";
import Img5 from "../../assets/team/Img(5).jpeg";
import Img6 from "../../assets/team/Img(6).jpeg";
import Img7 from "../../assets/team/Img(7).png";
import Img8 from "../../assets/team/Img(8).jpeg";
import Img9 from "../../assets/team/Img(9).jpeg";
import Img10 from "../../assets/team/Img(10).jpeg";
import Img11 from "../../assets/team/Img(11).jpeg";
import Img12 from "../../assets/team/Img(12).jpeg";
// ── Team data from Team_Details.pdf ────────────────────────────────────────────
// photo: replace null with your image path e.g. import YogeshImg from "../../assets/team/yogesh.jpg"
// or a URL string like "/assets/team/yogesh.jpg"
const TEAM = [
  {
    name: "Ar. Yogesh Wakchaure",
    designation: "Founder",
    initials: "YW",
    accent: "#c9a84c",
    photo: yogeshImg, // TODO: replace with actual image
  },
  {
    name: "Mrs. Shital Wakchaure",
    designation: "Co-Founder",
    initials: "SW",
    accent: "#b8956a",
    photo: Img5,
  },
  {
    name: "Ms. Krishna Khatavkar",
    designation: "Sr. Architect",
    initials: "KK",
    accent: "#8a9e8c",
    photo: Img12,
  },
  {
    name: "Ms. Chaitrali Balkawade",
    designation: "Sr. Architect",
    initials: "CB",
    accent: "#9e8a7a",
    photo: Img2Png,
  },
  {
    name: "Mr. Shrikant Patil",
    designation: "Sr. Engineer",
    initials: "SP",
    accent: "#7a8a9e",
    photo: Img6,
  },
  {
    name: "Mr. Vaibhav Powar",
    designation: "Liaison Manager",
    initials: "VP",
    accent: "#9e9a7a",
    photo: Img10,
  },
  {
    name: "Ms. Sayli Rathod",
    designation: "HR",
    initials: "SR",
    accent: "#8e7e9e",
    photo: Img8,
  },
  {
    name: "Ms. Kumkum Oza",
    designation: "Jr. Architect",
    initials: "KO",
    accent: "#a07e8c",
    photo: Img1,
  },
  {
    name: "Ms. Sakshi Rasal",
    designation: "Jr. Architect",
    initials: "SR",
    accent: "#7e9e96",
    photo: Img2,
  },
  {
    name: "Ms. Janhavi Patil",
    designation: "Jr. Architect",
    initials: "JP",
    accent: "#9e7e7e",
    photo: Img4,
  },
  {
    name: "Mr. Sumit Chavan",
    designation: "Liaison Assistant",
    initials: "SC",
    accent: "#7e8e9e",
    photo: Img1Png,
  },
  {
    name: "Mr. Sajjad Sheikh",
    designation: "Liaison Officer",
    initials: "SS",
    accent: "#8e9e7e",
    photo: Img7,
  },
  {
    name: "Mr. Suraj Pisal",
    designation: "Draftsman",
    initials: "SP",
    accent: "#9e8e7e",
    photo: Img9,
  },
];

export default function TeamCarousel() {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const scrollStart = useRef(0);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    updateArrows();
    return () => el.removeEventListener("scroll", updateArrows);
  }, []);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  // Mouse drag
  const onMouseDown = (e) => {
    setIsDragging(true);
    dragStart.current = e.clientX;
    scrollStart.current = trackRef.current.scrollLeft;
  };
  const onMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.current;
    trackRef.current.scrollLeft = scrollStart.current - dx;
  };
  const onMouseUp = () => setIsDragging(false);

  return (
    <section className={styles.teamSection}>
      {/* Header row */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.sectionLabel}>Our Team</span>
          <h2 className={styles.heading}>The People Behind the Practice</h2>
        </div>
        <div className={styles.arrows}>
          <button
            className={`${styles.arrow} ${!canScrollLeft ? styles.arrowDisabled : ""}`}
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            disabled={!canScrollLeft}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M15 18l-6-6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className={`${styles.arrow} ${!canScrollRight ? styles.arrowDisabled : ""}`}
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            disabled={!canScrollRight}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M9 18l6-6-6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className={`${styles.track} ${isDragging ? styles.dragging : ""}`}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {TEAM.map((member, i) => (
          <div
            className={styles.card}
            key={i}
            style={{ "--accent": member.accent }}
          >
            {/* Photo portrait */}
            <div className={styles.photoWrap}>
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className={styles.photo}
                  draggable={false}
                />
              ) : (
                // Dummy placeholder — shows initials over a textured bg
                <div className={styles.photoPlaceholder}>
                  {/* Architectural grid lines for visual texture */}
                  <svg
                    className={styles.placeholderGrid}
                    viewBox="0 0 200 260"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {/* Vertical lines */}
                    {[40, 80, 120, 160].map((x) => (
                      <line
                        key={x}
                        x1={x}
                        y1="0"
                        x2={x}
                        y2="260"
                        stroke="currentColor"
                        strokeWidth="0.4"
                      />
                    ))}
                    {/* Horizontal lines */}
                    {[52, 104, 156, 208].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={y}
                        x2="200"
                        y2={y}
                        stroke="currentColor"
                        strokeWidth="0.4"
                      />
                    ))}
                    {/* Silhouette shape */}
                    <ellipse
                      cx="100"
                      cy="88"
                      rx="34"
                      ry="38"
                      fill="currentColor"
                      opacity="0.18"
                    />
                    <path
                      d="M30 260 Q30 185 100 175 Q170 185 170 260Z"
                      fill="currentColor"
                      opacity="0.14"
                    />
                  </svg>
                  <span className={styles.placeholderInitials}>
                    {member.initials}
                  </span>
                </div>
              )}
              {/* Accent overlay bar at bottom of photo */}
              <div className={styles.photoAccentBar} />
            </div>

            {/* Info */}
            <div className={styles.info}>
              <p className={styles.designation}>{member.designation}</p>
              <h3 className={styles.name}>{member.name}</h3>
              <div className={styles.divider} />
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint fade edges handled via CSS */}
    </section>
  );
}
