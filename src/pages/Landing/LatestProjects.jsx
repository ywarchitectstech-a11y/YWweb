"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import styles from "./LatestProjects.module.scss";
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
const PROJECTS = [...BASE_PROJECTS, ...BASE_PROJECTS, ...BASE_PROJECTS];
const TOTAL = PROJECTS.length; // 15
const AUTO_MS = 5000;

// ─── Width config — desktop vs mobile ────────────────────────────────────────
// Desktop : center=36% side=24% edge=16%  → 5 cards visible
// Mobile  : center=70% side=15% edge=0%   → 3 cards (center + half-peek each side)
const W_DESKTOP = { center: 36, side: 24, edge: 16, far: 10 };
const W_MOBILE = { center: 70, side: 15, edge: 0, far: 0 };

const isMobile = () => typeof window !== "undefined" && window.innerWidth < 768;
const getW = () => (isMobile() ? W_MOBILE : W_DESKTOP);
const getVisibleRange = () => (isMobile() ? 1.6 : 3.5);

function getWidthForDist(dist) {
  const W = getW();
  const abs = Math.abs(dist);
  if (abs === 0) return W.center;
  if (abs === 1) return W.side;
  if (abs === 2) return W.edge;
  return W.far;
}

function getSlotLeft(distFromCenter) {
  const W = getW();
  const centerLeft = (100 - W.center) / 2;
  if (distFromCenter === 0) return centerLeft;

  const sign = distFromCenter > 0 ? 1 : -1;
  const abs = Math.abs(distFromCenter);
  let left = centerLeft;

  for (let i = 1; i <= abs; i++) {
    const prevW = i === 1 ? W.center : getWidthForDist(i - 1);
    if (sign > 0) left += prevW;
    else left -= getWidthForDist(i);
  }
  return left;
}

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
  const cardRefs = useRef([]);
  const rafRef = useRef(null);
  const autoTimer = useRef(null);

  const progress = useRef(N);
  const targetProg = useRef(N);
  const isDragging = useRef(false);
  const ptrStartX = useRef(0);
  const progAtDrag = useRef(N);
  const prevPtrX = useRef(0);
  const prevPtrTime = useRef(0);
  const velocity = useRef(0);
  const isCoasting = useRef(false);

  const [activeBase, setActiveBase] = useState(0);

  // ── Apply positions ───────────────────────────────────────────────────────────
  const applyProgress = useCallback((prog) => {
    cardRefs.current.forEach((el, i) => {
      if (!el) return;

      const dist = i - prog;

      if (Math.abs(dist) > getVisibleRange()) {
        gsap.set(el, { display: "none" });
        return;
      }
      gsap.set(el, { display: "block" });

      const distFloor = Math.floor(dist);
      const distCeil = distFloor + 1;
      const frac = dist - distFloor;

      const { width, left } = lerpSlot(distFloor, distCeil, frac);

      const absDist = Math.abs(dist);
      const opacity =
        absDist < 1
          ? 1 - absDist * 0.25
          : absDist < 2
            ? 0.75 - (absDist - 1) * 0.3
            : Math.max(0.2, 0.45 - (absDist - 2) * 0.2);

      gsap.set(el, { left: `${left}%`, width: `${width}%`, opacity });
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

  // ── RAF tick — coast then snap ────────────────────────────────────────────────
  const tick = useCallback(() => {
    if (isCoasting.current && Math.abs(velocity.current) > 0.00005) {
      progress.current += velocity.current * 16;
      targetProg.current = progress.current;
      velocity.current *= 0.88;
      applyProgress(progress.current);

      if (Math.abs(velocity.current) < 0.00005) {
        isCoasting.current = false;
        snapToIndex(progress.current);
      }
      rafRef.current = requestAnimationFrame(tick);
      return;
    }

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

  // ── Snap ──────────────────────────────────────────────────────────────────────
  const snapToIndex = useCallback(
    (rawIdx) => {
      isCoasting.current = false;
      const idx = Math.max(1, Math.min(TOTAL - 2, Math.round(rawIdx)));
      targetProg.current = idx;
      setActiveBase(idx % N);
      startRaf();

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
      if (!isDragging.current) snapToIndex(Math.round(progress.current) + 1);
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

  // ── Pointer move ──────────────────────────────────────────────────────────────
  const onPointerMove = useCallback(
    (e) => {
      if (!isDragging.current) return;

      const now = performance.now();
      const dt = now - prevPtrTime.current;
      const vw = wrapperRef.current?.offsetWidth ?? window.innerWidth;
      const cardPx = vw * (getW().side / 100);

      if (dt > 0)
        velocity.current = -((e.clientX - prevPtrX.current) / cardPx) / dt;
      prevPtrX.current = e.clientX;
      prevPtrTime.current = now;

      const deltaPx = e.clientX - ptrStartX.current;
      const newProg = progAtDrag.current - deltaPx / cardPx;
      progress.current = newProg;
      targetProg.current = newProg;
      applyProgress(newProg);
    },
    [applyProgress],
  );

  // ── Pointer up ────────────────────────────────────────────────────────────────
  const onPointerUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (Math.abs(velocity.current) > 0.0002) {
      isCoasting.current = true;
      startRaf();
    } else {
      isCoasting.current = false;
      snapToIndex(progress.current);
    }
    resetAutoTimer();
  }, [startRaf, snapToIndex, resetAutoTimer]);

  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <section className={styles.section}>
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
            <div className={styles.cardInner}>
              <img src={project.img} alt={project.title} draggable={false} />
            </div>
          </div>
        ))}
      </div>

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
