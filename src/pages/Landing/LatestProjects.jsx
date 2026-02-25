"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import styles from "./LatestProjects.module.scss";
import img1 from "../../assets/project-1.jpg";
import img2 from "../../assets/project-2.jpg";
import img3 from "../../assets/project-3.jpg";
import project1 from "../../assets/projects/Project1.jpg";
import project2 from "../../assets/projects/Project2.jpg";
import project3 from "../../assets/projects/Project3.jpeg";
import project4 from "../../assets/projects/Project4.jpeg";
import project5 from "../../assets/projects/Project5.png";
const BASE_PROJECTS = [
  {
    id: 0,
    title: "ADHYA RATAN",
    subtitle: "A new model for vacation homes",
    img: project1,
  },
  {
    id: 1,
    title: "TANISH URBANIA",
    subtitle: "Architecture dissolving into nature",
    img: project2,
  },
  {
    id: 2,
    title: "PIONEER LUMINA",
    subtitle: "Where heritage meets the horizon",
    img: project3,
  },
  {
    id: 3,
    title: "SHUBH ANUGRAHA",
    subtitle: "Woven light across the city grid",
    img: project4,
  },
  {
    id: 4,
    title: "TANISH INDRAYANI",
    subtitle: "A lens turned toward the sea",
    img: project5,
  },
  {
    id: 0,
    title: "ADHYA RATAN",
    subtitle: "A new model for vacation homes",
    img: project1,
  },
  {
    id: 1,
    title: "TANISH URBANIA",
    subtitle: "Architecture dissolving into nature",
    img: project2,
  },
  {
    id: 2,
    title: "PIONEER LUMINA",
    subtitle: "Where heritage meets the horizon",
    img: project3,
  },
  {
    id: 3,
    title: "SHUBH ANUGRAHA",
    subtitle: "Woven light across the city grid",
    img: project4,
  },
  {
    id: 4,
    title: "TANISH INDRAYANI",
    subtitle: "A lens turned toward the sea",
    img: project5,
  },
];

const N = BASE_PROJECTS.length;
// Triple list for infinite loop
const PROJECTS = [...BASE_PROJECTS, ...BASE_PROJECTS, ...BASE_PROJECTS];
const TOTAL = PROJECTS.length; // 15

const AUTO_MS = 5000;

// ─── Width config (% of viewport) — exact from Snohetta source ───────────────
// center=36%, side=24%, edge=16%
// The key: WIDTH changes, not height. Cards stay same aspect ratio (66.67% padding-bottom)
const W = {
  center: 36, // %
  side: 24, // %
  edge: 16, // %
  far: 10, // % (beyond ±2)
};

// Left position (% of viewport) for each slot relative to center card
// Center card left = (100 - W.center) / 2
// Then side/edge cards tile outward
function getSlotLeft(distFromCenter) {
  const centerLeft = (100 - W.center) / 2; // e.g. 32%

  if (distFromCenter === 0) return centerLeft;

  const sign = distFromCenter > 0 ? 1 : -1;
  const abs = Math.abs(distFromCenter);

  // Build up cumulative left from center outward
  let left = centerLeft;
  for (let i = 1; i <= abs; i++) {
    const prevW = i === 1 ? W.center : getWidthForDist(i - 1);
    if (sign > 0) {
      left += prevW;
    } else {
      left -= getWidthForDist(i);
    }
  }
  return left;
}

function getWidthForDist(dist) {
  const abs = Math.abs(dist);
  if (abs === 0) return W.center;
  if (abs === 1) return W.side;
  if (abs === 2) return W.edge;
  return W.far;
}

