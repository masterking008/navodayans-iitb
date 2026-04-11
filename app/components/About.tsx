"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0B1628 0%, #0F1F3D 50%, #0B1628 100%)" }}
    >
      {/* Background accent */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-10%",
          top: "20%",
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(circle, rgba(232, 135, 58, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-20 reveal">
          <p className="font-body text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#E8873A" }}>
            Who We Are
          </p>
          <h2
            className="font-display font-semibold max-w-2xl"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "#F5EBD8", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Born in Navodaya,{" "}
            <span style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, #E8873A, #D4A843)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              thriving at IITB
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left column */}
          <div className="reveal-left space-y-8">
            <p
              className="font-display font-light"
              style={{ fontSize: "clamp(18px, 2vw, 22px)", color: "#C8B99A", lineHeight: 1.8 }}
            >
              Jawahar Navodaya Vidyalayas are government residential schools that transform
              the lives of talented students from rural India. We are those students — now
              at one of the world&apos;s finest engineering institutes.
            </p>
            <p
              className="font-body font-light"
              style={{ fontSize: "16px", color: "#6B7E99", lineHeight: 1.9 }}
            >
              Navodayans@IITB is the official community of JNV alumni studying and working
              at IIT Bombay. We connect over shared roots, support each other through challenges,
              celebrate our diverse cultures, and give back to the communities that shaped us.
            </p>

            <div className="section-divider" />

            <blockquote
              className="font-display font-light italic pl-6"
              style={{
                fontSize: "22px",
                color: "#C8B99A",
                lineHeight: 1.7,
                borderLeft: "3px solid #E8873A",
              }}
            >
              &ldquo;From every corner of India, Navodaya brought us together once. IITB
              gives us the chance to do it again — this time, to shape the future.&rdquo;
            </blockquote>
          </div>

          {/* Right column — cards */}
          <div className="reveal-right space-y-5">
            {[
              {
                icon: "🌱",
                title: "Rooted in Rural India",
                body:
                  "Our members come from 28 states across India. We carry the diverse languages, cultures, and wisdom of our hometowns to every seminar room and hostel corridor at IITB.",
              },
              {
                icon: "🤝",
                title: "Brotherhood & Sisterhood",
                body:
                  "From helping freshers settle in, to exam season support groups, to career guidance — we look out for each other at every stage of the IITB journey.",
              },
              {
                icon: "🎯",
                title: "Excellence & Impact",
                body:
                  "We run mentorship programs for current JNV students across India, host talks by alumni in academia and industry, and advocate for students from underserved backgrounds.",
              },
              {
                icon: "🎭",
                title: "Culture & Celebration",
                body:
                  "From Diwali to Holi to our annual cultural fest — we celebrate together, cook together, and never let the spirit of Navodaya fade.",
              },
            ].map(({ icon, title, body }, i) => (
              <div
                key={title}
                className="card-hover p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(232, 135, 58, 0.12)",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div className="flex gap-4">
                  <span style={{ fontSize: "24px", lineHeight: 1 }}>{icon}</span>
                  <div>
                    <h3
                      className="font-body font-semibold mb-2"
                      style={{ fontSize: "15px", color: "#F5EBD8" }}
                    >
                      {title}
                    </h3>
                    <p
                      className="font-body font-light"
                      style={{ fontSize: "14px", color: "#6B7E99", lineHeight: 1.7 }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dividing line with ornament */}
        <div className="mt-24 pt-16 reveal" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "300+", sub: "Members" },
              { num: "28",   sub: "States" },
              { num: "50+",  sub: "Events/Year" },
              { num: "12+",  sub: "Years Old" },
            ].map(({ num, sub }) => (
              <div key={sub} className="text-center">
                <div
                  className="font-display font-bold mb-1"
                  style={{
                    fontSize: "clamp(32px, 4vw, 52px)",
                    background: "linear-gradient(135deg, #E8873A, #D4A843)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {num}
                </div>
                <div
                  className="font-body text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "#6B7E99" }}
                >
                  {sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
