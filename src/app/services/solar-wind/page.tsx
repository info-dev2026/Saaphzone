"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sun, Wind, ChevronDown, ChevronUp, ArrowRight, Zap, Leaf, BarChart2, Globe, ShieldCheck, TrendingUp } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const solarSolutions = [
  { title: "Rooftop Solar PV", desc: "On-grid and off-grid rooftop systems for industrial, commercial, and residential applications. Capacities from 10 kWp to 10+ MWp." },
  { title: "Ground-Mounted Utility Solar", desc: "Turnkey utility-scale solar plants with tracker systems, string inverters, and SCADA monitoring." },
  { title: "Floating Solar", desc: "Innovative floating solar installations on water bodies — reducing evaporation and generating clean power simultaneously." },
  { title: "Solar Pumping Systems", desc: "Solar-powered pump systems for agriculture, water supply, and irrigation — eliminating diesel dependency." },
];

const windSolutions = [
  { title: "Small Wind Turbines", desc: "1 kW to 100 kW small wind turbines for industrial premises, remote sites, and hybrid systems." },
  { title: "Large Wind Farms", desc: "MW-scale wind energy projects with site assessment, turbine supply, civil works, and grid connectivity." },
  { title: "Hybrid Wind-Solar", desc: "Integrated wind-solar hybrid systems providing complementary generation profiles for higher plant load factors." },
];

const impactStats = [
  { num: "85 MW", label: "Renewable Capacity Installed" },
  { num: "120,000 T", label: "CO₂ Avoided Annually" },
  { num: "200+", label: "Solar & Wind Projects" },
  { num: "25 Years", label: "System Design Life" },
];

const roiPoints = [
  { icon: TrendingUp, title: "25% IRR", desc: "Typical internal rate of return on industrial solar projects over a 25-year lifecycle." },
  { icon: Zap, title: "₹0 Fuel Cost", desc: "Zero variable cost energy once the plant is commissioned — free electricity from sunlight and wind." },
  { icon: ShieldCheck, title: "Performance Guarantee", desc: "P90 yield guarantee with 10-year workmanship warranty and 25-year module performance warranty." },
  { icon: BarChart2, title: "5-7 Year Payback", desc: "Most grid-connected industrial solar installations recover capital investment within 5–7 years." },
  { icon: Globe, title: "Carbon Credits", desc: "Verified Emission Reductions (VERs) and RECs that can be monetised for additional revenue." },
  { icon: Leaf, title: "ESG Compliance", desc: "Meet corporate sustainability targets with verified renewable energy generation data." },
];

const faqs = [
  { q: "What is the typical ROI for a solar plant?", a: "Industrial grid-connected solar plants typically deliver 20–28% IRR with a payback period of 5–7 years, depending on location, tariff structure, and financing." },
  { q: "Do you handle the grid connection process?", a: "Yes — we manage the complete grid connectivity process including DISCOM approvals, metering agreements, net metering applications, and commissioning." },
  { q: "Can solar and wind be combined with BESS?", a: "Absolutely. Our hybrid solar-wind-BESS systems provide 24/7 renewable power by combining complementary generation profiles with intelligent battery storage." },
  { q: "What O&M services do you provide?", a: "We offer comprehensive AMC packages including panel cleaning, inverter health monitoring, vegetation management, performance reporting, and on-site corrective maintenance." },
  { q: "Which states do you operate in?", a: "We operate pan-India with active projects across Rajasthan, Gujarat, Maharashtra, UP, MP, Andhra Pradesh, Telangana, Karnataka, and Tamil Nadu." },
];

