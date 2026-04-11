"use client";

import { useEffect, useRef, useState } from "react";

const coreTeam = [
  {
    name: "Arjun Sharma",
    role: "President",
    dept: "B.Tech CSE '22",
    from: "JNV Rajasthan",
    initials: "AS",
    color: "#E8873A",
    bio: "Leading the community with vision and purpose.",
  },
  {
    name: "Priya Kumari",
    role: "Vice President",
    dept: "B.Tech EE '23",
    from: "JNV Bihar",
    initials: "PK",
    color: "#5B8DEF",
    bio: "Bridging gaps between seniors and freshers.",
  },
  {
    name: "Rahul Verma",
    role: "General Secretary",
    dept: "M.Tech ME '23",
    from: "JNV UP",
    initials: "RV",
    color: "#D4A843",
    bio: "Keeping the community organized and active.",
  },
  {
    name: "Sneha Patel",
    role: "Cultural Secretary",
    dept: "B.Tech Civil '24",
    from: "JNV Gujarat",
    initials: "SP",
    color: "#A855F7",
    bio: "Orchestrating festivals that bring us together.",
  },
  {
    name: "Amit Singh",
    role: "Technical Head",
    dept: "PhD CS",
    from: "JNV MP",
    initials: "AS",
    color: "#06B6D4",
    bio: "Driving our digital presence and tech events.",
  },
  {
    name: "Kavya Reddy",
    role: "Sports Captain",
    dept: "B.Tech ChE '23",
    from: "JNV Telangana",
    initials: "KR",
    color: "#22C55E",
    bio: "Energizing the community through sport.",
  },
  {
    name: "Deepak Yadav",
    role: "Social Media Head",
    dept: "B.Tech HSS '24",
    from: "JNV Haryana",
    initials: "DY",
    color: "#F472B6",
    bio: "Telling our stories to the world.",
  },
  {
    name: "Meena Gupta",
    role: "Finance Secretary",
    dept: "B.Tech Physics '22",
    from: "JNV CG",
    initials: "MG",
    color: "#FB923C",
    bio: "Making every rupee count for the community.",
  },
];

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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
      id="team"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: "#0B1628" }}
    >
      {/* Top glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "50%",
          top: "-5%",
          transform: "translateX(-50%)",
          width: "60vw",
          height: "30vw",
          background: "radial-gradient(ellipse, rgba(232, 135, 58, 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="font-body text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#E8873A" }}>
            The People Behind It
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
            Core{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #E8873A, #D4A843)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Team 2025–26
            </span>
          </h2>
          <p
            className="font-body font-light mt-4 max-w-xl mx-auto"
            style={{ fontSize: "16px", color: "#6B7E99", lineHeight: 1.7 }}
          >
            Dedicated Navodayans working tirelessly to keep the community thriving.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 reveal">
          {coreTeam.map((member, i) => (
            <div
              key={member.name}
              className="group cursor-pointer"
              style={{ transitionDelay: `${i * 60}ms` }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div
                className="relative p-5 rounded-2xl text-center transition-all duration-400"
                style={{
                  background: hoveredIdx === i
                    ? `linear-gradient(135deg, ${member.color}18, ${member.color}08)`
                    : "rgba(255,255,255,0.03)",
                  border: `1px solid ${hoveredIdx === i ? member.color + "44" : "rgba(255,255,255,0.06)"}`,
                  transform: hoveredIdx === i ? "translateY(-6px)" : "translateY(0)",
                  transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                  boxShadow: hoveredIdx === i
                    ? `0 20px 60px rgba(0,0,0,0.4), 0 0 30px ${member.color}18`
                    : "none",
                }}
              >
                {/* Avatar */}
                <div
                  className="relative w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${member.color}44, ${member.color}22)`,
                    border: `2px solid ${member.color}66`,
                    boxShadow: hoveredIdx === i ? `0 0 20px ${member.color}44` : "none",
                    transition: "box-shadow 0.3s ease",
                  }}
                >
                  <span
                    className="font-display font-bold"
                    style={{ fontSize: "20px", color: member.color }}
                  >
                    {member.initials}
                  </span>
                </div>

                {/* Name & Role */}
                <h3
                  className="font-body font-semibold mb-1"
                  style={{ fontSize: "15px", color: "#F5EBD8" }}
                >
                  {member.name}
                </h3>
                <p
                  className="font-body font-semibold text-xs mb-2 tracking-wide"
                  style={{ color: member.color }}
                >
                  {member.role}
                </p>
                <p
                  className="font-body text-xs mb-1"
                  style={{ color: "#6B7E99" }}
                >
                  {member.dept}
                </p>
                <p
                  className="font-body text-xs"
                  style={{ color: "#6B7E99", fontSize: "11px" }}
                >
                  {member.from}
                </p>

                {/* Bio on hover */}
                <div
                  className="mt-3 pt-3 overflow-hidden"
                  style={{
                    borderTop: `1px solid ${member.color}22`,
                    maxHeight: hoveredIdx === i ? "60px" : "0px",
                    opacity: hoveredIdx === i ? 1 : 0,
                    transition: "all 0.35s ease",
                  }}
                >
                  <p
                    className="font-body font-light"
                    style={{ fontSize: "12px", color: "#C8B99A", lineHeight: 1.5 }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join team CTA */}
        <div className="text-center mt-14 reveal">
          <p className="font-body text-sm mb-4" style={{ color: "#6B7E99" }}>
            Interested in contributing to the community?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-body font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300"
            style={{
              border: "1px solid rgba(232, 135, 58, 0.4)",
              color: "#E8873A",
              background: "rgba(232, 135, 58, 0.06)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(232, 135, 58, 0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(232, 135, 58, 0.06)";
            }}
          >
            Volunteer with Us →
          </a>
        </div>
      </div>
    </section>
  );
}
