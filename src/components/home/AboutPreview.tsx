"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutPreview() {
  return (
    <section
      aria-label="About Saaphzone"
      style={{
        padding: "clamp(4rem, 8vw, 7rem) 1.25rem",
        background: "linear-gradient(160deg, #020817 0%, #0c1a3a 50%, #071428 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          max-width: 1280px;
          margin: 0 auto;
        }
        @media (max-width: 960px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        @media (max-width: 640px) {
          .about-grid { gap: 2rem !important; }
          .about-stat-card { padding: 1.1rem !important; }
        }

        .about-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        .about-stat-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(56,189,248,0.12);
          border-radius: 16px;
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          transition: border-color 0.25s ease;
        }
        .about-stat-card:hover {
          border-color: rgba(56,189,248,0.3);
        }
        .about-stat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #38bdf8, #34d399, transparent);
        }
      `}</style>

      {/* BG orbs */}
      <div className="about-orb" style={{ width: 500, height: 500, background: "rgba(56,189,248,0.05)", top: -150, right: -100 }} />
      <div className="about-orb" style={{ width: 300, height: 300, background: "rgba(52,211,153,0.04)", bottom: -80, left: -60 }} />

      {/* Grid overlay */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)", backgroundSize: "52px 52px", pointerEvents: "none" }} />

      <div className="about-grid" style={{ position: "relative", zIndex: 1 }}>

        {/* LEFT — Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.25)", padding: "0.35rem 0.9rem", borderRadius: "100px", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.09em", color: "#38bdf8", textTransform: "uppercase", marginBottom: "1.25rem", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Who We Are
          </div>

          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", fontWeight: 900, color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "1.25rem" }}>
            India&apos;s Trusted{" "}
            <span style={{ background: "linear-gradient(90deg, #38bdf8, #34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Clean-Tech Partner
            </span>{" "}
            Since 2018
          </h2>

          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "1rem" }}>
            Saaphzone Technologies is a leading environmental solutions company headquartered in Gurugram, Haryana. We help industries meet regulatory compliance while significantly reducing their environmental footprint.
          </p>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "2rem" }}>
            From cement plants and steel mills to municipalities and solar farms, our solutions span the full spectrum of clean technology — backed by 350+ successful projects.
          </p>

          {/* Checkpoints */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
            {[
              "ISO 9001:2015 Certified",
              "350+ Successful Projects across India",
              "CPCB & MoEFCC Compliant Solutions",
              "Pan-India presence with 40+ Industries served",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <CheckCircle2 size={18} color="#34d399" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Mission / Vision */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
            {[
              { label: "Mission", text: "To make clean technology accessible and practical for every industry in India.", color: "#38bdf8" },
              { label: "Vision", text: "An India where industrial growth and environmental sustainability coexist seamlessly.", color: "#34d399" },
            ].map(({ label, text, color }) => (
              <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: 3, minHeight: 44, borderRadius: "2px", background: color, flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontSize: "0.72rem", fontWeight: 700, color, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: "0.2rem" }}>{label}</p>
                  <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{text}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            id="about-learn-more-btn"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.75rem", background: "linear-gradient(135deg, #0284c7, #0369a1)", color: "white", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "0.9375rem", fontFamily: "'Plus Jakarta Sans', sans-serif", boxShadow: "0 4px 20px rgba(2,132,199,0.3)", transition: "all 0.25s ease" }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 10px 28px rgba(2,132,199,0.45)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 4px 20px rgba(2,132,199,0.3)"; }}
          >
            Learn More About Us <ArrowRight size={17} />
          </Link>
        </motion.div>

        {/* RIGHT — Floating stat cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}
        >
          {[
            { val: "350+", label: "Projects Delivered", icon: "🏗️", color: "#38bdf8" },
            { val: "85 MW", label: "Renewable Capacity", icon: "⚡", color: "#34d399" },
            { val: "40+", label: "Industries Served", icon: "🏭", color: "#a78bfa" },
            { val: "10+", label: "Years Experience", icon: "📅", color: "#fb923c" },
            { val: "100%", label: "CPCB Compliant", icon: "✅", color: "#38bdf8" },
            { val: "24/7", label: "Monitoring & Support", icon: "📡", color: "#34d399" },
          ].map(({ val, label, icon, color }, i) => (
            <motion.div
              key={label}
              className="about-stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{icon}</div>
              <div style={{ fontSize: "1.6rem", fontWeight: 900, color, fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1, marginBottom: "0.3rem" }}>{val}</div>
              <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", fontWeight: 500, lineHeight: 1.4 }}>{label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
