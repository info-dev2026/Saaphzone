"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    category: "Air Pollution Control",
    categoryColor: "#38bdf8",
    title: "Dust Suppression System — Cement Plant, Rajasthan",
    description: "Installed a multi-stage ESP and wet scrubber system, reducing particulate matter by 94% across 4 production lines.",
    image: "/project-cement-plant.png",
    metric: "94% PM Reduction",
  },
  {
    category: "Solid Waste Management",
    categoryColor: "#34d399",
    title: "Waste-to-Energy Plant — Municipal Corporation, UP",
    description: "Designed and commissioned a 15 TPD waste processing facility converting MSW to compost and energy pellets.",
    image: "/project-waste-energy.png",
    metric: "15 TPD Capacity",
  },
  {
    category: "Solar & Wind Energy",
    categoryColor: "#a78bfa",
    title: "5 MW Hybrid Solar-Wind Farm — Gujarat",
    description: "Integrated solar PV array with small wind turbines and BESS for 24/7 renewable power supply to an industrial cluster.",
    image: "/project-solar-wind-farm.png",
    metric: "5 MW Output",
  },
];

export default function Projects() {
  return (
    <section
      aria-label="Featured Projects"
      style={{ padding: "clamp(3.5rem, 7vw, 6rem) 1.25rem", background: "white" }}
    >
      <style>{`
        .project-card {
          background: white;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          overflow: hidden;
          cursor: default;
          transition: border-color 0.25s, box-shadow 0.3s, transform 0.3s;
        }
        .project-card:hover {
          border-color: #bfdbfe;
          box-shadow: 0 20px 52px rgba(56,189,248,0.12);
          transform: translateY(-6px);
        }
        .project-img-inner {
          transition: transform 0.55s cubic-bezier(0.16,1,0.3,1);
        }
        .project-card:hover .project-img-inner { transform: scale(1.06); }
        .project-arrow {
          width: 34px; height: 34px;
          border-radius: 50%;
          background: rgba(56,189,248,0.1);
          border: 1px solid rgba(56,189,248,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .project-card:hover .project-arrow {
          background: #0284c7;
          border-color: #0284c7;
          color: white;
        }

        @media (max-width: 640px) {
          .project-card { border-radius: 16px !important; }
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
            <span style={{ display: "inline-block", background: "#f0fdf4", color: "#16a34a", fontSize: "0.75rem", fontWeight: 700, padding: "0.35rem 0.9rem", borderRadius: "100px", letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: "0.875rem", fontFamily: "'Plus Jakarta Sans', sans-serif", border: "1px solid #bbf7d0" }}>
              Case Studies
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 900, color: "#0f172a", fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.025em" }}
          >
            Featured Projects
          </motion.h2>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {PROJECTS.map(({ category, categoryColor, title, description, image, metric }, i) => (
            <motion.div
              key={title}
              className="project-card"
              initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.62, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Image */}
              <div style={{ position: "relative", width: "100%", height: 210, overflow: "hidden" }}>
                <div className="project-img-inner" style={{ position: "absolute", inset: 0 }}>
                  <Image src={image} alt={title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>

                {/* Gradient */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.5) 0%, transparent 60%)", pointerEvents: "none", zIndex: 1 }} />

                {/* Category badge */}
                <span style={{ position: "absolute", top: "0.75rem", left: "0.75rem", display: "inline-block", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(6px)", color: categoryColor, fontSize: "0.72rem", fontWeight: 700, padding: "0.25rem 0.625rem", borderRadius: "100px", fontFamily: "'Plus Jakarta Sans', sans-serif", zIndex: 2, border: `1px solid ${categoryColor}44` }}>
                  {category}
                </span>

                {/* Metric pill */}
                <span style={{ position: "absolute", bottom: "0.75rem", right: "0.75rem", display: "inline-block", background: `${categoryColor}22`, backdropFilter: "blur(8px)", color: categoryColor, fontSize: "0.75rem", fontWeight: 700, padding: "0.3rem 0.75rem", borderRadius: "100px", fontFamily: "'Plus Jakarta Sans', sans-serif", zIndex: 2, border: `1px solid ${categoryColor}44` }}>
                  {metric}
                </span>
              </div>

              {/* Body */}
              <div style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.625rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.35, flex: 1 }}>{title}</h3>
                  <div className="project-arrow">
                    <ArrowUpRight size={15} color="#38bdf8" />
                  </div>
                </div>
                <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.65 }}>{description}</p>

                {/* Bottom accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  style={{ marginTop: "1.25rem", height: 2, borderRadius: "1px", background: `linear-gradient(90deg, ${categoryColor}, ${categoryColor}22)`, transformOrigin: "left" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
