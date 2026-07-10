"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Code, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, Database, LineChart, Cpu, Zap, ShieldCheck } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const benefits = [
  { icon: LineChart, title: "Real-Time Analytics", desc: "Get immediate insights and telemetry alerts when emissions exceed custom thresholds." },
  { icon: ShieldCheck, title: "CPCB Compliance", desc: "Auto-generate regulatory environmental reports aligned with pollution board standards." },
  { icon: Cpu, title: "IoT Integrations", desc: "Connect hardware monitoring sensors seamlessly using MQTT and secure HTTP protocols." },
  { icon: Database, title: "Secure Storage", desc: "Enterprise-grade encryption and ISO-compliant database structures for data protection." },
  { icon: Code, title: "Custom Dashboards", desc: "Tailored visual widgets and charts for operations, compliance, and executives." },
  { icon: Zap, title: "Rapid Deployment", desc: "Pre-built modules for standard monitoring devices to get up and running faster." },
];

const workflow = [
  { step: "01", title: "Discovery & Audits", desc: "Understanding telemetry endpoints, data frequency, and ESG goals." },
  { step: "02", title: "Database & API Design", desc: "Creating optimized schemas for time-series sensor data and secure endpoints." },
  { step: "03", title: "Dashboard Dev", desc: "Building intuitive, responsive frontend interfaces with charts and alerts." },
  { step: "04", title: "Hardware Binding", desc: "Calibrating actual telemetry hardware with our software APIs." },
  { step: "05", title: "Deploy & Support", desc: "Launching on secure cloud infrastructure with 24/7 reliability monitoring." },
];


const faqs = [
  { q: "Can your software connect with our existing hardware monitoring sensors?", a: "Yes. Our software solutions use industry-standard communication protocols like MQTT, CoAP, and HTTP APIs, allowing us to connect with almost any standard telemetry sensor." },
  { q: "Does the platform support multi-location tracking?", a: "Absolutely. You can track emissions, waste disposal, and energy generation across multiple factories, offices, or municipalities from a single unified enterprise portal." },
  { q: "How secure is our industrial environmental data?", a: "We implement enterprise-grade security including end-to-end encryption, role-based access control (RBAC), and secure cloud servers (AWS/Azure) conforming to ISO 27001 standards." },
  { q: "Do you offer white-labeled dashboards?", a: "Yes. We can customize the user interface with your corporate branding and logo, and host it on your custom domain." },
  { q: "What is the typical software development timeline?", a: "A standard telemetry dashboard or custom ESG reporting portal takes between 8 to 12 weeks to design, develop, and integrate. We also offer pre-built modules for quicker setups." },
];