// Interpolate between two slot configs based on a 0..1 progress
function lerpSlot(distA, distB, t) {
  const wA = getWidthForDist(distA);
  const wB = getWidthForDist(distB);
  const leftA = getSlotLeft(distA);
  const leftB = getSlotLeft(distB);
  return {
    width: wA + (wB - wA) * t,
    left: leftA + (leftB - leftA) * t,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
export default function ProjectsCarousel() {
  const wrapperRef = useRef(null);
  const cardRefs = useRef([]); // DOM refs, length = TOTAL
  const rafRef = useRef(null);
  const autoTimer = useRef(null);

  // Motion state — all refs, no re-renders during animation
  // `progress` = float index. 5.0 = card 5 centered. 5.7 = 70% toward card 6.
  const progress = useRef(N); // start at middle set card 0
  const targetProg = useRef(N);
  const isDragging = useRef(false);
  const ptrStartX = useRef(0);
  const progAtDrag = useRef(N);
  const prevPtrX = useRef(0);
  const prevPtrTime = useRef(0);
  const velocity = useRef(0); // cards/ms

  // React state — only caption & opacity, updates on snap only
  const [activeBase, setActiveBase] = useState(0);

  // ── Core: apply all card positions based on current progress float ────────────
  const applyProgress = useCallback((prog) => {
    cardRefs.current.forEach((el, i) => {
      if (!el) return;

      // continuous distance from center (float)
      const dist = i - prog;

      // Clamp visual range — hide cards beyond ±3
      if (Math.abs(dist) > 3.5) {
        gsap.set(el, { display: "none" });
        return;
      }
      gsap.set(el, { display: "block" });

      // For smooth interpolation between integer slot sizes:
      // floor and ceil dist, then lerp based on fractional part
      const distFloor = Math.floor(dist);
      const distCeil = distFloor + 1;
      const frac = dist - distFloor; // 0..1

      const { width, left } = lerpSlot(distFloor, distCeil, frac);

      // Opacity: 1 at center, dims outward
      const absDist = Math.abs(dist);
      const opacity =
        absDist < 1
          ? 1 - absDist * 0.25
          : absDist < 2
            ? 0.75 - (absDist - 1) * 0.3
            : Math.max(0.2, 0.45 - (absDist - 2) * 0.2);

      gsap.set(el, {
        left: `${left}%`,
        width: `${width}%`,
        opacity,
      });
    });
  }, []);

  // ── Init & resize ─────────────────────────────────────────────────────────────
  useEffect(() => {
    applyProgress(progress.current);
  }, [applyProgress]);

  useEffect(() => {
    const onResize = () => applyProgress(progress.current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [applyProgress]);

  // ── RAF loop — two phases ──────────────────────────────────────────────────────
  // Phase 1 (coasting): velocity decays with friction each frame → natural glide
  // Phase 2 (snapping): lerp progress → nearest card center
  const isCoasting = useRef(false);

  const tick = useCallback(() => {
    if (isCoasting.current && Math.abs(velocity.current) > 0.00005) {
      // Apply velocity then apply friction
      progress.current += velocity.current * 16; // ~1 frame at 60fps
      targetProg.current = progress.current;
      velocity.current *= 0.88; // 0.88 = smooth glide, try 0.82 for quicker stop

      applyProgress(progress.current);

      // Once coasted to near-zero, switch to snap phase
      if (Math.abs(velocity.current) < 0.00005) {
        isCoasting.current = false;
        snapToIndex(progress.current);
      }

      rafRef.current = requestAnimationFrame(tick);
      return;
    }

    // Snap phase: lerp to target
    const diff = targetProg.current - progress.current;
    if (Math.abs(diff) < 0.001) {
      progress.current = targetProg.current;
      applyProgress(progress.current);
      rafRef.current = null;
      return;
    }

    progress.current += diff * 0.08;
    applyProgress(progress.current);
    rafRef.current = requestAnimationFrame(tick);
  }, [applyProgress]);

  const startRaf = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  // ── Snap to nearest integer index + seamless loop ─────────────────────────────
  const snapToIndex = useCallback(
    (rawIdx) => {
      isCoasting.current = false; // always stop coasting when snapping
      const idx = Math.max(1, Math.min(TOTAL - 2, Math.round(rawIdx)));
      targetProg.current = idx;
      setActiveBase(idx % N);
      startRaf();

      // Seamless teleport back to middle set after animation
      setTimeout(() => {
        const middleIdx = N + (idx % N);
        if (idx !== middleIdx) {
          progress.current = middleIdx;
          targetProg.current = middleIdx;
          applyProgress(middleIdx);
        }
      }, 900);
    },
    [startRaf, applyProgress],
  );

  // ── Auto advance ──────────────────────────────────────────────────────────────
  const resetAutoTimer = useCallback(() => {
    clearInterval(autoTimer.current);
    autoTimer.current = setInterval(() => {
      if (!isDragging.current) {
        snapToIndex(Math.round(progress.current) + 1);
      }
    }, AUTO_MS);
  }, [snapToIndex]);

  useEffect(() => {
    resetAutoTimer();
    return () => clearInterval(autoTimer.current);
  }, [resetAutoTimer]);

  // ── Pointer down ──────────────────────────────────────────────────────────────
  const onPointerDown = useCallback((e) => {
    e.preventDefault();
    isDragging.current = true;
    ptrStartX.current = e.clientX;
    progAtDrag.current = progress.current;
    prevPtrX.current = e.clientX;
    prevPtrTime.current = performance.now();
    velocity.current = 0;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    clearInterval(autoTimer.current);
    wrapperRef.current?.setPointerCapture?.(e.pointerId);
  }, []);

  // ── Pointer move — convert px drag to progress units ─────────────────────────
  const onPointerMove = useCallback(
    (e) => {
      if (!isDragging.current) return;

      const now = performance.now();
      const dt = now - prevPtrTime.current;
      if (dt > 0) {
        // velocity in cards/ms: dragging one card-width moves progress by 1
        const vw = wrapperRef.current?.offsetWidth ?? window.innerWidth;
        const cardPx = vw * (W.side / 100); // approximate 1 card = side width
        velocity.current = -((e.clientX - prevPtrX.current) / cardPx) / dt;
      }
      prevPtrX.current = e.clientX;
      prevPtrTime.current = now;

      const vw = wrapperRef.current?.offsetWidth ?? window.innerWidth;
      const cardPx = vw * (W.side / 100);
      const deltaPx = e.clientX - ptrStartX.current;
      const deltaP = -(deltaPx / cardPx); // negative: drag right = go back

      const newProg = progAtDrag.current + deltaP;
      progress.current = newProg;
      targetProg.current = newProg;
      applyProgress(newProg);
    },
    [applyProgress],
  );

  // ── Pointer up — engage coast phase ──────────────────────────────────────────
  const onPointerUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (Math.abs(velocity.current) > 0.0002) {
      // Has meaningful velocity — let it coast with friction
      isCoasting.current = true;
      startRaf();
    } else {
      // Slow/no velocity — snap immediately to nearest
      isCoasting.current = false;
      snapToIndex(progress.current);
      resetAutoTimer();
    }

    resetAutoTimer();
  }, [startRaf, snapToIndex, resetAutoTimer]);

  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <section className={styles.section}>
      {/* Cards layer — absolute positioned */}
      <div
        ref={wrapperRef}
        className={styles.stage}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {PROJECTS.map((project, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className={styles.card}
          >
            {/* Aspect ratio wrapper — exactly like Snohetta: padding-bottom 66.67% */}
            <div className={styles.cardInner}>
              <img src={project.img} alt={project.title} draggable={false} />
            </div>
          </div>
        ))}
      </div>

      {/* Caption layer — all stacked, active one fades in */}
      <div className={styles.captionWrap}>
        {BASE_PROJECTS.map((project, i) => (
          <div
            key={i}
            className={`${styles.captionItem} ${i === activeBase ? styles.captionActive : ""}`}
          >
            <p className={styles.captionTitle}>{project.title}</p>
            <p className={styles.captionSub}>{project.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
