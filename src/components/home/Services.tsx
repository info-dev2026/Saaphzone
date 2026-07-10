"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Recycle, Wind, BatteryFull, Sun, Code2, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const SERVICES = [
  {
    id: "solid-waste",
    Icon: Recycle,
    title: "Solid Waste Management",
    tagline: "Waste. Reimagined.",
    description:
      "End-to-end waste processing — collection, segregation, treatment, and safe disposal systems for industries and municipalities.",
    href: "/services/solid-waste",
    accent: "#1d4ed8", // Match primary blue color
    image: "/service-solid-waste.png",
  },
  {
    id: "air-pollution",
    Icon: Wind,
    title: "Air Pollution",
    tagline: "Breathe Cleaner.",
    description:
      "Advanced filtration, scrubbers, and dust-collection systems that bring industrial emissions well within regulatory limits.",
    href: "/services/air-pollution",
    accent: "#3b82f6", // Match secondary blue/sky color
    image: "/service-air-pollution.png",
  },
  {
    id: "bess",
    Icon: BatteryFull,
    title: "Battery Energy Storage System",
    tagline: "Power. Stored Smarter.",
    description:
      "Grid-scale and commercial BESS solutions for reliable, intelligent energy storage that maximises renewable utilisation.",
    href: "/services/bess",
    accent: "#2563eb", // Match medium blue
    image: "/service-bess.png",
  },
  {
    id: "solar-wind",
    Icon: Sun,
    title: "Solar & Wind Energy",
    tagline: "Pure Energy.",
    description:
      "Turnkey solar PV, wind turbine, and hybrid renewable energy plants engineered for maximum yield and long-term ROI.",
    href: "/services/solar-wind",
    accent: "#059669", // Leaf/Emerald green accent
    image: "/service-solar-wind.png",
  },
  {
    id: "software-development",
    Icon: Code2,
    title: "Software Development",
    tagline: "Built for the Planet.",
    description:
      "Custom environmental tracking software, IoT telemetry integration, and enterprise compliance reporting dashboards.",
    href: "/services/software-development",
    accent: "#0d9488", // Teal/planet accent
    image: "/service-software-dev.png",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goTo = useCallback(
    (next: number) => {
      setDirection(next > active ? 1 : -1);
      setActive(next);
    },
    [active]
  );

  const prev = useCallback(() => {
    goTo(active === 0 ? SERVICES.length - 1 : active - 1);
  }, [active, goTo]);

  const next = useCallback(() => {
    goTo(active === SERVICES.length - 1 ? 0 : active + 1);
  }, [active, goTo]);

  // Arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }
      if (e.key === "ArrowLeft") {
        prev();
      } else if (e.key === "ArrowRight") {
        next();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prev, next]);

  const getIndex = (offset: number) =>
    (active + offset + SERVICES.length) % SERVICES.length;

  return (
    <section
      id="services"
      aria-label="Our Services"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f8faff 100%)",
        padding: "6rem 0 5rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle blue dot grid background to match website style */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(29,78,216,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      {/* Ambient glow behind active card (softer and lighter) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${SERVICES[active].accent}10 0%, transparent 70%)`,
            pointerEvents: "none",
            filter: "blur(40px)",
          }}
        />
      </AnimatePresence>

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ textAlign: "center", marginBottom: "3.5rem", padding: "0 1.5rem" }}
        >
          <span
            style={{
              display: "inline-block",
              background: "#eff6ff",
              border: "1px solid rgba(29,78,216,0.15)",
              color: "#1d4ed8",
              fontSize: "0.75rem",
              fontWeight: 700,
              padding: "0.35rem 1rem",
              borderRadius: "100px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1rem",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            What We Do
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 800,
              color: "#0f172a", // Dark slate to match website
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: "-0.03em",
              marginBottom: "0.75rem",
            }}
          >
            Our Core Services
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "#64748b", // Slate to match website
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Comprehensive environmental solutions designed to meet India&apos;s toughest industrial challenges.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.25rem",
            padding: "0 1rem",
          }}
        >
          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous service"
            style={{
              flexShrink: 0,
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: "1px solid rgba(15,23,42,0.08)",
              background: "rgba(255,255,255,0.8)",
              color: "#475569",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease",
              zIndex: 2,
              boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
            }}
            onMouseEnter={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.background = "#ffffff";
              btn.style.borderColor = "rgba(29,78,216,0.2)";
              btn.style.color = "#1d4ed8";
              btn.style.boxShadow = "0 6px 16px rgba(29,78,216,0.1)";
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.background = "rgba(255,255,255,0.8)";
              btn.style.borderColor = "rgba(15,23,42,0.08)";
              btn.style.color = "#475569";
              btn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.04)";
            }}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Cards track */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flex: 1,
              overflow: "hidden",
              justifyContent: "center",
            }}
          >
            {/* Left peek card */}
            <PeekCard service={SERVICES[getIndex(-1)]} onClick={prev} side="left" />

            {/* Center active card */}
            <AnimatePresence mode="wait" initial={false}>
              {(() => {
                const ActiveIcon = SERVICES[active].Icon;
                return (
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, x: direction * 80, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: direction * -80, scale: 0.95 }}
                    transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{
                      flexShrink: 0,
                      width: "min(520px, 56vw)",
                      height: "min(400px, 52vw)",
                      borderRadius: "24px",
                      overflow: "hidden",
                      position: "relative",
                      boxShadow: "0 24px 64px rgba(15,23,42,0.12), 0 0 0 1px rgba(15,23,42,0.04)",
                      cursor: "default",
                    }}
                  >
                    {/* Full-bleed image */}
                    <Image
                      src={SERVICES[active].image}
                      alt={SERVICES[active].title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 90vw, 520px"
                      priority
                    />

                    {/* Bottom gradient overlay (dark overlay kept for overlay readability) */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.3) 50%, transparent 100%)",
                      }}
                    />

                    {/* Softer Accent glow top-right */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        top: -40,
                        right: -40,
                        width: 200,
                        height: 200,
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${SERVICES[active].accent}33 0%, transparent 70%)`,
                        pointerEvents: "none",
                      }}
                    />

                    {/* Icon badge top-left (Glassmorphism Light) */}
                    <div
                      style={{
                        position: "absolute",
                        top: "1.25rem",
                        left: "1.25rem",
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        background: "rgba(255,255,255,0.9)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        border: `1px solid rgba(255,255,255,0.6)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      }}
                    >
                      <ActiveIcon size={22} color={SERVICES[active].accent} />
                    </div>

                    {/* Bottom text */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "1.5rem 1.75rem",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: SERVICES[active].accent === "#1d4ed8" ? "#60a5fa" : SERVICES[active].accent, // Ensure readability on dark gradient
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginBottom: "0.375rem",
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}
                      >
                        {SERVICES[active].tagline}
                      </p>
                      <h3
                        style={{
                          fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
                          fontWeight: 800,
                          color: "#ffffff",
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          letterSpacing: "-0.02em",
                          marginBottom: "0.625rem",
                        }}
                      >
                        {SERVICES[active].title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "rgba(255,255,255,0.8)",
                          lineHeight: 1.6,
                          marginBottom: "1.25rem",
                          maxWidth: 380,
                        }}
                      >
                        {SERVICES[active].description}
                      </p>
                      <Link
                        href={SERVICES[active].href}
                        id={`service-${SERVICES[active].id}-cta`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          background: "#ffffff",
                          color: "#1d4ed8", // Website main brand color
                          padding: "0.5rem 1.125rem",
                          borderRadius: "100px",
                          textDecoration: "none",
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          transition: "all 0.2s ease",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        }}
                        onMouseEnter={(e) => {
                          const link = e.currentTarget as HTMLAnchorElement;
                          link.style.background = SERVICES[active].accent;
                          link.style.color = "#ffffff";
                          link.style.transform = "translateY(-1px)";
                          link.style.boxShadow = `0 6px 16px ${SERVICES[active].accent}33`;
                        }}
                        onMouseLeave={(e) => {
                          const link = e.currentTarget as HTMLAnchorElement;
                          link.style.background = "#ffffff";
                          link.style.color = "#1d4ed8";
                          link.style.transform = "translateY(0)";
                          link.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                        }}
                      >
                        Explore Service <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>

            {/* Right peek card */}
            <PeekCard service={SERVICES[getIndex(1)]} onClick={next} side="right" />
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next service"
            style={{
              flexShrink: 0,
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: "1px solid rgba(15,23,42,0.08)",
              background: "rgba(255,255,255,0.8)",
              color: "#475569",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease",
              zIndex: 2,
              boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
            }}
            onMouseEnter={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.background = "#ffffff";
              btn.style.borderColor = "rgba(29,78,216,0.2)";
              btn.style.color = "#1d4ed8";
              btn.style.boxShadow = "0 6px 16px rgba(29,78,216,0.1)";
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.background = "rgba(255,255,255,0.8)";
              btn.style.borderColor = "rgba(15,23,42,0.08)";
              btn.style.color = "#475569";
              btn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.04)";
            }}
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dot pagination */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            marginTop: "2rem",
          }}
        >
          {SERVICES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              aria-label={`Go to ${s.title}`}
              style={{
                width: i === active ? 28 : 8,
                height: 8,
                borderRadius: "100px",
                background: i === active ? SERVICES[active].accent : "rgba(15,23,42,0.12)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.3s ease, background 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* Service name tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            marginTop: "2rem",
            flexWrap: "wrap",
            padding: "0 1.5rem",
          }}
        >
          {SERVICES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.375rem 0.875rem",
                borderRadius: "100px",
                border: `1px solid ${i === active ? s.accent + "44" : "rgba(15,23,42,0.08)"}`,
                background: i === active ? s.accent + "12" : "transparent",
                color: i === active ? s.accent : "#64748b",
                fontSize: "0.8rem",
                fontWeight: 600,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                if (i !== active) {
                  const btn = e.currentTarget as HTMLButtonElement;
                  btn.style.borderColor = "rgba(15,23,42,0.15)";
                  btn.style.color = "#334155";
                }
              }}
              onMouseLeave={(e) => {
                if (i !== active) {
                  const btn = e.currentTarget as HTMLButtonElement;
                  btn.style.borderColor = "rgba(15,23,42,0.08)";
                  btn.style.color = "#64748b";
                }
              }}
            >
              {(() => { const TabIcon = s.Icon; return <TabIcon size={13} />; })()}
              {s.title.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .peek-card { display: none !important; }
        }
      `}</style>
    </section>
  );
}

function PeekCard({
  service,
  onClick,
  side,
}: {
  service: (typeof SERVICES)[0];
  onClick: () => void;
  side: "left" | "right";
}) {
  return (
    <div
      className="peek-card"
      onClick={onClick}
      style={{
        flexShrink: 0,
        width: "min(160px, 14vw)",
        height: "min(280px, 36vw)",
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        opacity: 0.55,
        filter: "blur(1px)",
        cursor: "pointer",
        transform: side === "left" ? "scale(0.9) translateX(10px)" : "scale(0.9) translateX(-10px)",
        transition: "all 0.3s ease",
        boxShadow: "0 12px 32px rgba(15,23,42,0.08), 0 0 0 1px rgba(15,23,42,0.04)",
      }}
      onMouseEnter={(e) => {
        const card = e.currentTarget as HTMLDivElement;
        card.style.opacity = "0.85";
        card.style.filter = "blur(0px)";
        card.style.transform = side === "left" ? "scale(0.92) translateX(5px)" : "scale(0.92) translateX(-5px)";
      }}
      onMouseLeave={(e) => {
        const card = e.currentTarget as HTMLDivElement;
        card.style.opacity = "0.55";
        card.style.filter = "blur(1px)";
        card.style.transform = side === "left" ? "scale(0.9) translateX(10px)" : "scale(0.9) translateX(-10px)";
      }}
    >
      <Image
        src={service.image}
        alt={service.title}
        fill
        style={{ objectFit: "cover" }}
        sizes="160px"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(15,23,42,0.85) 0%, transparent 60%)",
        }}
      />
      <p
        style={{
          position: "absolute",
          bottom: "0.875rem",
          left: "0.75rem",
          right: "0.75rem",
          fontSize: "0.75rem",
          fontWeight: 700,
          color: "#ffffff",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          lineHeight: 1.3,
        }}
      >
        {service.title}
      </p>
    </div>
  );
}