export default function SoftwareDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div style={{ paddingTop: "80px" }}>
      <style>{`
        @media (max-width: 768px) {
          .sd-hero-section { padding: clamp(2rem, 6vw, 3.5rem) 1.25rem clamp(2rem, 5vw, 3rem) !important; }
          .sd-hero-h1 { font-size: clamp(1.6rem, 5vw, 2.25rem) !important; }
          .sd-hero-p { font-size: 1rem !important; }
          .sd-hero-btns { flex-direction: column !important; }
          .sd-hero-btns a { width: 100% !important; justify-content: center !important; }
          .sd-content-section { padding: clamp(2.5rem, 6vw, 4rem) 1.25rem !important; }
        }
      `}</style>
      {/* HERO */}
      <section className="sd-hero-section" style={{ background: "linear-gradient(145deg,#f8faff 0%,#eff6ff 60%,#dbeafe 100%)", padding: "5rem 1.5rem 4rem", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle,rgba(29,78,216,.07) 1px,transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(29,78,216,.08)", border: "1px solid rgba(29,78,216,.2)", borderRadius: "100px", padding: "0.375rem 0.875rem", marginBottom: "1.25rem" }}>
              <Code size={14} color="#1d4ed8" />
              <span style={{ fontSize: "0.825rem", fontWeight: 600, color: "#1d4ed8", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Our Services</span>
            </div>
            <h1 className="sd-hero-h1" style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", letterSpacing: "-0.02em", maxWidth: 680, marginBottom: "1.25rem" }}>
              Software Development
            </h1>
            <p className="sd-hero-p" style={{ fontSize: "1.125rem", color: "#475569", lineHeight: 1.75, maxWidth: 600, marginBottom: "2rem" }}>
              Custom environmental tracking software, IoT telemetry integration, and enterprise compliance reporting dashboards tailored for modern green enterprises and smart cities.
            </p>
            <div className="sd-hero-btns" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
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

      {/* SOLUTIONS OVERVIEW */}
      <section className="sd-content-section" style={{ padding: "5rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Our Software & IoT Solutions</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 580, margin: "0 auto" }}>Advanced telemetry platforms and ESG portals designed to bring digital transformation to sustainability projects.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
            {[
              { title: "Environmental Dashboards (EMS)", desc: "Real-time carbon footprint calculators, emissions logs, and sustainability reporting dashboards.", icon: "📊" },
              { title: "IoT Telemetry Systems", desc: "Connect remote ambient air, noise, and water sensors to central cloud networks for seamless reporting.", icon: "📡" },
              { title: "Regulatory Compliance Portals", desc: "Auto-generate files and telemetry logs formatted for CPCB and State Pollution Control Boards.", icon: "📋" },
              { title: "Smart Grid Integration", desc: "Control interfaces and data telemetry for managing solar/wind farms and battery storage (BESS) systems.", icon: "⚡" },
              { title: "Waste & Energy Analytics", desc: "AI-powered models to predict municipal waste accumulation and optimize solar storage charging cycles.", icon: "🤖" },
              { title: "Enterprise ESG Portals", desc: "Consolidated, audit-ready portals tracking Environmental, Social, and Governance metrics across all locations.", icon: "🏢" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} style={{ background: "white", border: "1.5px solid #e2e8f0", borderRadius: "14px", padding: "1.75rem", transition: "all .25s ease", cursor: "default" }} whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(29,78,216,.12)", borderColor: "#3b82f6" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{item.icon}</div>
                <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.65 }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="sd-content-section" style={{ padding: "5rem 1.5rem", background: "#f8faff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Our Development Process</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 520, margin: "0 auto" }}>A structured methodology to ensure high-performance telemetry and enterprise grade security.</p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "2rem" }}>
            {workflow.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} style={{ textAlign: "center" }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#1d4ed8", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", margin: "0 auto 1.25rem", boxShadow: "0 4px 16px rgba(29,78,216,.3)" }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="sd-content-section" style={{ padding: "5rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Why Choose Our Software</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 520, margin: "0 auto" }}>Engineered for industrial telemetry, regulatory compliance, and extreme reliability.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.5rem" }}>
            {benefits.map((b, i) => (
              <motion.div key={i} variants={fadeInUp} style={{ display: "flex", gap: "1rem", padding: "1.5rem", background: "#f8faff", border: "1.5px solid #e2e8f0", borderRadius: "12px", transition: "all .25s ease" }} whileHover={{ borderColor: "#3b82f6", background: "#eff6ff" }}>
                <div style={{ width: 44, height: 44, borderRadius: "10px", background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <b.icon size={20} color="#1d4ed8" />
                </div>
                <div>
                  <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.25rem" }}>{b.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "#64748b", lineHeight: 1.6 }}>{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sd-content-section" style={{ padding: "5rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b" }}>Common queries about our software development and IoT telemetry platforms.</p>
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} style={{ border: "1.5px solid", borderColor: openFaq === i ? "#3b82f6" : "#e2e8f0", borderRadius: "12px", overflow: "hidden", transition: "border-color .2s" }}>
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

      {/* CTA BANNER */}
      <section className="sd-content-section" style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg,#1e40af 0%,#1d4ed8 50%,#3b82f6 100%)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)", fontWeight: 800, color: "white", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "1rem" }}>Ready to Build Your Environmental Monitoring System?</h2>
            <p style={{ fontSize: "1.0625rem", color: "#bfdbfe", marginBottom: "2rem", lineHeight: 1.7 }}>Talk to our engineers and get a tailored software architecture proposal for your enterprise.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", background: "white", color: "#1d4ed8", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", transition: "all .25s ease" }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}>
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link href="/services/solid-waste" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", background: "transparent", color: "white", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", border: "1.5px solid rgba(255,255,255,.4)", transition: "all .25s ease" }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,.1)"; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}>
                Explore Other Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
