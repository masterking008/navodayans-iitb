"use client";

import { useEffect, useRef, useState } from "react";

export default function Join() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0B1628 0%, #0F1F3D 100%)" }}
    >
      {/* Large saffron glow center */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70vw",
          height: "70vw",
          background: "radial-gradient(ellipse, rgba(232, 135, 58, 0.08) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">

        {/* Label */}
        <p
          className="reveal font-body text-xs font-semibold tracking-widest uppercase mb-6"
          style={{ color: "#E8873A" }}
        >
          Join the Family
        </p>

        {/* Heading */}
        <h2
          className="reveal font-display font-semibold mb-6"
          style={{
            fontSize: "clamp(40px, 6vw, 80px)",
            color: "#F5EBD8",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Are you a{" "}
          <span
            style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, #E8873A, #D4A843)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Navodayan
          </span>{" "}
          at IITB?
        </h2>

        <p
          className="reveal font-body font-light mb-12 max-w-2xl mx-auto"
          style={{ fontSize: "18px", color: "#6B7E99", lineHeight: 1.8 }}
        >
          If you studied at a Jawahar Navodaya Vidyalaya and are now at IIT Bombay —
          as a student, faculty, or staff — you belong here. Come find your people.
        </p>

        {/* Email form */}
        <form
          onSubmit={handleSubmit}
          className="reveal flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-12"
        >
          {!submitted ? (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@iitb.ac.in"
                required
                className="flex-1 px-5 py-3.5 rounded-full font-body text-sm outline-none transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(232, 135, 58, 0.25)",
                  color: "#F5EBD8",
                }}
                onFocus={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(232, 135, 58, 0.7)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(232, 135, 58, 0.05)";
                }}
                onBlur={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(232, 135, 58, 0.25)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                }}
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full font-body font-semibold text-sm transition-all duration-300 shrink-0"
                style={{
                  background: "linear-gradient(135deg, #E8873A, #D4A843)",
                  color: "#0B1628",
                  letterSpacing: "0.04em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 25px rgba(232, 135, 58, 0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                Register Now
              </button>
            </>
          ) : (
            <div
              className="w-full text-center py-4 rounded-full font-body font-semibold"
              style={{
                background: "rgba(34, 197, 94, 0.1)",
                border: "1px solid rgba(34, 197, 94, 0.4)",
                color: "#22C55E",
              }}
            >
              ✓ Welcome to the family! We'll reach out soon.
            </div>
          )}
        </form>

        {/* OR divider */}
        <div className="reveal ornament-line max-w-xs mx-auto mb-10">
          <span className="font-body text-xs tracking-widest" style={{ color: "#6B7E99" }}>
            OR CONNECT WITH US DIRECTLY
          </span>
        </div>

        {/* Social media grid */}
        <div className="reveal flex flex-wrap justify-center gap-4">
          {[
            {
              name: "WhatsApp",
              href: "https://whatsapp.com",
              color: "#25D366",
              desc: "Join our WhatsApp group",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              ),
            },
            {
              name: "Instagram",
              href: "https://instagram.com",
              color: "#E1306C",
              desc: "Follow @navodayans.iitb",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                </svg>
              ),
            },
            {
              name: "LinkedIn",
              href: "https://linkedin.com",
              color: "#0A66C2",
              desc: "Connect professionally",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              ),
            },
            {
              name: "YouTube",
              href: "https://youtube.com",
              color: "#FF0000",
              desc: "Watch our events",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
                </svg>
              ),
            },
            {
              name: "Twitter / X",
              href: "https://twitter.com",
              color: "#1DA1F2",
              desc: "Stay in the loop",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              ),
            },
            {
              name: "Email",
              href: "mailto:navodayans@iitb.ac.in",
              color: "#E8873A",
              desc: "navodayans@iitb.ac.in",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 8l10 6 10-6"/>
                </svg>
              ),
            },
          ].map(({ name, href, color, desc, icon }) => (
            <a
              key={name}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 group"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = `${color}18`;
                (e.currentTarget as HTMLElement).style.borderColor = `${color}55`;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <span style={{ color }}>{icon}</span>
              <div className="text-left">
                <p className="font-body font-semibold" style={{ fontSize: "13px", color: "#F5EBD8" }}>
                  {name}
                </p>
                <p className="font-body" style={{ fontSize: "11px", color: "#6B7E99" }}>
                  {desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
