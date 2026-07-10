"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Zap } from "lucide-react";
import { useRef } from "react";

function SplitWords({
  text, baseDelay = 0, stagger = 0.06, className, style,
}: { text: string; baseDelay?: number; stagger?: number; className?: string; style?: React.CSSProperties; }) {
  const words = text.split(" ");
  return (
    <span className={className} style={{ display: "inline", ...style }} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline" }}>
          <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", lineHeight: "inherit" }}>
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, delay: baseDelay + i * stagger, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(145deg, #020817 0%, #0c1a3a 45%, #0a2640 75%, #071428 100%)",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

        .hero-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-illustration { display: none !important; }
        }
        @media (max-width: 768px) {
          .hero-btn-primary, .hero-btn-ghost {
            padding: 0.8rem 1.4rem !important;
            font-size: 0.9375rem !important;
            width: 100%;
            justify-content: center;
          }
          .hero-stat-divider { display: none !important; }
        }
        @media (max-width: 480px) {
          .hero-badge { font-size: 0.68rem !important; padding: 0.3rem 0.75rem !important; }
        }

        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          animation: heroOrbDrift 10s ease-in-out infinite alternate;
        }
        @keyframes heroOrbDrift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(25px, -35px) scale(1.1); }
        }

        .hero-grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(56,189,248,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.05) 1px, transparent 1px);
          background-size: 52px 52px;
          pointer-events: none;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(56,189,248,0.1);
          border: 1px solid rgba(56,189,248,0.28);
          padding: 0.35rem 0.9rem;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.09em;
          color: #38bdf8;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .hero-pulse {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 0 0 rgba(56,189,248,0.5);
          animation: heroPulse 2s infinite;
        }
        @keyframes heroPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(56,189,248,0.5); }
          50%      { box-shadow: 0 0 0 8px rgba(56,189,248,0); }
        }

        .hero-stat-divider {
          width: 1px;
          height: 36px;
          background: rgba(56,189,248,0.2);
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 1.75rem;
          background: linear-gradient(135deg, #0284c7, #0369a1);
          color: white;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          box-shadow: 0 4px 20px rgba(2,132,199,0.35);
          transition: all 0.28s cubic-bezier(0.16,1,0.3,1);
        }
        .hero-btn-primary:hover {
          background: linear-gradient(135deg, #0369a1, #075985);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 32px rgba(2,132,199,0.45);
        }

        .hero-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 1.75rem;
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.85);
          border-radius: 10px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          border: 1.5px solid rgba(255,255,255,0.15);
          transition: all 0.28s cubic-bezier(0.16,1,0.3,1);
        }
        .hero-btn-ghost:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(255,255,255,0.4);
          transform: translateY(-3px) scale(1.02);
        }
      `}</style>

      {/* Animated orbs */}
      <motion.div aria-hidden="true" style={{ position: "absolute", inset: 0, y: bgY, pointerEvents: "none" }}>
        <div className="hero-orb" style={{ width: 600, height: 600, background: "rgba(56,189,248,0.07)", top: "-180px", right: "-100px" }} />
        <div className="hero-orb" style={{ width: 400, height: 400, background: "rgba(52,211,153,0.05)", bottom: "-120px", left: "-80px", animationDelay: "4s" }} />
        <div className="hero-orb" style={{ width: 200, height: 200, background: "rgba(56,189,248,0.06)", top: "50%", left: "40%", animationDelay: "2s" }} />
      </motion.div>

      {/* Grid overlay */}
      <div className="hero-grid-overlay" aria-hidden="true" />

      {/* Bottom fade */}
      <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "180px", background: "linear-gradient(to top, rgba(2,8,23,0.6), transparent)", pointerEvents: "none" }} />

      {/* Content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "clamp(2rem, 5vw, 4rem) 1.25rem", width: "100%", position: "relative", zIndex: 1 }}>
        <div className="hero-grid" style={{ display: "grid", gap: "4rem", alignItems: "center" }}>

          {/* LEFT */}
          <div>
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="hero-badge">
                <span className="hero-pulse" />
                India&apos;s Leading Clean-Tech Company
              </div>
            </motion.div>

            {/* Headline */}
            <h1 style={{ fontSize: "clamp(2.4rem, 5.2vw, 3.8rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1.5rem", color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.025em" }}>
              <SplitWords text="Innovating for a" baseDelay={0.18} stagger={0.07} />
              {" "}
              <span style={{ background: "linear-gradient(90deg, #38bdf8, #34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                <SplitWords text="Cleaner &" baseDelay={0.42} stagger={0.065} />
              </span>
              {" "}
              <span style={{ background: "linear-gradient(90deg, #34d399, #22c55e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                <SplitWords text="Sustainable" baseDelay={0.52} stagger={0.065} />
              </span>
              {" "}
              <SplitWords text="Tomorrow" baseDelay={0.72} stagger={0.08} />
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "500px" }}
            >
              Saaphzone Technologies delivers advanced environmental solutions — from pollution control to renewable energy systems — engineered for India&apos;s industrial scale.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <Link href="#services" id="hero-explore-btn" className="hero-btn-primary"
                onClick={(e) => { e.preventDefault(); scrollToServices(); }}
              >
                Explore Solutions <ArrowRight size={18} />
              </Link>
              <Link href="/contact" id="hero-contact-btn" className="hero-btn-ghost">
                Contact Us
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25, duration: 0.6 }}
              style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginTop: "3rem", flexWrap: "wrap" }}
            >
              {[
                { num: "350+", label: "Projects" },
                { num: "40+", label: "Industries" },
                { num: "85 MW", label: "Renewable" },
              ].map(({ num, label }, i) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.25 + i * 0.1, duration: 0.45 }}
                  >
                    <p style={{ fontSize: "1.6rem", fontWeight: 900, color: "#38bdf8", fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1, marginBottom: "0.2rem" }}>{num}</p>
                    <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</p>
                  </motion.div>
                  {i < 2 && <div className="hero-stat-divider" />}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="hero-illustration"
            style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}
          >
            <HeroImage />
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem", cursor: "pointer" }}
          onClick={scrollToServices}
        >
          <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", fontWeight: 500, letterSpacing: "0.06em" }}>Scroll to explore</span>
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown size={20} color="rgba(56,189,248,0.5)" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroImage() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 520 }}>
      {/* Glow ring behind card */}
      <div style={{ position: "absolute", inset: -2, borderRadius: "26px", background: "linear-gradient(135deg, rgba(56,189,248,0.3), rgba(52,211,153,0.2))", filter: "blur(1px)", zIndex: 0 }} />
      <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 4px 16px rgba(56,189,248,0.15)", zIndex: 1 }}>
        <Image
          src="/hero-cleantech.png"
          alt="Saaphzone clean technology facility with solar panels and wind turbines"
          width={520}
          height={380}
          style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
          priority
        />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "55%", background: "linear-gradient(to top, rgba(2,8,23,0.75), transparent)", pointerEvents: "none" }} />

        {/* Live monitoring pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute", bottom: "1rem", left: "1rem", right: "1rem",
            background: "rgba(2,8,23,0.6)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(56,189,248,0.25)",
            borderRadius: "14px",
            padding: "0.875rem 1rem",
            display: "flex", alignItems: "center", gap: "0.875rem",
          }}
        >
          <div style={{ width: 36, height: 36, borderRadius: "10px", background: "linear-gradient(135deg, #0284c7, #0369a1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Zap size={17} color="white" />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "0.68rem", color: "#38bdf8", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.2rem", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Live Monitoring</p>
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.9)", fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>PM2.5: 24 μg/m³ &nbsp;·&nbsp; Output: 3.2 MW ↑ +4%</p>
          </div>
          <motion.span
            animate={{ opacity: [1, 0.3, 1], scale: [1, 0.85, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", display: "inline-block", boxShadow: "0 0 8px #4ade80", flexShrink: 0 }}
          />
        </motion.div>
      </div>
    </div>
  );
}
