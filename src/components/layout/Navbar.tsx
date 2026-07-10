"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Solid Waste Management", href: "/services/solid-waste" },
      {
        label: "Air Pollution",
        href: "/services/air-pollution",
        children: [
          { label: "SPM (Dust Analyzer)", href: "/services/air-pollution/spm" },
          { label: "MAAPS (Air Purifier)", href: "/services/air-pollution/maaps" },
        ],
      },
      { label: "BESS", href: "/services/bess" },
      { label: "Solar & Wind Energy", href: "/services/solar-wind" },
      { label: "Software Development", href: "/services/software-development" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);      // desktop hover
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile accordion
  const [subOpen, setSubOpen] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileOpen(false);
      setServicesOpen(false);
      setMobileServicesOpen(false);
      setSubOpen(null);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const isBess = pathname === "/services/bess" || pathname === "/services/bess/";
  const isSpm = pathname === "/services/air-pollution/spm" || pathname === "/services/air-pollution/spm/";
  const isMaaps = pathname === "/services/air-pollution/maaps" || pathname === "/services/air-pollution/maaps/";
  if (pathname?.startsWith("/preview") || isBess || isSpm || isMaaps) {
    return null;
  }

  return (
    <header
      role="banner"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9990,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(255,255,255,0.97)"
          : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.07)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
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
            width={76}
            height={76}
            className="navbar-logo-img"
            style={{ objectFit: "contain", background: "none", flexShrink: 0 }}
            priority
            loading="eager"
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15, flexShrink: 0 }}>
            <span className="navbar-logo-text-title" style={{ fontWeight: 800, color: "#0f172a", fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", letterSpacing: "-0.02em" }}>
              Saaphzone
            </span>
            <span className="navbar-logo-text-subtitle" style={{ fontWeight: 600, color: "#64748b", fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", letterSpacing: "0.22em", textTransform: "uppercase" }}>
              Technologies
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="navbar-desktop-nav"
        >
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                style={{ position: "relative" }}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "0.5rem 0.875rem",
                    borderRadius: "8px",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "#1e293b",
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                  <ChevronDown
                    size={15}
                    style={{
                      transition: "transform 0.2s",
                      transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                {servicesOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      minWidth: 230,
                      background: "white",
                      borderRadius: "12px",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                      border: "1px solid #e2e8f0",
                      padding: "0.5rem",
                      animation: "fadeDown 0.18s ease",
                    }}
                  >
                    {link.children.map((child) => {
                      if ("children" in child && Array.isArray(child.children)) {
                        return (
                          <div
                            key={child.href}
                            className="nav-sub-item-container"
                            style={{ position: "relative" }}
                          >
                            <Link
                              href={child.href}
                              className="nav-sub-item-link"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "0.625rem 0.875rem",
                                borderRadius: "8px",
                                textDecoration: "none",
                                fontSize: "0.9rem",
                                fontWeight: 500,
                                color: "#374151",
                                transition: "background 0.15s, color 0.15s",
                              }}
                            >
                              <span>{child.label}</span>
                              <ChevronRight size={14} />
                            </Link>
                            <div
                              className="nav-nested-menu"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: "100%",
                                marginLeft: "4px",
                                minWidth: 200,
                                background: "white",
                                borderRadius: "12px",
                                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                                border: "1px solid #e2e8f0",
                                padding: "0.5rem",
                                display: "none",
                              }}
                            >
                              {child.children.map((subChild) => (
                                <Link
                                  key={subChild.href}
                                  href={subChild.href}
                                  style={{
                                    display: "block",
                                    padding: "0.625rem 0.875rem",
                                    borderRadius: "8px",
                                    textDecoration: "none",
                                    fontSize: "0.9rem",
                                    fontWeight: 500,
                                    color: "#374151",
                                    transition: "background 0.15s, color 0.15s",
                                  }}
                                  onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.background = "#eff6ff";
                                    (e.currentTarget as HTMLAnchorElement).style.color = "#1d4ed8";
                                  }}
                                  onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                                    (e.currentTarget as HTMLAnchorElement).style.color = "#374151";
                                  }}
                                >
                                  {subChild.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      }

                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          style={{
                            display: "block",
                            padding: "0.625rem 0.875rem",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontSize: "0.9rem",
                            fontWeight: 500,
                            color: "#374151",
                            transition: "background 0.15s, color 0.15s",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = "#eff6ff";
                            (e.currentTarget as HTMLAnchorElement).style.color = "#1d4ed8";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                            (e.currentTarget as HTMLAnchorElement).style.color = "#374151";
                          }}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "0.5rem 0.875rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  color: pathname === link.href ? "#1d4ed8" : "#1e293b",
                  background: pathname === link.href ? "#eff6ff" : "transparent",
                  transition: "color 0.2s, background 0.2s",
                }}
              >
                {link.label}
              </Link>
            )
          )}


          {/* Get Quote CTA */}
          <Link
            href="/contact"
            id="navbar-get-quote"
            style={{
              marginLeft: "0.5rem",
              padding: "0.5rem 1.125rem",
              background: "#1d4ed8",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 700,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#1e40af";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 12px rgba(29,78,216,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#1d4ed8";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="navbar-mobile-hamburger"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setMobileOpen((prev) => !prev);
          }}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            borderRadius: "8px",
            color: "#1e293b",
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            background: "white",
            borderTop: "1px solid #e2e8f0",
            padding: "1rem 1.5rem 1.5rem",
            animation: "slideDown 0.2s ease",
            maxHeight: "calc(100vh - 80px)",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setMobileServicesOpen((prev) => !prev);
                  }}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.75rem 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#1e293b",
                    borderBottom: mobileServicesOpen ? "none" : "1px solid #f1f5f9",
                    userSelect: "none",
                  }}
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    style={{
                      transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                      flexShrink: 0,
                    }}
                  />
                </button>
                {mobileServicesOpen && (
                  <div style={{ paddingLeft: "1rem" }}>
                    {link.children.map((child) => {
                      if ("children" in child && Array.isArray(child.children)) {
                        const isOpen = subOpen === child.label;
                        return (
                          <div key={child.label}>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setSubOpen(isOpen ? null : child.label);
                              }}
                              style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "0.625rem 0",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "0.9375rem",
                                fontWeight: 500,
                                color: "#3b82f6",
                                borderBottom: "1px solid #f8fafc",
                              }}
                            >
                              <span>{child.label}</span>
                              <ChevronDown
                                size={14}
                                style={{
                                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                  transition: "transform 0.2s",
                                  color: "#3b82f6",
                                }}
                              />
                            </button>
                            {isOpen && (
                              <div style={{ paddingLeft: "1rem" }}>
                                <Link
                                  href={child.href}
                                  style={{
                                    display: "block",
                                    padding: "0.625rem 0",
                                    textDecoration: "none",
                                    fontSize: "0.9rem",
                                    fontWeight: 500,
                                    color: "#64748b",
                                    borderBottom: "1px solid #f8fafc",
                                  }}
                                >
                                  Overview
                                </Link>
                                {child.children.map((subChild) => (
                                  <Link
                                    key={subChild.href}
                                    href={subChild.href}
                                    style={{
                                      display: "block",
                                      padding: "0.625rem 0",
                                      textDecoration: "none",
                                      fontSize: "0.9rem",
                                      fontWeight: 500,
                                      color: "#64748b",
                                      borderBottom: "1px solid #f8fafc",
                                    }}
                                  >
                                    {subChild.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      }

                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          style={{
                            display: "block",
                            padding: "0.625rem 0",
                            textDecoration: "none",
                            fontSize: "0.9375rem",
                            fontWeight: 500,
                            color: "#3b82f6",
                            borderBottom: "1px solid #f8fafc",
                          }}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "0.75rem 0",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: pathname === link.href ? "#1d4ed8" : "#1e293b",
                  borderBottom: "1px solid #f1f5f9",
                }}
              >
                {link.label}
              </Link>
            )
          )}

          {/* Mobile Get Quote */}
          <div style={{ marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid #f1f5f9" }}>
            <Link
              href="/contact"
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "0.75rem",
                background: "#1d4ed8",
                color: "white",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1rem",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .navbar-logo-img {
          width: 70px !important;
          height: 70px !important;
          margin-right: -10px !important;
        }
        .navbar-logo-text-title {
          font-size: 1.35rem !important;
        }
        .navbar-logo-text-subtitle {
          font-size: 0.65rem !important;
        }
        @media (max-width: 640px) {
          .navbar-logo-img {
            width: 52px !important;
            height: 52px !important;
            margin-right: -7px !important;
          }
          .navbar-logo-text-title {
            font-size: 1.15rem !important;
          }
          .navbar-logo-text-subtitle {
            font-size: 0.55rem !important;
          }
        }
        .nav-sub-item-container:hover .nav-nested-menu {
          display: block !important;
          animation: fadeRight 0.18s ease;
        }
        .nav-nested-menu::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: -15px;
          width: 15px;
          background: transparent;
        }
        .nav-sub-item-container:hover > .nav-sub-item-link {
          background-color: #eff6ff;
          color: #1d4ed8 !important;
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .navbar-desktop-nav {
          display: none;
        }
        .navbar-mobile-hamburger {
          display: block;
        }
        @media (min-width: 1024px) {
          .navbar-desktop-nav {
            display: flex !important;
            align-items: center;
            gap: 0.25rem;
          }
          .navbar-mobile-hamburger {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