export default function SolarWindPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div style={{ paddingTop: "80px" }}>
      <style>{`
        @media (max-width: 768px) {
          .sw2-hero-section { padding: clamp(2rem, 6vw, 3.5rem) 1.25rem clamp(2rem, 5vw, 3rem) !important; }
          .sw2-hero-h1 { font-size: clamp(1.6rem, 5vw, 2.25rem) !important; }
          .sw2-hero-p { font-size: 1rem !important; }
          .sw2-hero-btns { flex-direction: column !important; }
          .sw2-hero-btns a { width: 100% !important; justify-content: center !important; }
          .sw2-content-section { padding: clamp(2.5rem, 6vw, 4rem) 1.25rem !important; }
        }
      `}</style>
      {/* HERO */}
      <section className="sw2-hero-section" style={{ background: "linear-gradient(145deg,#f8faff 0%,#eff6ff 60%,#dbeafe 100%)", padding: "5rem 1.5rem 4rem", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle,rgba(29,78,216,.07) 1px,transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(29,78,216,.08)", border: "1px solid rgba(29,78,216,.2)", borderRadius: "100px", padding: "0.375rem 0.875rem", marginBottom: "1.25rem" }}>
              <Sun size={14} color="#1d4ed8" />
              <span style={{ fontSize: "0.825rem", fontWeight: 600, color: "#1d4ed8", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Our Services</span>
            </div>
            <h1 className="sw2-hero-h1" style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", letterSpacing: "-0.02em", maxWidth: 720, marginBottom: "1.25rem" }}>
              Solar & Wind Energy Solutions
            </h1>
            <p className="sw2-hero-p" style={{ fontSize: "1.125rem", color: "#475569", lineHeight: 1.75, maxWidth: 640, marginBottom: "2rem" }}>
              Turnkey solar PV, wind turbine, and hybrid renewable energy plants engineered for maximum yield, long-term reliability, and exceptional ROI.
            </p>
            <div className="sw2-hero-btns" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", background: "#1d4ed8", color: "white", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: "0 4px 20px rgba(29,78,216,.3)", transition: "all .25s ease" }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#1e40af"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#1d4ed8"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}>
                Get a Quote <ArrowRight size={18} />
              </Link>
              <Link href="/services/bess" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", background: "white", color: "#1d4ed8", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", border: "1.5px solid #1d4ed8", transition: "all .25s ease" }}>
                Explore BESS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLAR SOLUTIONS */}
      <section className="sw2-content-section" style={{ padding: "5rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ marginBottom: "3rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <Sun size={20} color="#1d4ed8" />
              <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1d4ed8", fontFamily: "'Plus Jakarta Sans',sans-serif", textTransform: "uppercase", letterSpacing: "0.06em" }}>Solar Energy</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Solar PV Solutions</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 580 }}>From rooftop systems to utility-scale solar farms — complete solar solutions for every application.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.5rem" }}>
            {solarSolutions.map((sol, i) => (
              <motion.div key={i} variants={fadeInUp} style={{ background: "linear-gradient(145deg,#f8faff,#eff6ff)", border: "1.5px solid #dbeafe", borderRadius: "14px", padding: "1.75rem", transition: "all .25s ease" }} whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(29,78,216,.12)", borderColor: "#3b82f6" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.875rem" }}>☀️</div>
                <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.5rem" }}>{sol.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.65 }}>{sol.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WIND SOLUTIONS */}
      <section className="sw2-content-section" style={{ padding: "5rem 1.5rem", background: "#f8faff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ marginBottom: "3rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <Wind size={20} color="#1d4ed8" />
              <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1d4ed8", fontFamily: "'Plus Jakarta Sans',sans-serif", textTransform: "uppercase", letterSpacing: "0.06em" }}>Wind Energy</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Wind Energy Solutions</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 580 }}>Harnessing wind power with precision engineering and comprehensive project management.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
            {windSolutions.map((sol, i) => (
              <motion.div key={i} variants={fadeInUp} style={{ background: "white", border: "1.5px solid #e2e8f0", borderRadius: "14px", padding: "1.75rem", transition: "all .25s ease" }} whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(29,78,216,.12)", borderColor: "#3b82f6" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.875rem" }}>💨</div>
                <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.5rem" }}>{sol.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.65 }}>{sol.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ENVIRONMENTAL IMPACT */}
      <section className="sw2-content-section" style={{ padding: "5rem 1.5rem", background: "#1d4ed8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "white", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Our Environmental Impact</h2>
            <p style={{ fontSize: "1.0625rem", color: "#bfdbfe", maxWidth: 520, margin: "0 auto" }}>Measurable clean energy impact across India&apos;s industrial and commercial sectors.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1.5rem" }}>
            {impactStats.map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} style={{ textAlign: "center", padding: "2rem 1rem", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.15)", borderRadius: "16px" }}>
                <p style={{ fontSize: "clamp(2rem,4vw,2.75rem)", fontWeight: 800, color: "white", fontFamily: "'Plus Jakarta Sans',sans-serif", lineHeight: 1, marginBottom: "0.625rem" }}>{stat.num}</p>
                <p style={{ fontSize: "0.9rem", color: "#93c5fd", fontWeight: 500 }}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ROI SECTION */}
      <section className="sw2-content-section" style={{ padding: "5rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Financial & Business Benefits</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 540, margin: "0 auto" }}>Every renewable energy project we deliver is engineered for maximum financial return alongside environmental impact.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.5rem" }}>
            {roiPoints.map((pt, i) => (
              <motion.div key={i} variants={fadeInUp} style={{ display: "flex", gap: "1rem", padding: "1.5rem", background: "#f8faff", border: "1.5px solid #e2e8f0", borderRadius: "12px", transition: "all .25s ease" }} whileHover={{ borderColor: "#3b82f6", background: "#eff6ff" }}>
                <div style={{ width: 44, height: 44, borderRadius: "10px", background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <pt.icon size={20} color="#1d4ed8" />
                </div>
                <div>
                  <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.25rem" }}>{pt.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.6 }}>{pt.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sw2-content-section" style={{ padding: "5rem 1.5rem", background: "#f8faff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b" }}>Common queries about our solar and wind energy services.</p>
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
      <section className="sw2-content-section" style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg,#1e40af 0%,#1d4ed8 50%,#3b82f6 100%)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)", fontWeight: 800, color: "white", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "1rem" }}>Start Your Renewable Energy Journey Today</h2>
            <p style={{ fontSize: "1.0625rem", color: "#bfdbfe", marginBottom: "2rem", lineHeight: 1.7 }}>Get a free solar or wind feasibility assessment from our energy experts.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", background: "white", color: "#1d4ed8", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", transition: "all .25s ease" }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}>
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", background: "transparent", color: "white", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", border: "1.5px solid rgba(255,255,255,.4)", transition: "all .25s ease" }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,.1)"; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}>
                About Saaphzone
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

