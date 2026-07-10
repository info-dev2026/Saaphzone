"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Battery, ChevronDown, ChevronUp, ArrowRight, Zap, ShieldCheck, BarChart2, Clock, Settings, Globe, CheckCircle, MapPin, Mail, Landmark } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const keyFeatures = [
  { icon: Zap, title: "High Energy Density", desc: "Advanced lithium-ion and LFP chemistries delivering high cycle life and consistent energy output." },
  { icon: ShieldCheck, title: "Battery Management System", desc: "Intelligent BMS for real-time cell balancing, thermal management, and state-of-health monitoring." },
  { icon: BarChart2, title: "Grid Integration", desc: "Seamless integration with grid, solar, wind, and diesel gensets via bidirectional inverters." },
  { icon: Clock, title: "Long Cycle Life", desc: "6,000+ charge cycles ensuring 15+ years of reliable operation with minimal degradation." },
  { icon: Settings, title: "Modular Architecture", desc: "Scalable from 50 kWh to 100+ MWh — expandable as your energy needs grow." },
  { icon: Globe, title: "Remote Monitoring", desc: "24/7 cloud-based SCADA platform for performance tracking, diagnostics, and alert management." },
];

const techSpecs = [
  { param: "Chemistry", value: "LFP / NMC / NCA (project-specific)" },
  { param: "Capacity Range", value: "50 kWh — 100+ MWh" },
  { param: "Round-Trip Efficiency", value: "≥ 93%" },
  { param: "Cycle Life", value: "6,000+ cycles (80% DoD)" },
  { param: "Operating Temperature", value: "-20°C to +55°C" },
  { param: "Response Time", value: "< 20 ms (grid frequency response)" },
  { param: "Safety Standards", value: "IEC 62619, UL 9540, IS 16046" },
  { param: "Warranty", value: "10 years / 6,000 cycles (whichever first)" },
];

const useCases = [
  { icon: "⚡", title: "Peak Shaving", desc: "Reduce demand charges by discharging during peak grid tariff hours — cutting electricity bills by 20-40%." },
  { icon: "🔄", title: "Renewable Integration", desc: "Store excess solar or wind energy and dispatch on demand, eliminating curtailment losses." },
  { icon: "🏭", title: "Industrial Backup Power", desc: "Uninterruptible power supply for critical industrial processes with zero switchover time." },
  { icon: "🌐", title: "Grid Frequency Regulation", desc: "Sub-second response to grid frequency deviations for ancillary service markets." },
  { icon: "🏘️", title: "Microgrids", desc: "Off-grid and hybrid microgrid systems for remote communities and industrial campuses." },
  { icon: "🚗", title: "EV Charging Hubs", desc: "Buffer BESS to enable high-power EV charging without costly grid upgrades." },
];

const faqs = [
  { q: "What battery chemistry do you use?", a: "We use LFP (Lithium Iron Phosphate) as our standard chemistry for its safety, long cycle life, and thermal stability. NMC and other chemistries are available for specific applications requiring higher energy density." },
  { q: "How long does a BESS project take to commission?", a: "Typical commissioning timelines range from 3 months for commercial systems to 12 months for large-scale grid projects. Containerised solutions can be deployed in 6–8 weeks." },
  { q: "What is the payback period?", a: "Payback ranges from 4 to 7 years depending on peak-shaving potential, solar self-consumption, and local grid tariffs." },
  { q: "Can BESS be combined with solar PV?", a: "Yes, solar+storage is our primary setup. We design hybrid systems that maximize self-consumption and offer grid backup." },
  { q: "Do you provide O&M services?", a: "Yes. We offer annual maintenance contracts covering remote diagnostics, thermal checks, cell balancing, and firmware updates." },
];

const howItWorksSteps = [
  { step: "01", title: "Site Assessment", desc: "Our engineers analyse your load profile, grid connection, and renewable assets to design an optimised BESS." },
  { step: "02", title: "System Design", desc: "Custom engineering of capacity, chemistry, BMS configuration, and grid integration architecture." },
  { step: "03", title: "Manufacturing & Testing", desc: "Factory acceptance testing (FAT) ensures every unit meets our strict quality and safety standards." },
  { step: "04", title: "Installation & Commissioning", desc: "Full turnkey deployment with civil works, electrical integration, and system commissioning." },
  { step: "05", title: "Live Monitoring", desc: "24/7 SCADA monitoring with Saaphzone's cloud platform — real-time alerts, performance reports, and remote diagnostics." },
];

