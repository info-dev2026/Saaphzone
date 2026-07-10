"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Activity, ArrowRight, ShieldCheck, FileText, ChevronDown, Check } from "lucide-react";

export default function SpmPage() {
  const [liveReadout, setLiveReadout] = useState(38.4);
  const [activeTab, setActiveTab] = useState<"read" | "write">("read");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Live ticking reading simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveReadout(30 + Math.random() * 20);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(id);
      setTimeout(() => setCopiedText(null), 1400);
    });
  };

  const industries = [
    { name: "Cement", desc: "Kiln and clinker-line stack monitoring.", path: "M4 21V9l8-5 8 5v12M4 21h16M9 21v-6h6v6" },
    { name: "Thermal power", desc: "Boiler and ESP outlet compliance.", path: "M9 2 5 12h5l-1 10 8-13h-5l2-7z" },
    { name: "Steel & metallurgy", desc: "Furnace and sinter-line dust load.", path: "M4 8h16M4 12h16M4 16h16M4 4v16M20 4v16" },
    { name: "Oil refining", desc: "Process-heater and flare-stack stacks.", path: "M12 2c3 4 5 7 5 10a5 5 0 0 1-10 0c0-3 2-6 5-10z" },
    { name: "Petrochemical", desc: "Reactor off-gas particulate checks.", path: "M9 2h6M10 2v6l-5 10a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-10V2" },
    { name: "Aluminium", desc: "Pot-line and casting dust extraction.", path: "M4 7l8-4 8 4-8 4-8-4zM4 7v10l8 4 8-4V7M12 11v10" },
    { name: "Pulp & paper", desc: "Recovery-boiler emission monitoring.", path: "M6 3h9l3 3v15H6zM15 3v3h3M9 12h6M9 16h6" },
    { name: "Glass", desc: "Furnace stack particulate tracking.", path: "M12 2l7 4v8l-7 8-7-8V6z" }
  ];

  return (
    <div className="spm-page-container">
      <style dangerouslySetInnerHTML={{ __html: `
        .spm-page-container {
          --green-900: #0E1512;
          --green-800: #142A1B;
          --green-700: #1B5E20;
          --green-600: #2C7A33;
          --green-400: #5FA868;
          --green-200: #BFE0C4;
          --orange: #FF6F00;
          --orange-600: #E25E00;
          --laser: #E2402F;
          --paper: #F7F8F4;
          --paper-dim: #EFF1E9;
          --card: #FFFFFF;
          --ink: #14181B;
          --ink-soft: #4B564E;
          --ink-faint: #7C887F;
          --line: #DBDFD3;
          --line-soft: #E7EAE1;
          --white: #FFFFFF;
          --radius: 14px;
          --radius-sm: 8px;
          --shadow: 0 1px 2px rgba(14,21,18,0.04), 0 12px 32px -16px rgba(14,21,18,0.18);
          --font-display: 'Space Grotesk', 'Inter', sans-serif;
          --font-body: 'Inter', sans-serif;
          --font-mono: 'IBM Plex Mono', monospace;
          --maxw: 1180px;

          background: var(--paper);
          color: var(--ink);
          font-family: var(--font-body);
          line-height: 1.5;
          overflow-x: hidden;
        }

        .spm-page-container h1,
        .spm-page-container h2,
        .spm-page-container h3,
        .spm-page-container h4,
        .spm-page-container h5 {
          font-family: var(--font-display);
          font-weight: 600;
          line-height: 1.12;
          margin: 0;
          letter-spacing: -0.01em;
          color: var(--ink);
        }
        .spm-page-container p {
          margin: 0;
        }
        .spm-page-container a {
          color: inherit;
        }
        .spm-page-container .wrap { max-width: var(--maxw); margin: 0 auto; padding: 0 28px; }
        .spm-page-container section { position: relative; }
        .spm-page-container ::selection { background: var(--orange); color: #fff; }

        .spm-page-container .eyebrow {
          font-family: var(--font-mono);
          font-size: 12.5px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--green-700);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
        }
        .spm-page-container .eyebrow::before {
          content: "";
          width: 7px; height: 7px;
          background: var(--orange);
          display: inline-block;
          border-radius: 1px;
          transform: rotate(45deg);
        }
        .spm-page-container section.on-dark .eyebrow { color: var(--green-200); }

        .spm-page-container .btn {
          display: inline-flex; align-items: center; gap: 9px;
          font-family: var(--font-body); font-weight: 600; font-size: 14.5px;
          padding: 13px 22px; border-radius: 999px; text-decoration: none;
          border: 1.5px solid transparent; cursor: pointer; transition: transform .15s ease, background .15s ease, border-color .15s ease;
          white-space: nowrap;
        }
        .spm-page-container .btn:hover { transform: translateY(-1px); }
        .spm-page-container .btn-primary { background: var(--orange); color: #fff; }
        .spm-page-container .btn-primary:hover { background: var(--orange-600); }
        .spm-page-container .btn-outline { background: transparent; color: var(--white); border-color: rgba(255,255,255,0.35); }
        .spm-page-container .btn-outline:hover { border-color: #fff; }
        .spm-page-container .btn-ghost { background: transparent; color: var(--green-700); border-color: var(--green-700); }
        .spm-page-container .btn-ghost:hover { background: var(--green-700); color: #fff; }
        .spm-page-container .btn-sm { padding: 9px 16px; font-size: 13px; }

        /* ---------- HERO ---------- */
        .spm-page-container .hero {
          background:
            radial-gradient(ellipse 900px 500px at 85% -10%, rgba(27,94,32,0.55), transparent 60%),
            linear-gradient(180deg, var(--green-900) 0%, #0B100E 100%);
          color: #fff;
          overflow: hidden;
          padding: 120px 0 80px;
        }
        .spm-page-container .hero-grid {
          display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 54px; align-items: center;
        }
        .spm-page-container .hero h1 {
          font-size: clamp(34px, 4.6vw, 54px);
          color: #fff;
          margin: 18px 0 20px;
        }
        .spm-page-container .hero h1 em { font-style: normal; color: var(--green-200); }
        .spm-page-container .hero p.lede {
          font-size: 17px; color: #C9D2C9; max-width: 52ch; margin-bottom: 30px;
          line-height: 1.7;
        }
        .spm-page-container .hero-cta { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 42px; }
        .spm-page-container .spec-strip {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
          border-top: 1px solid rgba(255,255,255,0.14);
        }
        .spm-page-container .spec-strip div {
          padding: 18px 18px 0 0; border-right: 1px solid rgba(255,255,255,0.14);
        }
        .spm-page-container .spec-strip div:last-child { border-right: none; }
        .spm-page-container .spec-strip b {
          display: block; font-family: var(--font-display); font-size: 21px; color: #fff; margin-bottom: 4px;
        }
        .spm-page-container .spec-strip span { font-size: 12.5px; color: #94A398; font-family: var(--font-mono); letter-spacing: 0.02em; }

        /* optical schematic card */
        .spm-page-container .scope-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: var(--radius);
          padding: 22px 22px 18px;
          position: relative;
        }
        .spm-page-container .scope-card .scope-label {
          display: flex; justify-content: space-between; align-items: center;
          font-family: var(--font-mono); font-size: 11px; color: #7E8C81; letter-spacing: 0.08em; text-transform: uppercase;
          margin-bottom: 14px;
        }
        .spm-page-container .scope-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--green-400); display: inline-block; margin-right: 6px; box-shadow: 0 0 0 3px rgba(95,168,104,0.18); animation: pulseDot 2.4s ease-in-out infinite; }
        @keyframes pulseDot { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }

        .spm-page-container .readout {
          display: flex; align-items: baseline; gap: 8px; margin-top: 14px;
          font-family: var(--font-mono); color: #fff;
          border-top: 1px dashed rgba(255,255,255,0.16); padding-top: 14px;
        }
        .spm-page-container .readout .num { font-size: 30px; font-weight: 600; letter-spacing: -0.01em; min-width: 96px; }
        .spm-page-container .readout .unit { font-size: 13px; color: #8A988D; }
        .spm-page-container .readout .tag { margin-left: auto; font-size: 10.5px; color: #6C7A6F; letter-spacing: 0.05em; }

        @media (max-width: 980px){
          .spm-page-container .hero-grid { grid-template-columns: 1fr; gap: 36px; padding-bottom: 36px; }
          .spm-page-container .spec-strip { grid-template-columns: repeat(2, 1fr); row-gap: 18px; }
          .spm-page-container .spec-strip div:nth-child(2) { border-right: none; }
        }

        /* ---------- GENERAL SECTION LAYOUT ---------- */
        .spm-page-container .section { padding: 96px 0; }
        .spm-page-container .section.tight { padding: 72px 0; }
        .spm-page-container .section-head { max-width: 680px; margin-bottom: 48px; }
        .spm-page-container .section-head h2 { font-size: clamp(26px, 3.2vw, 38px); margin-top: 14px; color: var(--ink); }
        .spm-page-container .section-head p { font-size: 16px; color: var(--ink-soft); margin-top: 14px; line-height: 1.65; }
        .spm-page-container .section-foot-link { margin-top: 36px; }

        .spm-page-container .band-alt { background: var(--paper-dim); }
        .spm-page-container .band-dark { background: linear-gradient(180deg, #0E1512, #101B14); color: #fff; }
        .spm-page-container .band-dark h2 { color: #fff; }
        .spm-page-container .band-dark .ink-soft, .spm-page-container .band-dark p { color: #B9C3BB; }

        /* ---------- INDUSTRY / FEATURE CARDS ---------- */
        .spm-page-container .grid-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; }
        .spm-page-container .icard { background: var(--card); padding: 26px 22px; display: flex; flex-direction: column; gap: 14px; transition: background .15s ease; }
        .spm-page-container .icard:hover { background: #FBFBF8; }
        .spm-page-container .icard svg { width: 30px; height: 30px; stroke: var(--green-700); stroke-width: 1.5; fill: none; }
        .spm-page-container .icard h4 { font-size: 15px; font-weight: 600; color: var(--ink); }
        .spm-page-container .icard p { font-size: 13.5px; color: var(--ink-soft); line-height: 1.55; }
        @media (max-width: 900px){ .spm-page-container .grid-cards { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px){ .spm-page-container .grid-cards { grid-template-columns: 1fr; } }

        .spm-page-container .usecases { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 34px; }
        .spm-page-container .usecases span {
          font-family: var(--font-mono); font-size: 12.5px; color: var(--green-700);
          border: 1px solid var(--green-700); border-radius: 999px; padding: 7px 14px;
        }

        /* ---------- HOW IT WORKS ---------- */
        .spm-page-container .hiw-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; }
        .spm-page-container .formula-card {
          background: var(--green-900); color: #fff; border-radius: var(--radius); padding: 28px 26px; margin-top: 26px;
        }
        .spm-page-container .formula-card .fline { font-family: var(--font-mono); font-size: 18px; color: var(--green-200); margin-bottom: 6px; }
        .spm-page-container .formula-card .fline b { color: #fff; }
        .spm-page-container .formula-card .fnote { font-size: 12.5px; color: #90A092; margin-top: 14px; }
        .spm-page-container .legend { list-style: none; margin: 18px 0 0; padding: 0; display: grid; gap: 9px; }
        .spm-page-container .legend li { display: flex; gap: 10px; font-size: 13.5px; color: var(--ink-soft); }
        .spm-page-container .legend b { font-family: var(--font-mono); color: var(--green-700); min-width: 26px; }

        .spm-page-container .module-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-top: 18px; }
        .spm-page-container .module { border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 16px 16px; background: var(--card); }
        .spm-page-container .module .mnum { font-family: var(--font-mono); font-size: 11px; color: var(--orange); letter-spacing: 0.08em; }
        .spm-page-container .module h5 { font-family: var(--font-display); font-size: 14.5px; margin: 6px 0 6px; }
        .spm-page-container .module p { font-size: 13px; color: var(--ink-soft); line-height: 1.5; }

        @media (max-width: 900px){ .spm-page-container .hiw-grid { grid-template-columns: 1fr; gap: 32px; } }

        /* ---------- DIAGRAM CARD ---------- */
        .spm-page-container .diagram-card { border: 1px solid var(--line); border-radius: var(--radius); background: var(--card); padding: 18px; box-shadow: var(--shadow); }
        .spm-page-container .diagram-card img { border-radius: var(--radius-sm); }
        .spm-page-container .diagram-cap { font-family: var(--font-mono); font-size: 11.5px; color: var(--ink-faint); margin-top: 12px; letter-spacing: 0.02em; }

        /* ---------- SPEC TABLE ---------- */
        .spm-page-container .spectable { width: 100%; border-collapse: collapse; margin-top: 8px; }
        .spm-page-container .spectable tr { border-bottom: 1px solid var(--line-soft); }
        .spm-page-container .spectable tr:last-child { border-bottom: none; }
        .spm-page-container .spectable td { padding: 13px 4px; font-size: 14px; vertical-align: top; }
        .spm-page-container .spectable td:first-child { color: var(--ink-faint); width: 42%; font-size: 13px; }
        .spm-page-container .spectable td:last-child { font-family: var(--font-mono); color: var(--ink); font-weight: 500; text-align: right; }
        .spm-page-container .spec-cat { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--orange); margin: 30px 0 6px; }
        .spm-page-container .spec-cat:first-child { margin-top: 0; }
        .spm-page-container .spec-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 0 56px; }
        @media (max-width: 780px){ .spm-page-container .spec-cols { grid-template-columns: 1fr; } }

        /* ---------- STEP LIST (installation) ---------- */
        .spm-page-container .steps { list-style: none; margin: 0; padding: 0; counter-reset: step; display: grid; gap: 0; }
        .spm-page-container .steps li {
          counter-increment: step; position: relative; padding: 22px 0 22px 52px; border-top: 1px solid var(--line-soft);
        }
        .spm-page-container .steps li:first-child { border-top: none; }
        .spm-page-container .steps li::before {
          content: counter(step, decimal-leading-zero);
          position: absolute; left: 0; top: 22px; font-family: var(--font-mono); font-size: 13px; color: var(--orange); font-weight: 600;
        }
        .spm-page-container .steps h5 { font-family: var(--font-display); font-size: 15.5px; margin-bottom: 6px; }
        .spm-page-container .steps p { font-size: 14px; color: var(--ink-soft); line-height: 1.6; }

        .spm-page-container .install-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 50px; align-items: start; margin-top: 10px; }
        @media (max-width: 900px){ .spm-page-container .install-grid { grid-template-columns: 1fr; gap: 32px; } }

        .spm-page-container .rule-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 13px; }
        .spm-page-container .rule-list li { display: flex; gap: 11px; font-size: 14.5px; color: var(--ink-soft); line-height: 1.6; }
        .spm-page-container .rule-list svg { flex: none; width: 17px; height: 17px; margin-top: 3px; stroke: var(--green-700); stroke-width: 2; fill: none; }

        .spm-page-container .pin-table { width: 100%; border-collapse: collapse; font-family: var(--font-mono); font-size: 13px; }
        .spm-page-container .pin-table td, .spm-page-container .pin-table th { padding: 9px 10px; border-bottom: 1px solid var(--line-soft); text-align: left; }
        .spm-page-container .pin-table th { color: var(--ink-faint); font-weight: 500; font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; }
        .spm-page-container .pin-table td:first-child { color: var(--orange); font-weight: 600; }

        .spm-page-container .photo-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 18px; }
        .spm-page-container .photo-pair figure { margin: 0; }
        .spm-page-container .photo-pair img { border-radius: var(--radius-sm); border: 1px solid var(--line); }
        .spm-page-container .photo-pair figcaption { font-family: var(--font-mono); font-size: 11px; color: var(--ink-faint); margin-top: 8px; }
        @media (max-width: 560px){ .spm-page-container .photo-pair { grid-template-columns: 1fr; } }

        /* ---------- CALIBRATION ---------- */
        .spm-page-container .knob-positions { display: flex; gap: 10px; margin-top: 18px; flex-wrap: wrap; }
        .spm-page-container .knob-positions div {
          border: 1px solid var(--line); border-radius: var(--radius-sm); padding: 13px 16px; flex: 1; min-width: 130px;
        }
        .spm-page-container .knob-positions b { font-family: var(--font-mono); color: var(--green-700); font-size: 13px; display: block; margin-bottom: 4px; }
        .spm-page-container .knob-positions span { font-size: 12.5px; color: var(--ink-soft); }

        /* ---------- CODE / MODBUS ---------- */
        .spm-page-container .code-block {
          background: var(--green-900); color: #D9E4DB; border-radius: var(--radius-sm);
          padding: 18px 18px; font-family: var(--font-mono); font-size: 12.8px; line-height: 1.85; overflow-x: auto;
          position: relative;
        }
        .spm-page-container .code-block .ccomment { color: #6F8174; }
        .spm-page-container .code-block .chl { color: var(--orange); }
        .spm-page-container .code-block .cgreen { color: var(--green-400); }
        .spm-page-container .copy-btn {
          position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.08); color: #C9D2C9;
          border: 1px solid rgba(255,255,255,0.14); font-family: var(--font-mono); font-size: 10.5px;
          padding: 5px 9px; border-radius: 6px; cursor: pointer; letter-spacing: 0.04em;
        }
        .spm-page-container .copy-btn:hover { background: rgba(255,255,255,0.16); }

        .spm-page-container .regtable { width: 100%; border-collapse: collapse; font-family: var(--font-mono); font-size: 12.8px; margin-top: 6px; }
        .spm-page-container .regtable th, .spm-page-container .regtable td { padding: 11px 10px; border-bottom: 1px solid var(--line-soft); text-align: left; vertical-align: top; }
        .spm-page-container .regtable th { color: var(--ink-faint); font-weight: 500; font-size: 10.5px; letter-spacing: 0.06em; text-transform: uppercase; font-family: var(--font-body); }
        .spm-page-container .regtable td:first-child { color: var(--orange); font-weight: 600; white-space: nowrap; }
        .spm-page-container .regtable td:nth-child(4) { color: var(--green-700); }

        .spm-page-container .tabs { display: flex; gap: 8px; margin: 22px 0 14px; }
        .spm-page-container .tab-btn {
          font-family: var(--font-mono); font-size: 12px; padding: 8px 14px; border-radius: 999px; border: 1px solid var(--line);
          background: var(--card); cursor: pointer; color: var(--ink-soft);
        }
        .spm-page-container .tab-btn.active { background: var(--green-700); border-color: var(--green-700); color: #fff; }
        .spm-page-container .tab-panel { display: none; }
        .spm-page-container .tab-panel.active { display: block; }

        /* ---------- TROUBLESHOOTING ---------- */
        .spm-page-container details.tshoot { border-bottom: 1px solid var(--line-soft); padding: 18px 0; }
        .spm-page-container details.tshoot:first-of-type { border-top: 1px solid var(--line-soft); }
        .spm-page-container details.tshoot summary {
          cursor: pointer; list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 18px;
          font-family: var(--font-display); font-size: 16px; color: var(--ink);
        }
        .spm-page-container details.tshoot summary::-webkit-details-marker { display: none; }
        .spm-page-container details.tshoot summary .plus {
          flex: none; width: 24px; height: 24px; border: 1.5px solid var(--green-700); border-radius: 50%; position: relative;
        }
        .spm-page-container details.tshoot summary .plus::before, .spm-page-container details.tshoot summary .plus::after {
          content: ""; position: absolute; background: var(--green-700); left: 50%; top: 50%; transform: translate(-50%,-50%);
        }
        .spm-page-container details.tshoot summary .plus::before { width: 10px; height: 1.6px; }
        .spm-page-container details.tshoot summary .plus::after { width: 1.6px; height: 10px; transition: opacity .15s ease; }
        .spm-page-container details.tshoot[open] summary .plus::after { opacity: 0; }
        .spm-page-container .tshoot-body { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; padding: 16px 0 4px 0; }
        .spm-page-container .tshoot-body div b { display: block; font-size: 11.5px; font-family: var(--font-mono); color: var(--orange); letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 7px; }
        .spm-page-container .tshoot-body p { font-size: 14px; color: var(--ink-soft); line-height: 1.6; }
        @media (max-width: 680px){ .spm-page-container .tshoot-body { grid-template-columns: 1fr; } }

        /* ---------- COMPLIANCE BAND ---------- */
        .spm-page-container .compliance { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(255,255,255,0.1); border-radius: var(--radius); overflow: hidden; margin-top: 20px; }
        .spm-page-container .compliance div { background: #101B14; padding: 24px 22px; }
        .spm-page-container .compliance h5 { font-family: var(--font-display); font-size: 14.5px; color: #fff; margin-bottom: 8px; }
        .spm-page-container .compliance p { font-size: 13px; color: #A9B6AB; line-height: 1.6; }
        @media (max-width: 820px){ .spm-page-container .compliance { grid-template-columns: 1fr; } }

        .spm-page-container .laser-banner {
          margin-top: 22px; display: flex; align-items: center; gap: 14px;
          border: 1px solid rgba(226,64,47,0.4); background: rgba(226,64,47,0.08);
          border-radius: var(--radius-sm); padding: 15px 18px;
        }
        .spm-page-container .laser-banner svg { flex: none; width: 22px; height: 22px; stroke: var(--laser); fill: none; stroke-width: 1.6; }
        .spm-page-container .laser-banner p { font-size: 13.5px; color: #E9D6D2; line-height: 1.5; }
        .spm-page-container .laser-banner b { color: #fff; }

        /* ---------- MAIN HEADER / NAV ---------- */
        .spm-page-container nav {
          position: sticky;
          top: 0;
          z-index: 9990;
          background: rgba(247, 248, 244, 0.96);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--line);
        }

        .spm-page-container nav .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 80px;
          max-width: var(--maxw);
          margin: 0 auto;
          padding: 0 28px;
        }

        .spm-page-container nav .sub-nav-links {
          display: flex;
          justify-content: center;
          gap: 2.25rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .spm-page-container nav .sub-nav-links a {
          font-family: var(--font-display);
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--ink-soft);
          transition: color 0.2s;
          text-decoration: none;
        }

        .spm-page-container nav .sub-nav-links a:hover {
          color: var(--green-700);
        }

        .spm-page-container nav .nav-cta {
          background: var(--green-700);
          color: var(--white);
          padding: 0.68rem 1.6rem;
          border-radius: 8px;
          transition: all 0.25s ease;
          font-weight: 700;
          text-transform: none;
          font-family: var(--font-display);
          font-size: 0.94rem;
          text-decoration: none;
          display: inline-block;
          white-space: nowrap;
        }

        .spm-page-container nav .nav-cta:hover {
          background: var(--green-600);
          box-shadow: 0 4px 14px rgba(27, 94, 32, 0.25);
          transform: translateY(-1px);
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
                <span style={{ fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", fontSize: "1.35rem", letterSpacing: "-0.02em" }}>
                  Saaphzone
                </span>
                <span style={{ fontWeight: 600, color: "#64748b", fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase" }}>
                  Technologies
                </span>
              </div>
            </Link>
          </div>

          <ul className="sub-nav-links" style={{ flex: "none", margin: 0, padding: 0 }}>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#specifications">Specifications</a></li>
            <li><a href="#installation">Installation</a></li>
            <li><a href="#calibration">Calibration</a></li>
          </ul>

          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link href="/contact" className="nav-cta">Request a Quote</Link>
          </div>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">CEMS Instrumentation · Laser Back-Scatter</span>
              <h1>Particulate concentration,<br />read from a single beam<br />of <em>scattered light.</em></h1>
              <p className="lede">The Saaphzone BDM Series mounts directly on the stack and fires a 650&nbsp;nm laser into the flue. Dust scatters it back, the optics read the return, and the result is a continuous, calibrated mg/m³ reading — through wind, rain, and process heat up to 50°C.</p>
              <div className="hero-cta">
                <a href="#specifications" className="btn btn-primary">View specifications</a>
                <a href="/Saaphzone-BDM-User-Manual.pdf" className="btn btn-outline" download>Download user manual ↓</a>
              </div>
              <div className="spec-strip">
                <div><b>0–1000</b><span>mg/m³ range, field-set</span></div>
                <div><b>±1%</b><span>FS indication error</span></div>
                <div><b>≤10s</b><span>response time</span></div>
                <div><b>IP65</b><span>−20° to 50°C housing</span></div>
              </div>
            </div>

            <div className="scope-card">
              <div className="scope-label"><span><span className="scope-dot"></span>OPTICAL PATH — LIVE SCHEMATIC</span><span>650nm</span></div>
              <svg viewBox="0 0 460 230" width="100%" height="auto" style={{ overflow: "visible" }}>
                {/* duct */}
                <rect x="8" y="20" width="40" height="190" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.4"/>
                <rect x="412" y="20" width="40" height="190" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.4"/>
                <line x1="48" y1="20" x2="412" y2="20" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" strokeDasharray="3 5"/>
                <line x1="48" y1="210" x2="412" y2="210" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" strokeDasharray="3 5"/>

                {/* dust cloud field */}
                <g opacity="0.85">
                  <circle className="mote" cx="190" cy="90" r="2.4" fill="#5FA868"/>
                  <circle className="mote d2" cx="230" cy="60" r="1.8" fill="#5FA868"/>
                  <circle className="mote d3" cx="210" cy="140" r="2.1" fill="#BFE0C4"/>
                  <circle className="mote d4" cx="260" cy="110" r="1.6" fill="#5FA868"/>
                  <circle className="mote d2" cx="180" cy="160" r="1.9" fill="#BFE0C4"/>
                  <circle className="mote d3" cx="245" cy="170" r="2.2" fill="#5FA868"/>
                  <circle className="mote d4" cx="265" cy="50" r="1.7" fill="#BFE0C4"/>
                  <circle className="mote" cx="200" cy="40" r="1.5" fill="#5FA868"/>
                </g>

                {/* instrument body */}
                <rect x="52" y="92" width="34" height="46" rx="3" fill="#16221A" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2"/>
                <circle cx="69" cy="106" r="3.4" fill="var(--laser)"/>
                <circle cx="69" cy="124" r="3.4" fill="#5FA868"/>

                {/* laser beam out */}
                <line x1="86" y1="106" x2="300" y2="74" stroke="var(--laser)" strokeWidth="1.8" className="beam-out"/>
                {/* scatter return */}
                <line x1="300" y1="74" x2="86" y2="124" stroke="#5FA868" strokeWidth="1.6" strokeDasharray="2 4" className="beam-back"/>

                <text x="69" y="158" fill="#7E8C81" fontFamily="IBM Plex Mono" fontSize="9.5">EMITTER</text>
                <text x="300" y="58" fill="#7E8C81" fontFamily="IBM Plex Mono" fontSize="9.5" textAnchor="middle">DUST / SPM</text>
              </svg>
              <div className="readout">
                <span className="num" id="liveReadout">{liveReadout.toFixed(1)}</span>
                <span className="unit">mg/m³ · Pr → D</span>
                <span className="tag">schematic, not live telemetry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="overview">
        <div className="wrap">
          <div className="install-grid" style={{ gridTemplateColumns: "1fr 0.55fr", gap: "50px", marginBottom: "50px" }}>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <span className="eyebrow">Overview</span>
              <h2>Built for the stack, not the lab bench.</h2>
              <p>The BDM Series is a continuous, in-situ dust / SPM concentration monitor for stationary pollution sources — engineered to keep reading accurately through wind, rain, lightning, dust loading, and temperature extremes most lab-grade sensors won't tolerate.</p>
            </div>
            <div>
              <div className="diagram-card" style={{ padding: "0", overflow: "hidden" }}>
                <Image
                  src="/Spm_1.jpeg"
                  alt="BDM Detector Head"
                  width={360}
                  height={450}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              <p className="diagram-cap">The BDM detector head — all-metal housing, IP65.</p>
            </div>
          </div>

          <div className="grid-cards" id="industryGrid">
            {industries.map(({ name, desc, path }) => (
              <div className="icard" key={name}>
                <svg viewBox="0 0 24 24"><path d={path}/></svg>
                <h4>{name}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <div className="usecases">
            <span>CEMS particulate compliance</span>
            <span>Dust collector / ESP / bag-filter efficiency</span>
            <span>Combustion efficiency monitoring</span>
            <span>Workshop &amp; plant dust-load tracking</span>
            <span>Field &amp; research-grade testing</span>
          </div>
        </div>
      </section>

      <section className="section band-alt" id="how-it-works">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>Back-scatter, explained in one pass of light.</h2>
          </div>

          <div className="hiw-grid">
            <div>
              <p style={{ fontSize: "15px", color: "var(--ink-soft)", lineHeight: 1.75 }}>
                A stabilised 650&nbsp;nm laser source inside the detector fires across the flue, through the dust-blocking window. Particles in the gas stream scatter a fraction of that light straight back toward the receiver — and the intensity of that return is what carries the concentration signal. A condenser lens focuses the scattered light onto the optical sensor, which converts it to a voltage the processing module can read.
              </p>
              <p style={{ fontSize: "15px", color: "var(--ink-soft)", lineHeight: 1.75, marginTop: "16px" }}>
                Because the window itself collects dust over time, the math has to separate “signal lost to a dirty lens” from “signal lost to a genuinely cleaner stack.” That's what the K1 term below does — and it's also why the purge-air system in <a href="#installation" style={{ color: "var(--green-700)", fontWeight: 600 }}>Installation</a> isn't optional.
              </p>

              <div className="formula-card">
                <div className="fline">P<sub>r</sub> = P<sub>o</sub> × K1 × K2 × D × K1 × K3</div>
                <div className="fline"><b>D = A / (K2 × P<sub>r</sub>)</b></div>
                <div className="fnote">A = 1 / (P<sub>o</sub> × K1 × K1 × K3) — solved once at installation via reference calibration, then held constant.</div>
              </div>

              <ul className="legend">
                <li><b>P<sub>o</sub></b> Output power of the probe laser, proportional to excitation voltage V<sub>t</sub>.</li>
                <li><b>D</b> Flue dust / SPM concentration — the value you actually want.</li>
                <li><b>K1</b> Dust-blocking window attenuation. Degrades as the lens accumulates dust — adjustable, and the reason for routine cleaning.</li>
                <li><b>K2</b> Smoke / dust reflectance coefficient — depends on particle structure and size.</li>
                <li><b>K3</b> Lens convergence gain, treated as constant.</li>
              </ul>
            </div>

            <div>
              <div className="diagram-card">
                <svg viewBox="0 0 520 300" width="100%" height="auto">
                  <rect x="0" y="0" width="520" height="300" fill="#FFFFFF"/>
                  {/* housing */}
                  <path d="M10 18 H210 V282 H10 Z" fill="none" stroke="#14181B" strokeWidth="1.4"/>
                  <path d="M10 18 H50 V0 H170 V18" fill="none" stroke="#14181B" strokeWidth="1.4"/>
                  {/* lens */}
                  <ellipse cx="150" cy="150" rx="16" ry="58" fill="#E8F1E9" stroke="#1B5E20" strokeWidth="1.5"/>
                  <text x="150" y="68" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="11" fill="#1B5E20">Lens</text>
                  {/* glass window */}
                  <rect x="184" y="92" width="14" height="116" fill="#F3F6EF" stroke="#1B5E20" strokeWidth="1.5"/>
                  <text x="191" y="80" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="11" fill="#1B5E20">Glass · K1</text>
                  {/* opt sense */}
                  <circle cx="42" cy="150" r="11" fill="none" stroke="#14181B" strokeWidth="1.4"/>
                  <text x="42" y="120" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10.5" fill="#45504A">Opt-Sense · K3</text>
                  {/* laser source */}
                  <circle cx="42" cy="232" r="5" fill="#E2402F"/>
                  <text x="42" y="258" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10.5" fill="#45504A">Laser · P₀</text>

                  {/* beam out */}
                  <line x1="47" y1="229" x2="430" y2="40" stroke="#E2402F" strokeWidth="1.8"/>
                  {/* scatter zone */}
                  <rect x="280" y="30" width="220" height="200" fill="#1B5E20" fillOpacity="0.07"/>
                  <text x="390" y="248" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="11" fill="#1B5E20">Dust / SPM · K2</text>
                  {/* return path */}
                  <line x1="430" y1="40" x2="53" y2="146" stroke="#1B5E20" strokeWidth="1.5" strokeDasharray="3 4"/>

                  <text x="500" y="240" textAnchor="end" fontFamily="IBM Plex Mono" fontSize="10.5" fill="#7C887F">P<tspan baselineShift="sub" fontSize="8">r</tspan></text>
                </svg>
              </div>
              <p className="diagram-cap">Fig. 1 — Optical path, redrawn from the BDM Series engineering reference.</p>

              <div className="module-grid">
                <div className="module"><span className="mnum">01</span><h5>Laser emission</h5><p>Wavelength-stabilised 650nm source with adaptive optical-power control.</p></div>
                <div className="module"><span className="mnum">02</span><h5>Optical receiving</h5><p>Condenser lens + sensor converting backscattered light to voltage.</p></div>
                <div className="module"><span className="mnum">03</span><h5>Central processing</h5><p>Wide dynamic-range phase-locked amplification and zero-drift compensation.</p></div>
                <div className="module"><span className="mnum">04</span><h5>Interface</h5><p>4–20mA analog loop and RS-485 / Modbus RTU, live simultaneously.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="specifications">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Specifications</span>
            <h2>Spec sheet.</h2>
            <p>Field-configurable across three measurement ranges — BDM-100, BDM-500, and BDM-1000 — sharing one mechanical and electrical platform.</p>
          </div>

          <div className="spec-cols">
            <div>
              <div className="spec-cat">Measurement</div>
              <table className="spectable">
                <tbody>
                  <tr><td>Working principle</td><td>Laser back-scattering</td></tr>
                  <tr><td>Test object</td><td>Industrial flue gas / dust (SPM)</td></tr>
                  <tr><td>Measurement range</td><td>0–100 / 500 / 1000 mg/m³</td></tr>
                  <tr><td>Indication error</td><td>≤ ±1% F.S.</td></tr>
                  <tr><td>Zero drift</td><td>≤ ±2% F.S. / 24h</td></tr>
                  <tr><td>Range drift</td><td>≤ ±2% F.S. / 24h</td></tr>
                  <tr><td>Response time</td><td>≤ 10 s</td></tr>
                  <tr><td>Applicable flue diameter</td><td>0.7 – 20 m</td></tr>
                </tbody>
              </table>

              <div className="spec-cat">Optical</div>
              <table className="spectable">
                <tbody>
                  <tr><td>Operating wavelength</td><td>650 ± 20 nm</td></tr>
                  <tr><td>Calibration model</td><td>Y = KX + B</td></tr>
                </tbody>
              </table>
            </div>

            <div>
              <div className="spec-cat">Mechanical</div>
              <table className="spectable">
                <tbody>
                  <tr><td>Outer shell</td><td>All-metal</td></tr>
                  <tr><td>Dimensions (H×W×D)</td><td>245 × 160 × 160 mm</td></tr>
                  <tr><td>Weight</td><td>4 kg</td></tr>
                  <tr><td>Protection rating</td><td>IP65</td></tr>
                </tbody>
              </table>

              <div className="spec-cat">Power &amp; environment</div>
              <table className="spectable">
                <tbody>
                  <tr><td>Power supply</td><td>24 V DC, 0.3 A</td></tr>
                  <tr><td>Operating temperature</td><td>−20°C to +50°C</td></tr>
                </tbody>
              </table>

              <div className="spec-cat">Interface &amp; compliance</div>
              <table className="spectable">
                <tbody>
                  <tr><td>Analog output</td><td>4–20 mA</td></tr>
                  <tr><td>Digital interface</td><td>RS-485, Modbus RTU</td></tr>
                  <tr><td>Reference standard</td><td>HJ 76-2017</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="section-foot-link">
            <a href="/Saaphzone-BDM-User-Manual.pdf" className="btn btn-ghost" download>Download full datasheet (PDF) ↓</a>
          </div>
        </div>
      </section>

      <section className="section band-alt" id="installation">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Installation</span>
            <h2>Where it goes, and how it's aimed.</h2>
            <p>Placement and aim affect accuracy as much as the instrument itself. The short version: stable flow, a properly proportioned optical path, and a flange that's perpendicular — or tilted very slightly down.</p>
          </div>

          <div className="install-grid">
            <div>
              <ul className="rule-list">
                <li><svg viewBox="0 0 24 24"><path d="M5 12l4 4L19 6"/></svg><span><b>Site selection.</b> ≥8D downstream and ≥2D upstream of bends, valves, and reducers (D = flue diameter). Where that's not possible, pick the most stable cross-section, keep the upstream run longer than the downstream run, and ensure gas velocity exceeds 5 m/s.</span></li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12l4 4L19 6"/></svg><span><b>Optical path.</b> The distance from the laser/receiver intersection to the inner flue wall should not be less than 30% of the flue diameter. Changing the flue diameter later means re-adjusting this path — contact us for support.</span></li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12l4 4L19 6"/></svg><span><b>Environment.</b> Avoid corrosive or harmful-gas locations — they shorten connector and IC life and make routine maintenance difficult. Keep the mounting point accessible.</span></li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12l4 4L19 6"/></svg><span><b>Signal routing &amp; grounding.</b> Route signal cable away from electromagnetic equipment. Keep protective-ground resistance at or below 10 Ω.</span></li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12l4 4L19 6"/></svg><span><b>Mounting angle.</b> Perpendicular to the flue, or tilted 3–5° downward at the front. Never tilt upward — condensation will pool on the window in humid flue gas.</span></li>
              </ul>

              <div className="formula-card" style={{ background: "var(--card)", color: "var(--ink)", border: "1px solid var(--line)", marginTop: "30px" }}>
                <div className="fline" style={{ color: "var(--green-700)", fontSize: "14px" }}>FLANGE — quick reference</div>
                <ul className="legend" style={{ marginTop: "14px" }}>
                  <li><b>⌀160</b>Flange outer diameter, maximum.</li>
                  <li><b>⌀130</b>Bolt-hole center distance (fixed).</li>
                  <li><b>⌀10</b>Mounting hole diameter, minimum.</li>
                  <li><b>M10</b>Four connecting bolts &amp; nuts, supplied.</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="diagram-card" style={{ padding: "0", overflow: "hidden" }}>
                <Image
                  src="/Second.jpeg"
                  alt="Flange Mounting Diagram"
                  width={500}
                  height={280}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              <p className="diagram-cap">Fig. 2 — Embedded-flange mounting, with signal and power cable routing.</p>

              <h5 style={{ fontFamily: "var(--font-display)", fontSize: "15px", margin: "28px 0 12px" }}>Wiring — 7-pin aviation connector</h5>
              <div className="photo-pair">
                <figure>
                  <div style={{ overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image
                      src="/Wiring.jpeg"
                      alt="7-Pin Aviation Plug"
                      width={200}
                      height={200}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                  <figcaption>Rear terminal view</figcaption>
                </figure>
                <figure style={{ display: "flex", alignItems: "center" }}>
                  <table className="pin-table">
                    <thead>
                      <tr><th>Pin</th><th>Function</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td>24V supply −</td></tr>
                      <tr><td>2</td><td>24V supply +</td></tr>
                      <tr><td>3</td><td>Analog signal −</td></tr>
                      <tr><td>4</td><td>Analog signal +</td></tr>
                      <tr><td>5</td><td>RS-485 B</td></tr>
                      <tr><td>6</td><td>Ground (PE)</td></tr>
                      <tr><td>7</td><td>RS-485 A</td></tr>
                    </tbody>
                  </table>
                </figure>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "60px", borderTop: "1px solid var(--line)", paddingTop: "8px" }}>
            <h5 style={{ fontFamily: "var(--font-display)", fontSize: "18px", marginBottom: "6px" }}>Purge / backflush system</h5>
            <p style={{ fontSize: "14.5px", color: "var(--ink-soft)", maxWidth: "70ch", marginBottom: "8px" }}>Keeps the optical window from fouling. It is not optional — leave it running 24/7, including through plant power outages.</p>
          </div>
          <ol className="steps">
            <li><h5>Compressed air (standard conditions)</h5><p>200 Pa – 2000 Pa, clean, dry, oil-free. In harsh dust conditions, raise the supply to roughly 0.3 MPa and fit the high-pressure backflush (pagoda) connector.</p></li>
            <li><h5>High-pressure blower (positive-pressure stacks)</h5><p>Output at least 200 Pa above the flue-gas pressure at the measuring point. Use 220V AC, fit a weatherproof cover outdoors, and keep an inlet filter ahead of the fan — air temperature into the fan should stay below 40°C.</p></li>
            <li><h5>Negative-pressure stacks</h5><p>Below −100 Pa, the air chamber and main unit can be bolted together directly, with a simple air filter on the inlet — no fan required.</p></li>
          </ol>
        </div>
      </section>

      <section className="section" id="calibration">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Calibration &amp; maintenance</span>
            <h2>Staying accurate in the field.</h2>
          </div>

          <div className="hiw-grid">
            <div>
              <p style={{ fontSize: "15px", color: "var(--ink-soft)", lineHeight: 1.75 }}>
                The instrument checks its own zero point automatically every hour, with a fuller self-calibration cycle every 24 hours. That keeps it internally consistent — it doesn't, on its own, guarantee the output matches the true dust concentration. For that, a reference test against a known method establishes <b style={{ color: "var(--ink)" }}>Y&nbsp;=&nbsp;KX&nbsp;+&nbsp;B</b>, and those K/B values get written into the CEMS system. Skipping this step is one of the most common reasons installations fail acceptance testing.
              </p>

              <h5 style={{ fontFamily: "var(--font-display)", fontSize: "15.5px", margin: "26px 0 10px" }}>In-situ calibrator</h5>
              <p style={{ fontSize: "14.5px", color: "var(--ink-soft)", lineHeight: 1.65 }}>A protected knob on the unit selects between three states. Unscrew the cover only when calibrating; if it's stiff, the cover itself reverses to work as a wrench.</p>
              <div className="knob-positions">
                <div><b>Z</b><span>Zero point — output should read below 2% of range.</span></div>
                <div><b>S</b><span>Span / full-scale check, against the last reference value.</span></div>
                <div><b>W</b><span>Working — normal in-line measurement.</span></div>
              </div>

              <p style={{ fontSize: "13px", color: "var(--ink-faint)", marginTop: "18px", lineHeight: 1.6 }}>Record the range output the first time you unpack the unit — that becomes your baseline. Re-calibration error beyond 2% of range against that baseline signals it's time to recalibrate, not just re-zero.</p>
            </div>

            <div>
              <div className="diagram-card" style={{ padding: "0", overflow: "hidden" }}>
                <Image
                  src="/Calibrator.jpeg"
                  alt="Calibrator Knob Diagram"
                  width={450}
                  height={250}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              <p className="diagram-cap">Fig. 3 — Calibrator knob (Z / S / W) and back-cover section.</p>

              <h5 style={{ fontFamily: "var(--font-display)", fontSize: "15px", margin: "26px 0 10px" }}>Optical window care</h5>
              <div className="photo-pair" style={{ gridTemplateColumns: "0.8fr 1.2fr" }}>
                <figure>
                  <div style={{ overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image
                      src="/Window_care.jpeg"
                      alt="Optical Window"
                      width={180}
                      height={240}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                  <figcaption>Detachable window plate</figcaption>
                </figure>
                <figure>
                  <ul className="rule-list" style={{ gap: "10px" }}>
                    <li><svg viewBox="0 0 24 24"><path d="M5 12l4 4L19 6"/></svg><span>Check at day 3, then day 15, then monthly if clean.</span></li>
                    <li><svg viewBox="0 0 24 24"><path d="M5 12l4 4L19 6"/></svg><span>Clean with 50% alcohol or distilled water — never oil-based alcohol — or a lens cloth.</span></li>
                    <li><svg viewBox="0 0 24 24"><path d="M5 12l4 4L19 6"/></svg><span>Six Phillips screws release the pressure plate for full removal of the window slats.</span></li>
                  </ul>
                </figure>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "56px", borderTop: "1px solid var(--line)", paddingTop: "30px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            <div>
              <h5 style={{ fontFamily: "var(--font-display)", fontSize: "15.5px", marginBottom: "10px" }}>Moisture interference</h5>
              <p style={{ fontSize: "14px", color: "var(--ink-soft)", lineHeight: 1.65 }}>Above roughly 100°C, flue-gas moisture stays gaseous and doesn't interfere with the reading — true for most power-plant stacks running 100–200°C. Below 100°C, moisture can condense into droplets, which do scatter the laser. If droplet content stays stable, reference testing absorbs the effect; if it swings significantly, treat the readings with caution.</p>
            </div>
            <div>
              <h5 style={{ fontFamily: "var(--font-display)", fontSize: "15.5px", marginBottom: "10px" }}>Internal optics</h5>
              <p style={{ fontSize: "14px", color: "var(--ink-soft)", lineHeight: 1.65 }}>Internal optical components are aligned at the factory with specialised tooling — don't adjust them in the field. If the back cover needs to come off to touch the optical path, power down first and bring in our technical team.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section band-dark" id="integration">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Integration</span>
            <h2>Talk to it directly — RS-485 / Modbus RTU.</h2>
            <p>For panels that want raw register access instead of (or alongside) the 4–20mA loop. The electrical layer is fixed and cannot be reconfigured — only the application-layer registers below are user-adjustable.</p>
          </div>

          <div className="hiw-grid">
            <div>
              <div className="spec-cat">Electrical layer</div>
              <table className="spectable" style={{ color: "#fff" }}>
                <tbody>
                  <tr style={{ borderColor: "rgba(255,255,255,0.1)" }}><td style={{ color: "#8A988D" }}>Baud rate</td><td style={{ color: "#fff" }}>9600</td></tr>
                  <tr style={{ borderColor: "rgba(255,255,255,0.1)" }}><td style={{ color: "#8A988D" }}>Parity</td><td style={{ color: "#fff" }}>None</td></tr>
                  <tr style={{ borderColor: "rgba(255,255,255,0.1)" }}><td style={{ color: "#8A988D" }}>Data bits</td><td style={{ color: "#fff" }}>8</td></tr>
                  <tr style={{ borderColor: "rgba(255,255,255,0.1)" }}><td style={{ color: "#8A988D" }}>Stop bits</td><td style={{ color: "#fff" }}>1</td></tr>
                </tbody>
              </table>

              <div className="spec-cat" style={{ marginTop: "30px" }}>Protocol</div>
              <table className="spectable" style={{ color: "#fff" }}>
                <tbody>
                  <tr style={{ borderColor: "rgba(255,255,255,0.1)" }}><td style={{ color: "#8A988D" }}>Transport</td><td style={{ color: "#fff" }}>Modbus RTU</td></tr>
                  <tr style={{ borderColor: "rgba(255,255,255,0.1)" }}><td style={{ color: "#8A988D" }}>Slave address</td><td style={{ color: "#fff" }}>0x02 (fixed default)</td></tr>
                  <tr style={{ borderColor: "rgba(255,255,255,0.1)" }}><td style={{ color: "#8A988D" }}>Read function</td><td style={{ color: "#fff" }}>0x64</td></tr>
                  <tr style={{ borderColor: "rgba(255,255,255,0.1)" }}><td style={{ color: "#8A988D" }}>Write function</td><td style={{ color: "#fff" }}>0x65</td></tr>
                  <tr style={{ borderColor: "rgba(255,255,255,0.1)" }}><td style={{ color: "#8A988D" }}>Check</td><td style={{ color: "#fff" }}>CRC-16</td></tr>
                </tbody>
              </table>

              <p style={{ fontSize: "13px", color: "#8A988D", marginTop: "24px", lineHeight: 1.6 }}>Prefer not to poll registers at all? The 4–20mA analog loop runs in parallel and wires straight into most PLC and DCS analog cards.</p>
            </div>

            <div>
              <div className="spec-cat">Register map</div>
              <table className="regtable" style={{ color: "#fff" }}>
                <thead>
                  <tr><th>Addr</th><th>Description</th><th>Len</th><th>Mode</th><th>Default</th></tr>
                </thead>
                <tbody>
                  <tr style={{ borderColor: "rgba(255,255,255,0.1)" }}><td>0x0001</td><td style={{ color: "#D9E4DB" }}>Dust concentration</td><td style={{ color: "#8A988D" }}>2 reg</td><td>R</td><td style={{ color: "#8A988D" }}>—</td></tr>
                  <tr style={{ borderColor: "rgba(255,255,255,0.1)" }}><td>0x0009</td><td style={{ color: "#D9E4DB" }}>Concentration range</td><td style={{ color: "#8A988D" }}>1 reg</td><td>R/W</td><td style={{ color: "#8A988D" }}>100</td></tr>
                  <tr style={{ borderColor: "rgba(255,255,255,0.1)" }}><td>0x000A</td><td style={{ color: "#D9E4DB" }}>Calibration K ×100</td><td style={{ color: "#8A988D" }}>1 reg</td><td>R/W</td><td style={{ color: "#8A988D" }}>100</td></tr>
                  <tr style={{ borderColor: "rgba(255,255,255,0.1)" }}><td>0x000B</td><td style={{ color: "#D9E4DB" }}>Calibration B ×100</td><td style={{ color: "#8A988D" }}>1 reg</td><td>R/W</td><td style={{ color: "#8A988D" }}>0</td></tr>
                  <tr style={{ borderColor: "rgba(255,255,255,0.1)" }}><td>0x0014</td><td style={{ color: "#D9E4DB" }}>485 slave address</td><td style={{ color: "#8A988D" }}>1 reg</td><td>R/W</td><td style={{ color: "#8A988D" }}>2</td></tr>
                  <tr style={{ borderColor: "rgba(255,255,255,0.1)" }}><td>0x0015</td><td style={{ color: "#D9E4DB" }}>Current-loop gain</td><td style={{ color: "#8A988D" }}>1 reg</td><td>W</td><td style={{ color: "#8A988D" }}>0</td></tr>
                </tbody>
              </table>
              <p style={{ fontSize: "12px", color: "#7E8C81", marginTop: "10px" }}>All registers are 2 bytes. Concentration and K/B values are integers — divide the raw register value by 100 to get the actual reading.</p>

              <div className="tabs">
                <button className={`tab-btn ${activeTab === "read" ? "active" : ""}`} onClick={() => setActiveTab("read")}>Read example</button>
                <button className={`tab-btn ${activeTab === "write" ? "active" : ""}`} onClick={() => setActiveTab("write")}>Write example</button>
              </div>

              {activeTab === "read" && (
                <div className="tab-panel active">
                  <div className="code-block">
                    <button className="copy-btn" onClick={() => handleCopy("02 64 00 01 00 02 A0 30", "read")}>
                      {copiedText === "read" ? "copied" : "copy"}
                    </button>
                    <span className="ccomment">// Request — read concentration at 0x0001, length 2</span>
                    <br />
                    02 64 <span className="chl">00 01</span> 00 02 A0 30
                    <br /><br />
                    <span className="ccomment">// Response</span>
                    <br />
                    02 64 02 <span className="cgreen">00 00 27 10</span> 53 18
                    <br />
                    <span className="ccomment">// 0x00002710 = 10000 → ÷100 = 100.00 mg/m³</span>
                  </div>
                </div>
              )}

              {activeTab === "write" && (
                <div className="tab-panel active">
                  <div className="code-block">
                    <button className="copy-btn" onClick={() => handleCopy("02 65 00 09 00 01 00 64 78 FE", "write")}>
                      {copiedText === "write" ? "copied" : "copy"}
                    </button>
                    <span className="ccomment">// Request — set range (0x0009) to 100</span>
                    <br />
                    02 65 00 09 00 01 <span className="chl">00 64</span> 78 FE
                    <br /><br />
                    <span className="ccomment">// Response — 0x01 = write OK, 0xFF = failed</span>
                    <br />
                    02 65 00 09 00 01 00 64 <span className="cgreen">01</span> 3F E2
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="support">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Support</span>
            <h2>Common symptoms, fast fixes.</h2>
          </div>

          <div>
            <details className="tshoot" open>
              <summary>No current-loop output<span className="plus"></span></summary>
              <div className="tshoot-body">
                <div><b>Likely cause</b><p>Instrument unpowered, or the output cable is broken / loosely connected.</p></div>
                <div><b>What to do</b><p>Check the power supply first, then the control-cable connections (see Installation → Wiring). Replace the cable if it's damaged.</p></div>
              </div>
            </details>
            <details className="tshoot">
              <summary>Digital interface not responding<span className="plus"></span></summary>
              <div className="tshoot-body">
                <div><b>Likely cause</b><p>Instrument not running, a communication-module fault, or a broader instrument malfunction.</p></div>
                <div><b>What to do</b><p>Confirm the unit is powered and operating, then check the RS-485 wiring (pins 5/7). If the module itself has failed, it will need repair.</p></div>
              </div>
            </details>
            <details className="tshoot">
              <summary>Readings consistently too low<span className="plus"></span></summary>
              <div className="tshoot-body">
                <div><b>Likely cause</b><p>Contaminated optical window, or an optical path that's too short for the flue.</p></div>
                <div><b>What to do</b><p>Clean the window (see Calibration → Optical window care). If the path geometry is wrong, contact us to re-adjust it.</p></div>
              </div>
            </details>
            <details className="tshoot">
              <summary>Readings fluctuate heavily<span className="plus"></span></summary>
              <div className="tshoot-body">
                <div><b>Likely cause</b><p>Unstable on-site operating conditions — pressure swings, moisture, or turbulent flow — rather than the instrument itself.</p></div>
                <div><b>What to do</b><p>Review process conditions at the measurement point; consider relocating per the site-selection rules in Installation.</p></div>
              </div>
            </details>
            <details className="tshoot">
              <summary>Readings sit near zero<span className="plus"></span></summary>
              <div className="tshoot-body">
                <div><b>Likely cause</b><p>Heavily contaminated optical window, or a damaged laser source.</p></div>
                <div><b>What to do</b><p>Clean the window first. If the reading stays near zero after cleaning, the laser source likely needs repair.</p></div>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="section band-dark">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Compliance &amp; quality</span>
            <h2>Built to pass acceptance testing — not just to run.</h2>
          </div>
          <div className="compliance">
            <div><h5>HJ 76-2017</h5><p>Designed against the technical requirements and test methods for continuous emission monitoring systems on stationary pollution sources.</p></div>
            <div><h5>IP65 housing</h5><p>All-metal enclosure rated for continuous outdoor duty — wind, rain, dust, and −20°C to +50°C ambient swings.</p></div>
            <div><h5>QEO-managed delivery</h5><p>Quality, environmental, and occupational-health controls run end to end: acceptance, storage, installation, commissioning, and after-sales support.</p></div>
          </div>
          <div className="laser-banner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/><circle cx="12" cy="12" r="3"/></svg>
            <p><b>Laser safety —</b> this instrument operates at 650nm. Never look directly into the emitter during installation, maintenance, or repair.</p>
          </div>
        </div>
      </section>

      <section className="section tight" style={{ background: "white", borderTop: "1px solid var(--line)" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>Continuous Dust &amp; SPM Monitoring</h3>
          <p style={{ color: "var(--ink-soft)", maxWidth: "600px", margin: "0 auto 2rem", lineHeight: 1.6 }}>
            Ready to integrate the BDM series into your existing CEMS setup or require a site assessment for stack emission compliance?
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
            <Link href="/services/air-pollution" className="btn btn-ghost">Air Pollution System Overview</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
