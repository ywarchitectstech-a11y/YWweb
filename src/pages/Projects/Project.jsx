import { useState, useMemo, useEffect, useRef } from "react";
import {
  useNavigate,
  useParams,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import styles from "./ProjectsPage.module.scss";

import AdhyaRatan from "../../assets/projects/AdhyaRatan/Image1.jpeg";
import INFINI from "../../assets/projects/INFINI/Image1.jpg";
import Citylight from "../../assets/projects/CityLight/Image1.jpg";
import AdhyaRadha from "../../assets/projects/AdhyaRadha/Image1.jpg";
import TanishUrbania from "../../assets/projects/TanishUrbania/Image1.jpg";
import AlandiSchool from "../../assets/projects/AlandiSchool/Image1.jpg";
import PrarambhSerenity from "../../assets/projects/PrarambhSerenity/Image1.jpg";
import ShubAnugrah from "../../assets/projects/ShubAnugrah/Image1.jpeg";
import TanishIndrayani from "../../assets/projects/TanishIndrayani/Image1.jpg";
import Pioneer from "../../assets/projects/Pioneer/Image1.png";
import BhosaleGalaxy from "../../assets/projects/BhosaleGalaxy/Image1.png";
import BhosaleIcon from "../../assets/projects/BhosaleIcon/Image1.png";
import BeState from "../../assets/projects/BeState/Image1.jpg";
import Mantra360 from "../../assets/projects/Mantra360/Image1.jpg";
import Kalp from "../../assets/projects/kalp/Image1.jpg";

import project2 from "../../assets/projects/Project2.jpg";
import Vision from "../../assets/projects/Vision/Image1.jpg";
import project4 from "../../assets/projects/Project4.jpeg";
import project5 from "../../assets/projects/Project5.png";
// ─────────────────────────────────────────────────────────────
//  DATA
// ─────────────────────────────────────────────────────────────

// const PROJECTS = [
//   {
//     id: 1,
//     title: "ADHYA RATAN",
//     discipline: "Mixed-Use",
//     status: "Completed",
//     // location: "Ahmedabad",
//     year: "2023",
//     area: "12,500 sqm",
//     floors: "14",
//     shortDesc:
//       "A mixed-use residential complex that blends retail and residential spaces with warm brick tones and landscaped podiums.",
//     longDesc:
//       "Adhya Radha-Krishna is a landmark mixed-use development that redefines urban living in Ahmedabad. Rising 14 floors, the building integrates premium retail on lower levels with carefully crafted residential units above. The warm brick-tone façade creates visual warmth while the strategic placement of greenery and open spaces ensures residents enjoy a connection to nature amid the urban environment. The project incorporates energy-efficient systems, rainwater harvesting, and sustainable materials throughout its construction, achieving a benchmark in responsible urban development.",
//     tags: ["Mixed-Use", "Residential", "Retail", "Sustainable"],
//     image: project1,
//     gallery: [
//       "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80",
//       "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=80",
//       "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
//     ],
//   },
//   {
//     id: 2,
//     title: "TANISH URBANIA",
//     discipline: "Commercial",
//     status: "Ongoing",
//     // location: "Surat",
//     year: "2024",
//     area: "28,000 sqm",
//     floors: "28",
//     shortDesc:
//       "A soaring commercial tower with a textured wooden-tone façade, sky lobbies, and panoramic city views.",
//     longDesc:
//       "Skyline Tower Block Views represents a new generation of commercial architecture in Surat. The 28-story tower features a meticulously designed textured facade that plays with light and shadow throughout the day. The interior planning maximizes natural light penetration through a central atrium, while flexible floor plates accommodate diverse corporate tenants. The tower includes sky lobbies on alternate floors, rooftop gardens, and premium conference facilities, establishing a new standard for Grade-A office space in the region.",
//     tags: ["Commercial", "High-rise", "Office", "Corporate"],
//     image: project2,
//     gallery: [
//       "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1400&q=80",
//       "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80",
//       "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&q=80",
//     ],
//   },
//   {
//     id: 3,
//     title: "PIONEER LUMINA",
//     discipline: "Residential",
//     status: "Completed",
//     // location: "Pune",
//     year: "2022",
//     area: "18,200 sqm",
//     floors: "18",
//     shortDesc:
//       "Premium high-rise residential towers featuring vertical gardens integrated into a bold, linear façade.",
//     longDesc:
//       "Verdant Heights challenges conventional residential design by bringing nature into the built environment. The 18-floor towers feature integrated vertical gardens on every alternate floor, creating a cascade of greenery visible from kilometers away. Each unit enjoys a private garden terrace, while shared amenities include rooftop infinity pools, meditation gardens, and urban farming plots. The project has achieved LEED Platinum certification for its sustainable design principles and commitment to reducing the urban heat island effect.",
//     tags: ["Residential", "Luxury", "Green Architecture", "LEED Platinum"],
//     image: project3,
//     gallery: [
//       "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=80",
//       "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
//       "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80",
//     ],
//   },
//   {
//     id: 4,
//     title: "SHUBH ANUGRAHA",
//     discipline: "Residential",
//     status: "Ongoing",
//     // location: "Vadodara",
//     year: "2025",
//     area: "35,000 sqm",
//     floors: "10",
//     shortDesc:
//       "A large-scale affordable housing project that proves quality design and economic viability can coexist.",
//     longDesc:
//       "Horizon Affordable Housing demonstrates that quality design need not be a luxury. Spread across a 35,000 sqm site, the project provides 480 homes for economically weaker sections without compromising on livability or dignity. The design prioritises cross-ventilation, natural light, and community spaces. Shared amenities include playgrounds, community halls, and green corridors between blocks. The modular construction approach reduced costs by 30% while maintaining high build quality and aesthetic coherence.",
//     tags: ["Affordable Housing", "Community", "Social Impact", "Modular"],
//     image: project4,
//     gallery: [
//       "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
//       "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=80",
//       "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80",
//     ],
//     link: "projects/adhyaratan",
//   },
//   {
//     id: 5,
//     title: "TANISH INDRAYANI",
//     discipline: "Cultural",
//     status: "Concept",
//     location: "Mumbai",
//     year: "2026",
//     area: "8,400 sqm",
//     floors: "3",
//     shortDesc:
//       "A multi-purpose cultural pavilion with a perforated brick skin that filters light into ever-changing interior atmospheres.",
//     longDesc:
//       "The Cultural Pavilion is a visionary concept for Mumbai's waterfront, designed to serve as a democratic space for culture, learning, and community gathering. The three-level structure houses exhibition galleries, performance spaces, and a public library. Its distinctive perforated brick facade creates a dramatic play of light and shadow inside, with patterns derived from traditional Indian jaali work. The building opens up to the waterfront with generous terraces and is designed to be fully accessible and welcoming to every member of the public.",
//     tags: ["Cultural", "Public Space", "Exhibition", "Performance"],
//     image: project5,
//     gallery: [
//       "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=1400&q=80",
//       "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80",
//       "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80",
//     ],
//   },
//   {
//     id: 6,
//     title: "UpComing",
//     discipline: "Mixed-Use",
//     status: "Ongoing",
//     location: "Bangalore",
//     year: "2024",
//     area: "52,000 sqm",
//     floors: "22",
//     shortDesc:
//       "A bold mixed-use tower combining co-working, retail, F&B, and serviced apartments in a cohesive vertical community.",
//     longDesc:
//       "Urban Nexus is conceived as a vertical city within a city. The 22-floor mixed-use tower creates a new benchmark for integrated urban development in Bangalore. The lower eight floors house premium retail and F&B, mid-section floors feature flexible co-working spaces, and the upper floors offer serviced apartments with hotel-grade amenities. The project is directly connected to the metro network and features an underground parking facility, freeing the ground plane for pedestrian-friendly plazas and public gardens.",
//     tags: ["Mixed-Use", "Co-working", "Retail", "Transit-Oriented"],
//     image:
//       "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
//     gallery: [
//       "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
//       "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1400&q=80",
//       "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80",
//     ],
//   },
// ];

const PROJECTS = [
  {
    id: 1,
    title: "ADHYA RATAN",
    discipline: "Mixed-Use",
    status: "Completed",
    year: "2023",
    area: "12,500 sqm",
    floors: "14",
    shortDesc: "Project description",
    longDesc: "Detailed description",
    tags: ["Mixed-Use"],
    image: AdhyaRatan,
    gallery: [],
  },
  {
    id: 2,
    title: "INFINI JAGTAP CITY",
    discipline: "Mixed-Use",
    status: "Ongoing",
    year: "2024",
    area: "40,000 sqm",
    floors: "20",
    shortDesc: "Project description",
    longDesc: "Detailed description",
    tags: ["Mixed-Use"],
    image: INFINI,
    gallery: [],
  },
  {
    id: 3,
    title: "PLATINUM CITYLIGHTS",
    discipline: "Residential",
    status: "Completed",
    year: "2022",
    area: "22,000 sqm",
    floors: "18",
    shortDesc: "Project description",
    longDesc: "Detailed description",
    tags: ["Residential"],
    image: Citylight,
    gallery: [],
  },
  {
    id: 4,
    title: "ADHYA RADHA KRISHNA",
    discipline: "Residential",
    status: "Completed",
    year: "2023",
    area: "15,000 sqm",
    floors: "12",
    shortDesc: "Project description",
    longDesc: "Detailed description",
    tags: ["Residential"],
    image: AdhyaRadha,
    gallery: [],
  },
  {
    id: 5,
    title: "TANISH URBANIA",
    discipline: "Commercial",
    status: "Ongoing",
    year: "2024",
    area: "28,000 sqm",
    floors: "28",
    shortDesc: "Project description",
    longDesc: "Detailed description",
    tags: ["Commercial"],
    image: TanishUrbania,
    gallery: [],
  },
  {
    id: 6,
    title: "ALANDI SCHOOL",
    discipline: "Institutional",
    status: "Completed",
    year: "2021",
    area: "10,000 sqm",
    floors: "4",
    shortDesc: "Project description",
    longDesc: "Detailed description",
    tags: ["Institutional"],
    image: AlandiSchool,
    gallery: [],
  },
  {
    id: 7,
    title: "PRARAMBH SERENITY",
    discipline: "Residential",
    status: "Ongoing",
    year: "2025",
    area: "30,000 sqm",
    floors: "16",
    shortDesc: "Project description",
    longDesc: "Detailed description",
    tags: ["Residential"],
    image: PrarambhSerenity,
    gallery: [],
  },
  {
    id: 8,
    title: "SHUBH ANUGRAH",
    discipline: "Residential",
    status: "Completed",
    year: "2023",
    area: "20,000 sqm",
    floors: "10",
    shortDesc: "Project description",
    longDesc: "Detailed description",
    tags: ["Residential"],
    image: ShubAnugrah,
    gallery: [],
  },
  {
    id: 9,
    title: "VISION",
    discipline: "Commercial",
    status: "Concept",
    year: "2026",
    area: "12,000 sqm",
    floors: "8",
    shortDesc: "Project description",
    longDesc: "Detailed description",
    tags: ["Commercial"],
    image: Vision,
    gallery: [],
  },
  {
    id: 10,
    title: "TANISH INDRAYANI",
    discipline: "Residential",
    status: "Ongoing",
    year: "2024",
    area: "18,000 sqm",
    floors: "14",
    shortDesc: "Project description",
    longDesc: "Detailed description",
    tags: ["Residential"],
    image: TanishIndrayani,
    gallery: [],
  },
  {
    id: 11,
    title: "PIONEER",
    discipline: "Commercial",
    status: "Completed",
    year: "2022",
    area: "25,000 sqm",
    floors: "15",
    shortDesc: "Project description",
    longDesc: "Detailed description",
    tags: ["Commercial"],
    image: Pioneer,
    gallery: [],
  },
  {
    id: 12,
    title: "KALP 99",
    discipline: "Residential",
    status: "Ongoing",
    year: "2024",
    area: "19,000 sqm",
    floors: "12",
    shortDesc: "Project description",
    longDesc: "Detailed description",
    tags: ["Residential"],
    image: Kalp,
    gallery: [],
  },
  {
    id: 13,
    title: "BHOSALE GALAXY",
    discipline: "Residential",
    status: "Completed",
    year: "2023",
    area: "21,000 sqm",
    floors: "13",
    shortDesc: "Project description",
    longDesc: "Detailed description",
    tags: ["Residential"],
    image: BhosaleGalaxy,
    gallery: [],
  },
  {
    id: 14,
    title: "BHOSALE ICON",
    discipline: "Commercial",
    status: "Ongoing",
    year: "2025",
    area: "24,000 sqm",
    floors: "16",
    shortDesc: "Project description",
    longDesc: "Detailed description",
    tags: ["Commercial"],
    image: BhosaleIcon,
    gallery: [],
  },
  {
    id: 15,
    title: "BESTATE AXIS",
    discipline: "Commercial",
    status: "Completed",
    year: "2023",
    area: "26,000 sqm",
    floors: "18",
    shortDesc: "Project description",
    longDesc: "Detailed description",
    tags: ["Commercial"],
    image: BeState,
    gallery: [],
  },
  {
    id: 16,
    title: "MANTRA 360",
    discipline: "Mixed-Use",
    status: "Ongoing",
    year: "2025",
    area: "32,000 sqm",
    floors: "20",
    shortDesc: "Project description",
    longDesc: "Detailed description",
    tags: ["Mixed-Use"],
    image: Mantra360,
    gallery: [],
  },
];
const unique = (key) => ["All", ...new Set(PROJECTS.map((p) => p[key]))];

const DISCIPLINES = unique("discipline");
const STATUSES = unique("status");
const LOCATIONS = unique("location");

// ─────────────────────────────────────────────────────────────
//  ICONS
// ─────────────────────────────────────────────────────────────

const IconSearch = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const IconChevron = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const IconArrowLeft = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const IconArrowRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IconX = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// ─────────────────────────────────────────────────────────────
//  FILTER SELECT
// ─────────────────────────────────────────────────────────────

function FilterSelect({ label, options, value, onChange }) {
  return (
    <div className={styles.filterItem}>
      <span className={styles.filterLabel}>{label}</span>
      <div className={styles.selectWrap}>
        <select
          className={styles.select}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={label}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <span className={styles.selectChevron} aria-hidden="true">
          <IconChevron />
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  PROJECT CARD
// ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index, onClick }) {
  return (
    <article
      className={styles.card}
      style={{ animationDelay: `${index * 0.07}s` }}
      // onClick={() => onClick(project.id)}
      role="button"
      onKeyDown={(e) => e.key === "Enter" && onClick(project.id)}
      aria-label={`View ${project.title}`}
      onClick={() => project.link && onClick(project)}
      // role="button"
      tabIndex={project.link ? 0 : -1}
    >
      {/* Image */}
      <div className={styles.cardImageWrap}>
        <img
          className={styles.cardImage}
          src={project.image}
          alt={project.title}
          loading="lazy"
        />
        <div className={styles.cardOverlay}>
          <span className={styles.cardCta}>
            View Project <IconArrowRight />
          </span>
        </div>

        {/* <span
          className={styles.cardStatusPill}
          data-status={project.status.toLowerCase().replace(" ", "-")}
        >
          {project.status}
        </span> */}
      </div>

      {/* Body */}
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span className={styles.cardDiscipline}>{project.discipline}</span>
          <span className={styles.cardMetaDot} />
          {/* <span className={styles.cardLocation}>{project.location}</span> */}
          {/* <span className={styles.cardYear}>{project.year}</span> */}
        </div>

        <h3 className={styles.cardTitle}>{project.title}</h3>
        {/* <p className={styles.cardDesc}>{project.shortDesc}</p> */}
        {/* 
        <div className={styles.cardTags}>
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
          {/* {project.tags.length > 2 && (
            <span className={styles.tagMore}>+{project.tags.length - 2}</span>
          )} 
        </div> */}
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────
//  PROJECTS LIST PAGE
// ─────────────────────────────────────────────────────────────

function Project() {
  const navigate = useNavigate();
  const [discipline, setDiscipline] = useState("All");
  const [status, setStatus] = useState("All");
  const [location, setLocation] = useState("All");
  const [search, setSearch] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const searchRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Active filter count (excluding "All")
  const activeCount =
    [discipline, status, location].filter((v) => v !== "All").length +
    (searchInput.trim() ? 1 : 0);

  const filtered = useMemo(() => {
    const q = searchInput.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      if (discipline !== "All" && p.discipline !== discipline) return false;
      if (status !== "All" && p.status !== status) return false;
      if (location !== "All" && p.location !== location) return false;
      if (q) {
        const blob =
          `${p.title} ${p.discipline} ${p.location} ${p.tags.join(" ")} ${p.shortDesc}`.toLowerCase();
        if (!blob.includes(q)) return false;
      }
      return true;
    });
  }, [discipline, status, location, searchInput]);

  const clearAll = () => {
    setDiscipline("All");
    setStatus("All");
    setLocation("All");
    setSearchInput("");
  };

  // Stagger re-animation when filters change
  const [animKey, setAnimKey] = useState(0);
  const prevFiltered = useRef(filtered);
  useEffect(() => {
    if (prevFiltered.current !== filtered) {
      setAnimKey((k) => k + 1);
      prevFiltered.current = filtered;
    }
  }, [filtered]);

  return (
    <div className={styles.page}>
      {/* ── NAV ────────────────────────────────────────── */}

      {/* ── HERO ───────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroHeading}>
            Our projects are samples of possible solutions and futures. They
            present an opening for rethinking, redesigning and redoing
          </h1>
          <div className={styles.heroRule} />
        </div>
      </section>

      {/* ── FILTER BAR ─────────────────────────────────── */}
      <section className={styles.filterSection}>
        <div className={styles.filterBar}>
          {/* All toggle */}
          <button
            className={`${styles.filterAllBtn} ${activeCount === 0 ? styles.filterAllActive : ""}`}
            onClick={clearAll}
            aria-pressed={activeCount === 0}
          >
            All
            {activeCount > 0 && (
              <span className={styles.filterAllCount}>{activeCount}</span>
            )}
          </button>

          <span className={styles.filterDivider} aria-hidden="true" />

          <FilterSelect
            label="Discipline"
            options={DISCIPLINES}
            value={discipline}
            onChange={setDiscipline}
          />

          <span className={styles.filterDivider} aria-hidden="true" />

          <FilterSelect
            label="Status"
            options={STATUSES}
            value={status}
            onChange={setStatus}
          />

          <span className={styles.filterDivider} aria-hidden="true" />

          <FilterSelect
            label="Location"
            options={LOCATIONS}
            value={location}
            onChange={setLocation}
          />

          <span className={styles.filterDivider} aria-hidden="true" />

          {/* Search */}
          <div className={styles.filterSearch}>
            <span className={styles.filterSearchIcon} aria-hidden="true">
              <IconSearch />
            </span>
            <input
              ref={searchRef}
              className={styles.filterSearchInput}
              type="search"
              placeholder="Search projects…"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              aria-label="Search projects"
            />
            {searchInput && (
              <button
                className={styles.filterSearchClear}
                onClick={() => setSearchInput("")}
                aria-label="Clear search"
              >
                <IconX />
              </button>
            )}
          </div>
        </div>

        {/* Result meta */}
        <div className={styles.filterMeta}>
          <span className={styles.filterMetaCount}>
            <strong>{filtered.length}</strong> project
            {filtered.length !== 1 ? "s" : ""}
          </span>
          {activeCount > 0 && (
            <button className={styles.filterMetaClear} onClick={clearAll}>
              Clear filters <IconX />
            </button>
          )}
        </div>
      </section>

      {/* ── GRID ───────────────────────────────────────── */}
      <section className={styles.grid} key={animKey} aria-label="Projects grid">
        {filtered.length === 0 ? (
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}>○</span>
            <p className={styles.emptyTitle}>No projects found</p>
            <p className={styles.emptySubtitle}>
              Try adjusting your filters or search query.
            </p>
            <button className={styles.emptyReset} onClick={clearAll}>
              Reset filters
            </button>
          </div>
        ) : (
          filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={(project) => {
                if (project.link) {
                  navigate(`/${project.link}`);
                }
              }}
            />
          ))
        )}
      </section>
    </div>
  );
}

export default Project;
