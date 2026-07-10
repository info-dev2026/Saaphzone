"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Recycle, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, Factory, Leaf, Zap, FlaskConical, Building2 } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const benefits = [
  { icon: Leaf, title: "Zero Landfill", desc: "Advanced processing ensures near-zero waste reaches landfills." },
  { icon: Zap, title: "Energy Recovery", desc: "Convert organic waste to biogas or energy pellets for power generation." },
  { icon: CheckCircle2, title: "Regulatory Compliance", desc: "Full alignment with CPCB SWM Rules 2016 and state guidelines." },
  { icon: Factory, title: "Industrial Grade", desc: "Scalable systems from 5 TPD to 500+ TPD for any facility size." },
  { icon: FlaskConical, title: "Scientific Processing", desc: "Lab-tested segregation, treatment and safe residue disposal." },
  { icon: Building2, title: "Turnkey Delivery", desc: "Design, supply, install and commission — one responsible partner." },
];

const workflow = [
  { step: "01", title: "Assessment & Audit", desc: "On-site waste characterisation and quantity assessment." },
  { step: "02", title: "System Design", desc: "Custom engineering tailored to waste type, volume and regulations." },
  { step: "03", title: "Supply & Install", desc: "Equipment procurement, civil works and system integration." },
  { step: "04", title: "Commissioning", desc: "Full trial runs, staff training and O&M documentation." },
  { step: "05", title: "Monitoring", desc: "Remote monitoring dashboard and 24/7 after-sales support." },
];

const industries = [
  "Cement & Steel Plants", "Municipal Corporations", "Hotels & Hospitality",
  "Food & Beverage", "Hospitals & Healthcare", "Real Estate & Townships",
  "Chemical Industries", "Educational Campuses",
];

const faqs = [
  { q: "What types of solid waste can you manage?", a: "We handle Municipal Solid Waste (MSW), Industrial Solid Waste, C&D debris, Biomedical waste, and E-waste — with tailored solutions for each category." },
  { q: "What is the minimum capacity you offer?", a: "Our systems start from 5 TPD (Tonnes Per Day) and scale up to 500+ TPD for large municipal or industrial requirements." },
  { q: "Are your systems compliant with CPCB norms?", a: "Yes. All solutions are designed to comply with the Solid Waste Management Rules, 2016, Bio-Medical Waste Rules, and CPCB guidelines." },
  { q: "Do you provide operation and maintenance services?", a: "Absolutely. We offer comprehensive O&M contracts including remote monitoring, preventive maintenance, and on-site technical support." },
  { q: "How long does a typical project take?", a: "Timelines vary from 3 to 12 months depending on capacity and complexity. Small modular systems can be commissioned in under 90 days." },
];

