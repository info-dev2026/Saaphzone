"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

/* ─── Types ─────────────────────────────────────────────── */
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/* ─── Constants ──────────────────────────────────────────── */
// Set your target launch date here (YYYY-MM-DD)
const LAUNCH_DATE = new Date("2026-08-15T00:00:00");

const PARTICLE_COLORS = [
  "rgba(59,130,246,VAL)",   // blue
  "rgba(16,185,129,VAL)",   // emerald
  "rgba(139,92,246,VAL)",   // violet
  "rgba(14,165,233,VAL)",   // sky
];

/* ─── Helpers ────────────────────────────────────────────── */
function calcTimeLeft(): TimeLeft {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/* ─── Sub-components ─────────────────────────────────────── */
function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div style={{ textAlign: "center", minWidth: 72 }}>
      <div
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 16,
          padding: "18px 20px 12px",
          backdropFilter: "blur(10px)",
          marginBottom: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* shimmer line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background:
              "linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)",
          }}
        />
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "2.4rem",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1,
            display: "block",
            letterSpacing: "-0.03em",
          }}
        >
          {pad(value)}
        </span>
      </div>
      <span
        style={{
          fontSize: "0.7rem",
          fontWeight: 600,
          color: "rgba(255,255,255,0.45)",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ─── Main Page ──────────────────────────────────────────── */
export default function MaintenancePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number | null>(null);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcTimeLeft());
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);

  /* ── Fade-in on mount */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* ── Countdown tick */
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  /* ── Particle canvas */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // spawn particles
    const count = Math.min(Math.floor(window.innerWidth / 14), 80);
    particlesRef.current = Array.from({ length: count }, (_, i) => {
      const colorTemplate =
        PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
      const opacity = 0.12 + Math.random() * 0.22;
      return {
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: 1.5 + Math.random() * 3.5,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.35,
        opacity,
        color: colorTemplate.replace("VAL", String(opacity)),
      };
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pts = particlesRef.current;

      // draw connections
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(59,130,246,${0.07 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // draw dots
      pts.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      animFrameRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  /* ── Email submit */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  /* ─── Render ─────────────────────────────────────────── */
  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes floatY {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-14px); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(0.9); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to   { transform: rotate(0deg); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes blink {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.3; }
        }

        .maint-btn:hover {
          background: rgba(255,255,255,0.18) !important;
          border-color: rgba(255,255,255,0.5) !important;
          transform: translateY(-2px) !important;
        }
        .maint-input:focus {
          outline: none;
          border-color: rgba(99,179,237,0.7) !important;
          background: rgba(255,255,255,0.12) !important;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.15);
        }
        .maint-submit:hover {
          background: linear-gradient(135deg,#3b82f6,#06b6d4) !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(59,130,246,0.45) !important;
        }
      `}</style>

      {/* ── Canvas background ── */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* ── Deep gradient background ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #0f2a5e 0%, #071222 55%, #020a14 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Glowing orbs ── */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: "-15%",
          left: "-10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(29,78,216,0.18) 0%,transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          bottom: "-20%",
          right: "-8%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(16,185,129,0.12) 0%,transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* ── Page wrapper ── */}
      <main
        role="main"
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 1.5rem",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.7s ease",
        }}
      >
        <div
          style={{
            maxWidth: 720,
            width: "100%",
            textAlign: "center",
          }}
        >
          {/* ── Logo ── */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2.5rem",
              animation: "fadeSlideUp 0.6s ease both",
              animationDelay: "0.1s",
            }}
          >
            <Image
              src="/Saaphzone logo.png"
              alt="Saaphzone Technologies"
              width={80}
              height={80}
              style={{ objectFit: "contain", filter: "drop-shadow(0 0 18px rgba(59,130,246,0.5))" }}
              priority
            />
          </div>

          {/* ── Animated gear/ring icon ── */}
          <div
            style={{
              position: "relative",
              width: 110,
              height: 110,
              margin: "0 auto 2.5rem",
              animation: "floatY 4s ease-in-out infinite",
            }}
          >
            {/* outer ring */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "2px solid rgba(59,130,246,0.35)",
                animation: "spin-slow 12s linear infinite",
              }}
            />
            {/* dashed ring */}
            <div
              style={{
                position: "absolute",
                inset: 10,
                borderRadius: "50%",
                border: "2px dashed rgba(16,185,129,0.3)",
                animation: "spin-reverse 8s linear infinite",
              }}
            />
            {/* pulse ring */}
            <div
              style={{
                position: "absolute",
                inset: "20%",
                borderRadius: "50%",
                border: "2px solid rgba(59,130,246,0.6)",
                animation: "pulse-ring 2.5s ease-out infinite",
              }}
            />
            {/* centre icon */}
            <div
              style={{
                position: "absolute",
                inset: "50%",
                transform: "translate(-50%,-50%)",
                width: 54,
                height: 54,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg,rgba(29,78,216,0.5),rgba(16,185,129,0.4))",
                border: "1px solid rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(6px)",
              }}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
          </div>

          {/* ── Badge ── */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 999,
              background: "rgba(59,130,246,0.12)",
              border: "1px solid rgba(59,130,246,0.3)",
              marginBottom: "1.5rem",
              animation: "fadeSlideUp 0.6s ease both",
              animationDelay: "0.2s",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#10b981",
                display: "inline-block",
                animation: "blink 1.8s ease infinite",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "rgba(147,197,253,0.9)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Scheduled Maintenance
            </span>
          </div>

          {/* ── Headline ── */}
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(2rem, 5.5vw, 3.4rem)",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              marginBottom: "1.25rem",
              animation: "fadeSlideUp 0.6s ease both",
              animationDelay: "0.3s",
            }}
          >
            We&rsquo;re Upgrading{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #60a5fa 0%, #34d399 50%, #60a5fa 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 3s linear infinite",
              }}
            >
              Our Platform
            </span>
          </h1>

          {/* ── Sub-copy ── */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.75,
              maxWidth: 540,
              margin: "0 auto 2.75rem",
              animation: "fadeSlideUp 0.6s ease both",
              animationDelay: "0.4s",
            }}
          >
            Saaphzone Technologies is currently undergoing scheduled maintenance
            to bring you a better, faster, and more powerful experience.
            We&rsquo;ll be back online shortly.
          </p>

          {/* ── Countdown ── */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "clamp(0.75rem, 2vw, 1.5rem)",
              marginBottom: "3rem",
              animation: "fadeSlideUp 0.6s ease both",
              animationDelay: "0.5s",
              flexWrap: "wrap",
            }}
          >
            <CountdownUnit value={timeLeft.days} label="Days" />
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "2.4rem",
                fontWeight: 800,
                color: "rgba(255,255,255,0.25)",
                alignSelf: "center",
                paddingBottom: 28,
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              :
            </div>
            <CountdownUnit value={timeLeft.hours} label="Hours" />
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "2.4rem",
                fontWeight: 800,
                color: "rgba(255,255,255,0.25)",
                alignSelf: "center",
                paddingBottom: 28,
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              :
            </div>
            <CountdownUnit value={timeLeft.minutes} label="Minutes" />
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "2.4rem",
                fontWeight: 800,
                color: "rgba(255,255,255,0.25)",
                alignSelf: "center",
                paddingBottom: 28,
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              :
            </div>
            <CountdownUnit value={timeLeft.seconds} label="Seconds" />
          </div>

          {/* ── Divider ── */}
          <div
            style={{
              width: "100%",
              height: 1,
              background:
                "linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)",
              marginBottom: "2.5rem",
              animation: "fadeSlideUp 0.6s ease both",
              animationDelay: "0.55s",
            }}
            aria-hidden="true"
          />

          {/* ── Email form ── */}
          <div
            style={{
              animation: "fadeSlideUp 0.6s ease both",
              animationDelay: "0.6s",
            }}
          >
            {!submitted ? (
              <>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Get notified the moment we&rsquo;re back online
                </p>
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    maxWidth: 440,
                    margin: "0 auto",
                    flexWrap: "wrap",
                  }}
                  noValidate
                >
                  <input
                    id="maint-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="maint-input"
                    style={{
                      flex: 1,
                      minWidth: 0,
                      padding: "0.75rem 1rem",
                      borderRadius: 10,
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(255,255,255,0.07)",
                      color: "#fff",
                      fontSize: "0.9rem",
                      fontFamily: "'Inter', sans-serif",
                      transition: "all 0.2s",
                    }}
                    aria-label="Email address for launch notification"
                  />
                  <button
                    type="submit"
                    className="maint-submit"
                    style={{
                      padding: "0.75rem 1.5rem",
                      borderRadius: 10,
                      border: "none",
                      background:
                        "linear-gradient(135deg,#1d4ed8,#0ea5e9)",
                      color: "#fff",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Notify Me
                  </button>
                </form>
              </>
            ) : (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "0.875rem 1.75rem",
                  borderRadius: 12,
                  background: "rgba(16,185,129,0.12)",
                  border: "1px solid rgba(16,185,129,0.3)",
                }}
                role="status"
                aria-live="polite"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span
                  style={{
                    color: "#34d399",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                  }}
                >
                  You&rsquo;re on the list! We&rsquo;ll notify you when we&rsquo;re back.
                </span>
              </div>
            )}
          </div>

          {/* ── Contact links ── */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.25rem",
              marginTop: "3rem",
              flexWrap: "wrap",
              animation: "fadeSlideUp 0.6s ease both",
              animationDelay: "0.7s",
            }}
          >
            <a
              href="mailto:sales@saaphzone.com"
              className="maint-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "0.6rem 1.1rem",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                transition: "all 0.2s",
              }}
              aria-label="Email Saaphzone"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              sales@saaphzone.com
            </a>
            <a
              href="tel:+919818219904"
              className="maint-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "0.6rem 1.1rem",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                transition: "all 0.2s",
              }}
              aria-label="Call Saaphzone"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5.12 2 2 0 0 1 3.58 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.3a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 18z" />
              </svg>
              +91 98182 19904
            </a>
          </div>

          {/* ── Footer note ── */}
          <p
            style={{
              marginTop: "3rem",
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.2)",
              fontFamily: "'Inter', sans-serif",
              animation: "fadeSlideUp 0.6s ease both",
              animationDelay: "0.8s",
            }}
          >
            © {new Date().getFullYear()} Saaphzone Technologies Pvt. Ltd. · Gurugram, Haryana, India
          </p>
        </div>
      </main>
    </>
  );
}
