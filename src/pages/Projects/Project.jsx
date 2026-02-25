import { useState, useMemo, useEffect, useRef } from "react";
import {
  useNavigate,
  useParams,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import styles from "./ProjectsPage.module.scss";
import project1 from "../../assets/projects/Project1.jpeg";
import project2 from "../../assets/projects/Project2.jpg";
import project3 from "../../assets/projects/Project3.jpeg";
import project4 from "../../assets/projects/Project4.jpeg";
import project5 from "../../assets/projects/Project5.png";
// ─────────────────────────────────────────────────────────────
//  DATA
// ─────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: 1,
    title: "ADHYA RATAN",
    discipline: "Mixed-Use",
    status: "Completed",
    // location: "Ahmedabad",
    year: "2023",
    area: "12,500 sqm",
    floors: "14",
    shortDesc:
      "A mixed-use residential complex that blends retail and residential spaces with warm brick tones and landscaped podiums.",
    longDesc:
      "Adhya Radha-Krishna is a landmark mixed-use development that redefines urban living in Ahmedabad. Rising 14 floors, the building integrates premium retail on lower levels with carefully crafted residential units above. The warm brick-tone façade creates visual warmth while the strategic placement of greenery and open spaces ensures residents enjoy a connection to nature amid the urban environment. The project incorporates energy-efficient systems, rainwater harvesting, and sustainable materials throughout its construction, achieving a benchmark in responsible urban development.",
    tags: ["Mixed-Use", "Residential", "Retail", "Sustainable"],
    image: project1,
    gallery: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
    ],
  },
  {
    id: 2,
    title: "TANISH URBANIA",
    discipline: "Commercial",
    status: "Ongoing",
    // location: "Surat",
    year: "2024",
    area: "28,000 sqm",
    floors: "28",
    shortDesc:
      "A soaring commercial tower with a textured wooden-tone façade, sky lobbies, and panoramic city views.",
    longDesc:
      "Skyline Tower Block Views represents a new generation of commercial architecture in Surat. The 28-story tower features a meticulously designed textured facade that plays with light and shadow throughout the day. The interior planning maximizes natural light penetration through a central atrium, while flexible floor plates accommodate diverse corporate tenants. The tower includes sky lobbies on alternate floors, rooftop gardens, and premium conference facilities, establishing a new standard for Grade-A office space in the region.",
    tags: ["Commercial", "High-rise", "Office", "Corporate"],
    image: project2,
    gallery: [
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1400&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&q=80",
    ],
  },
  {
    id: 3,
    title: "PIONEER LUMINA",
    discipline: "Residential",
    status: "Completed",
    // location: "Pune",
    year: "2022",
    area: "18,200 sqm",
    floors: "18",
    shortDesc:
      "Premium high-rise residential towers featuring vertical gardens integrated into a bold, linear façade.",
    longDesc:
      "Verdant Heights challenges conventional residential design by bringing nature into the built environment. The 18-floor towers feature integrated vertical gardens on every alternate floor, creating a cascade of greenery visible from kilometers away. Each unit enjoys a private garden terrace, while shared amenities include rooftop infinity pools, meditation gardens, and urban farming plots. The project has achieved LEED Platinum certification for its sustainable design principles and commitment to reducing the urban heat island effect.",
    tags: ["Residential", "Luxury", "Green Architecture", "LEED Platinum"],
    image: project3,
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80",
    ],
  },
  {
    id: 4,
    title: "SHUBH ANUGRAHA",
    discipline: "Residential",
    status: "Ongoing",
    // location: "Vadodara",
    year: "2025",
    area: "35,000 sqm",
    floors: "10",
    shortDesc:
      "A large-scale affordable housing project that proves quality design and economic viability can coexist.",
    longDesc:
      "Horizon Affordable Housing demonstrates that quality design need not be a luxury. Spread across a 35,000 sqm site, the project provides 480 homes for economically weaker sections without compromising on livability or dignity. The design prioritises cross-ventilation, natural light, and community spaces. Shared amenities include playgrounds, community halls, and green corridors between blocks. The modular construction approach reduced costs by 30% while maintaining high build quality and aesthetic coherence.",
    tags: ["Affordable Housing", "Community", "Social Impact", "Modular"],
    image: project4,
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=80",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80",
    ],
  },
  {
    id: 5,
    title: "TANISH INDRAYANI",
    discipline: "Cultural",
    status: "Concept",
    location: "Mumbai",
    year: "2026",
    area: "8,400 sqm",
    floors: "3",
    shortDesc:
      "A multi-purpose cultural pavilion with a perforated brick skin that filters light into ever-changing interior atmospheres.",
    longDesc:
      "The Cultural Pavilion is a visionary concept for Mumbai's waterfront, designed to serve as a democratic space for culture, learning, and community gathering. The three-level structure houses exhibition galleries, performance spaces, and a public library. Its distinctive perforated brick facade creates a dramatic play of light and shadow inside, with patterns derived from traditional Indian jaali work. The building opens up to the waterfront with generous terraces and is designed to be fully accessible and welcoming to every member of the public.",
    tags: ["Cultural", "Public Space", "Exhibition", "Performance"],
    image: project5,
    gallery: [
      "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=1400&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80",
    ],
  },
  {
    id: 6,
    title: "UpComing",
    discipline: "Mixed-Use",
    status: "Ongoing",
    location: "Bangalore",
    year: "2024",
    area: "52,000 sqm",
    floors: "22",
    shortDesc:
      "A bold mixed-use tower combining co-working, retail, F&B, and serviced apartments in a cohesive vertical community.",
    longDesc:
      "Urban Nexus is conceived as a vertical city within a city. The 22-floor mixed-use tower creates a new benchmark for integrated urban development in Bangalore. The lower eight floors house premium retail and F&B, mid-section floors feature flexible co-working spaces, and the upper floors offer serviced apartments with hotel-grade amenities. The project is directly connected to the metro network and features an underground parking facility, freeing the ground plane for pedestrian-friendly plazas and public gardens.",
    tags: ["Mixed-Use", "Co-working", "Retail", "Transit-Oriented"],
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1400&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80",
    ],
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
      onClick={() => onClick(project.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(project.id)}
      aria-label={`View ${project.title}`}
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
        {/* Status pill */}
        <span
          className={styles.cardStatusPill}
          data-status={project.status.toLowerCase().replace(" ", "-")}
        >
          {project.status}
        </span>
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
              // onClick={(id) => navigate(`/project/${id}`)}
            />
          ))
        )}
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  PROJECT DETAIL PAGE
// ─────────────────────────────────────────────────────────────

