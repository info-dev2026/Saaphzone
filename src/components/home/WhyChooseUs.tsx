"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Factory, Leaf, Clock } from "lucide-react";

const REASONS = [
  { Icon: Cpu, title: "Smart Technology", desc: "AI-driven monitoring and IoT sensors deliver real-time environmental data and predictive alerts.", color: "#38bdf8" },
  { Icon: ShieldCheck, title: "Regulatory Compliance", desc: "Full alignment with CPCB, MoEFCC, and international ISO standards ensures zero legal risk.", color: "#34d399" },
  { Icon: Factory, title: "Industrial Expertise", desc: "Sector-specific solutions built on 15+ years of field experience across 40+ industries.", color: "#a78bfa" },
  { Icon: Leaf, title: "Sustainability Focus", desc: "Every solution is designed to minimise environmental footprint and maximise long-term impact.", color: "#4ade80" },
  { Icon: Clock, title: "24/7 Monitoring", desc: "Round-the-clock remote monitoring with instant alert notifications and dedicated support.", color: "#fb923c" },
];

export default function WhyChooseUs() {
  return (
    <section
      aria-label="Why Choose Saaphzone"
      style={{ padding: "clamp(3.5rem, 7vw, 6rem) 1.25rem", background: "#f8fafc" }}
    >
      <style>{`
        .wcu-card {
          background: white;
          border: 1.5px solid #e2e8f0;
          border-radius: 18px;
          padding: 1.75rem;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .wcu-card:hover {
          border-color: #bfdbfe;
          box-shadow: 0 16px 40px rgba(56,189,248,0.1);
          transform: translateY(-5px);
        }
        .wcu-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(56,189,248,0.03), transparent);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .wcu-card:hover::after { opacity: 1; }

        .wcu-icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.1rem;
          transition: transform 0.25s ease;
        }
        .wcu-card:hover .wcu-icon { transform: scale(1.1) rotate(4deg); }

        @media (max-width: 480px) {
          .wcu-card { padding: 1.25rem !important; border-radius: 14px !important; }
          .wcu-icon { width: 44px !important; height: 44px !important; }
        }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <span style={{ display: "inline-block", background: "rgba(56,189,248,0.1)", color: "#0284c7", fontSize: "0.75rem", fontWeight: 700, padding: "0.35rem 0.9rem", borderRadius: "100px", letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: "0.875rem", fontFamily: "'Plus Jakarta Sans', sans-serif", border: "1px solid rgba(2,132,199,0.2)" }}>
              Our Advantage
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 900, color: "#0f172a", fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.025em", marginBottom: "0.875rem" }}
          >
            Why Choose Saaphzone?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.18 }}
            style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}
          >
            We combine technical excellence with field-proven reliability to deliver clean-tech solutions that last.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
          {REASONS.map(({ Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              className="wcu-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="wcu-icon" style={{ background: `${color}18`, border: `1px solid ${color}33` }}>
                <Icon size={22} color={color} />
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: "0.5rem" }}>{title}</h3>
              <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.65 }}>{desc}</p>
              {/* Accent bottom bar */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${color}, transparent)`, opacity: 0.4 }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
