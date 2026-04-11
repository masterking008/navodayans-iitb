"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0B1628 0%, #060D1A 100%)",
        borderTop: "1px solid rgba(232, 135, 58, 0.1)",
      }}
    >
      {/* Top decorative line */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(232, 135, 58, 0.4) 50%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-14">

          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #E8873A, #D4A843)",
                }}
              >
                <span
                  className="font-display font-bold"
                  style={{ fontSize: "15px", color: "#0B1628" }}
                >
                  N
                </span>
              </div>
              <div>
                <div className="font-display font-semibold text-cream" style={{ fontSize: "16px", color: "#F5EBD8" }}>
                  Navodayans
                </div>
                <div className="font-body font-medium text-saffron" style={{ fontSize: "11px", color: "#E8873A", letterSpacing: "0.12em" }}>
                  @IITB
                </div>
              </div>
            </div>
            <p
              className="font-body font-light mb-6"
              style={{ fontSize: "13px", color: "#6B7E99", lineHeight: 1.8 }}
            >
              Community of Jawahar Navodaya Vidyalaya alumni at IIT Bombay.
              Connecting rural roots with global excellence since 2012.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {[
                {
                  label: "Instagram",
                  href: "https://instagram.com",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  ),
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  href: "https://youtube.com",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
                    </svg>
                  ),
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#6B7E99",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#E8873A";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(232, 135, 58, 0.4)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(232, 135, 58, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#6B7E99";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="font-body font-semibold mb-5 tracking-wider uppercase"
              style={{ fontSize: "11px", color: "#E8873A", letterSpacing: "0.15em" }}
            >
              Navigate
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Events", "Gallery", "Team", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body font-light transition-colors duration-200"
                    style={{ fontSize: "14px", color: "#6B7E99" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8B99A")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6B7E99")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4
              className="font-body font-semibold mb-5 tracking-wider uppercase"
              style={{ fontSize: "11px", color: "#E8873A", letterSpacing: "0.15em" }}
            >
              Community
            </h4>
            <ul className="space-y-3">
              {[
                "Join Us",
                "Mentorship Program",
                "Alumni Network",
                "Scholarship Drive",
                "Events Calendar",
                "Newsletter",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#contact"
                    className="font-body font-light transition-colors duration-200"
                    style={{ fontSize: "14px", color: "#6B7E99" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8B99A")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6B7E99")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-body font-semibold mb-5 tracking-wider uppercase"
              style={{ fontSize: "11px", color: "#E8873A", letterSpacing: "0.15em" }}
            >
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:navodayans@iitb.ac.in"
                  className="font-body font-light transition-colors duration-200 block"
                  style={{ fontSize: "13px", color: "#6B7E99" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8B99A")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6B7E99")}
                >
                  navodayans@iitb.ac.in
                </a>
              </li>
              <li className="font-body font-light" style={{ fontSize: "13px", color: "#6B7E99", lineHeight: 1.6 }}>
                Student Activity Center,<br />
                IIT Bombay, Powai,<br />
                Mumbai — 400076
              </li>
              <li>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body font-medium text-sm transition-colors duration-200"
                  style={{ color: "#25D366", fontSize: "13px" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  Join WhatsApp Group
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="font-body text-xs" style={{ color: "#6B7E99" }}>
            © {currentYear} Navodayans@IITB. Made with pride in IIT Bombay.
          </p>
          <div className="flex items-center gap-1">
            <span className="font-body text-xs" style={{ color: "#6B7E99" }}>
              "Navodaya" means
            </span>
            <span
              className="font-display font-semibold italic text-xs ml-1"
              style={{ color: "#E8873A" }}
            >
              New Dawn
            </span>
            <span className="font-body text-xs ml-1" style={{ color: "#6B7E99" }}>
              — and every sunrise, we rise.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
