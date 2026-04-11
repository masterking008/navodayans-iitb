"use client";

import { useEffect, useRef } from "react";

const upcomingEvents = [
  {
    date: "25 Apr",
    month: "2026",
    title: "Annual Freshers' Welcome",
    category: "Social",
    description:
      "A warm welcome for all new JNV alumni joining IIT Bombay this academic year. Games, food, and unforgettable first connections.",
    location: "SAC, IIT Bombay",
    tag: "Upcoming",
  },
  {
    date: "10 May",
    month: "2026",
    title: "Alumni Achievers Talk",
    category: "Academic",
    description:
      "Senior Navodayan alumni from top companies and research labs share their journeys from JNV to global platforms.",
    location: "Lecture Hall Complex",
    tag: "Upcoming",
  },
  {
    date: "02 Jun",
    month: "2026",
    title: "Navodaya Cultural Fest",
    category: "Cultural",
    description:
      "A two-day celebration of the diverse cultures represented in our community — music, dance, food, and art.",
    location: "Hostel 5 Lawns",
    tag: "Flagship",
  },
];

const pastEvents = [
  { title: "Diwali Celebration 2025",   category: "Cultural",  attendees: 180 },
  { title: "Cricket Tournament 2025",   category: "Sports",    attendees: 90  },
  { title: "Rural India Panel 2025",    category: "Academic",  attendees: 120 },
  { title: "Freshers' Orientation '25", category: "Social",    attendees: 75  },
  { title: "Mentorship Drive 2025",     category: "Outreach",  attendees: 60  },
  { title: "Alumni Reunion 2025",       category: "Social",    attendees: 200 },
];

const categoryColors: Record<string, string> = {
  Social:   "#E8873A",
  Academic: "#5B8DEF",
  Cultural: "#A855F7",
  Sports:   "#22C55E",
  Outreach: "#06B6D4",
  Flagship: "#D4A843",
};

export default function Events() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      id="events"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: "#0B1628" }}
    >
      {/* Decorative left glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "-8%",
          top: "30%",
          width: "35vw",
          height: "35vw",
          background: "radial-gradient(circle, rgba(91, 141, 239, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
          <div>
            <p className="font-body text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#E8873A" }}>
              What&apos;s Happening
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
              Events &{" "}
              <span
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, #E8873A, #D4A843)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Gatherings
              </span>
            </h2>
          </div>
          <a
            href="#contact"
            className="font-body text-sm font-semibold tracking-wide shrink-0 self-start md:self-auto"
            style={{ color: "#E8873A" }}
          >
            View All Events →
          </a>
        </div>

        {/* Upcoming events grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {upcomingEvents.map((event, i) => (
            <div
              key={event.title}
              className="reveal card-hover group cursor-pointer"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="relative p-6 rounded-2xl h-full flex flex-col"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(232, 135, 58, 0.12)",
                  transition: "border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(232, 135, 58, 0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(232, 135, 58, 0.12)";
                }}
              >
                {/* Tag */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="font-body text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: `${categoryColors[event.category]}22`,
                      color: categoryColors[event.category],
                      border: `1px solid ${categoryColors[event.category]}44`,
                    }}
                  >
                    {event.category}
                  </span>
                  {event.tag === "Flagship" && (
                    <span
                      className="font-body text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(212, 168, 67, 0.15)",
                        color: "#D4A843",
                        border: "1px solid rgba(212, 168, 67, 0.4)",
                      }}
                    >
                      ★ Flagship
                    </span>
                  )}
                </div>

                {/* Date block */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span
                    className="font-display font-bold"
                    style={{ fontSize: "42px", color: "#E8873A", lineHeight: 1 }}
                  >
                    {event.date.split(" ")[0]}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-body text-sm font-medium" style={{ color: "#C8B99A" }}>
                      {event.date.split(" ")[1]}
                    </span>
                    <span className="font-body text-xs" style={{ color: "#6B7E99" }}>
                      {event.month}
                    </span>
                  </div>
                </div>

                <h3
                  className="font-display font-semibold mb-3"
                  style={{ fontSize: "22px", color: "#F5EBD8", lineHeight: 1.3 }}
                >
                  {event.title}
                </h3>
                <p
                  className="font-body font-light mb-5 flex-1"
                  style={{ fontSize: "14px", color: "#6B7E99", lineHeight: 1.7 }}
                >
                  {event.description}
                </p>

                {/* Location */}
                <div className="flex items-center gap-2 pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B7E99" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span className="font-body text-xs" style={{ color: "#6B7E99" }}>
                    {event.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Past events */}
        <div className="reveal">
          <p
            className="font-body text-xs font-semibold tracking-widest uppercase mb-8"
            style={{ color: "#6B7E99" }}
          >
            Past Highlights
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {pastEvents.map((e, i) => (
              <div
                key={e.title}
                className="card-hover p-4 rounded-xl text-center"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                <span
                  className="block font-body text-xs font-semibold px-2 py-0.5 rounded-full mb-3 mx-auto w-fit"
                  style={{
                    background: `${categoryColors[e.category]}18`,
                    color: categoryColors[e.category],
                  }}
                >
                  {e.category}
                </span>
                <p
                  className="font-body font-medium mb-2"
                  style={{ fontSize: "12px", color: "#C8B99A", lineHeight: 1.4 }}
                >
                  {e.title}
                </p>
                <span
                  className="font-display font-bold"
                  style={{ fontSize: "20px", color: "#E8873A" }}
                >
                  {e.attendees}
                </span>
                <span
                  className="block font-body text-xs"
                  style={{ color: "#6B7E99", fontSize: "10px" }}
                >
                  attendees
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
