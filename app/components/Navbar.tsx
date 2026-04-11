"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home",   href: "#home" },
  { label: "About",  href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Gallery",href: "#gallery" },
  { label: "Team",   href: "#team" },
  { label: "Contact",href: "#contact" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(11, 22, 40, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(232, 135, 58, 0.15)" : "none",
          animation: "slideDown 0.6s ease both",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="#home" onClick={handleLinkClick} className="flex items-center gap-3 group">
              <div
                className="relative w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #E8873A, #D4A843)",
                  boxShadow: "0 0 20px rgba(232, 135, 58, 0.4)",
                }}
              >
                <span
                  className="font-display text-navy font-bold"
                  style={{ fontSize: "15px", lineHeight: 1 }}
                >
                  N
                </span>
              </div>
              <div className="flex flex-col leading-tight">
                <span
                  className="font-display font-semibold text-cream"
                  style={{ fontSize: "17px", letterSpacing: "0.02em" }}
                >
                  Navodayans
                </span>
                <span
                  className="font-body font-medium text-saffron"
                  style={{ fontSize: "11px", letterSpacing: "0.12em" }}
                >
                  @IITB
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`nav-link font-body text-sm font-medium tracking-wide transition-colors duration-200 ${
                    activeSection === href.slice(1)
                      ? "text-saffron active"
                      : "text-cream-dim hover:text-cream"
                  }`}
                  style={{ color: activeSection === href.slice(1) ? "#E8873A" : "#C8B99A" }}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted hover:text-saffron transition-colors duration-200"
                style={{ color: "#6B7E99" }}
              >
                <InstagramIcon />
              </a>
              <a
                href="#contact"
                className="font-body text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #E8873A, #D4A843)",
                  color: "#0B1628",
                  letterSpacing: "0.05em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 25px rgba(232, 135, 58, 0.5)";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
              >
                Join Us
              </a>
            </div>

            {/* Mobile Burger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className="block h-0.5 w-6 transition-all duration-300"
                style={{
                  background: "#E8873A",
                  transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
                }}
              />
              <span
                className="block h-0.5 w-6 transition-all duration-300"
                style={{
                  background: "#E8873A",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block h-0.5 w-6 transition-all duration-300"
                style={{
                  background: "#E8873A",
                  transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-500"
        style={{
          background: "rgba(11, 22, 40, 0.98)",
          backdropFilter: "blur(20px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map(({ label, href }, i) => (
            <Link
              key={href}
              href={href}
              onClick={handleLinkClick}
              className="font-display font-medium text-4xl transition-colors duration-200"
              style={{
                color: activeSection === href.slice(1) ? "#E8873A" : "#F5EBD8",
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                transition: `color 0.2s ease, transform 0.4s ease ${i * 60}ms, opacity 0.4s ease ${i * 60}ms`,
                opacity: menuOpen ? 1 : 0,
              }}
            >
              {label}
            </Link>
          ))}
          <div className="flex items-center gap-6 mt-4">
            <SocialIcons />
          </div>
        </div>
      </div>
    </>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function SocialIcons() {
  const socials = [
    { label: "Instagram", href: "https://instagram.com", icon: <InstagramIcon /> },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://youtube.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
        </svg>
      ),
    },
  ];
  return (
    <>
      {socials.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-cream-dim hover:text-saffron transition-colors duration-200"
          style={{ color: "#C8B99A" }}
        >
          {icon}
        </a>
      ))}
    </>
  );
}