export default function BESSPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<"residential" | "commercial" | "large">("residential");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bess-page-container">
      <style dangerouslySetInnerHTML={{
        __html: `
        .bess-page-container {
          --navy: #0C2340;
          --navy-dark: #071628;
          --navy-mid: #112B50;
          --teal: #0F8B91;
          --teal-light: #17B8BF;
          --sky: #4FC8D4;
          --white: #FFFFFF;
          --text-muted: #7BAAC2;
          --border: rgba(23,184,191,0.22);
          
          background: var(--navy-dark);
          color: var(--white);
          font-family: 'Inter', sans-serif;
          line-height: 1.65;
          overflow-x: hidden;
        }

        .bess-page-container .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 5%;
          width: 100%;
        }

        .bess-page-container nav {
          position: sticky;
          top: 0;
          z-index: 9990;
          background: rgba(7, 22, 40, 0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(23, 184, 191, 0.18);
        }

        .bess-page-container nav .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 80px;
          padding: 0 5%;
        }

        .bess-page-container .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .bess-page-container .nav-logo-icon {
          width: 32px;
          height: 32px;
          background: var(--teal);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          border-radius: 6px;
        }

        .bess-page-container .nav-logo-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 1rem;
          color: var(--white);
          line-height: 1.1;
          display: flex;
          flex-direction: column;
        }

        .bess-page-container .nav-logo-text span {
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          color: var(--teal-light);
        }

        .bess-page-container .nav-links {
          display: flex;
          align-items: center;
          gap: 3rem;
          list-style: none;
        }

        .bess-page-container .nav-links a {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.96rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-transform: capitalize;
          color: rgba(255, 255, 255, 0.65);
          transition: color 0.2s;
          text-decoration: none;
        }

        .bess-page-container .nav-links a:hover {
          color: var(--teal-light);
        }

        .bess-page-container nav .nav-cta {
          background: #00b8c4;
          color: #0c2340;
          padding: 0.68rem 1.6rem;
          border-radius: 8px;
          transition: all 0.2s;
          font-weight: 700;
          text-transform: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.94rem;
          text-decoration: none;
          display: inline-block;
          white-space: nowrap;
        }

        .bess-page-container nav .nav-cta:hover {
          background: #00d8e6;
          box-shadow: 0 4px 14px rgba(0, 184, 196, 0.3);
        }

        /* ---------- SOLUTIONS INTERACTIVE SECTION ---------- */
        .bess-page-container .solutions-interactive-section {
          background: var(--navy-dark);
          padding: 6rem 0;
          border-bottom: 1px solid rgba(23, 184, 191, 0.15);
        }

        .bess-page-container .tabs-wrapper {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 4rem;
        }

        @media (max-width: 991px) {
          .bess-page-container .tabs-wrapper {
            justify-content: center;
          }
        }

        .bess-page-container .tabs-pill-container {
          display: inline-flex;
          background: rgba(17, 43, 80, 0.6);
          border: 1px solid rgba(23, 184, 191, 0.15);
          padding: 0.4rem;
          border-radius: 999px;
          gap: 0.5rem;
        }

        .bess-page-container .tab-pill-btn {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.65);
          background: transparent;
          border: none;
          padding: 0.65rem 1.75rem;
          border-radius: 999px;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .bess-page-container .tab-pill-btn:hover {
          color: var(--white);
          background: rgba(255, 255, 255, 0.05);
        }

        .bess-page-container .tab-pill-btn.active {
          background: #00b8c4;
          color: #0c2340;
          box-shadow: 0 4px 15px rgba(0, 184, 196, 0.25);
        }

        .bess-page-container .solution-detail-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 4rem;
          align-items: center;
        }

        @media (max-width: 991px) {
          .bess-page-container .solution-detail-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
        }

        .bess-page-container .solution-left-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        @media (max-width: 640px) {
          .bess-page-container .solution-left-cards {
            grid-template-columns: 1fr;
          }
        }

        .bess-page-container .compact-prod-card {
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(23, 184, 191, 0.12);
          border-radius: 16px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
          align-items: stretch;
          text-align: left;
          transition: all 0.25s ease;
          overflow: hidden;
        }

        .bess-page-container .compact-prod-card:hover {
          background: rgba(255, 255, 255, 0.03);
          border-color: var(--teal-light);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(23, 184, 191, 0.08);
        }

        .bess-page-container .compact-prod-card-thumb {
          width: 100%;
          height: 220px;
          border-radius: 0;
          background: #0c2340;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
        }

        .bess-page-container .compact-prod-card-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding: 1rem 1.25rem 1.25rem;
        }

        .bess-page-container .compact-prod-card-info h4 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--white);
          margin: 0;
        }

        .bess-page-container .compact-prod-card-info p {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          line-height: 1.4;
        }

        .bess-page-container .compact-prod-card-info span {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--teal-light);
          letter-spacing: 0.02em;
          margin-top: 0.1rem;
        }

        /* Right panel info */
        .bess-page-container .solution-right-info {
          text-align: left;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .bess-page-container .sol-range-badge {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .bess-page-container .sol-range-num {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 3.2rem;
          font-weight: 900;
          color: var(--teal-light);
          line-height: 1;
        }

        .bess-page-container .sol-range-lbl {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.55);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          line-height: 1.2;
          display: flex;
          flex-direction: column;
        }

        .bess-page-container .solution-right-info h3 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: var(--white);
          margin: 0 0 1.25rem;
        }

        .bess-page-container .solution-right-info p.lead {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .bess-page-container .sol-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .bess-page-container .sol-bullets li {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.85);
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          line-height: 1.5;
        }

        .bess-page-container .sol-bullets li svg {
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .bess-page-container .solution-right-info .sol-action-btn {
          background: #00b8c4;
          color: #0c2340;
          padding: 0.85rem 2rem;
          border-radius: 8px;
          transition: all 0.22s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          border: none;
          cursor: pointer;
        }

        .bess-page-container .solution-right-info .sol-action-btn:hover {
          background: #00d8e6;
          box-shadow: 0 8px 24px rgba(0, 184, 196, 0.35);
          transform: translateY(-2px);
        }

        /* HERO */
        .bess-page-container .hero {
          position: relative;
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          padding: 6rem 5% 5rem;
          background: radial-gradient(ellipse 65% 70% at 85% 40%, rgba(15, 139, 145, 0.12) 0%, transparent 65%),
                      linear-gradient(155deg, var(--navy-dark) 0%, var(--navy) 55%, #0D2E55 100%);
          overflow: hidden;
        }

        .bess-page-container .hero-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          max-width: 850px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }

        .bess-page-container .hero-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(23, 184, 191, 0.12);
          border: 1px solid rgba(23, 184, 191, 0.35);
          padding: 0.35rem 0.9rem;
          border-radius: 4px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--teal-light);
          margin-bottom: 1.5rem;
        }

        .bess-page-container .hero h1 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin-bottom: 1.5rem;
          color: #FFFFFF;
        }

        .bess-page-container .hero h1 em {
          font-style: normal;
          color: var(--teal-light);
        }

        .bess-page-container .hero-sub {
          font-size: 0.98rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.7);
          max-width: 640px;
          margin: 0 auto 2.5rem;
        }

        .bess-page-container .hero-buttons {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 3.5rem;
        }

        .bess-page-container .btn-primary {
          display: inline-flex;
          align-items: center;
          background: var(--teal);
          color: var(--white);
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          padding: 0.85rem 2rem;
          border-radius: 6px;
          transition: all 0.22s ease;
          cursor: pointer;
          border: none;
          text-decoration: none;
        }

        .bess-page-container .btn-primary:hover {
          background: var(--teal-light);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(23, 184, 191, 0.35);
        }

        .bess-page-container .btn-outline {
          display: inline-flex;
          align-items: center;
          background: transparent;
          color: var(--white);
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          padding: 0.85rem 2rem;
          border-radius: 6px;
          border: 2px solid rgba(255, 255, 255, 0.25);
          transition: all 0.22s ease;
          cursor: pointer;
          text-decoration: none;
        }

        .bess-page-container .btn-outline:hover {
          border-color: var(--teal-light);
          color: var(--teal-light);
          transform: translateY(-2px);
        }

        .bess-page-container .hero-stats {
          display: flex;
          gap: 3rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .bess-page-container .hero-stat-num {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--teal-light);
          line-height: 1;
        }

        .bess-page-container .hero-stat-label {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.45);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 0.35rem;
        }

        .bess-page-container .hero-visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .bess-page-container .hero-img-main {
          width: 100%;
          height: auto;
          border-radius: 18px;
          border: 1px solid rgba(23, 184, 191, 0.25);
          box-shadow: 0 15px 50px rgba(0,0,0,0.5);
          object-fit: cover;
          display: block;
        }

        .bess-page-container .hero-img-badge {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          background: rgba(11, 43, 80, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(23, 184, 191, 0.35);
          border-radius: 10px;
          padding: 0.65rem 1.15rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .bess-page-container .hero-img-badge-icon {
          font-size: 1.25rem;
        }

        .bess-page-container .hero-img-badge-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--white);
          line-height: 1.2;
          display: flex;
          flex-direction: column;
        }

        .bess-page-container .hero-img-badge-text span {
          font-size: 0.58rem;
          color: rgba(255,255,255,0.6);
        }

        /* MADE IN INDIA BANNER */
        .bess-page-container .mii-banner {
          background: rgba(255, 255, 255, 0.01);
          border-top: 1px solid rgba(23, 184, 191, 0.15);
          border-bottom: 1px solid rgba(23, 184, 191, 0.15);
          padding: 1.75rem 0;
        }

        .bess-page-container .mii-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 5%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .bess-page-container .mii-flag {
          display: inline-flex;
          flex-direction: column;
          width: 24px;
          height: 16px;
          border-radius: 2px;
          overflow: hidden;
          flex-shrink: 0;
          gap: 0px;
        }

        .bess-page-container .mii-flag span {
          flex: 1;
          width: 100%;
        }

        .bess-page-container .mii-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--white);
        }

        .bess-page-container .mii-text em {
          font-style: normal;
          color: #F59E0B;
        }

        .bess-page-container .mii-tags {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
        }

        .bess-page-container .mii-tag {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.25);
          color: #F59E0B;
          padding: 0.28rem 0.75rem;
          border-radius: 4px;
        }

        /* RESPONSIVE */
        @media (max-width: 991px) {
          .bess-page-container nav {
            flex-direction: column;
            gap: 1.25rem;
            text-align: center;
            padding: 1rem 5%;
          }
          .bess-page-container .nav-links {
            gap: 1.25rem;
            flex-wrap: wrap;
            justify-content: center;
          }
          .bess-page-container .hero-inner {
            grid-template-columns: 1fr;
            gap: 3.5rem;
            text-align: center;
          }
          .bess-page-container .hero-sub {
            margin-left: auto;
            margin-right: auto;
          }
          .bess-page-container .hero-buttons {
            justify-content: center;
          }
          .bess-page-container .hero-stats {
            justify-content: center;
          }
          .bess-page-container .mii-inner {
            flex-direction: column;
            text-align: center;
            justify-content: center;
            gap: 1.25rem;
          }
          .bess-page-container .mii-tags {
            justify-content: center;
          }
        }

        /* SECTION COMMON */
        .bess-page-container .section {
          padding: 6rem 0;
          border-bottom: 1px solid rgba(23, 184, 191, 0.15);
        }

        .bess-page-container .section-header {
          text-align: center;
          margin-bottom: 4rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .bess-page-container .section-badge {
          display: inline-block;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--teal-light);
          margin-bottom: 0.75rem;
        }

        .bess-page-container .section-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.8rem, 3.2vw, 2.6rem);
          font-weight: 900;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin-bottom: 1.25rem;
          color: var(--white);
        }

        .bess-page-container .section-subtitle {
          font-size: 1rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.7);
        }

        /* TECHNOLOGY SECTION */
        .bess-page-container .technology-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .bess-page-container .technology-grid {
            grid-template-columns: 1fr;
          }
        }

        .bess-page-container .tech-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(23, 184, 191, 0.15);
          border-radius: 16px;
          padding: 2.25rem;
          transition: all 0.3s ease;
        }

        .bess-page-container .tech-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: var(--teal-light);
          transform: translateY(-5px);
          box-shadow: 0 12px 36px rgba(23, 184, 191, 0.15);
        }

        .bess-page-container .tech-icon {
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
          width: 54px;
          height: 54px;
          background: rgba(23, 184, 191, 0.12);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bess-page-container .tech-card h3 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--white);
          margin-bottom: 0.75rem;
        }

        .bess-page-container .tech-card p {
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.6;
          margin-bottom: 1.75rem;
        }

        .bess-page-container .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .bess-page-container .tech-tags span {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          background: rgba(23, 184, 191, 0.08);
          border: 1px solid rgba(23, 184, 191, 0.22);
          color: var(--teal-light);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
        }

        /* ---------- LIGHT TECH SECTION ---------- */
        .bess-page-container .tech-section-light {
          background: #f5f8fc;
          padding: 6rem 0;
          border-bottom: 1px solid rgba(12, 35, 64, 0.08);
        }

        .bess-page-container .tech-section-light .technology-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3.5rem;
        }

        @media (max-width: 991px) {
          .bess-page-container .tech-section-light .technology-grid {
            grid-template-columns: 1fr;
          }
        }

        .bess-page-container .tech-section-light .tech-card {
          background: #ffffff;
          border: 1px solid rgba(12, 35, 64, 0.06);
          border-radius: 16px;
          padding: 2.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(12, 35, 64, 0.03);
          text-align: left;
        }

        .bess-page-container .tech-section-light .tech-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(12, 35, 64, 0.08);
        }

        .bess-page-container .tech-section-light .tech-icon-container {
          width: 52px;
          height: 52px;
          background: #0C2340;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .bess-page-container .tech-section-light .tech-card h3 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: #0c2340;
          margin-bottom: 0.85rem;
        }

        .bess-page-container .tech-section-light .tech-card p {
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.65;
          margin-bottom: 1.75rem;
        }

        .bess-page-container .tech-section-light .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .bess-page-container .tech-section-light .tech-tags span {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #475569;
          padding: 0.3rem 0.8rem;
          border-radius: 6px;
        }

        /* SOLUTIONS SECTION */
        .bess-page-container .solution-category {
          margin-bottom: 5rem;
        }

        .bess-page-container .solution-category:last-child {
          margin-bottom: 0;
        }

        .bess-page-container .category-header {
          margin-bottom: 2.5rem;
          text-align: center;
        }

        .bess-page-container .category-header h3 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--white);
          margin-bottom: 0.35rem;
        }

        .bess-page-container .category-header p {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.55);
        }

        .bess-page-container .products-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
        }

        .bess-page-container .product-card {
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(23, 184, 191, 0.12);
          border-radius: 16px;
          padding: 2.25rem;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 360px;
        }

        .bess-page-container .product-card:hover {
          background: rgba(255, 255, 255, 0.035);
          border-color: var(--teal-light);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(23, 184, 191, 0.12);
        }

        .bess-page-container .product-range {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--teal-light);
          background: rgba(23, 184, 191, 0.1);
          border: 1px solid rgba(23, 184, 191, 0.25);
          padding: 0.25rem 0.65rem;
          border-radius: 4px;
          display: inline-block;
          align-self: flex-start;
          margin-bottom: 1.25rem;
        }

        .bess-page-container .product-card h4 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--white);
          margin-bottom: 1.5rem;
        }

        .bess-page-container .product-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .bess-page-container .product-card ul li {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.75);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .bess-page-container .product-card ul li::before {
          content: '✓';
          color: var(--teal-light);
          font-weight: bold;
        }

        /* LARGE PROJECTS */
        .bess-page-container .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        @media (max-width: 991px) {
          .bess-page-container .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .bess-page-container .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        .bess-page-container .project-card {
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(23, 184, 191, 0.12);
          border-radius: 16px;
          padding: 2.25rem;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .bess-page-container .project-card:hover {
          background: rgba(255, 255, 255, 0.035);
          border-color: var(--teal-light);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(23, 184, 191, 0.12);
        }

        .bess-page-container .project-icon {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          width: 50px;
          height: 50px;
          background: rgba(23, 184, 191, 0.12);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bess-page-container .project-card h3 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--white);
          margin-bottom: 0.75rem;
        }

        .bess-page-container .project-power {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--teal-light);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .bess-page-container .project-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .bess-page-container .project-card ul li {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.75);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .bess-page-container .project-card ul li::before {
          content: '✓';
          color: var(--teal-light);
          font-weight: bold;
        }

        /* EMS PORTAL MOCKUP */
        .bess-page-container .portal-section {
          background: #f8fafc;
          padding: 6rem 0;
          border-bottom: 1px solid rgba(12, 35, 64, 0.08);
        }

        .bess-page-container .portal-wrapper {
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid rgba(12, 35, 64, 0.08);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(12, 35, 64, 0.06);
        }

        .bess-page-container .portal-header-bar {
          background: #071628;
          padding: 1.1rem 1.75rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1.5px solid rgba(23, 184, 191, 0.15);
        }

        .bess-page-container .portal-header-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--white);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .bess-page-container .portal-header-status {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 800;
          background: rgba(0, 184, 196, 0.1);
          border: 1px solid rgba(0, 184, 196, 0.3);
          color: #00c2cb;
          padding: 0.25rem 0.75rem;
          border-radius: 100px;
          letter-spacing: 0.05em;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .bess-page-container .portal-body-wrapper {
          display: grid;
          grid-template-columns: 220px 1fr;
        }

        @media (max-width: 991px) {
          .bess-page-container .portal-body-wrapper {
            grid-template-columns: 1fr;
          }
        }

        .bess-page-container .portal-sidebar {
          background: #f8fafc;
          border-right: 1px solid rgba(12, 35, 64, 0.06);
          padding: 2rem 1.25rem;
          text-align: left;
        }

        .bess-page-container .portal-menu {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .bess-page-container .portal-menu li {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: #475569;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .bess-page-container .portal-menu li:hover {
          color: #0c2340;
          background: rgba(12, 35, 64, 0.03);
        }

        .bess-page-container .portal-menu li.active {
          color: #0c2340;
          background: rgba(23, 184, 191, 0.08);
          border-left: 3px solid #00b8c4;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }

        .bess-page-container .portal-content {
          padding: 2.25rem;
          background: #ffffff;
        }

        .bess-page-container .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .bess-page-container .metrics-grid {
            grid-template-columns: 1fr;
          }
        }

        .bess-page-container .metric-card {
          background: #f8fafc;
          border: 1px solid rgba(12, 35, 64, 0.04);
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          text-align: left;
        }

        .bess-page-container .metric-label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.4rem;
        }

        .bess-page-container .metric-value {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.6rem;
          font-weight: 850;
          color: #0c2340;
          line-height: 1.2;
          margin-bottom: 0.2rem;
        }

        .bess-page-container .metric-change {
          font-size: 0.75rem;
          font-weight: 600;
          color: #10b981;
        }

        /* CHART MOCKUP */
        .bess-page-container .chart-card {
          background: #ffffff;
          border: 1px solid rgba(12, 35, 64, 0.06);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
          text-align: left;
        }

        .bess-page-container .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .bess-page-container .chart-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 800;
          color: #0c2340;
        }

        .bess-page-container .chart-legends {
          display: flex;
          gap: 1rem;
        }

        .bess-page-container .chart-legend-item {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .bess-page-container .chart-svg-container {
          width: 100%;
          height: 160px;
          margin-bottom: 0.75rem;
          border-bottom: 1px solid rgba(12, 35, 64, 0.06);
        }

        .bess-page-container .chart-timeline {
          display: flex;
          justify-content: space-between;
          padding: 0 0.5rem;
        }

        .bess-page-container .chart-time-label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          color: #94a3b8;
        }

        /* DEVICES */
        .bess-page-container .devices-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        @media (max-width: 991px) {
          .bess-page-container .devices-grid {
            grid-template-columns: 1fr;
          }
        }

        .bess-page-container .device-card {
          background: #f8fafc;
          border: 1px solid rgba(12, 35, 64, 0.04);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          text-align: left;
        }

        .bess-page-container .device-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .bess-page-container .device-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 800;
          color: #0c2340;
        }

        .bess-page-container .device-status-lbl {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 800;
          color: #10b981;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .bess-page-container .device-progress-bg {
          width: 100%;
          height: 6px;
          background: #e2e8f0;
          border-radius: 99px;
          overflow: hidden;
        }

        .bess-page-container .device-progress-fill {
          height: 100%;
          background: #00b8c4;
          border-radius: 99px;
        }

        .bess-page-container .device-meta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.72rem;
          font-weight: 700;
          color: #64748b;
        }

        /* ---------- CONTACT / ENQUIRY SECTION ---------- */
        .bess-page-container .contact-section {
          background: var(--navy-dark);
          padding: 6rem 0;
          border-bottom: none;
        }

        .bess-page-container .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: flex-start;
        }

        @media (max-width: 991px) {
          .bess-page-container .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .bess-page-container .contact-info-panel {
          text-align: left;
        }

        .bess-page-container .contact-info-panel h3 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--white);
          margin: 1.5rem 0 1rem;
        }

        .bess-page-container .contact-info-panel p.lead {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }

        .bess-page-container .contact-list {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .bess-page-container .contact-item {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
        }

        .bess-page-container .contact-item-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(23, 184, 191, 0.08);
          border: 1px solid rgba(23, 184, 191, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--teal-light);
          flex-shrink: 0;
        }

        .bess-page-container .contact-item-text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .bess-page-container .contact-item-text h4 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 800;
          color: var(--white);
          margin: 0;
        }

        .bess-page-container .contact-item-text p {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.65);
          margin: 0;
          line-height: 1.5;
        }

        /* Form Card */
        .bess-page-container .proposal-card {
          background: rgba(17, 43, 80, 0.4);
          border: 1px solid rgba(23, 184, 191, 0.15);
          border-radius: 20px;
          padding: 2.5rem;
          backdrop-filter: blur(10px);
          text-align: left;
        }

        .bess-page-container .proposal-card h3 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--white);
          margin: 0 0 2rem;
        }

        .bess-page-container .form-row-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }

        @media (max-width: 576px) {
          .bess-page-container .form-row-2col {
            grid-template-columns: 1fr;
          }
        }

        .bess-page-container .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          width: 100%;
        }

        .bess-page-container .form-group label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.55);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .bess-page-container .form-group input,
        .bess-page-container .form-group select,
        .bess-page-container .form-group textarea {
          background: rgba(7, 22, 40, 0.6);
          border: 1px solid rgba(23, 184, 191, 0.2);
          border-radius: 8px;
          padding: 0.85rem 1rem;
          color: var(--white);
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          transition: all 0.25s ease;
          width: 100%;
        }

        .bess-page-container .form-group input::placeholder,
        .bess-page-container .form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.35);
        }

        .bess-page-container .form-group input:focus,
        .bess-page-container .form-group select:focus,
        .bess-page-container .form-group textarea:focus {
          outline: none;
          border-color: var(--teal-light);
          box-shadow: 0 0 12px rgba(23, 184, 191, 0.15);
          background: rgba(7, 22, 40, 0.8);
        }

        .bess-page-container .form-group select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2317B8BF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1.1rem;
          padding-right: 2.5rem;
        }

        .bess-page-container .form-submit-btn {
          width: 100%;
          background: #00b8c4;
          color: #0c2340;
          border: none;
          border-radius: 8px;
          padding: 0.95rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        .bess-page-container .form-submit-btn:hover {
          background: #00d8e6;
          box-shadow: 0 8px 24px rgba(0, 184, 196, 0.35);
          transform: translateY(-2px);
        }
      ` }} />

      {/* NAVBAR */}
      <nav>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <div style={{ flex: 1, display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
            <Link
              href="/"
              aria-label="Saaphzone Technologies Home"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0px",
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              <Image
                src="/Saaphzone logo.png"
                alt="Saaphzone Technologies"
                width={70}
                height={70}
                style={{ objectFit: "contain", background: "none", flexShrink: 0, marginRight: "-8px" }}
                priority
              />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15, flexShrink: 0 }}>
                <span style={{ fontWeight: 800, color: "var(--white)", fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", fontSize: "1.35rem", letterSpacing: "-0.02em" }}>
                  Saaphzone
                </span>
                <span style={{ fontWeight: 600, color: "var(--teal-light)", fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase" }}>
                  Technologies
                </span>
              </div>
            </Link>
          </div>

          <ul className="nav-links" style={{ flex: "none", margin: 0, padding: 0 }}>
            <li><a href="#technology">Technology</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#portal">EMS Portal</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link href="/contact" className="nav-cta">Login to Portal</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <span className="dot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00b8c4", display: "inline-block" }}></span>
              <svg width="16" height="11" viewBox="0 0 24 16" fill="none" style={{ borderRadius: "1px" }}>
                <rect width="24" height="5.33" fill="#FF9933" />
                <rect y="5.33" width="24" height="5.33" fill="#FFFFFF" />
                <rect y="10.66" width="24" height="5.34" fill="#138808" />
                <circle cx="12" cy="8" r="1.5" fill="#000080" />
              </svg>
              <span>Indigenously Designed & Made in India</span>
            </div>

            <h1>
              India's Own<br />
              <em>BESS & EMS</em><br />
              Technology
            </h1>

            <p className="hero-sub">
              Saaphzone Technologies designs, manufactures, and deploys Battery Energy Storage Systems with proprietary Energy Management Systems — from 2.5 kW residential units to 2 MW solar plant infrastructure. 100% Indian IP.
            </p>

            <div className="hero-buttons">
              <a href="#solutions" className="btn-primary">
                Explore Solutions
              </a>
              <a href="#portal" className="btn-outline">
                Access EMS Portal
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-num">2.5kW–2MW</div>
                <div className="hero-stat-label">Full Range</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">95%+</div>
                <div className="hero-stat-label">Round-Trip Efficiency</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">10,000+</div>
                <div className="hero-stat-label">Cycle Life</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MADE IN INDIA */}
      <div className="mii-banner">
        <div className="mii-inner">
          <div className="mii-flag">
            <span style={{ background: "#FF9933" }}></span>
            <span style={{ background: "#FFFFFF" }}></span>
            <span style={{ background: "#138808" }}></span>
          </div>

          <div className="mii-text">
            Proudly <em>Made in India</em> — Own IP, Own Design, Own Manufacturing
          </div>

          <div className="mii-tags">
            <span className="mii-tag">Indigenous Technology</span>
            <span className="mii-tag">Patented Design</span>
            <span className="mii-tag">Atmanirbhar Bharat</span>
            <span className="mii-tag">PLI Eligible</span>
          </div>
        </div>
      </div>

      {/* TECHNOLOGY SECTION */}
      <section id="technology" className="tech-section-light">
        <div className="container">
          <div className="section-header" style={{ textAlign: "left", marginLeft: "0", marginRight: "auto", maxWidth: "800px", marginBottom: "3rem" }}>
            <span className="section-badge" style={{ color: "#0F8B91", fontWeight: 700 }}>OUR PROPRIETARY TECHNOLOGY</span>
            <h2 className="section-title" style={{ color: "#0C2340" }}>Built from First Principles, Owned Entirely by India</h2>
            <p className="section-subtitle" style={{ color: "#4B5E7D", maxWidth: "720px", margin: "0" }}>
              Every component of the Saaphzone stack — from cell chemistry management to grid communication protocols — is designed and owned in-house.
            </p>
          </div>

          <div className="technology-grid">
            <div className="tech-card" style={{ borderTop: "4px solid #00b8c4" }}>
              <div className="tech-icon-container">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="16" height="10" rx="2" ry="2" />
                  <line x1="22" y1="11" x2="22" y2="13" />
                </svg>
              </div>
              <h3>SAAPH Series BESS</h3>
              <p>
                Our Battery Energy Storage Systems use LiFePO4 chemistry with custom cell balancing circuits and thermal management designed for Indian climatic conditions — from desert heat to high humidity.
              </p>
              <div className="tech-tags">
                <span>LiFePO4</span>
                <span>Custom BMS</span>
                <span>Thermal Mgmt</span>
                <span>IP55</span>
              </div>
            </div>

            <div className="tech-card" style={{ borderTop: "4px solid #3b82f6" }}>
              <div className="tech-icon-container">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z" />
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z" />
                </svg>
              </div>
              <h3>Proprietary EMS</h3>
              <p>
                Our Energy Management System is developed entirely in-house — with real-time grid analytics, AI-based load forecasting, solar integration logic, and a cloud-hosted web portal for remote monitoring and control.
              </p>
              <div className="tech-tags">
                <span>AI Forecasting</span>
                <span>Modbus RTU</span>
                <span>SCADA Ready</span>
                <span>OTA Updates</span>
              </div>
            </div>

            <div className="tech-card" style={{ borderTop: "4px solid #0c2340" }}>
              <div className="tech-icon-container">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <h3>PCD - Power Conversion Design</h3>
              <p>
                Our Power Conversion Devices are custom-engineered for bidirectional DC-AC conversion, optimised for both grid-tied and off-grid topologies with high switching efficiency and minimum harmonic distortion.
              </p>
              <div className="tech-tags">
                <span>Bidirectional</span>
                <span>Grid-tied</span>
                <span>THD &lt; 3%</span>
                <span>IGBT-based</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section id="solutions" className="solutions-interactive-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: "left", marginLeft: "0", marginRight: "auto", maxWidth: "800px", marginBottom: "3rem" }}>
            <span className="section-badge" style={{ color: "#0F8B91", fontWeight: 700 }}>THREE SOLUTION CATEGORIES</span>
            <h2 className="section-title" style={{ color: "var(--white)" }}>Power for Every Scale</h2>
            <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.7)", margin: "0" }}>
              From a single household to a utility-scale solar plant, the SAAPH Series scales with your energy ambition.
            </p>
          </div>

          {/* Interactive Selector Tabs */}
          <div className="tabs-wrapper">
            <div className="tabs-pill-container">
              <button
                className={`tab-pill-btn ${activeCategory === "residential" ? "active" : ""}`}
                onClick={() => setActiveCategory("residential")}
              >
                🏡 Residential
              </button>
              <button
                className={`tab-pill-btn ${activeCategory === "commercial" ? "active" : ""}`}
                onClick={() => setActiveCategory("commercial")}
              >
                🏢 Commercial
              </button>
              <button
                className={`tab-pill-btn ${activeCategory === "large" ? "active" : ""}`}
                onClick={() => setActiveCategory("large")}
              >
                ⚡ Large Projects
              </button>
            </div>
          </div>

          {/* Tab Content Panels */}
          {activeCategory === "residential" && (
            <div className="solution-detail-grid">
              {/* Product Cards Left */}
              <div className="solution-left-cards">
                <div className="compact-prod-card">
                  <div className="compact-prod-card-thumb">
                    <Image
                      unoptimized
                      src="/camping_carry.jpeg"
                      alt="SAAPH-R1 Portable"
                      width={400}
                      height={220}
                      style={{ objectFit: "cover", width: "100%", height: "220px" }}
                    />
                  </div>
                  <div className="compact-prod-card-info">
                    <h4>SAAPH-R1 Portable</h4>
                    <p>Apartment & small home backup</p>
                    <span>2.5 KW · PORTABLE</span>
                  </div>
                </div>

                <div className="compact-prod-card">
                  <div className="compact-prod-card-thumb">
                    <Image
                      unoptimized
                      src="/wall_mount.jpeg"
                      alt="SAAPH-R2 Wall Mount"
                      width={400}
                      height={220}
                      style={{ objectFit: "cover", width: "100%", height: "220px" }}
                    />
                  </div>
                  <div className="compact-prod-card-info">
                    <h4>SAAPH-R2 Wall Mount</h4>
                    <p>Solar-integrated home system</p>
                    <span>3-5 KW · WALL MOUNT</span>
                  </div>
                </div>

                <div className="compact-prod-card">
                  <div className="compact-prod-card-thumb">
                    <Image
                      unoptimized
                      src="/portable_trolley.jpeg"
                      alt="SAAPH-R3 Trolley"
                      width={400}
                      height={220}
                      style={{ objectFit: "cover", width: "100%", height: "220px" }}
                    />
                  </div>
                  <div className="compact-prod-card-info">
                    <h4>SAAPH-R3 Trolley</h4>
                    <p>Mobile power with solar charging</p>
                    <span>5-10 KW · MOBILE</span>
                  </div>
                </div>

                <div className="compact-prod-card">
                  <div className="compact-prod-card-thumb">
                    <Image
                      unoptimized
                      src="/white_cube_25kw.jpeg"
                      alt="SAAPH-R4 HiCap"
                      width={400}
                      height={220}
                      style={{ objectFit: "cover", width: "100%", height: "220px" }}
                    />
                  </div>
                  <div className="compact-prod-card-info">
                    <h4>SAAPH-R4 HiCap</h4>
                    <p>High-capacity villa & bungalow</p>
                    <span>10-15 KW · FLOOR</span>
                  </div>
                </div>
              </div>

              {/* Details Right */}
              <div className="solution-right-info">
                <div className="sol-range-badge">
                  <span className="sol-range-num">2.5–15</span>
                  <div className="sol-range-lbl">
                    <span>kW range</span>
                    <span>Residential Series</span>
                  </div>
                </div>
                <h3>Clean. Quiet. Yours.</h3>
                <p className="lead">
                  Every home deserves energy independence. The SAAPH Residential Series delivers silent, zero-emission backup and solar storage for apartments, independent homes, and villas — with a smartphone app for complete control.
                </p>
                <ul className="sol-bullets">
                  <li>
                    <ShieldCheck size={18} color="#00b8c4" />
                    <span>Reliable backup during grid failures — powers fans, lights, refrigerator & TV</span>
                  </li>
                  <li>
                    <ShieldCheck size={18} color="#00b8c4" />
                    <span>Solar PV integration for daytime harvesting and night-time supply</span>
                  </li>
                  <li>
                    <ShieldCheck size={18} color="#00b8c4" />
                    <span>Smart app monitoring: SoC, load, charge source, and alerts</span>
                  </li>
                  <li>
                    <ShieldCheck size={18} color="#00b8c4" />
                    <span>Compact wall-mount or portable trolley form factors</span>
                  </li>
                  <li>
                    <ShieldCheck size={18} color="#00b8c4" />
                    <span>LiFePO₄ cells — safe indoors, no fire risk, no toxic gases</span>
                  </li>
                </ul>
                <a href="#contact" className="sol-action-btn">Get Residential Quote</a>
              </div>
            </div>
          )}

          {activeCategory === "commercial" && (
            <div className="solution-detail-grid">
              {/* Product Cards Left */}
              <div className="solution-left-cards">
                <div className="compact-prod-card">
                  <div className="compact-prod-card-thumb">
                    <Image
                      unoptimized
                      src="/modular_30_60kw.jpeg"
                      alt="SAAPH-C30 System"
                      width={400}
                      height={220}
                      style={{ objectFit: "cover", width: "100%", height: "220px" }}
                    />
                  </div>
                  <div className="compact-prod-card-info">
                    <h4>SAAPH-C30 System</h4>
                    <p>Demand charge reduction & backup</p>
                    <span>30 KW · CABINET</span>
                  </div>
                </div>

                <div className="compact-prod-card">
                  <div className="compact-prod-card-thumb">
                    <Image
                      unoptimized
                      src="/cube_indoor_outdoor.jpeg"
                      alt="SAAPH-C60 System"
                      width={400}
                      height={220}
                      style={{ objectFit: "cover", width: "100%", height: "220px" }}
                    />
                  </div>
                  <div className="compact-prod-card-info">
                    <h4>SAAPH-C60 System</h4>
                    <p>Industrial backup & peak shaving</p>
                    <span>60 KW · CABINET</span>
                  </div>
                </div>
              </div>

              {/* Details Right */}
              <div className="solution-right-info">
                <div className="sol-range-badge">
                  <span className="sol-range-num">30–60</span>
                  <div className="sol-range-lbl">
                    <span>kW range</span>
                    <span>Commercial Series</span>
                  </div>
                </div>
                <h3>Reduce Tariffs. Secure Power.</h3>
                <p className="lead">
                  Keep your business running 24/7 with zero interruption. The SAAPH Commercial Series reduces peak demand charges, improves power quality, and provides automatic backup for offices, manufacturing units, and server rooms.
                </p>
                <ul className="sol-bullets">
                  <li>
                    <ShieldCheck size={18} color="#00b8c4" />
                    <span>Peak shaving and demand charge management — lower utility bills</span>
                  </li>
                  <li>
                    <ShieldCheck size={18} color="#00b8c4" />
                    <span>Automated seamless switchover (&lt; 20ms) — zero server reboots</span>
                  </li>
                  <li>
                    <ShieldCheck size={18} color="#00b8c4" />
                    <span>Modular scalability — expand power and energy capacity independently</span>
                  </li>
                  <li>
                    <ShieldCheck size={18} color="#00b8c4" />
                    <span>Multi-system cloud management for multi-site operations</span>
                  </li>
                  <li>
                    <ShieldCheck size={18} color="#00b8c4" />
                    <span>Integrated air cooling & multi-tier aerosol fire suppression</span>
                  </li>
                </ul>
                <a href="#contact" className="sol-action-btn">Get Commercial Quote</a>
              </div>
            </div>
          )}

          {activeCategory === "large" && (
            <div className="solution-detail-grid">
              {/* Product Cards Left */}
              <div className="solution-left-cards">
                <div className="compact-prod-card">
                  <div className="compact-prod-card-thumb">
                    <Image
                      unoptimized
                      src="/solar_farm.jpeg"
                      alt="Utility Scale BESS"
                      width={400}
                      height={220}
                      style={{ objectFit: "cover", width: "100%", height: "220px" }}
                    />
                  </div>
                  <div className="compact-prod-card-info">
                    <h4>Utility Scale BESS</h4>
                    <p>Grid-scale renewable storage</p>
                    <span>500kW–2MW · CONTAINER</span>
                  </div>
                </div>

                <div className="compact-prod-card">
                  <div className="compact-prod-card-thumb">
                    <Image
                      unoptimized
                      src="/ev_charging.jpeg"
                      alt="Solar + Storage"
                      width={400}
                      height={220}
                      style={{ objectFit: "cover", width: "100%", height: "220px" }}
                    />
                  </div>
                  <div className="compact-prod-card-info">
                    <h4>Solar + Storage</h4>
                    <p>Curtailment reduction & shift</p>
                    <span>HYBRID · SCALE</span>
                  </div>
                </div>

                <div className="compact-prod-card">
                  <div className="compact-prod-card-thumb">
                    <Image
                      unoptimized
                      src="/portable_rugged.jpeg"
                      alt="Industrial Energy Systems"
                      width={400}
                      height={220}
                      style={{ objectFit: "cover", width: "100%", height: "220px" }}
                    />
                  </div>
                  <div className="compact-prod-card-info">
                    <h4>Industrial Energy Systems</h4>
                    <p>Demand charges & backup</p>
                    <span>CUSTOM · CABINET</span>
                  </div>
                </div>
              </div>

              {/* Details Right */}
              <div className="solution-right-info">
                <div className="sol-range-badge">
                  <span className="sol-range-num">2MW</span>
                  <div className="sol-range-lbl">
                    <span>Power range</span>
                    <span>Utility Series</span>
                  </div>
                </div>
                <h3>Grid Intelligence. Infinite Capacity.</h3>
                <p className="lead">
                  Designed for utilities, heavy industrial facilities, and solar plants. Our containerised MW-scale storage offers grid synchronization, frequency regulation, and ancillary power services with robust safety architectures.
                </p>
                <ul className="sol-bullets">
                  <li>
                    <ShieldCheck size={18} color="#00b8c4" />
                    <span>High round-trip efficiency (RTE ≥ 93%) on battery packs</span>
                  </li>
                  <li>
                    <ShieldCheck size={18} color="#00b8c4" />
                    <span>SCADA and PLC control with Modbus, DNP3, and IEC 61850 support</span>
                  </li>
                  <li>
                    <ShieldCheck size={18} color="#00b8c4" />
                    <span>Liquid cooled batteries for extreme environments (-20°C to +55°C)</span>
                  </li>
                  <li>
                    <ShieldCheck size={18} color="#00b8c4" />
                    <span>Full PLI compliance and indigenously designed BMS software</span>
                  </li>
                  <li>
                    <ShieldCheck size={18} color="#00b8c4" />
                    <span>Containerised IP65 enclosure with HVAC and fire suppression systems</span>
                  </li>
                </ul>
                <a href="#contact" className="sol-action-btn">Get Project Quote</a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* EMS PORTAL SECTION */}
      <section id="portal" className="portal-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: "left", marginLeft: "0", marginRight: "auto", maxWidth: "800px", marginBottom: "3.5rem" }}>
            <span className="section-badge" style={{ color: "#0F8B91", fontWeight: 700 }}>SAAPHZONE EMS WEB PORTAL</span>
            <h2 className="section-title" style={{ color: "#0C2340" }}>Monitor. Control. Optimise. From Anywhere.</h2>
            <p className="section-subtitle" style={{ color: "#475569", margin: "0" }}>
              Our cloud-based Energy Management System portal gives you real-time visibility of every Saaphzone BESS installation — from a single home unit to a fleet of project systems.
            </p>
          </div>

          <div className="portal-wrapper">
            {/* Dark Top Header Bar */}
            <div className="portal-header-bar">
              <div className="portal-header-title">
                <span>⚡</span> Saaphzone EMS — Energy Management Portal
              </div>
              <div className="portal-header-status">
                ● All Systems Operational
              </div>
            </div>

            {/* Sidebar + Main Grid */}
            <div className="portal-body-wrapper">
              {/* Sidebar */}
              <aside className="portal-sidebar">
                <ul className="portal-menu">
                  <li className="active">📊 Dashboard</li>
                  <li>🔋 Battery Status</li>
                  <li>☀️ Solar Analytics</li>
                  <li>⚡ Grid Interface</li>
                  <li>🚗 EV Charging</li>
                  <li>📈 Energy Reports</li>
                  <li>🔔 Alerts</li>
                  <li>⚙️ Settings</li>
                </ul>
              </aside>

              {/* Dashboard Content */}
              <div className="portal-content">
                {/* 3 Metric Cards */}
                <div className="metrics-grid">
                  <div className="metric-card">
                    <div className="metric-label">Current Output</div>
                    <div className="metric-value">42.7 <span style={{ fontSize: "1rem", fontWeight: 700 }}>kW</span></div>
                    <div className="metric-change">↑ 12% vs yesterday</div>
                  </div>

                  <div className="metric-card">
                    <div className="metric-label">Battery State</div>
                    <div className="metric-value">87 <span style={{ fontSize: "1.05rem", fontWeight: 700 }}>% SoC</span></div>
                    <div className="metric-change">Charging from Solar</div>
                  </div>

                  <div className="metric-card">
                    <div className="metric-label">Energy Today</div>
                    <div className="metric-value">318 <span style={{ fontSize: "1rem", fontWeight: 700 }}>kWh</span></div>
                    <div className="metric-change">↑ 8% vs last week</div>
                  </div>
                </div>

                {/* Curve Power Flow Chart */}
                <div className="chart-card">
                  <div className="chart-header">
                    <div className="chart-title">24-Hour Power Flow</div>
                    <div className="chart-legends">
                      <div className="chart-legend-item">
                        <span style={{ color: "#00b8c4", fontSize: "0.85rem" }}>●</span> Solar Input
                      </div>
                      <div className="chart-legend-item">
                        <span style={{ color: "#f97316", fontSize: "0.85rem" }}>●</span> Load
                      </div>
                      <div className="chart-legend-item">
                        <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>●</span> Grid
                      </div>
                    </div>
                  </div>

                  {/* Responsive SVG Chart */}
                  <div className="chart-svg-container">
                    <svg width="100%" height="100%" viewBox="0 0 800 160" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="solarGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(0, 184, 196, 0.25)" />
                          <stop offset="100%" stopColor="rgba(0, 184, 196, 0)" />
                        </linearGradient>
                      </defs>

                      {/* Grid Lines */}
                      <line x1="0" y1="40" x2="800" y2="40" stroke="rgba(12, 35, 64, 0.03)" strokeWidth="1" />
                      <line x1="0" y1="80" x2="800" y2="80" stroke="rgba(12, 35, 64, 0.03)" strokeWidth="1" />
                      <line x1="0" y1="120" x2="800" y2="120" stroke="rgba(12, 35, 64, 0.03)" strokeWidth="1" />

                      {/* Curves */}
                      <path d="M 0 140 Q 200 140 300 100 T 400 40 T 500 100 Q 600 140 800 140 L 800 160 L 0 160 Z" fill="url(#solarGrad)" />
                      <path d="M 0 140 Q 200 140 300 100 T 400 40 T 500 100 Q 600 140 800 140" fill="none" stroke="#00b8c4" strokeWidth="2.5" />

                      <path d="M 0 110 Q 200 110 400 75 T 800 100" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5" />
                    </svg>
                  </div>

                  <div className="chart-timeline">
                    <span className="chart-time-label">00:00</span>
                    <span className="chart-time-label">06:00</span>
                    <span className="chart-time-label">12:00</span>
                    <span className="chart-time-label">18:00</span>
                    <span className="chart-time-label">24:00</span>
                  </div>
                </div>

                {/* Bottom 3 Device Progress Bars */}
                <div className="devices-grid">
                  <div className="device-card">
                    <div className="device-title-row">
                      <div className="device-title">SAAPH-R2 · Unit A1</div>
                    </div>
                    <div className="device-progress-bg">
                      <div className="device-progress-fill" style={{ width: "87%" }}></div>
                    </div>
                    <div className="device-meta-row">
                      <span>87% SoC</span>
                      <span className="device-status-lbl">● ONLINE</span>
                    </div>
                  </div>

                  <div className="device-card">
                    <div className="device-title-row">
                      <div className="device-title">SAAPH-C1 · Unit B3</div>
                    </div>
                    <div className="device-progress-bg">
                      <div className="device-progress-fill" style={{ width: "62%", backgroundColor: "#3b82f6" }}></div>
                    </div>
                    <div className="device-meta-row">
                      <span>62% SoC</span>
                      <span className="device-status-lbl">● ONLINE</span>
                    </div>
                  </div>

                  <div className="device-card">
                    <div className="device-title-row">
                      <div className="device-title">SAAPH-P1 · Container 1</div>
                    </div>
                    <div className="device-progress-bg">
                      <div className="device-progress-fill" style={{ width: "94%" }}></div>
                    </div>
                    <div className="device-meta-row">
                      <span>94% SoC</span>
                      <span className="device-status-lbl">● ONLINE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Info Panel Left */}
            <div className="contact-info-panel">
              <span className="section-badge" style={{ color: "#00b8c4", fontWeight: 700 }}>GET IN TOUCH</span>
              <h3>Talk to Our Energy Solutions Team</h3>

              <h4 style={{ color: "var(--white)", fontSize: "1.2rem", fontWeight: 800, marginTop: "2.5rem", marginBottom: "0.75rem", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Saaphzone Technologies LLP
              </h4>
              <p className="lead">
                We work with homeowners, businesses, solar developers, and government project teams across India. Reach out for a technical consultation, site assessment, or commercial proposal.
              </p>

              <div className="contact-list">
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-item-text">
                    <h4>Registered Office</h4>
                    <p>Plot No. 80, Udyog Vihar Phase-1, Gurugram, Haryana – 122016</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-item-text">
                    <h4>Email</h4>
                    <p>info@saaphzone.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Globe size={20} />
                  </div>
                  <div className="contact-item-text">
                    <h4>EMS Portal</h4>
                    <p>portal.saaphzone.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Landmark size={20} />
                  </div>
                  <div className="contact-item-text">
                    <h4>Technology</h4>
                    <p>Indigenous BESS · EMS · PCD — All Designed & Made in India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Proposal Card Right */}
            <div className="proposal-card">
              <h3>Request a Proposal</h3>

              {isSubmitted ? (
                <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem", color: "#00b8c4" }}>✓</div>
                  <h4 style={{ color: "white", fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.5rem" }}>Enquiry Submitted!</h4>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>Thank you. Our energy team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row-2col">
                    <div className="form-group">
                      <label htmlFor="form-name">Name</label>
                      <input type="text" id="form-name" placeholder="Your full name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="form-org">Organisation</label>
                      <input type="text" id="form-org" placeholder="Company / Individual" required />
                    </div>
                  </div>

                  <div className="form-row-2col">
                    <div className="form-group">
                      <label htmlFor="form-email">Email</label>
                      <input type="email" id="form-email" placeholder="your@email.com" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="form-phone">Phone</label>
                      <input type="text" id="form-phone" placeholder="+91 XXXXX XXXXX" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-solution">Solution Category</label>
                    <select id="form-solution" required defaultValue="residential">
                      <option value="residential">Residential BESS (2.5–15 kW)</option>
                      <option value="commercial">Commercial BESS (30–60 kW)</option>
                      <option value="large">Large Project / Solar Plant (100 kW – 2 MW)</option>
                      <option value="ems">EMS / Software Only</option>
                      <option value="ev">EV Charging + BESS</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-req">Requirements / Location</label>
                    <textarea id="form-req" rows={4} placeholder="Describe your energy requirement, location, and any existing solar setup..." required></textarea>
                  </div>

                  <button type="submit" className="form-submit-btn">
                    Send Enquiry →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
