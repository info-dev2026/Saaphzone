"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg,#f8faff 0%,#eff6ff 60%,#dbeafe 100%)",
        padding: "2rem",
        paddingTop: "80px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 560 }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ fontSize: "clamp(5rem,15vw,8rem)", fontWeight: 900, color: "#dbeafe", fontFamily: "'Plus Jakarta Sans',sans-serif", lineHeight: 1, marginBottom: "0.5rem" }}>
            404
          </div>
          <h1 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "1rem" }}>
            Page Not Found
          </h1>
          <p style={{ fontSize: "1rem", color: "#64748b", lineHeight: 1.75, marginBottom: "2rem" }}>
            The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s get you back on track.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", background: "#1d4ed8", color: "white", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", boxShadow: "0 4px 20px rgba(29,78,216,.3)", transition: "all .25s ease" }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#1e40af"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#1d4ed8"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
            >
              <Home size={18} /> Go Home
            </Link>
            <Link
              href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", background: "white", color: "#1d4ed8", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "'Plus Jakarta Sans',sans-serif", border: "1.5px solid #1d4ed8", transition: "all .25s ease" }}
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
