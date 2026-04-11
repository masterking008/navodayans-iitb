"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];
    const PARTICLE_COUNT = 80;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      x: number; y: number;
      vx: number; vy: number;
      size: number; opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.6 + 0.1;
        const colors = ["#E8873A", "#D4A843", "#F5EBD8", "#6B7E99"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0) this.x = canvas!.width;
        if (this.x > canvas!.width) this.x = 0;
        if (this.y < 0) this.y = canvas!.height;
        if (this.y > canvas!.height) this.y = 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(232, 135, 58, ${0.06 * (1 - dist / 120)})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      drawConnections();
      particles.forEach((p) => {
        p.update();
        p.draw(ctx!);
      });
      animId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0B1628 0%, #0F1F3D 50%, #0B1628 100%)" }}
    >
      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Radial glow - top left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          left: "-5%",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, rgba(232, 135, 58, 0.12) 0%, transparent 70%)",
        }}
      />

      {/* Radial glow - bottom right */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-10%",
          right: "-5%",
          width: "45vw",
          height: "45vw",
          background: "radial-gradient(circle, rgba(212, 168, 67, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Horizontal rule accent */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          top: "55%",
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(232, 135, 58, 0.1) 20%, rgba(232, 135, 58, 0.2) 50%, rgba(232, 135, 58, 0.1) 80%, transparent 100%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-4xl">

          {/* Label badge */}
          <div
            className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{
              border: "1px solid rgba(232, 135, 58, 0.35)",
              background: "rgba(232, 135, 58, 0.08)",
            }}
          >
            <span
              className="block w-1.5 h-1.5 rounded-full"
              style={{ background: "#E8873A", boxShadow: "0 0 6px #E8873A", animation: "pulseGlow 2s ease infinite" }}
            />
            <span
              className="font-body text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#E8873A" }}
            >
              IIT Bombay · Est. 2012
            </span>
          </div>

          {/* Main heading */}
          <h1 className="hero-title font-display leading-none mb-6">
            <span
              className="block font-light text-cream"
              style={{ fontSize: "clamp(48px, 8vw, 112px)", color: "#F5EBD8", letterSpacing: "-0.02em" }}
            >
              Navodayans
            </span>
            <span
              className="block font-bold italic"
              style={{
                fontSize: "clamp(52px, 9vw, 120px)",
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #E8873A 0%, #D4A843 60%, #F4A55A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              @IITB
            </span>
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8 hero-subtitle">
            <div className="section-divider" />
            <p
              className="font-body font-light tracking-widest uppercase text-xs"
              style={{ color: "#6B7E99", letterSpacing: "0.2em" }}
            >
              Community of JNV Alumni
            </p>
          </div>

          {/* Sub-headline */}
          <p
            className="hero-subtitle font-display font-light mb-10 max-w-xl"
            style={{
              fontSize: "clamp(20px, 2.5vw, 28px)",
              color: "#C8B99A",
              lineHeight: 1.6,
              letterSpacing: "0.01em",
            }}
          >
            From the fields of Navodaya to the halls of the finest engineering institute —
            we carry our roots with pride.
          </p>

          {/* CTAs */}
          <div className="hero-cta flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="font-body font-semibold px-8 py-3.5 rounded-full transition-all duration-300 glow-saffron"
              style={{
                background: "linear-gradient(135deg, #E8873A, #D4A843)",
                color: "#0B1628",
                fontSize: "15px",
                letterSpacing: "0.04em",
              }}
            >
              Discover Our Story
            </a>
            <a
              href="#contact"
              className="font-body font-medium px-8 py-3.5 rounded-full transition-all duration-300"
              style={{
                border: "1px solid rgba(232, 135, 58, 0.5)",
                color: "#F5EBD8",
                fontSize: "15px",
                letterSpacing: "0.04em",
                background: "rgba(232, 135, 58, 0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(232, 135, 58, 0.12)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(232, 135, 58, 0.8)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(232, 135, 58, 0.06)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(232, 135, 58, 0.5)";
              }}
            >
              Join the Community
            </a>
          </div>

          {/* Stats row */}
          <div className="hero-cta flex flex-wrap gap-10 mt-16 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {[
              { value: "300+", label: "Active Members" },
              { value: "12+",  label: "Years Strong" },
              { value: "50+",  label: "Events Hosted" },
              { value: "28",   label: "States Represented" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span
                  className="font-display font-bold"
                  style={{
                    fontSize: "clamp(28px, 3vw, 40px)",
                    background: "linear-gradient(135deg, #E8873A, #D4A843)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {value}
                </span>
                <span
                  className="font-body text-xs font-medium tracking-widest uppercase"
                  style={{ color: "#6B7E99" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="font-body text-xs tracking-widest uppercase" style={{ color: "#6B7E99", fontSize: "10px" }}>
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(180deg, rgba(232, 135, 58, 0.8), transparent)",
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </div>

      {/* Corner accent — top right */}
      <div
        className="absolute top-24 right-8 lg:right-16 text-right hidden lg:block"
        style={{ animation: "fadeIn 1s ease 1.4s both" }}
      >
        <p
          className="font-display italic font-light"
          style={{ fontSize: "13px", color: "#6B7E99", lineHeight: 2 }}
        >
          &quot;Navodaya means new dawn&quot;
        </p>
        <div className="section-divider ml-auto" />
      </div>
    </section>
  );
}
