"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

function RevealWords({ text, baseDelay = 0, stagger = 0.055 }: { text: string; baseDelay?: number; stagger?: number; }) {
  const words = text.split(" ");
  return (
    <span aria-label={text} style={{ display: "inline" }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", lineHeight: "inherit" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.6, delay: baseDelay + i * stagger, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </span>
  );
}

export default function CTABanner() {
  return (
    <section
      aria-label="Call to Action"
      style={{
        background: "linear-gradient(135deg, #020817 0%, #0c1a3a 50%, #071428 100%)",
        padding: "clamp(4rem, 8vw, 7rem) 1.25rem",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(56,189,248,0.1)",
      }}
    >
      <style>{`
        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #0284c7, #0369a1);
          color: white;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          box-shadow: 0 4px 20px rgba(2,132,199,0.35);
          transition: all 0.28s cubic-bezier(0.16,1,0.3,1);
        }
        .cta-btn-primary:hover {
          background: linear-gradient(135deg, #0369a1, #075985);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 32px rgba(2,132,199,0.45);
        }
        .cta-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.8);
          border-radius: 12px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          border: 1.5px solid rgba(255,255,255,0.12);
          transition: all 0.28s cubic-bezier(0.16,1,0.3,1);
        }
        .cta-btn-ghost:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.35);
          transform: translateY(-3px) scale(1.02);
        }

        @media (max-width: 640px) {
          .cta-btn-primary, .cta-btn-ghost {
            width: 100% !important;
            justify-content: center !important;
            padding: 0.875rem 1.5rem !important;
          }
        }
      `}</style>

      {/* BG decoration */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(56,189,248,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.05) 1px, transparent 1px)", backgroundSize: "52px 52px", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.06), transparent)", top: "-200px", right: "5%", pointerEvents: "none", filter: "blur(40px)" }} />
      <div aria-hidden="true" style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(52,211,153,0.05), transparent)", bottom: "-140px", left: "5%", pointerEvents: "none", filter: "blur(40px)" }} />

      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        {/* Animated icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative", marginBottom: "1.75rem" }}
        >
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            style={{ position: "absolute", inset: -12, borderRadius: "28px", border: "2px solid rgba(56,189,248,0.3)" }}
          />
          <div style={{ width: 68, height: 68, borderRadius: "20px", background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>
            🌿
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <span style={{ display: "inline-block", background: "rgba(52,211,153,0.1)", color: "#34d399", fontSize: "0.72rem", fontWeight: 700, padding: "0.35rem 0.9rem", borderRadius: "100px", letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: "1.25rem", fontFamily: "'Plus Jakarta Sans', sans-serif", border: "1px solid rgba(52,211,153,0.25)" }}>
            Get Started Today
          </span>
        </motion.div>

        {/* Headline */}
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.025em", marginBottom: "1rem", lineHeight: 1.15 }}>
          <RevealWords text="Ready to Build a" baseDelay={0.1} stagger={0.06} />
          {" "}
          <span style={{ background: "linear-gradient(90deg, #38bdf8, #34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            <RevealWords text="Greener Future?" baseDelay={0.35} stagger={0.07} />
          </span>
        </h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.65, delay: 0.55 }}
          style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "520px", margin: "0 auto 2.5rem" }}
        >
          Let&apos;s discuss your environmental challenges. Our experts are ready to design a tailored solution for your industry — from site assessment to commissioning.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, delay: 0.7 }}
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem", maxWidth: 480, margin: "0 auto 2.5rem" }}
        >
          <Link href="/contact" id="cta-contact-btn" className="cta-btn-primary">
            Get in Touch <ArrowRight size={18} />
          </Link>
          <Link
            href="#services"
            id="cta-services-btn"
            className="cta-btn-ghost"
            onClick={(e) => { e.preventDefault(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Quick contact */}
        <motion.a
          href="tel:+919818219904"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.85 }}
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.35)", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#38bdf8"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)"; }}
        >
          <Phone size={14} /> +91 98182 19904
        </motion.a>
      </div>
    </section>
  );
}
