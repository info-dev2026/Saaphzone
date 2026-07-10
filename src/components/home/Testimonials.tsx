"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  { name: "Anil Mehta", company: "Mehta Steel Industries, Jharkhand", initials: "AM", rating: 5, quote: "Saaphzone's air pollution control system brought our emission levels well within CPCB norms. Their team was professional and efficient from day one — minimal downtime, maximum results." },
  { name: "Priya Nair", company: "GreenBuild Constructions, Kerala", initials: "PN", rating: 5, quote: "The solid waste management solution from Saaphzone has significantly reduced our landfill dependency. Excellent ROI within the first year. Highly recommend their end-to-end service." },
  { name: "Rajesh Gupta", company: "Apex Chemicals Ltd., Gujarat", initials: "RG", rating: 5, quote: "From consultation to commissioning, the BESS project was seamlessly managed. Our energy costs dropped by 30% in the first six months — well ahead of the projected timeline." },
  { name: "Sneha Patel", company: "Suncrest Agro Industries, Maharashtra", initials: "SP", rating: 5, quote: "Our 2 MW solar plant by Saaphzone has been generating clean energy consistently. The live monitoring dashboard gives us full visibility at all times. Outstanding support team." },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<"left" | "right">("right");
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setDir("right");
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5500);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timer.current) clearInterval(timer.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const go = (index: number, direction: "left" | "right") => {
    setDir(direction);
    setActive(index);
    startTimer();
  };
  const prev = () => go((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length, "left");
  const next = () => go((active + 1) % TESTIMONIALS.length, "right");

  return (
    <section
      aria-label="Client Testimonials"
      style={{
        padding: "clamp(3.5rem, 7vw, 6rem) 1.25rem",
        background: "linear-gradient(160deg, #020817 0%, #0c1a3a 60%, #071428 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        .testi-nav-btn {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid rgba(56,189,248,0.2);
          background: rgba(56,189,248,0.06);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #38bdf8;
          transition: all 0.22s ease;
          flex-shrink: 0;
        }
        .testi-nav-btn:hover {
          background: #0284c7;
          color: white;
          border-color: #0284c7;
          transform: scale(1.1);
        }

        @media (max-width: 640px) {
          .testi-nav-btn { width: 38px !important; height: 38px !important; }
        }
      `}</style>

      {/* BG */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)", backgroundSize: "52px 52px", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "rgba(56,189,248,0.05)", top: -150, right: -100, filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span style={{ display: "inline-block", background: "rgba(56,189,248,0.1)", color: "#38bdf8", fontSize: "0.75rem", fontWeight: 700, padding: "0.35rem 0.9rem", borderRadius: "100px", letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: "0.875rem", fontFamily: "'Plus Jakarta Sans', sans-serif", border: "1px solid rgba(56,189,248,0.25)" }}>
              Client Stories
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 900, color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.025em" }}
          >
            What Our Clients Say
          </motion.h2>
        </div>

        {/* Carousel card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: "24px",
            padding: "2.5rem",
            border: "1px solid rgba(56,189,248,0.15)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
            position: "relative",
            minHeight: 260,
            overflow: "hidden",
          }}
        >
          {/* Top accent line */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #38bdf8, #34d399, transparent)" }} />

          {/* Quote icon */}
          <Quote size={48} color="rgba(56,189,248,0.12)" style={{ position: "absolute", top: "1.5rem", left: "1.75rem" }} aria-hidden="true" />

          {/* Progress bar */}
          <motion.div
            key={active + "-bar"}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 5.5, ease: "linear" }}
            style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #38bdf8, #34d399)", transformOrigin: "left" }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: dir === "right" ? 40 : -40, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: dir === "right" ? -40 : 40, filter: "blur(4px)" }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "relative", zIndex: 1 }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem", paddingTop: "1.5rem" }}>
                {Array.from({ length: TESTIMONIALS[active].rating }).map((_, i) => (
                  <Star key={i} size={15} color="#fbbf24" fill="#fbbf24" />
                ))}
              </div>

              <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.8, fontStyle: "italic", marginBottom: "2rem" }}>
                &ldquo;{TESTIMONIALS[active].quote}&rdquo;
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, #0284c7, #0ea5e9)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: "0.875rem", fontFamily: "'Plus Jakarta Sans', sans-serif", flexShrink: 0, boxShadow: "0 4px 14px rgba(2,132,199,0.4)" }}>
                  {TESTIMONIALS[active].initials}
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: "#fff", fontSize: "0.9375rem", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{TESTIMONIALS[active].name}</p>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem" }}>{TESTIMONIALS[active].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Controls */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.25rem", marginTop: "1.75rem" }}>
          <button onClick={prev} aria-label="Previous testimonial" className="testi-nav-btn">
            <ChevronLeft size={19} />
          </button>

          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i, i > active ? "right" : "left")}
                aria-label={`Testimonial ${i + 1}`}
                style={{ width: i === active ? 24 : 8, height: 8, borderRadius: "100px", background: i === active ? "#38bdf8" : "rgba(56,189,248,0.2)", border: "none", cursor: "pointer", transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)", padding: 0 }}
              />
            ))}
          </div>

          <button onClick={next} aria-label="Next testimonial" className="testi-nav-btn">
            <ChevronRight size={19} />
          </button>
        </div>
      </div>
    </section>
  );
}
