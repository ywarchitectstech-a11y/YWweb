import { useState, useEffect } from "react";

const IntroScreen = ({ onComplete, logo, duration = 2600 }) => {
  const [phase, setPhase] = useState("enter"); // enter → visible → exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("visible"), 200);
    const t2 = setTimeout(() => setPhase("exit"), duration - 800);
    const t3 = setTimeout(() => {
      onComplete?.();
    }, duration);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [duration, onComplete]);

  return (
    <>
      <style>{`
        .intro {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #0f0f0f;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .intro.exit {
          opacity: 0;
          transform: scale(1.05);
        }

        /* Subtle gradient glow */
        .intro::before {
          content: "";
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%);
          filter: blur(80px);
          animation: glowMove 6s ease-in-out infinite;
        }

        @keyframes glowMove {
          0%,100% { transform: translate(-20%, -20%); }
          50% { transform: translate(20%, 20%); }
        }

        .intro-logo {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;

          opacity: 0;
          transform: translateY(20px) scale(0.9);
          animation: logoReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes logoReveal {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Subtle breathing effect */
        .intro-logo > * {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      <div className={`intro ${phase === "exit" ? "exit" : ""}`}>
        <div className="intro-logo">
          {logo ?? (
            <svg width="70" height="70" viewBox="0 0 64 64" fill="none">
              <rect width="64" height="64" rx="16" fill="#111" />
              <path
                d="M16 48 L32 16 L48 48"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 38 H43"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>
      </div>
    </>
  );
};

export default IntroScreen;
