"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  fadeInUp,
  slideInLeft,
  staggerContainerSlow,
  blurFadeInFast,
  socialHover
} from "@/lib/animations";

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);

const FOOTER_SERVICES = [
  { label: "Solid Waste Management", href: "/services/solid-waste" },
  { label: "Air Pollution", href: "/services/air-pollution" },
  { label: "SPM (Dust Analyzer)", href: "/services/air-pollution/spm" },
  { label: "MAAPS (Air Purifier)", href: "/services/air-pollution/maaps" },
  { label: "BESS", href: "/services/bess" },
  { label: "Solar & Wind Energy", href: "/services/solar-wind" },
  { label: "Software Development", href: "/services/software-development" },
];

const FOOTER_COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { Icon: TwitterIcon, href: "#", label: "Twitter" },
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
  { Icon: YoutubeIcon, href: "#", label: "YouTube" },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/preview")) {
    return null;
  }
  return (
    <footer
      role="contentinfo"
      style={{
        background: "#0f172a",
        color: "#94a3b8",
        paddingTop: "4rem",
        paddingBottom: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid #1e293b",
          }}
        >
          {/* Brand */}
          <motion.div variants={slideInLeft} style={{ gridColumn: "span 1" }}>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0px",
                textDecoration: "none",
                marginBottom: "1rem",
                flexShrink: 0,
              }}
            >
              <Image
                src="/Saaphzone logo.png"
                alt="Saaphzone Technologies"
                width={76}
                height={76}
                style={{ objectFit: "contain", flexShrink: 0, marginRight: "-10px" }}
              />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15, flexShrink: 0 }}>
                <span style={{ fontSize: "1.45rem", fontWeight: 800, color: "#ffffff", fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", letterSpacing: "-0.02em" }}>
                  Saaphzone
                </span>
                <span style={{ fontSize: "0.68rem", fontWeight: 600, color: "#94a3b8", fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", letterSpacing: "0.22em", textTransform: "uppercase" }}>
                  Technologies
                </span>
              </div>
            </Link>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Advanced clean-tech solutions for pollution mitigation, waste
              management, and renewable energy across India.
            </p>
            <div style={{ display: "flex", gap: "0.625rem" }}>
              {SOCIALS.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  variants={socialHover}
                  initial="rest"
                  whileHover="hover"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "8px",
                    background: "#1e293b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#64748b",
                    textDecoration: "none",
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#1d4ed8";
                    (e.currentTarget as HTMLAnchorElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#1e293b";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#64748b";
                  }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h3
              style={{
                color: "white",
                fontSize: "0.9rem",
                fontWeight: 700,
                marginBottom: "1rem",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Services
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {FOOTER_SERVICES.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      color: "#94a3b8",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "#3b82f6")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")
                    }
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeInUp}>
            <h3
              style={{
                color: "white",
                fontSize: "0.9rem",
                fontWeight: 700,
                marginBottom: "1rem",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Company
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {FOOTER_COMPANY.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      color: "#94a3b8",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "#3b82f6")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")
                    }
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h3
              style={{
                color: "white",
                fontSize: "0.9rem",
                fontWeight: 700,
                marginBottom: "1rem",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Contact
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                {
                  Icon: MapPin,
                  text: "Plot No. 80, 1st Floor, Udyog Vihar Phase 1, Gurugram, Haryana, India",
                },
                { Icon: Phone, text: "+91 98182 19904" },
                { Icon: Mail, text: "sales@saaphzone.com" },
              ].map(({ Icon, text }) => (
                <div key={text} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                  <Icon size={15} style={{ marginTop: 2, flexShrink: 0, color: "#3b82f6" }} />
                  <span style={{ fontSize: "0.875rem", lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={blurFadeInFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <p style={{ fontSize: "0.85rem" }}>
            © {new Date().getFullYear()} Saaphzone Technologies. All rights reserved.
          </p>
          <p style={{ fontSize: "0.85rem" }}>
            Clean Tech · Pollution Control · Renewable Energy
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