function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === Number(id));
  const [activeImg, setActiveImg] = useState(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p>Project not found.</p>
        <button className={styles.backBtn} onClick={() => navigate("/")}>
          <IconArrowLeft /> Back to Projects
        </button>
      </div>
    );
  }

  const related = PROJECTS.filter(
    (p) => p.id !== project.id && p.discipline === project.discipline,
  ).slice(0, 3);

  const prevProject = PROJECTS[PROJECTS.indexOf(project) - 1];
  const nextProject = PROJECTS[PROJECTS.indexOf(project) + 1];

  return (
    <div className={styles.detailPage}>
      {/* ── NAV ── */}
      <header className={styles.detailNav}>
        <div className={styles.detailNavInner}>
          <button
            className={styles.detailBackBtn}
            onClick={() => navigate("/")}
            aria-label="Back to projects"
          >
            <IconArrowLeft />
            <span>All Projects</span>
          </button>
          <span className={styles.detailNavLogo}>Studio</span>
          <div className={styles.detailNavArrows}>
            <button
              className={styles.detailNavArrow}
              disabled={!prevProject}
              // onClick={() =>
              // prevProject && navigate(`/project/${prevProject.id}`)
              // }
              aria-label="Previous project"
            >
              <IconArrowLeft />
            </button>
            <button
              className={styles.detailNavArrow}
              disabled={!nextProject}
              // onClick={() =>
              // nextProject && navigate(`/project/${nextProject.id}`)
              // }
              aria-label="Next project"
            >
              <IconArrowRight />
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO IMAGE ── */}
      <div className={styles.detailHeroWrap}>
        <img
          className={styles.detailHeroImg}
          src={project.gallery[activeImg]}
          alt={project.title}
        />
        <div className={styles.detailHeroGrad} />
        <div className={styles.detailHeroCaption}>
          <span
            className={styles.detailStatusPill}
            data-status={project.status.toLowerCase().replace(" ", "-")}
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className={styles.detailContent}>
        <div className={styles.detailContentInner}>
          {/* Left column */}
          <div className={styles.detailMain}>
            <div className={styles.detailMeta}>
              <span className={styles.detailDiscipline}>
                {project.discipline}
              </span>
              <span className={styles.detailMetaDot} />
              <span className={styles.detailLocation}>{project.location}</span>
              <span className={styles.detailMetaDot} />
              <span className={styles.detailYear}>{project.year}</span>
            </div>

            <h1 className={styles.detailTitle}>{project.title}</h1>
            <p className={styles.detailDesc}>{project.longDesc}</p>

            <div className={styles.detailTags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.detailTag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right column – stats */}
          <aside className={styles.detailSidebar}>
            <div className={styles.detailStats}>
              {[
                ["Location", project.location],
                ["Status", project.status],
                ["Year", project.year],
                ["Total Area", project.area],
                ["Floors", `G + ${Number(project.floors) - 1}`],
                ["Discipline", project.discipline],
              ].map(([label, val]) => (
                <div key={label} className={styles.detailStat}>
                  <span className={styles.detailStatLabel}>{label}</span>
                  <span className={styles.detailStatValue}>{val}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* ── GALLERY ── */}
        <section className={styles.detailGallery}>
          <h2 className={styles.detailSectionTitle}>Gallery</h2>
          <div className={styles.detailGalleryMain}>
            <img
              className={styles.detailGalleryMainImg}
              src={project.gallery[activeImg]}
              alt={`${project.title} view ${activeImg + 1}`}
            />
          </div>
          <div className={styles.detailGalleryThumbs}>
            {project.gallery.map((img, i) => (
              <button
                key={i}
                className={`${styles.detailThumb} ${i === activeImg ? styles.detailThumbActive : ""}`}
                onClick={() => setActiveImg(i)}
                aria-label={`View image ${i + 1}`}
                aria-pressed={i === activeImg}
              >
                <img src={img} alt={`Thumbnail ${i + 1}`} />
              </button>
            ))}
          </div>
        </section>

        {/* ── RELATED ── */}
        {related.length > 0 && (
          <section className={styles.detailRelated}>
            <h2 className={styles.detailSectionTitle}>Related Projects</h2>
            <div className={styles.detailRelatedGrid}>
              {related.map((p) => (
                <article
                  key={p.id}
                  className={styles.relatedCard}
                  // onClick={() => navigate(`/project/${p.id}`)}
                  role="button"
                  tabIndex={0}
                  // onKeyDown={(e) =>
                  //   e.key === "Enter" && navigate(`/project/${p.id}`)
                  // }
                >
                  <div className={styles.relatedImgWrap}>
                    <img
                      className={styles.relatedImg}
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.relatedInfo}>
                    <span className={styles.relatedDisc}>{p.discipline}</span>
                    <h3 className={styles.relatedTitle}>{p.title}</h3>
                    <span className={styles.relatedLoc}>
                      {p.location} · {p.year}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ── PREV / NEXT ── */}
        <div className={styles.detailNav2}>
          {prevProject && (
            <button
              className={styles.navProject}
              // onClick={() => navigate(`/project/${prevProject.id}`)}
            >
              <span className={styles.navProjectDir}>
                <IconArrowLeft /> Previous
              </span>
              <span className={styles.navProjectTitle}>
                {prevProject.title}
              </span>
            </button>
          )}
          {nextProject && (
            <button
              className={`${styles.navProject} ${styles.navProjectNext}`}
              // onClick={() => navigate(`/project/${nextProject.id}`)}
            >
              <span className={styles.navProjectDir}>
                Next <IconArrowRight />
              </span>
              <span className={styles.navProjectTitle}>
                {nextProject.title}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Project;
