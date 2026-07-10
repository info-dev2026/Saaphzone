"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Wind, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, BarChart2, Filter, Droplets, Gauge, Activity } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const systemTypes = [
  { icon: Filter, title: "Bag Filters & ESP", desc: "High-efficiency electrostatic precipitators and pulse-jet bag filters for fine particulate capture from furnaces, kilns, and boilers." },
  { icon: Droplets, title: "Wet Scrubbers", desc: "Gas-phase and liquid-phase scrubbing systems to remove SO₂, HCl, HF, and other acidic gaseous pollutants from industrial exhaust streams." },
  { icon: Wind, title: "Dust Collectors", desc: "Cyclone separators, inertial dust collectors, and modular dust suppression systems for material handling, crushing, and mining operations." },
  { icon: Activity, title: "Catalytic Converters", desc: "SCR and SNCR systems for NOₓ reduction in thermal power plants, waste incinerators, and cement kilns." },
  { icon: Gauge, title: "CEMS Integration", desc: "Continuous Emission Monitoring Systems (CEMS) for real-time stack data, CPCB portal integration, and compliance reporting." },
  { icon: BarChart2, title: "Ambient Air Monitoring", desc: "Fixed and mobile air quality monitoring stations for PM2.5, PM10, SO₂, NOₓ, CO measurement and reporting." },
  { icon: Activity, title: "SPM (Dust Monitor)", desc: "Suspended Particulate Matter (SPM) dust monitors for continuous real-time measurement of ambient and industrial fugitive dust emissions." },
];

const complianceFeatures = [
  "Compliant with Environment Protection Act, 1986",
  "CPCB & SPCB approved emission standards",
  "Real-time data transmission to CPCB Pradushan portal",
  "ISO 9001:2015 certified processes",
  "Stack testing and periodic monitoring support",
  "Third-party audit and certification assistance",
];

const faqs = [
  { q: "What pollutants can your systems control?", a: "Our systems handle particulate matter (PM2.5, PM10), SO₂, NOₓ, CO, HCl, HF, VOCs, and heavy metal emissions — covering the full spectrum of industrial air pollutants." },
  { q: "Do you provide CEMS (Continuous Emission Monitoring)?", a: "Yes. We supply, install, calibrate, and maintain CEMS systems with direct integration to the CPCB Central Pollution Control Board monitoring portal." },
  { q: "Can existing systems be retrofitted?", a: "Absolutely. Our engineers specialise in retrofitting air pollution control equipment to existing industrial setups with minimal production downtime." },
  { q: "What efficiency levels can you achieve?", a: "Our bag filter and ESP systems achieve particulate collection efficiencies of 99.5% or higher, consistently meeting CPCB emission norms." },
  { q: "Which industries do you serve?", a: "We serve cement, steel, aluminium, power, chemicals, pharmaceuticals, textiles, food processing, and many other industrial sectors." },
];