export default function SolidWastePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div style={{ paddingTop: "80px" }}>
      <style>{`
        @media (max-width: 768px) {
          .sw-hero-section { padding: clamp(2rem, 6vw, 3.5rem) 1.25rem clamp(2rem, 5vw, 3rem) !important; }
          .sw-hero-h1 { font-size: clamp(1.6rem, 5vw, 2.25rem) !important; }
          .sw-hero-p { font-size: 1rem !important; }
          .sw-hero-btns { flex-direction: column !important; }
          .sw-hero-btns a { width: 100% !important; justify-content: center !important; }
          .sw-content-section { padding: clamp(2.5rem, 6vw, 4rem) 1.25rem !important; }
        }
      `}</style>
      {/* HERO */}
      <section className="sw-hero-section" style={{ background: "linear-gradient(145deg,#f8faff 0%,#eff6ff 60%,#dbeafe 100%)", padding: "5rem 1.5rem 4rem", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle,rgba(29,78,216,.07) 1px,transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(29,78,216,.08)", border: "1px solid rgba(29,78,216,.2)", borderRadius: "100px", padding: "0.375rem 0.875rem", marginBottom: "1.25rem" }}>
              <Recycle size={14} color="#1d4ed8" />
              <span style={{ fontSize: "0.825rem", fontWeight: 600, color: "#1d4ed8", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>Our Services</span>
            </div>
            <h1 className="sw-hero-h1" style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", letterSpacing: "-0.02em", maxWidth: 680, marginBottom: "1.25rem" }}>
              Solid Waste Management
            </h1>
            <p className="sw-hero-p" style={{ fontSize: "1.125rem", color: "#475569", lineHeight: 1.75, maxWidth: 600, marginBottom: "2rem" }}>
              End-to-end solid waste processing systems — from collection and segregation to treatment and safe disposal — engineered for industries, municipalities and commercial establishments.
            </p>
            <div className="sw-hero-btns" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
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

      {/* SERVICES OVERVIEW */}
      <section className="sw-content-section" style={{ padding: "5rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Our Waste Management Solutions</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 580, margin: "0 auto" }}>Comprehensive systems designed to handle every category of solid waste with efficiency and compliance.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
            {[
              { title: "Municipal Solid Waste (MSW)", desc: "Integrated systems for household and municipal waste: collection, segregation, composting, and RDF production.", icon: "🏙️" },
              { title: "Industrial Waste Management", desc: "Specialised treatment for hazardous and non-hazardous industrial residues with zero compromise on safety.", icon: "🏭" },
              { title: "Bio-Medical Waste", desc: "Autoclave-based treatment, incineration, and regulatory-compliant disposal for healthcare facilities.", icon: "🏥" },
              { title: "C&D Waste Recycling", desc: "Construction and demolition debris processing for material recovery and reuse in new projects.", icon: "🏗️" },
              { title: "Waste-to-Energy", desc: "Converting organic waste to biogas, energy pellets, or RDF for power generation and fuel substitution.", icon: "⚡" },
              { title: "Composting Systems", desc: "Aerobic and anaerobic composting plants for organic waste conversion to quality soil amendments.", icon: "🌱" },
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
      <section className="sw-content-section" style={{ padding: "5rem 1.5rem", background: "#f8faff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Our Project Workflow</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 520, margin: "0 auto" }}>A systematic, proven process from initial assessment to long-term operations support.</p>
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
      <section className="sw-content-section" style={{ padding: "5rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Why Choose Our Solutions</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b", maxWidth: 520, margin: "0 auto" }}>Built for reliability, compliance, and long-term environmental impact.</p>
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

      {/* INDUSTRIES */}
      <section className="sw-content-section" style={{ padding: "5rem 1.5rem", background: "#1d4ed8" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "white", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Industry Applications</h2>
            <p style={{ fontSize: "1.0625rem", color: "#bfdbfe", maxWidth: 480, margin: "0 auto" }}>Our solid waste management systems serve diverse sectors across India.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", justifyContent: "center" }}>
            {industries.map((ind, i) => (
              <motion.div key={i} variants={fadeInUp} style={{ padding: "0.625rem 1.25rem", background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.2)", borderRadius: "100px", color: "white", fontSize: "0.9rem", fontWeight: 500, transition: "all .2s ease" }} whileHover={{ background: "rgba(255,255,255,.2)", scale: 1.03 }}>
                {ind}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sw-content-section" style={{ padding: "5rem 1.5rem", background: "white" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "0.75rem" }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: "1.0625rem", color: "#64748b" }}>Common queries about our solid waste management services.</p>
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
      <section className="sw-content-section" style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg,#1e40af 0%,#1d4ed8 50%,#3b82f6 100%)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 style={{ fontSize: "clamp(1.75rem,3.5vw,2.5rem)", fontWeight: 800, color: "white", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "1rem" }}>Ready to Transform Your Waste Management?</h2>
            <p style={{ fontSize: "1.0625rem", color: "#bfdbfe", marginBottom: "2rem", lineHeight: 1.7 }}>Talk to our experts and get a tailored solid waste management plan for your facility.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", background: "white", color: "#1d4ed8", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", transition: "all .25s ease" }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}>
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link href="/services/air-pollution" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", background: "transparent", color: "white", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", border: "1.5px solid rgba(255,255,255,.4)", transition: "all .25s ease" }} onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,.1)"; }} onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}>
                Explore Other Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

