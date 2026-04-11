"use client";

import { useEffect, useRef, useState } from "react";

const galleryItems = [
  {
    id: 1,
    title: "Freshers' Night 2025",
    category: "Social",
    gradient: "linear-gradient(135deg, #E8873A 0%, #D4A843 100%)",
    span: "col-span-2",
    symbol: "✦",
  },
  {
    id: 2,
    title: "Annual Reunion",
    category: "Social",
    gradient: "linear-gradient(135deg, #1A2E52 0%, #2A4A7F 100%)",
    span: "col-span-1",
    symbol: "◈",
  },
  {
    id: 3,
    title: "Cultural Fest",
    category: "Cultural",
    gradient: "linear-gradient(135deg, #6D28D9 0%, #A855F7 100%)",
    span: "col-span-1",
    symbol: "❋",
  },
  {
    id: 4,
    title: "Diwali 2025",
    category: "Celebration",
    gradient: "linear-gradient(135deg, #B45309 0%, #F59E0B 100%)",
    span: "col-span-1",
    symbol: "✺",
  },
  {
    id: 5,
    title: "Cricket Cup",
    category: "Sports",
    gradient: "linear-gradient(135deg, #065F46 0%, #22C55E 100%)",
    span: "col-span-1",
    symbol: "◉",
  },
  {
    id: 6,
    title: "Mentorship Drive",
    category: "Outreach",
    gradient: "linear-gradient(135deg, #0C4A6E 0%, #06B6D4 100%)",
    span: "col-span-2",
    symbol: "⬡",
  },
  {
    id: 7,
    title: "Alumni Talk Series",
    category: "Academic",
    gradient: "linear-gradient(135deg, #1E3A5F 0%, #5B8DEF 100%)",
    span: "col-span-1",
    symbol: "◆",
  },
  {
    id: 8,
    title: "Holi Celebration",
    category: "Cultural",
    gradient: "linear-gradient(135deg, #9D174D 0%, #F472B6 100%)",
    span: "col-span-1",
    symbol: "✿",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".reveal, .reveal-left, .reveal-right")
              .forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0B1628 0%, #0F1F3D 100%)" }}
    >
      {/* Decorative glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-5%",
          bottom: "10%",
          width: "35vw",
          height: "35vw",
          background: "radial-gradient(circle, rgba(212, 168, 67, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
          <div>
            <p className="font-body text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#E8873A" }}>
              Memories
            </p>
            <h2
              className="font-display font-semibold"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                color: "#F5EBD8",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Our{" "}
              <span
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, #E8873A, #D4A843)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Story in Frames
              </span>
            </h2>
          </div>
          <p
            className="font-body font-light max-w-xs"
            style={{ fontSize: "14px", color: "#6B7E99", lineHeight: 1.7 }}
          >
            Every gathering, every milestone, every moment of joy — captured forever.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div
          className="reveal grid gap-4"
          style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`${item.span} relative rounded-2xl overflow-hidden cursor-pointer`}
              style={{
                height: item.span === "col-span-2" ? "240px" : "200px",
                background: item.gradient,
                transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease",
                transform: hoveredId === item.id ? "scale(1.02)" : "scale(1)",
                boxShadow: hoveredId === item.id
                  ? "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(232, 135, 58, 0.15)"
                  : "0 4px 20px rgba(0,0,0,0.3)",
                transitionDelay: `${i * 40}ms`,
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "rgba(0,0,0,0.2)",
                  transition: "background 0.3s ease",
                  ...(hoveredId === item.id && { background: "rgba(0,0,0,0.05)" }),
                }}
              />

              {/* Decorative symbol */}
              <div
                className="absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: item.span === "col-span-2" ? "80px" : "60px",
                  color: "rgba(255,255,255,0.08)",
                  lineHeight: 1,
                  transition: "opacity 0.3s ease",
                  opacity: hoveredId === item.id ? 0 : 1,
                  userSelect: "none",
                }}
              >
                {item.symbol}
              </div>

              {/* Label */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{
                  background: "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 100%)",
                }}
              >
                <span
                  className="block font-body text-xs font-semibold mb-1 tracking-wider uppercase"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {item.category}
                </span>
                <span
                  className="block font-display font-semibold"
                  style={{ fontSize: "16px", color: "#F5EBD8" }}
                >
                  {item.title}
                </span>
              </div>

              {/* Hover icon */}
              <div
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  opacity: hoveredId === item.id ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* See more CTA */}
        <div className="text-center mt-12 reveal">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-body font-semibold text-sm"
            style={{ color: "#E8873A", letterSpacing: "0.04em" }}
          >
            View Full Gallery
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
