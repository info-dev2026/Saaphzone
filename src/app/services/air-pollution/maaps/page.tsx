"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Activity, ShieldCheck, Cpu } from "lucide-react";

export default function MaapsPage() {
  const [aqi, setAqi] = useState(28);
  const [pm25, setPm25] = useState(12);
  const [pm10, setPm10] = useState(18);

  // Live ticking reading simulation for the IoT mobile app mockup
  useEffect(() => {
    const interval = setInterval(() => {
      const deltaAqi = Math.floor(Math.random() * 5) - 2; // -2 to +2
      const deltaPm25 = Math.floor(Math.random() * 3) - 1; // -1 to +1
      const deltaPm10 = Math.floor(Math.random() * 4) - 2; // -2 to +2

      setAqi((prev) => Math.max(20, Math.min(45, prev + deltaAqi)));
      setPm25((prev) => Math.max(8, Math.min(22, prev + deltaPm25)));
      setPm10((prev) => Math.max(12, Math.min(28, prev + deltaPm10)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="maaps-page-container">
      {/* Scope custom styling inline to avoid global stylesheet conflicts */}
      <style dangerouslySetInnerHTML={{ __html: `
        .maaps-page-container {
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

        .maaps-page-container .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 5%;
        }

        .maaps-page-container .section-pad {
          padding: 5.5rem 0;
        }

        .maaps-page-container .sec-label {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--teal-light);
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .maaps-page-container .sec-label::before {
          content: '';
          width: 28px;
          height: 2px;
          background: var(--teal-light);
        }

        .maaps-page-container .sec-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.8rem, 3.2vw, 2.8rem);
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
          color: #FFFFFF;
        }

        .maaps-page-container .sec-body {
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
          max-width: 580px;
        }

        .maaps-page-container .divider {
          width: 48px;
          height: 3px;
          background: linear-gradient(90deg, var(--teal), var(--sky));
          border-radius: 2px;
          margin: 1.25rem 0 1.75rem;
        }

        .maaps-page-container .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
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

        .maaps-page-container .btn-teal {
          background: var(--teal);
          color: var(--white);
        }

        .maaps-page-container .btn-teal:hover {
          background: var(--teal-light);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(23, 184, 191, 0.35);
        }

        .maaps-page-container .btn-outline {
          background: transparent;
          color: var(--white);
          border: 2px solid rgba(255, 255, 255, 0.25);
        }

        .maaps-page-container .btn-outline:hover {
          border-color: var(--teal-light);
          color: var(--teal-light);
          transform: translateY(-2px);
        }

        .maaps-page-container .btn-white {
          background: var(--white);
          color: var(--navy-dark);
        }

        .maaps-page-container .btn-white:hover {
          opacity: 0.95;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 255, 255, 0.15);
        }

        /* ---------- MAIN HEADER / NAV ---------- */
        .maaps-page-container nav {
          position: sticky;
          top: 0;
          z-index: 9990;
          background: rgba(7, 22, 40, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(23, 184, 191, 0.18);
        }

        .maaps-page-container nav .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 80px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 5%;
        }

        .maaps-page-container nav .sub-nav-links {
          display: flex;
          gap: 2rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .maaps-page-container nav .sub-nav-links a {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
          transition: color 0.2s;
          text-decoration: none;
        }

        .maaps-page-container nav .sub-nav-links a:hover {
          color: var(--teal-light);
        }

        .maaps-page-container nav .sub-nav-cta {
          background: #00b8c4;
          color: var(--white);
          padding: 0.68rem 1.6rem;
          border-radius: 8px;
          transition: all 0.25s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.02em;
          text-decoration: none;
          display: inline-block;
          white-space: nowrap;
        }

        .maaps-page-container nav .sub-nav-cta:hover {
          background: #00d8e6;
          box-shadow: 0 4px 14px rgba(0, 184, 196, 0.35);
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .maaps-page-container nav .sub-nav-links {
            gap: 1.25rem;
            overflow-x: auto;
            white-space: nowrap;
            justify-content: flex-start;
            padding: 0.85rem 1.5rem;
            -webkit-overflow-scrolling: touch;
          }
          .maaps-page-container nav .sub-nav-links::-webkit-scrollbar {
            display: none;
          }
        }

        /* HERO */
        .maaps-page-container #hero {
          min-height: calc(100vh - 80px);
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 4rem;
          padding: 6rem 5% 5rem;
          background:
            radial-gradient(ellipse 65% 70% at 85% 40%, rgba(15, 139, 145, 0.14) 0%, transparent 65%),
            linear-gradient(155deg, var(--navy-dark) 0%, var(--navy) 55%, #0D2E55 100%);
          position: relative;
          overflow: hidden;
        }

        .maaps-page-container #hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--teal), var(--sky), var(--teal), transparent);
        }

        .maaps-page-container .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
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
          margin-bottom: 1.25rem;
        }

        .maaps-page-container .hero-badge .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--teal-light);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }

        .maaps-page-container .hero-tagline {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(0.85rem, 1.3vw, 1rem);
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          background: linear-gradient(90deg, var(--teal-light), var(--sky));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .maaps-page-container .hero-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.025em;
          margin-bottom: 1.35rem;
          color: #FFFFFF;
        }

        .maaps-page-container .hero-title .hl {
          color: var(--teal-light);
        }

        .maaps-page-container .hero-sub {
          font-size: 0.98rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.65);
          max-width: 480px;
          margin-bottom: 2.5rem;
        }

        .maaps-page-container .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .maaps-page-container .hero-stats {
          display: flex;
          gap: 2.5rem;
          flex-wrap: wrap;
        }

        .maaps-page-container .hstat-val {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 2rem;
          font-weight: 900;
          color: var(--teal-light);
          line-height: 1;
        }

        .maaps-page-container .hstat-lbl {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.45);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 0.3rem;
        }

        /* FLOW DIAGRAM */
        .maaps-page-container .flow-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .maaps-page-container .flow-box {
          width: 100%;
          max-width: 390px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(23, 184, 191, 0.28);
          border-radius: 18px;
          padding: 1.75rem 1.4rem;
          position: relative;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
        }

        .maaps-page-container .flow-box-title {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--teal);
          color: var(--white);
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          padding: 0.28rem 1rem;
          border-radius: 20px;
          white-space: nowrap;
          text-transform: uppercase;
        }

        .maaps-page-container .air-band {
          text-align: center;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.6rem;
          border-radius: 6px;
        }

        .maaps-page-container .air-dirty {
          background: rgba(220, 60, 60, 0.1);
          color: #FF9898;
          border: 1px solid rgba(220, 60, 60, 0.22);
          margin-bottom: 0.7rem;
        }

        .maaps-page-container .air-clean {
          background: rgba(23, 184, 191, 0.1);
          color: var(--teal-light);
          border: 1px solid rgba(23, 184, 191, 0.28);
          margin-top: 0.7rem;
        }

        .maaps-page-container .fs {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 0.9rem 1rem;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
        }

        .maaps-page-container .fs:hover {
          border-color: rgba(23, 184, 191, 0.4);
          background: rgba(23, 184, 191, 0.06);
        }

        .maaps-page-container .fs-icon {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
        }

        .maaps-page-container .ic1 { background: rgba(79, 200, 212, 0.14); }
        .maaps-page-container .ic2 { background: rgba(255, 200, 50, 0.12); }
        .maaps-page-container .ic3 { background: rgba(180, 100, 255, 0.12); }
        .maaps-page-container .ic4 { background: rgba(23, 184, 191, 0.14); }

        .maaps-page-container .fs-num {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .maaps-page-container .fs-name {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.88rem;
          font-weight: 800;
          margin: 0.1rem 0;
        }

        .maaps-page-container .fs-desc {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.4;
        }

        .maaps-page-container .fs-arrow {
          text-align: center;
          color: var(--teal);
          font-size: 0.85rem;
          margin: 0.1rem 0;
        }

        /* PROBLEM SECTION */
        .maaps-page-container .problem-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4.5rem;
          align-items: start;
        }

        .maaps-page-container .pm-bar {
          margin-bottom: 1.5rem;
        }

        .maaps-page-container .pm-meta {
          display: flex;
          justify-content: space-between;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 0.4rem;
          color: rgba(255, 255, 255, 0.85);
        }

        .maaps-page-container .pm-track {
          height: 8px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .maaps-page-container .pm-fill {
          height: 100%;
          border-radius: 4px;
        }

        .maaps-page-container .f-who {
          width: 2%; /* Representing 5 ug/m3 */
          background: #10B981;
        }

        .maaps-page-container .f-naaqs {
          width: 12%; /* Representing 40 ug/m3 */
          background: #F59E0B;
        }

        .maaps-page-container .f-delhi {
          background: linear-gradient(90deg, #EF4444, #881337);
          animation: fillDelhi 2.5s ease-out forwards;
        }

        @keyframes fillDelhi {
          from { width: 0%; }
          to { width: 100%; }
        }

        .maaps-page-container .gap-item {
          display: flex;
          gap: 1.25rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 1.2rem;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .maaps-page-container .gap-item:hover {
          background: rgba(23, 184, 191, 0.04);
          border-color: rgba(23, 184, 191, 0.25);
          transform: translateX(4px);
        }

        .maaps-page-container .gi-ico {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .maaps-page-container .gi-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--white);
          margin-bottom: 0.25rem;
        }

        .maaps-page-container .gi-text {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
        }

        /* TECHNOLOGY SECTION */
        .maaps-page-container .tech-intro {
          margin-bottom: 3rem;
          text-align: left;
        }

        .maaps-page-container .tech-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .maaps-page-container .tc {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(23, 184, 191, 0.12);
          border-radius: 14px;
          padding: 1.75rem;
          position: relative;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 320px;
        }

        .maaps-page-container .tc:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--teal-light);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(23, 184, 191, 0.15);
        }

        .maaps-page-container .tc-badge {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: rgba(23, 184, 191, 0.15);
          border: 1px solid rgba(23, 184, 191, 0.3);
          color: var(--teal-light);
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }

        .maaps-page-container .tc-ico {
          font-size: 2.2rem;
          margin-bottom: 1.25rem;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
        }

        .maaps-page-container .tc-name {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 1.15rem;
          color: var(--white);
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }

        .maaps-page-container .tc-body {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .maaps-page-container .tc-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .maaps-page-container .pill {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-muted);
          padding: 0.25rem 0.6rem;
          border-radius: 3px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* PERFORMANCE SECTION */
        .maaps-page-container .perf-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4.5rem;
          align-items: start;
        }

        .maaps-page-container .kpi-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        .maaps-page-container .kpi {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          transition: border-color 0.3s;
        }

        .maaps-page-container .kpi:hover {
          border-color: rgba(23, 184, 191, 0.3);
        }

        .maaps-page-container .kpi-v {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 2.2rem;
          font-weight: 900;
          color: var(--teal-light);
          line-height: 1;
          margin-bottom: 0.25rem;
        }

        .maaps-page-container .kpi-u {
          font-size: 0.75rem;
          color: var(--sky);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .maaps-page-container .kpi-l {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .maaps-page-container .perf-table {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          overflow: hidden;
        }

        .maaps-page-container .pt-row {
          display: flex;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .maaps-page-container .pt-row:last-child {
          border-bottom: none;
        }

        .maaps-page-container .pt-head {
          background: rgba(255, 255, 255, 0.04);
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 0.9rem;
          color: var(--white);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-bottom: 1.5px solid rgba(23, 184, 191, 0.22);
        }

        .maaps-page-container .pt-lbl {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .maaps-page-container .pt-val {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--teal-light);
        }

        /* IOT SECTION */
        .maaps-page-container .iot-layout {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 4.5rem;
          align-items: center;
        }

        .maaps-page-container .iot-feats {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-top: 2rem;
        }

        .maaps-page-container .iot-f {
          display: flex;
          gap: 1.25rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 1.25rem;
          transition: all 0.3s;
        }

        .maaps-page-container .iot-f:hover {
          background: rgba(23, 184, 191, 0.03);
          border-color: rgba(23, 184, 191, 0.25);
          transform: translateX(5px);
        }

        .maaps-page-container .iot-icon {
          font-size: 1.8rem;
          flex-shrink: 0;
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 8px;
        }

        .maaps-page-container .iot-t {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 0.95rem;
          color: var(--white);
          margin-bottom: 0.3rem;
        }

        .maaps-page-container .iot-d {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.5;
        }

        /* MOBILE APP MOCKUP */
        .maaps-page-container .app-mock {
          background: #030a12;
          border: 3px solid rgba(23, 184, 191, 0.4);
          border-radius: 36px;
          padding: 2.2rem 1.75rem 1.75rem;
          max-width: 320px;
          margin: 0 auto;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 40px rgba(23, 184, 191, 0.15);
          position: relative;
        }

        .maaps-page-container .app-mock::before {
          content: '';
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 18px;
          background: #000;
          border-radius: 10px;
        }

        .maaps-page-container .am-hdr {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
          margin-bottom: 2rem;
        }

        .maaps-page-container .am-brand {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: rgba(255, 255, 255, 0.9);
        }

        .maaps-page-container .am-live {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 800;
          color: #10B981;
          letter-spacing: 0.05em;
          animation: flashLive 1.5s infinite;
        }

        @keyframes flashLive {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .maaps-page-container .aqi-ring {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: conic-gradient(#10B981 0% 12%, rgba(255, 255, 255, 0.05) 12% 100%);
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 0 20px rgba(16, 185, 129, 0.2), 0 0 20px rgba(16, 185, 129, 0.1);
        }

        .maaps-page-container .aqi-inner {
          width: 124px;
          height: 124px;
          border-radius: 50%;
          background: #071628;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .maaps-page-container .aqi-n {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 2.8rem;
          font-weight: 900;
          color: #10B981;
          line-height: 1;
        }

        .maaps-page-container .aqi-l {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
        }

        .maaps-page-container .aqi-status {
          text-align: center;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 800;
          color: #10B981;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.4rem;
          border-radius: 20px;
          margin-bottom: 1.75rem;
          letter-spacing: 0.02em;
        }

        .maaps-page-container .chips {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .maaps-page-container .chip {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          padding: 0.5rem 0.25rem;
          text-align: center;
        }

        .maaps-page-container .chip-v {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 0.95rem;
          line-height: 1.1;
        }

        .maaps-page-container .cv1 { color: var(--teal-light); }
        .maaps-page-container .cv2 { color: var(--sky); }
        .maaps-page-container .cv3 { color: #E5E7EB; }

        .maaps-page-container .chip-l {
          font-size: 0.55rem;
          color: rgba(255, 255, 255, 0.4);
          margin-top: 0.2rem;
          line-height: 1.2;
        }

        .maaps-page-container .status-panel {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 0.8rem 1rem;
        }

        .maaps-page-container .sp-t {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.9);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 0.3rem;
        }

        .maaps-page-container .sp-rows {
          font-family: monospace;
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
        }

        /* APPLICATIONS SECTION */
        .maaps-page-container .apps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .maaps-page-container .app-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 1.75rem;
          transition: all 0.3s;
        }

        .maaps-page-container .app-card:hover {
          background: rgba(23, 184, 191, 0.03);
          border-color: rgba(23, 184, 191, 0.22);
          transform: translateY(-3px);
        }

        .maaps-page-container .app-ico {
          font-size: 2.2rem;
          margin-bottom: 1rem;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
        }

        .maaps-page-container .app-t {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 1.05rem;
          color: var(--white);
          margin-bottom: 0.5rem;
        }

        .maaps-page-container .app-d {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.6;
        }

        /* MAKE IN INDIA SECTION */
        .maaps-page-container .mii-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 4.5rem;
          align-items: center;
        }

        .maaps-page-container .flag-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(17, 43, 80, 0.4);
          border: 1px solid rgba(245, 158, 11, 0.35);
          border-radius: 6px;
          padding: 0.45rem 1rem;
          margin-bottom: 1.5rem;
        }

        .maaps-page-container .flag-text {
          color: #F59E0B;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .maaps-page-container .mii-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 2.5rem;
        }

        .maaps-page-container .ms {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 1.25rem 1rem;
          text-align: center;
        }

        .maaps-page-container .ms-v {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--teal-light);
          line-height: 1;
          margin-bottom: 0.3rem;
        }

        .maaps-page-container .ms-l {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.3;
        }

        .maaps-page-container .mii-table {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(23, 184, 191, 0.15);
          border-radius: 14px;
          overflow: hidden;
          width: 100%;
        }

        .maaps-page-container .mt-row {
          display: grid;
          grid-template-columns: 2.2fr 2fr 0.8fr;
          padding: 0.9rem 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 0.82rem;
        }

        .maaps-page-container .mt-row:last-child {
          border-bottom: none;
        }

        .maaps-page-container .mt-head {
          background: rgba(255, 255, 255, 0.04);
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 0.75rem;
          color: var(--teal-light);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-bottom: 1.5px solid rgba(23, 184, 191, 0.22);
        }

        .maaps-page-container .mt-col {
          color: rgba(255, 255, 255, 0.8);
          font-family: 'Open Sans', sans-serif;
          display: flex;
          align-items: center;
        }

        .maaps-page-container .mt-col-pct {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        /* CTA SECTION */
        .maaps-page-container #cta {
          background: linear-gradient(135deg, rgba(15, 139, 145, 0.95) 0%, rgba(12, 35, 64, 0.98) 100%);
          padding: 6.5rem 0;
          text-align: center;
          position: relative;
          border-top: 1px solid rgba(23, 184, 191, 0.18);
        }

        .maaps-page-container .cta-tag {
          display: inline-block;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--white);
          border: 1px solid rgba(255, 255, 255, 0.35);
          padding: 0.35rem 0.85rem;
          border-radius: 4px;
          margin-bottom: 1.75rem;
        }

        .maaps-page-container .cta-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 900;
          line-height: 1.2;
          color: var(--white);
          margin-bottom: 1.25rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          letter-spacing: -0.02em;
        }

        .maaps-page-container .cta-body {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 2rem;
          max-width: 750px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .maaps-page-container .cta-pills {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
          max-width: 950px;
          margin-left: auto;
          margin-right: auto;
        }

        .maaps-page-container .cta-pill {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.4rem 0.9rem;
          border-radius: 4px;
          letter-spacing: 0.02em;
        }

        .maaps-page-container .cta-actions {
          display: flex;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 991px) {
          .maaps-page-container #hero {
            grid-template-columns: 1fr;
            gap: 3.5rem;
            text-align: center;
            padding-top: 4rem;
          }
          .maaps-page-container .hero-sub {
            margin-left: auto;
            margin-right: auto;
          }
          .maaps-page-container .hero-actions {
            justify-content: center;
          }
          .maaps-page-container .hero-stats {
            justify-content: center;
          }
          .maaps-page-container .problem-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          .maaps-page-container .tech-intro {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
          }
          .maaps-page-container .tech-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .maaps-page-container .tc {
            min-height: auto;
          }
          .maaps-page-container .perf-layout {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          .maaps-page-container .iot-layout {
            grid-template-columns: 1fr;
            gap: 3.5rem;
            text-align: center;
          }
          .maaps-page-container .iot-f {
            text-align: left;
          }
          .maaps-page-container .apps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .maaps-page-container .mii-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
        }

        @media (max-width: 640px) {
          .maaps-page-container .apps-grid {
            grid-template-columns: 1fr;
          }
          .maaps-page-container .mii-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      ` }} />

      {/* Local Page Main Navbar */}
      <nav>
        <div className="container">
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
                <span style={{ fontWeight: 800, color: "#ffffff", fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", fontSize: "1.35rem", letterSpacing: "-0.02em" }}>
                  Saaphzone
                </span>
                <span style={{ fontWeight: 600, color: "var(--teal-light)", fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase" }}>
                  Technologies
                </span>
              </div>
            </Link>
          </div>

          <div className="sub-nav-links">
            <a href="#technology">Technology</a>
            <a href="#performance">Performance</a>
            <a href="#iot">IoT Platform</a>
            <a href="#applications">Applications</a>
            <a href="#mii">Make in India</a>
          </div>

          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link href="/contact" className="sub-nav-cta">Enquire Now</Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="hero-sec">
        <div id="hero">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ paddingLeft: "5%", paddingRight: "2%" }}
          >
            <div className="hero-badge">
              <span className="dot"></span>
              Patent-Filed Innovation · Make in India
            </div>

            <div className="hero-tagline">
              Breathe Clean · Live Healthy
            </div>

            <h1 className="hero-title">
              India's First<br />
              <span className="hl">4-Stage Open Ambient</span><br />
              Air Purification System
            </h1>

            <p className="hero-sub">
              MAAPS — Advanced Multi-Stage Technology for Continuous
              Air Purification in Open Ambient Spaces. Engineered in Delhi,
              built for India's toughest air quality challenges.
            </p>

            <div className="hero-actions">
              <a href="#technology" className="btn btn-teal">
                SEE THE PRODUCT
              </a>
              <a href="#performance" className="btn btn-outline">
                VIEW PERFORMANCE
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <div className="hstat-val">&gt;99.5%</div>
                <div className="hstat-lbl">PM2.5 Removal</div>
              </div>
              <div>
                <div className="hstat-val">&gt;80%</div>
                <div className="hstat-lbl">Indigenous Content</div>
              </div>
              <div>
                <div className="hstat-val">4</div>
                <div className="hstat-lbl">Purification Stages</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="flow-wrap"
            style={{ paddingRight: "5%" }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flow-box">
              <div className="flow-box-title">
                MAAPS · Airflow Architecture
              </div>

              <div className="air-band air-dirty">
                ⬇ Polluted Ambient Air Inlet
              </div>

              <div className="fs">
                <div className="fs-icon ic1">🌫️</div>
                <div>
                  <div className="fs-num">Stage 01</div>
                  <div className="fs-name">Pre-Filtration</div>
                  <div className="fs-desc">
                    G4 + F7 + HEPA H13 · Removes PM10 & PM2.5
                  </div>
                </div>
              </div>

              <div className="fs-arrow">↓</div>

              <div className="fs">
                <div className="fs-icon ic2">⚡</div>
                <div>
                  <div className="fs-num">Stage 02</div>
                  <div className="fs-name">Electrostatic Precipitator</div>
                  <div className="fs-desc">
                    12–14 kV ionization · Captures Fine & Ultrafine Particles
                  </div>
                </div>
              </div>

              <div className="fs-arrow">↓</div>

              <div className="fs">
                <div className="fs-icon ic3">🔬</div>
                <div>
                  <div className="fs-num">Stage 03</div>
                  <div className="fs-name">UV Germicidal Irradiation</div>
                  <div className="fs-desc">
                    253.7 nm UV-C · Destroys Bacteria, Viruses & VOCs
                  </div>
                </div>
              </div>

              <div className="fs-arrow">↓</div>

              <div className="fs">
                <div className="fs-icon ic4">✨</div>
                <div>
                  <div className="fs-num">Stage 04</div>
                  <div className="fs-name">Negative Ionizer</div>
                  <div className="fs-desc">
                    &gt;10M ions/cm³ · Neutralizes & Removes PM0.3 & Below
                  </div>
                </div>
              </div>

              <div className="air-band air-clean">
                ⬆ Clean Air — Better Life
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT OVERVIEW SECTION */}
      <section id="product-overview" style={{
        padding: "4rem 0",
        background: "rgba(255,255,255,0.01)",
        borderTop: "1px solid rgba(23,184,191,0.15)",
        borderBottom: "1px solid rgba(23,184,191,0.15)"
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "2rem" }}
          >
            <div className="sec-label" style={{ justifyContent: "center" }}>
              MAAPS · Complete Product Overview
            </div>
            <h2 className="sec-title" style={{ color: "#FFFFFF" }}>
              Saaphzone Air Purifier — For Ambient Environment
            </h2>
            <div className="divider" style={{ margin: "1.25rem auto" }}></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid rgba(23,184,191,0.25)",
              boxShadow: "0 8px 60px rgba(0,0,0,0.5)",
            }}
          >
            <Image
              src="/SaaphzoneAirPurifier.jpg"
              alt="Saaphzone MAAPS Air Purifier — Complete Product Overview for Ambient Environment"
              width={1200}
              height={700}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              marginTop: "1.5rem",
              display: "flex",
              justifyContent: "center",
              gap: "2.5rem",
              flexWrap: "wrap",
              borderTop: "1px solid rgba(23,184,191,0.15)",
              paddingTop: "1.5rem"
            }}
          >
            {[
              { icon: "📞", text: "9882810053" },
              { icon: "✉️", text: "sales@saaphzone.com" },
              { icon: "🌐", text: "www.saaphzone.com" },
              { icon: "🇮🇳", text: "Made in India" }
            ].map((item) => (
              <div key={item.text} style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "rgba(255,255,255,0.65)",
                fontSize: "0.85rem",
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section id="problem" className="section-pad">
        <div className="container">
          <div className="problem-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sec-label">The Crisis We Solve</div>
              <h2 className="sec-title">
                Delhi's Air Is Not an Inconvenience. It's an Emergency.
              </h2>
              <div className="divider"></div>

              <p className="sec-body">
                Every winter, Delhi's PM2.5 levels breach 500 µg/m³ —
                over <strong>100× the WHO guideline</strong>.
                Conventional indoor purifiers cannot function outdoors.
                No single-stage technology addresses the full spectrum simultaneously.
              </p>

              <div style={{ marginTop: "2rem" }}>
                <div className="pm-bar">
                  <div className="pm-meta">
                    <span>WHO Annual Guideline</span>
                    <span>5 µg/m³</span>
                  </div>
                  <div className="pm-track">
                    <div className="pm-fill f-who"></div>
                  </div>
                </div>

                <div className="pm-bar">
                  <div className="pm-meta">
                    <span>India NAAQS Standard</span>
                    <span>40 µg/m³</span>
                  </div>
                  <div className="pm-track">
                    <div className="pm-fill f-naaqs"></div>
                  </div>
                </div>

                <div className="pm-bar">
                  <div className="pm-meta">
                    <span style={{ color: "#FF9898" }}>
                      Delhi Winter PM2.5 (Peak)
                    </span>
                    <span style={{ color: "#FF9898" }}>
                      500+ µg/m³
                    </span>
                  </div>
                  <div className="pm-track">
                    <div className="pm-fill f-delhi"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sec-label">
                Why Existing Solutions Fall Short
              </div>
              <div className="divider"></div>

              <div className="gap-item">
                <span className="gi-ico">🏠</span>
                <div>
                  <div className="gi-title">Indoor Air Purifiers</div>
                  <div className="gi-text">
                    Require enclosed chambers. Useless in parks,
                    bus stops, and open streets where pollution
                    exposure is highest.
                  </div>
                </div>
              </div>

              <div className="gap-item">
                <span className="gi-ico">💧</span>
                <div>
                  <div className="gi-title">Water-Mist Cannons</div>
                  <div className="gi-text">
                    Temporary suppression only. Do not address PM2.5,
                    ultrafine particles, biological agents, or VOCs.
                  </div>
                </div>
              </div>

              <div className="gap-item">
                <span className="gi-ico">🏗️</span>
                <div>
                  <div className="gi-title">Industrial Smog Towers</div>
                  <div className="gi-text">
                    Cost-prohibitive, infrastructure-heavy,
                    not optimized for Indian meteorological conditions.
                  </div>
                </div>
              </div>

              <div className="gap-item">
                <span className="gi-ico">❌</span>
                <div>
                  <div className="gi-title">
                    No Integrated Outdoor Solution
                  </div>
                  <div className="gi-text">
                    No prior patent in India combines
                    Pre-Filter + ESP + UV-C + Negative Ionizer
                    in one compact outdoor unit.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section id="technology" className="section-pad" style={{ background: "rgba(255, 255, 255, 0.01)" }}>
        <div className="container">
          <div className="tech-intro">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sec-label">Four-Stage Architecture</div>
              <h2 className="sec-title">Every Pollutant. One System.</h2>
              <div className="divider"></div>
              <p className="sec-body">
                MAAPS integrates four sequential purification
                technologies in a single compact housing —
                a first for open ambient outdoor deployment in India.
              </p>
            </motion.div>
          </div>

          <div className="tech-grid">
            <motion.div 
              className="tc"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div>
                <div className="tc-badge">STAGE 01</div>
                <div className="tc-ico">🌫️</div>
                <div className="tc-name">Pre-Filtration System</div>
                <div className="tc-body">
                  A tri-layer filter cassette forms the first line of defence.
                  G4 polypropylene coarse filter intercepts PM10.
                  F7 micro-glass fibre filter captures the 1–10 µm range.
                  HEPA H13 layer achieves 99.97% efficiency at 0.3 µm —
                  protecting downstream stages and extending maintenance intervals.
                  Front-loading, tool-free cassette allows rapid on-site replacement.
                </div>
              </div>
              <div className="tc-pills">
                <span className="pill">HEPA H13 · EN1822</span>
                <span className="pill">G4 + F7 Layers</span>
                <span className="pill">99.97% @ 0.3µm</span>
                <span className="pill">80–150 Pa Resistance</span>
              </div>
            </motion.div>

            <motion.div 
              className="tc"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <div className="tc-badge">STAGE 02</div>
                <div className="tc-ico">⚡</div>
                <div className="tc-name">Electrostatic Precipitator (ESP)</div>
                <div className="tc-body">
                  A 12–14 kV corona discharge ionizer charges all passing aerosol
                  particles. Alternating high-voltage (6–8 kV) and grounded aluminium
                  collector plates capture them electrostatically with &gt;95% efficiency.
                  An automated motorized wiper self-cleans collector plates on a
                  programmable schedule — eliminating frequent manual maintenance
                  for outdoor deployments.
                </div>
              </div>
              <div className="tc-pills">
                <span className="pill">12–14 kV Ionizer</span>
                <span className="pill">&gt;95% Collection</span>
                <span className="pill">Self-Cleaning ESP</span>
                <span className="pill">SS316 Electrodes</span>
              </div>
            </motion.div>

            <motion.div 
              className="tc"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div>
                <div className="tc-badge">STAGE 03</div>
                <div className="tc-ico">🔬</div>
                <div className="tc-name">UV Germicidal + TiO₂ Photocatalysis</div>
                <div className="tc-body">
                  UV-C lamps at 253.7 nm deliver minimum 40 mJ/cm² dosage —
                  achieving log-4 (99.99%) inactivation of bacteria, viruses,
                  and mould spores. A TiO₂ photocatalytic honeycomb substrate
                  decomposes formaldehyde, benzene, toluene, NOx, and VOCs
                  through photocatalytic oxidation.
                </div>
              </div>
              <div className="tc-pills">
                <span className="pill">253.7 nm UV-C</span>
                <span className="pill">99.99% Pathogen Kill</span>
                <span className="pill">TiO₂ Photocatalyst</span>
                <span className="pill">&lt;0.05 ppm Ozone</span>
              </div>
            </motion.div>

            <motion.div 
              className="tc"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div>
                <div className="tc-badge">STAGE 04</div>
                <div className="tc-ico">✨</div>
                <div className="tc-name">Negative Ion Generator</div>
                <div className="tc-body">
                  A carbon fibre brush array emits over 20 million negative ions
                  per cm³/second, attaching to ultrafine PM0.3 particles in
                  surrounding air. Charged particles agglomerate and settle —
                  effectively cleaning a 5+ metre radius around the unit.
                </div>
              </div>
              <div className="tc-pills">
                <span className="pill">&gt;20M ions/cm³/s</span>
                <span className="pill">5m Ambient Radius</span>
                <span className="pill">3–5W Per Module</span>
                <span className="pill">&lt;0.02 ppm Ozone</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE SECTION */}
      <section id="performance" className="section-pad">
        <div className="container">
          <div className="perf-layout">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sec-label">Verified Performance</div>
              <h2 className="sec-title">Numbers That Define Clean Air</h2>
              <div className="divider"></div>
              <p className="sec-body">
                Every specification reflects tested and validated
                operating parameters across all four stages in
                combined configuration.
              </p>

              <div className="kpi-grid">
                <div className="kpi">
                  <div className="kpi-v">&gt;99.5%</div>
                  <div className="kpi-u">Efficiency</div>
                  <div className="kpi-l">PM2.5 Removal</div>
                </div>
                <div className="kpi">
                  <div className="kpi-v">500</div>
                  <div className="kpi-u">m³ / hour</div>
                  <div className="kpi-l">Min. CADR</div>
                </div>
                <div className="kpi">
                  <div className="kpi-v">&gt;99.99%</div>
                  <div className="kpi-u">Log-4 Kill</div>
                  <div className="kpi-l">Pathogen Reduction</div>
                </div>
                <div className="kpi">
                  <div className="kpi-v">200m²</div>
                  <div className="kpi-u">Outdoor Zone</div>
                  <div className="kpi-l">Max. Coverage</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="perf-table">
                <div className="pt-row pt-head">
                  <span>Parameter</span>
                  <span>Specification</span>
                </div>

                <div className="pt-row">
                  <span className="pt-lbl">PM10 Removal (In-duct)</span>
                  <span className="pt-val">&gt;99.9%</span>
                </div>
                <div className="pt-row">
                  <span className="pt-lbl">PM2.5 Removal (In-duct)</span>
                  <span className="pt-val">&gt;99.5%</span>
                </div>
                <div className="pt-row">
                  <span className="pt-lbl">Bacteria/Virus Kill Rate</span>
                  <span className="pt-val">&gt;99.99% (log-4)</span>
                </div>
                <div className="pt-row">
                  <span className="pt-lbl">VOC Decomposition</span>
                  <span className="pt-val">&gt;70%</span>
                </div>
                <div className="pt-row">
                  <span className="pt-lbl">Negative Ion Output</span>
                  <span className="pt-val">&gt;10M ions/cm³</span>
                </div>
                <div className="pt-row">
                  <span className="pt-lbl">Clean Air Delivery Rate</span>
                  <span className="pt-val">500 m³/hr min.</span>
                </div>
                <div className="pt-row">
                  <span className="pt-lbl">Effective Outdoor Coverage</span>
                  <span className="pt-val">50–200 m²</span>
                </div>
                <div className="pt-row">
                  <span className="pt-lbl">Max Power Consumption</span>
                  <span className="pt-val">300 W</span>
                </div>
                <div className="pt-row">
                  <span className="pt-lbl">Eco Mode Power</span>
                  <span className="pt-val">80 W</span>
                </div>
                <div className="pt-row">
                  <span className="pt-lbl">Noise Level (Max Speed)</span>
                  <span className="pt-val">&lt;55 dB(A) @ 1m</span>
                </div>
                <div className="pt-row">
                  <span className="pt-lbl">Ingress Protection</span>
                  <span className="pt-val">IP54 / IP65 option</span>
                </div>
                <div className="pt-row">
                  <span className="pt-lbl">Operating Temperature</span>
                  <span className="pt-val">–5°C to +50°C</span>
                </div>
                <div className="pt-row">
                  <span className="pt-lbl">Ozone at Outlet</span>
                  <span className="pt-val">&lt;0.05 ppm</span>
                </div>
                <div className="pt-row">
                  <span className="pt-lbl">ESP Collection Efficiency</span>
                  <span className="pt-val">&gt;95% @ &gt;0.3µm</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IoT SECTION */}
      <section id="iot" className="section-pad" style={{ background: "rgba(255, 255, 255, 0.01)" }}>
        <div className="container">
          <div className="iot-layout">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sec-label">Saaphzone AirControl Platform</div>
              <h2 className="sec-title">Smart Monitoring. Real-Time Air Quality Data.</h2>
              <div className="divider"></div>
              <p className="sec-body">
                Every MAAPS unit ships IoT-ready with Wi-Fi and 4G/LTE
                connectivity, feeding live air quality data to the
                Saaphzone AirControl mobile app.
              </p>

              <div className="iot-feats">
                <div className="iot-f">
                  <div className="iot-icon">📡</div>
                  <div>
                    <div className="iot-t">Live PM2.5 / PM10 Monitoring</div>
                    <div className="iot-d">
                      Laser particle counter measures inlet and outlet
                      concentrations continuously, tracking purification
                      efficiency in real time.
                    </div>
                  </div>
                </div>

                <div className="iot-f">
                  <div className="iot-icon">⚙️</div>
                  <div>
                    <div className="iot-t">Adaptive Fan Speed Control</div>
                    <div className="iot-d">
                      PWM-controlled EC brushless fans auto-adjust based
                      on ambient AQI — maximum power when pollution peaks,
                      eco mode when air clears.
                    </div>
                  </div>
                </div>

                <div className="iot-f">
                  <div className="iot-icon">🔔</div>
                  <div>
                    <div className="iot-t">Predictive Maintenance Alerts</div>
                    <div className="iot-d">
                      Filter life tracking, ESP plate cleaning reminders,
                      UV lamp counters, and fault diagnostics pushed to the
                      app before issues arise.
                    </div>
                  </div>
                </div>

                <div className="iot-f">
                  <div className="iot-icon">🏭</div>
                  <div>
                    <div className="iot-t">Industrial Integration via Modbus</div>
                    <div className="iot-d">
                      RS-485 Modbus RTU enables seamless integration with
                      SCADA systems, smart city dashboards, and CPCB
                      monitoring networks.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* App Mockup with simulated live ticking readouts */}
              <div className="app-mock">
                <div className="am-hdr">
                  <div className="am-brand">Saaphzone AirControl</div>
                  <div className="am-live">● LIVE</div>
                </div>

                <div className="aqi-ring" style={{
                  background: `conic-gradient(#10B981 0% ${aqi * 1.5}%, rgba(255,255,255,0.05) ${aqi * 1.5}% 100%)`
                }}>
                  <div className="aqi-inner">
                    <div className="aqi-n">{aqi}</div>
                    <div className="aqi-l">AQI</div>
                  </div>
                </div>

                <div className="aqi-status">
                  ✅ Air Quality : GOOD
                </div>

                <div className="chips">
                  <div className="chip">
                    <div className="chip-v cv1">{pm25}</div>
                    <div className="chip-l">PM2.5 µg/m³</div>
                  </div>
                  <div className="chip">
                    <div className="chip-v cv2">{pm10}</div>
                    <div className="chip-l">PM10 µg/m³</div>
                  </div>
                  <div className="chip">
                    <div className="chip-v cv3">26°</div>
                    <div className="chip-l">Temp/58%RH</div>
                  </div>
                </div>

                <div className="status-panel">
                  <div className="sp-t">System Status</div>
                  <div className="sp-rows">
                    Stage 1 Pre-Filter : ✅ Operating<br />
                    Stage 2 ESP : ✅ 12.4 kV Active<br />
                    Stage 3 UV-C : ✅ 9,240 hr lamp<br />
                    Stage 4 Ionizer : ✅ Ions Active
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS SECTION */}
      <section id="applications" className="section-pad">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <div className="sec-label" style={{ justifyContent: "center" }}>Wide Applications</div>
            <h2 className="sec-title">Built for India's Most Polluted Spaces</h2>
            <div className="divider" style={{ margin: "1.25rem auto" }}></div>
            <p className="sec-body" style={{ margin: "0 auto" }}>
              Available in wall-mount, pole-mount, and standalone
              pedestal configurations with IP54 weather protection —
              ready for immediate outdoor deployment across India.
            </p>
          </motion.div>

          <div className="apps-grid">
            {[
              { ico: "🎓", t: "Schools", d: "Ensure healthy air for our future generation. Protecting children during outdoor breaks, sports, and morning assemblies." },
              { ico: "🏥", t: "Hospitals", d: "Cleaner air for faster recovery and well-being. Protecting immunocompromised patients at OPD areas, emergency entrances, and outdoor waiting zones." },
              { ico: "🚆", t: "Railway Stations", d: "Purifying air in high-footfall public areas. Continuous clean air across platforms and commuter concourses." },
              { ico: "🌳", t: "Parks & Gardens", d: "Clean, fresh air for recreation and relaxation. Enabling safe outdoor leisure during high-pollution winter months." },
              { ico: "🚌", t: "Bus Stands & Terminals", d: "Improved air quality in crowded areas. Reducing PM exposure for commuters." },
              { ico: "🛒", t: "Markets & Commercial Areas", d: "Cleaner air for vendors and shoppers at open-air markets and commercial complexes." }
            ].map((app, index) => (
              <motion.div 
                className="app-card"
                key={app.t}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="app-ico">{app.ico}</div>
                <div className="app-t">{app.t}</div>
                <div className="app-d">{app.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MAKE IN INDIA SECTION */}
      <section id="mii" className="section-pad" style={{ background: "rgba(255, 255, 255, 0.01)" }}>
        <div className="container">
          <div className="mii-layout">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flag-badge">
                <div className="flag-text">
                  <span style={{ display: "inline-flex", alignItems: "center" }}>
                    <svg width="20" height="13" viewBox="0 0 225 150" style={{ borderRadius: "2px" }}>
                      <rect width="225" height="150" fill="#128807"/>
                      <rect width="225" height="100" fill="#ffffff"/>
                      <rect width="225" height="50" fill="#FF9933"/>
                      <circle cx="112.5" cy="75" r="20" fill="none" stroke="#000080" strokeWidth="2"/>
                      <circle cx="112.5" cy="75" r="3.5" fill="#000080"/>
                      <path d="M112.5 55v40M92.5 75h40M98.4 60.9l28.2 28.2M98.4 89.1l28.2-28.2M102.5 56.4l20 37.2M102.5 93.6l20-37.2M122.5 56.4l-20 37.2M122.5 93.6l-20-37.2" stroke="#000080" strokeWidth="1.2"/>
                    </svg>
                  </span>
                  <span>Make in India • Atmanirbhar Bharat</span>
                </div>
              </div>

              <div className="sec-label">Indigenous Manufacturing</div>
              <h2 className="sec-title">Designed in Delhi. Built for Bharat.</h2>
              <div className="divider"></div>

              <p className="sec-body" style={{ marginBottom: "1.5rem" }}>
                MAAPS is conceived, engineered, and manufactured entirely in India by
                Saaphzone Technologies LLP. Every component — from MS housing fabricated
                in Faridabad to PCBs designed by Saaphzone and made in Noida — reflects a
                deliberate commitment to Indigenous supply chains under Make in India and
                Atmanirbhar Bharat initiatives.
              </p>

              <p className="sec-body" style={{ marginBottom: "2rem" }}>
                With over 80% indigenous content by value, MAAPS is registered under the
                Small Entity / Startup category per DPIIT guidelines and qualifies for government
                procurement preferences.
              </p>

              <div className="mii-stats">
                <div className="ms">
                  <div className="ms-v">&gt;80%</div>
                  <div className="ms-l">Indigenous Content</div>
                </div>
                <div className="ms">
                  <div className="ms-v">100%</div>
                  <div className="ms-l">Housing & Frame</div>
                </div>
                <div className="ms">
                  <div className="ms-v">DPIIT</div>
                  <div className="ms-l">Startup Recognised</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ width: "100%" }}
            >
              <div className="mii-table">
                <div className="mt-row mt-head">
                  <span>Component</span>
                  <span>Indian Source</span>
                  <span style={{ textAlign: "right" }}>%</span>
                </div>

                {[
                  { component: "MS/SS Housing & Frame", source: "Faridabad / Delhi NCR", pct: "100%" },
                  { component: "Filter Media (G4, F7)", source: "Gujarat / Maharashtra", pct: "100%" },
                  { component: "ESP Aluminium Plates", source: "Delhi NCR / Ludhiana", pct: "100%" },
                  { component: "UV-C Lamps", source: "Halonix / Havells India", pct: "100%" },
                  { component: "HVPS PCB (ESP)", source: "Noida / Bengaluru", pct: "90%" },
                  { component: "UV Ballast PCB", source: "PCB Fab, Noida", pct: "85%" },
                  { component: "IoT Controller", source: "Assembled in India", pct: "85%" },
                  { component: "EC Axial Fans", source: "Indian Motor OEM", pct: "80%" },
                  { component: "Overall System", source: "Saaphzone LLP, Delhi", pct: ">80%" }
                ].map((item) => (
                  <div key={item.component} className="mt-row">
                    <span className="mt-col" style={{ fontWeight: 700 }}>{item.component}</span>
                    <span className="mt-col" style={{ color: "rgba(255,255,255,0.65)" }}>{item.source}</span>
                    <span className="mt-col-pct">{item.pct}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="cta-tag">
              Patent Application Filed · India
            </div>

            <h2 className="cta-title">
              A Novel, Patented Architecture for Outdoor Air Purification — First of Its Kind in India
            </h2>

            <p className="cta-body">
              Conceived and filed by Dr. Vivek Prakash Pankaj, Partner, Saaphzone Technologies LLP — with no equivalent found in Indian, US, or European patent databases.
            </p>

            <div className="cta-pills">
              <span className="cta-pill">Open Ambient Operation - No Enclosure Required</span>
              <span className="cta-pill">4-Stage Integration in Single Unit</span>
              <span className="cta-pill">Self-Cleaning Outdoor ESP</span>
              <span className="cta-pill">IoT-Integrated Air Quality Reporting</span>
              <span className="cta-pill">10 Patent Claims Filed</span>
            </div>

            <div className="cta-actions">
              <Link href="/contact" className="btn btn-white">
                ENQUIRE NOW
              </Link>
              <a href="#technology" className="btn btn-outline">
                EXPLORE TECHNOLOGY
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