export default function AirPollutionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div style={{ paddingTop: "80px" }}>
      <style>{`
        @media (max-width: 768px) {
          .ap-hero-section { padding: clamp(2rem, 6vw, 3.5rem) 1.25rem clamp(2rem, 5vw, 3rem) !important; }
          .ap-hero-h1 { font-size: clamp(1.6rem, 5vw, 2.25rem) !important; }
          .ap-hero-p { font-size: 1rem !important; }
          .ap-hero-btns { flex-direction: column !important; }
          .ap-hero-btns a { width: 100% !important; justify-content: center !important; }
          .ap-content-section { padding: clamp(2.5rem, 6vw, 4rem) 1.25rem !important; }
        }
      `}</style>
      {/* HERO */}
      <section className="ap-hero-section" style={{ background: "linear-gradient(145deg,#f8faff 0%,#eff6ff 60%,#dbeafe 100%)", padding: "5rem 1.5rem 4rem", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle,rgba(29,78,216,.07) 1px,transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(29,78,216,.08)", border: "1px solid rgba(29,78,216,.2)", borderRadius: "100px", padding: "0.375rem 0.875rem", marginBottom: "1.25rem" }}>
              <Wind size={14} color="#1d4ed8" />
              <span style={{ fontSize: "0.825rem", fontWeight: 600, color: "#1d4ed8", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Our Services</span>
            </div>
            <h1 className="ap-hero-h1" style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", letterSpacing: "-0.02em", maxWidth: 700, marginBottom: "1.25rem" }}>
              Air Pollution System
            </h1>
            <p className="ap-hero-p" style={{ fontSize: "1.125rem", color: "#475569", lineHeight: 1.75, maxWidth: 620, marginBottom: "2rem" }}>
              Advanced industrial air pollution control — filtration, scrubbing, dust collection, and continuous emission monitoring systems that bring your emissions below every regulatory limit.
            </p>
            <div className="ap-hero-btns" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", background: "#1d4ed8", color: "white", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: "0 4px 20px rgba(29,78,216,.3)", transition: "all .25s ease" }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#1e40af"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#1d4ed8"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}>
                Get a Quote <ArrowRight size={18} />
              </Link>
              <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", background: "white", color: "#1d4ed8", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", border: "1.5px solid #1d4ed8", transition: "all .25s ease" }}>
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SYSTEM TYPES */}
      <section className="ap-content-section" style={{ padding: "5rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Air Pollution Control Technologies</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 580, margin: "0 auto" }}>Industry-proven technologies tailored to your emission profile, stack parameters, and compliance requirements.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: "1.5rem" }}>
            {systemTypes.map((item, i) => (
              <motion.div key={i} variants={fadeInUp} style={{ background: "white", border: "1.5px solid #e2e8f0", borderRadius: "14px", padding: "1.75rem", transition: "all .25s ease" }} whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(29,78,216,.12)", borderColor: "#3b82f6" }}>
                <div style={{ width: 48, height: 48, borderRadius: "12px", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                  <item.icon size={22} color="#1d4ed8" />
                </div>
                <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.65 }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EMISSION MONITORING */}
      <section className="ap-content-section" style={{ padding: "5rem 1.5rem", background: "#f8faff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="two-col-grid">
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "1rem" }}>Real-Time Emission Monitoring</h2>
            <p style={{ fontSize: "1.0625rem", color: "#475569", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Our CEMS (Continuous Emission Monitoring System) provides live stack data for particulates, SO₂, NOₓ, CO, and more — with direct integration to the CPCB Pradushan portal and automated compliance reporting.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["24/7 real-time monitoring dashboard", "Automated data transmission to CPCB portal", "SMS/Email alerts on limit breaches", "Monthly & annual compliance reports", "Remote diagnostics and calibration support"].map((pt, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                  <ShieldCheck size={18} color="#1d4ed8" style={{ marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.55 }}>{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ background: "white", border: "1.5px solid #e2e8f0", borderRadius: "16px", padding: "2rem", boxShadow: "0 8px 32px rgba(29,78,216,.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", animation: "pulse 2s infinite" }} />
                <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#64748b", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>LIVE MONITORING DASHBOARD</span>
              </div>
              {[
                { label: "PM 2.5", value: "24 μg/m³", status: "✓ Safe", bar: 24 },
                { label: "SO₂", value: "18 ppm", status: "✓ Compliant", bar: 18 },
                { label: "NOₓ", value: "62 ppm", status: "✓ Within Limit", bar: 62 },
                { label: "CO", value: "45 ppm", status: "✓ Safe", bar: 45 },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: "1.25rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.375rem" }}>
                    <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#374151" }}>{item.label}</span>
                    <span style={{ fontSize: "0.8rem", fontWeight: 500, color: "#22c55e" }}>{item.status}</span>
                  </div>
                  <div style={{ background: "#f1f5f9", borderRadius: "4px", height: "6px", overflow: "hidden" }}>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${item.bar}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.15 }} style={{ height: "100%", background: "linear-gradient(90deg,#1d4ed8,#3b82f6)", borderRadius: "4px" }} />
                  </div>
                  <span style={{ fontSize: "0.8rem", color: "#64748b" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <style>{`.two-col-grid { grid-template-columns: 1fr 1fr; } @media(max-width:768px){.two-col-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* COMPLIANCE */}
      <section className="ap-content-section" style={{ padding: "5rem 1.5rem", background: "#1d4ed8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "white", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Compliance & Regulatory Support</h2>
            <p style={{ fontSize: "1.0625rem", color: "#bfdbfe", maxWidth: 520, margin: "0 auto" }}>We handle the full compliance lifecycle — from design to documentation to audit support.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1rem" }}>
            {complianceFeatures.map((feat, i) => (
              <motion.div key={i} variants={fadeInUp} style={{ display: "flex", alignItems: "center", gap: "0.875rem", padding: "1.125rem 1.25rem", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.15)", borderRadius: "10px" }}>
                <ShieldCheck size={20} color="#93c5fd" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: "0.9rem", color: "white", fontWeight: 500 }}>{feat}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CASE STUDY SNIPPET */}
      <section className="ap-content-section" style={{ padding: "5rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ background: "linear-gradient(135deg,#eff6ff 0%,#dbeafe 100%)", border: "1.5px solid #bfdbfe", borderRadius: "20px", padding: "2.5rem", position: "relative", overflow: "hidden" }}>
            <div aria-hidden="true" style={{ position: "absolute", top: "-20px", right: "-20px", width: 120, height: 120, borderRadius: "50%", background: "rgba(29,78,216,.06)" }} />
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#dbeafe", borderRadius: "100px", padding: "0.375rem 0.875rem", marginBottom: "1rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1d4ed8", fontFamily: "'Plus Jakarta Sans',sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>Case Study</span>
            </div>
            <h3 style={{ fontSize: "1.375rem", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Dust Suppression System — Cement Plant, Rajasthan</h3>
            <p style={{ fontSize: "0.9875rem", color: "#475569", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Installed a multi-stage ESP and wet scrubber system across 4 production lines at a 3,000 TPD cement plant. The project delivered a 94% reduction in particulate matter emissions, bringing PM levels from 320 mg/Nm³ down to 18 mg/Nm³ — well within CPCB norms of 30 mg/Nm³.
            </p>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              {[{ num: "94%", label: "PM Reduction" }, { num: "4", label: "Production Lines" }, { num: "18 mg/Nm³", label: "Final Emission Level" }].map(({ num, label }) => (
                <div key={label}>
                  <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1d4ed8", fontFamily: "'Plus Jakarta Sans',sans-serif", lineHeight: 1, marginBottom: "0.2rem" }}>{num}</p>
                  <p style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 500 }}>{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ap-content-section" style={{ padding: "5rem 1.5rem", background: "#f8faff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b" }}>Common queries about our air pollution control services.</p>
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} style={{ border: "1.5px solid", borderColor: openFaq === i ? "#3b82f6" : "#e2e8f0", borderRadius: "12px", overflow: "hidden", transition: "border-color .2s", background: "white" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem", background: openFaq === i ? "#eff6ff" : "white", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem", transition: "background .2s" }}>
                  <span style={{ fontSize: "0.9875rem", fontWeight: 600, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} color="#1d4ed8" /> : <ChevronDown size={18} color="#64748b" />}
                </button>
                {openFaq === i && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} style={{ padding: "0 1.5rem 1.25rem", background: "#eff6ff" }}>
                    <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.7 }}>{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ap-content-section" style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg,#1e40af 0%,#1d4ed8 50%,#3b82f6 100%)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)", fontWeight: 800, color: "white", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "1rem" }}>Clean Air. Full Compliance. Zero Compromise.</h2>
            <p style={{ fontSize: "1.0625rem", color: "#bfdbfe", marginBottom: "2rem", lineHeight: 1.7 }}>Connect with our air pollution control specialists for a site assessment and emission audit.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", background: "white", color: "#1d4ed8", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", transition: "all .25s ease" }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}>
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link href="/services/bess" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", background: "transparent", color: "white", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", border: "1.5px solid rgba(255,255,255,.4)", transition: "all .25s ease" }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,.1)"; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}>
                Explore BESS Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

