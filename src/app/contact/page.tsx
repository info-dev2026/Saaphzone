"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle, Send, ArrowRight, Share2, ExternalLink } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const INQUIRY_TYPES = [
  "Solid Waste Management",
  "Air Pollution Control",
  "BESS (Battery Energy Storage)",
  "Solar & Wind Energy",
  "Software Development",
  "Partnership / Collaboration",
  "General Inquiry",
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (data.phone && !/^[+\d\s\-()]{7,15}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!data.inquiryType) errors.inquiryType = "Please select an inquiry type.";
  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }
  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", inquiryType: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("sending");
    await new Promise(r => setTimeout(r, 1800));
    setStatus("success");
    setForm({ name: "", email: "", phone: "", inquiryType: "", message: "" });
  };

  return (
    <div style={{ paddingTop: "80px", fontFamily: "'Inter', 'Plus Jakarta Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap');

        .contact-page * { box-sizing: border-box; }

        /* ── HERO ─────────────────────────────── */
        .cp-hero {
          position: relative;
          min-height: 440px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: linear-gradient(135deg, #020817 0%, #0c1a3a 40%, #0a2640 70%, #071428 100%);
          padding: 5rem 1.5rem 6rem;
        }

        .cp-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 55% at 80% 40%, rgba(56,189,248,0.12) 0%, transparent 65%),
            radial-gradient(ellipse 40% 40% at 15% 70%, rgba(16,185,129,0.08) 0%, transparent 60%);
          pointer-events: none;
        }

        .cp-hero::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(56,189,248,0.4), transparent);
        }

        .cp-grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .cp-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          animation: orbFloat 8s ease-in-out infinite alternate;
        }
        @keyframes orbFloat {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(20px, -30px) scale(1.08); }
        }

        .cp-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(56,189,248,0.1);
          border: 1px solid rgba(56,189,248,0.3);
          padding: 0.35rem 1rem;
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #38bdf8;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        .cp-badge .pulse-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #38bdf8;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba(56,189,248,0.5); }
          50%      { opacity: 0.7; transform: scale(0.85); box-shadow: 0 0 0 6px rgba(56,189,248,0); }
        }

        .cp-hero-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: #fff;
          margin-bottom: 1.25rem;
        }

        .cp-hero-title .hl {
          background: linear-gradient(90deg, #38bdf8, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cp-hero-sub {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.8;
          max-width: 520px;
          margin-bottom: 2.5rem;
        }

        .cp-hero-stats {
          display: flex;
          gap: 2.5rem;
          flex-wrap: wrap;
        }

        .cp-stat-val {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.75rem;
          font-weight: 900;
          color: #38bdf8;
          line-height: 1;
        }

        .cp-stat-lbl {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 0.3rem;
        }

        /* ── MAIN SECTION ─────────────────────── */
        .cp-main {
          background: #f8fafc;
          padding: 5rem 1.5rem;
        }

        .cp-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 3rem;
          align-items: start;
        }

        @media (max-width: 1024px) {
          .cp-inner { grid-template-columns: 1fr; }
        }

        /* ── LEFT SIDEBAR ─────────────────────── */
        .cp-sidebar {}

        .cp-info-card {
          background: linear-gradient(145deg, #0c1a3a, #0f2347);
          border: 1px solid rgba(56,189,248,0.15);
          border-radius: 20px;
          padding: 2.25rem;
          margin-bottom: 1.5rem;
          position: relative;
          overflow: hidden;
        }

        .cp-info-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #38bdf8, #34d399, transparent);
        }

        .cp-info-card-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.15rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.5rem;
        }

        .cp-info-card-sub {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
          margin-bottom: 1.75rem;
        }

        .cp-contact-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: all 0.2s;
        }

        .cp-contact-item:last-child { border-bottom: none; }

        .cp-contact-item:hover .cp-contact-icon {
          background: rgba(56,189,248,0.2);
          border-color: rgba(56,189,248,0.4);
        }

        .cp-contact-icon {
          width: 42px; height: 42px;
          border-radius: 10px;
          background: rgba(56,189,248,0.08);
          border: 1px solid rgba(56,189,248,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s;
        }

        .cp-contact-lbl {
          font-size: 0.7rem;
          font-weight: 700;
          color: #38bdf8;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.2rem;
        }

        .cp-contact-val {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.85);
          line-height: 1.5;
        }

        /* Map card */
        .cp-map-card {
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(56,189,248,0.15);
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
          height: 240px;
          position: relative;
        }

        .cp-map-card iframe {
          width: 100%; height: 100%;
          border: none;
          display: block;
        }

        /* Social row */
        .cp-social-row {
          display: flex;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        .cp-social-btn {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: #0c1a3a;
          border: 1px solid rgba(56,189,248,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          color: rgba(255,255,255,0.5);
        }

        .cp-social-btn:hover {
          background: rgba(56,189,248,0.12);
          border-color: #38bdf8;
          color: #38bdf8;
          transform: translateY(-2px);
        }

        /* ── FORM CARD ────────────────────────── */
        .cp-form-card {
          background: #fff;
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          padding: 2.75rem;
          box-shadow: 0 4px 40px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04);
          position: sticky;
          top: 100px;
        }

        .cp-form-header {
          margin-bottom: 2rem;
        }

        .cp-form-eyebrow {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0ea5e9;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cp-form-eyebrow::before {
          content: '';
          width: 20px; height: 2px;
          background: #0ea5e9;
          border-radius: 2px;
        }

        .cp-form-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin-bottom: 0.5rem;
        }

        .cp-form-sub {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.6;
        }

        /* Fields */
        .cp-field {
          margin-bottom: 1.25rem;
        }

        .cp-label {
          display: block;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.84rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.4rem;
        }

        .cp-req { color: #ef4444; }

        .cp-input {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: 12px;
          border: 1.5px solid #e2e8f0;
          font-size: 0.9375rem;
          color: #1e293b;
          font-family: 'Inter', sans-serif;
          outline: none;
          background: #fff;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }

        .cp-input:focus {
          border-color: #38bdf8;
          box-shadow: 0 0 0 3px rgba(56,189,248,0.12);
          background: #f0f9ff;
        }

        .cp-input.error {
          border-color: #ef4444;
          background: #fff5f5;
        }

        .cp-input.error:focus {
          box-shadow: 0 0 0 3px rgba(239,68,68,0.1);
        }

        .cp-field-error {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.78rem;
          color: #ef4444;
          margin-top: 0.3rem;
        }

        .cp-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        @media (max-width: 560px) {
          .cp-two-col { grid-template-columns: 1fr; }
          .cp-form-card { padding: 1.75rem; }
        }

        /* Submit button */
        .cp-submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.625rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #0284c7, #0369a1);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 20px rgba(2,132,199,0.3);
          margin-top: 0.5rem;
        }

        .cp-submit-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #0369a1, #075985);
          box-shadow: 0 8px 28px rgba(2,132,199,0.4);
          transform: translateY(-1px);
        }

        .cp-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .cp-spinner {
          width: 18px; height: 18px;
          border: 2.5px solid rgba(255,255,255,0.35);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.75s linear infinite;
          flex-shrink: 0;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        /* Success state */
        .cp-success {
          text-align: center;
          padding: 3rem 1.5rem;
        }

        .cp-success-icon {
          width: 72px; height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, #dcfce7, #bbf7d0);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          box-shadow: 0 0 0 12px rgba(34,197,94,0.08);
        }

        .cp-success-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.75rem;
        }

        .cp-success-body {
          font-size: 0.9375rem;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 360px;
          margin-left: auto;
          margin-right: auto;
        }

        .cp-success-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.75rem;
          background: #0f172a;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 0.9375rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .cp-success-btn:hover {
          background: #1e293b;
          transform: translateY(-1px);
        }

        /* ── BOTTOM BAND ──────────────────────── */
        .cp-bottom-band {
          background: linear-gradient(135deg, #020817, #0c1a3a);
          padding: 4rem 1.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(56,189,248,0.1);
        }

        .cp-bottom-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 60% at 50% 50%, rgba(56,189,248,0.06) 0%, transparent 70%);
        }

        .cp-band-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.75rem;
          position: relative;
        }

        .cp-band-sub {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.55);
          margin-bottom: 2rem;
          position: relative;
        }

        .cp-band-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          position: relative;
        }

        .cp-band-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.5rem;
          background: rgba(56,189,248,0.08);
          border: 1px solid rgba(56,189,248,0.2);
          border-radius: 8px;
          color: #38bdf8;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
        }

        .cp-band-link:hover {
          background: rgba(56,189,248,0.15);
          border-color: #38bdf8;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(56,189,248,0.2);
        }

        @media (max-width: 640px) {
          .cp-hero { padding: 3.5rem 1.25rem 4.5rem !important; min-height: auto !important; }
          .cp-hero-stats { gap: 1.25rem !important; }
          .cp-form-card { padding: 1.5rem !important; border-radius: 16px !important; }
          .cp-info-card { padding: 1.5rem !important; }
          .cp-band-links { flex-direction: column !important; align-items: center !important; }
          .cp-band-link { width: 100% !important; justify-content: center !important; max-width: 320px !important; }
        }
        @media (max-width: 480px) {
          .cp-hero-title { font-size: 2rem !important; }
          .cp-form-eyebrow::before { display: none; }
        }
      `}</style>

      {/* ── HERO ──────────────────────────────── */}
      <section className="cp-hero">
        <div className="cp-grid-overlay" />
        <div className="cp-orb" style={{ width: 500, height: 500, background: "rgba(56,189,248,0.07)", top: -150, right: -100 }} />
        <div className="cp-orb" style={{ width: 300, height: 300, background: "rgba(52,211,153,0.06)", bottom: -100, left: -50, animationDelay: "3s" }} />

        <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="cp-badge">
              <span className="pulse-dot" />
              Contact Saaphzone Technologies
            </div>

            <h1 className="cp-hero-title">
              Let&apos;s Build a<br />
              <span className="hl">Greener Future</span><br />
              Together
            </h1>

            <p className="cp-hero-sub">
              From industrial pollution control to renewable energy storage — our experts are ready to craft a bespoke solution for your environmental challenge.
            </p>

            <div className="cp-hero-stats">
              <div>
                <div className="cp-stat-val">24h</div>
                <div className="cp-stat-lbl">Response Time</div>
              </div>
              <div>
                <div className="cp-stat-val">50+</div>
                <div className="cp-stat-lbl">Projects Delivered</div>
              </div>
              <div>
                <div className="cp-stat-val">10+</div>
                <div className="cp-stat-lbl">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN SECTION ──────────────────────── */}
      <section className="cp-main">
        <div className="cp-inner">

          {/* ── LEFT SIDEBAR ── */}
          <motion.div
            className="cp-sidebar"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Info Card */}
            <div className="cp-info-card">
              <div className="cp-info-card-title">Our Office</div>
              <div className="cp-info-card-sub">
                Reach us directly or visit our registered office in Gurugram, Haryana.
              </div>

              {[
                { icon: <MapPin size={17} color="#38bdf8" />, label: "Address", value: "Plot No. 80, 1st Floor, Udyog Vihar Phase 1, Gurugram, Haryana 122016" },
                { icon: <Phone size={17} color="#38bdf8" />, label: "Phone", value: "+91 98182 19904" },
                { icon: <Mail size={17} color="#38bdf8" />, label: "Email", value: "sales@saaphzone.com" },
                { icon: <Clock size={17} color="#38bdf8" />, label: "Business Hours", value: "Mon – Sat: 10:00 AM – 6:00 PM IST" },
              ].map(({ icon, label, value }) => (
                <div className="cp-contact-item" key={label}>
                  <div className="cp-contact-icon">{icon}</div>
                  <div>
                    <div className="cp-contact-lbl">{label}</div>
                    <div className="cp-contact-val">{value}</div>
                  </div>
                </div>
              ))}

              <div className="cp-social-row">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="cp-social-btn" aria-label="LinkedIn">
                  <Share2 size={17} />
                </a>
                <a href="#" className="cp-social-btn" aria-label="Share">
                  <ExternalLink size={17} />
                </a>
                <a href="mailto:sales@saaphzone.com" className="cp-social-btn" aria-label="Email">
                  <Mail size={17} />
                </a>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="cp-map-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3688!2d77.0888!3d28.4959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e0!2sUdyog%20Vihar%20Phase%201%2C%20Sector%2020%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1700000000000"
                title="Saaphzone Technologies Office Location"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* ── FORM CARD ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="cp-form-card">
              {status === "success" ? (
                <motion.div className="cp-success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                  <div className="cp-success-icon">
                    <CheckCircle2 size={34} color="#16a34a" />
                  </div>
                  <h3 className="cp-success-title">Message Sent Successfully!</h3>
                  <p className="cp-success-body">
                    Thank you for reaching out. One of our clean-tech experts will get back to you within 24 business hours.
                  </p>
                  <button className="cp-success-btn" onClick={() => setStatus("idle")}>
                    Send Another <ArrowRight size={16} />
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="cp-form-header">
                    <div className="cp-form-eyebrow">Send a Message</div>
                    <h2 className="cp-form-title">Start the Conversation</h2>
                    <p className="cp-form-sub">Fill in your details and our team will prepare a tailored proposal for your project.</p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="cp-two-col">
                      <div className="cp-field">
                        <label htmlFor="contact-name" className="cp-label">Full Name <span className="cp-req">*</span></label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Your full name"
                          className={`cp-input${errors.name ? " error" : ""}${focusedField === "name" ? " focused" : ""}`}
                        />
                        {errors.name && <p className="cp-field-error"><AlertCircle size={12} />{errors.name}</p>}
                      </div>
                      <div className="cp-field">
                        <label htmlFor="contact-phone" className="cp-label">Phone Number</label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="+91 XXXXX XXXXX"
                          className={`cp-input${errors.phone ? " error" : ""}`}
                        />
                        {errors.phone && <p className="cp-field-error"><AlertCircle size={12} />{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="cp-field">
                      <label htmlFor="contact-email" className="cp-label">Email Address <span className="cp-req">*</span></label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="you@company.com"
                        className={`cp-input${errors.email ? " error" : ""}`}
                      />
                      {errors.email && <p className="cp-field-error"><AlertCircle size={12} />{errors.email}</p>}
                    </div>

                    <div className="cp-field">
                      <label htmlFor="contact-inquiry" className="cp-label">Inquiry Type <span className="cp-req">*</span></label>
                      <select
                        id="contact-inquiry"
                        name="inquiryType"
                        value={form.inquiryType}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("inquiryType")}
                        onBlur={() => setFocusedField(null)}
                        className={`cp-input${errors.inquiryType ? " error" : ""}`}
                        style={{ cursor: "pointer", color: form.inquiryType ? "#1e293b" : "#94a3b8" }}
                      >
                        <option value="" disabled>Select your inquiry type</option>
                        {INQUIRY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      {errors.inquiryType && <p className="cp-field-error"><AlertCircle size={12} />{errors.inquiryType}</p>}
                    </div>

                    <div className="cp-field">
                      <label htmlFor="contact-message" className="cp-label">Message <span className="cp-req">*</span></label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Describe your project, requirements, or question in detail..."
                        rows={5}
                        className={`cp-input${errors.message ? " error" : ""}`}
                        style={{ resize: "vertical", minHeight: 130 }}
                      />
                      {errors.message && <p className="cp-field-error"><AlertCircle size={12} />{errors.message}</p>}
                    </div>

                    {status === "error" && (
                      <div style={{ padding: "0.875rem 1rem", background: "#fef2f2", border: "1.5px solid #fecaca", borderRadius: "10px", display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
                        <AlertCircle size={18} color="#ef4444" />
                        <span style={{ fontSize: "0.9rem", color: "#dc2626" }}>Something went wrong. Please try again or contact us directly.</span>
                      </div>
                    )}

                    <button type="submit" disabled={status === "sending"} className="cp-submit-btn">
                      {status === "sending" ? (
                        <><div className="cp-spinner" /> Sending your message...</>
                      ) : (
                        <><Send size={17} /> Send Message</>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── BOTTOM BAND ───────────────────────── */}
      <section className="cp-bottom-band">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cp-band-title">Prefer to connect directly?</h2>
          <p className="cp-band-sub">Reach out on any channel — we&apos;re happy to help.</p>
          <div className="cp-band-links">
            <a href="tel:+919818219904" className="cp-band-link">
              <Phone size={16} /> +91 98182 19904
            </a>
            <a href="mailto:sales@saaphzone.com" className="cp-band-link">
              <Mail size={16} /> sales@saaphzone.com
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="cp-band-link">
              <Share2 size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
