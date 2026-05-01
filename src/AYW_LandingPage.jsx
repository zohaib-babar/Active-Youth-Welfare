import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "About", "Services", "Gallery", "Contact"];

const SERVICES = [
  {
    icon: "💧",
    title: "صاف پانی مہم",
    english: "Clean Water Drive",
    desc: "گاؤں میں صاف پانی کی فراہمی کے لیے کنویں اور واٹر فلٹر لگانا۔",
  },
  {
    icon: "🏥",
    title: "صحت کی سہولت",
    english: "Healthcare Access",
    desc: "مفت طبی کیمپس اور ایمبولینس سروس کا انتظام۔",
  },
  {
    icon: "🌱",
    title: "غربت کا خاتمہ",
    english: "Poverty Elimination",
    desc: "ہنر مندی کی تربیت اور روزگار کے مواقع فراہم کرنا۔",
  },
  {
    icon: "🧹",
    title: "صفائی مہم",
    english: "Cleanliness Campaign",
    desc: "گاؤں کو صاف ستھرا رکھنے کے لیے باقاعدہ مہمیں۔",
  },
  {
    icon: "🏡",
    title: "کمیونٹی بلڈنگ",
    english: "Community Building",
    desc: "سماجی اتحاد اور یکجہتی کے لیے پروگرامز۔",
  },
  {
    icon: "📚",
    title: "تعلیم کا فروغ",
    english: "Education Promotion",
    desc: "بچوں کے لیے مفت تعلیم اور وظائف کا اہتمام۔",
  },
];

const STATS = [
  { number: "4+", label: "Years of Service" },
  { number: "500+", label: "Families Helped" },
  { number: "50+", label: "Volunteers" },
  { number: "20+", label: "Projects Done" },
];

const TEAM = [
  { name: "Muhammad javed Qamar", role: "Founder & President" },
  { name: "Muhammad Amir Wattoo", role: "Vice President" },
  { name: "Ghazanfer Hassan", role: "Secretary General" },
  { name: "Maqsood Ahmad Wattoo", role: "Head of Operations" },
];

export default function AYWLandingPage() {
  const [activeNav, setActiveNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id);
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#f8f5ee", color: "#1a1a2e", margin: 0, padding: 0, overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;800&family=Noto+Nastaliq+Urdu:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
          --navy: #0d1b3e;
          --gold: #c9a84c;
          --green: #1a6b3c;
          --light-green: #2d9b57;
          --cream: #f8f5ee;
          --white: #ffffff;
        }

        .hero-bg {
          background: linear-gradient(135deg, #0d1b3e 0%, #1a3060 40%, #0f3d2a 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-bg::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 60%);
          animation: pulse 6s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .animate-fadeUp { animation: fadeUp 0.9s ease forwards; }
        .animate-fadeUp-delay1 { animation: fadeUp 0.9s 0.2s ease both; }
        .animate-fadeUp-delay2 { animation: fadeUp 0.9s 0.4s ease both; }
        .animate-fadeUp-delay3 { animation: fadeUp 0.9s 0.6s ease both; }

        .gold-shimmer {
          background: linear-gradient(90deg, #c9a84c, #f0d080, #c9a84c);
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }

        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          min-width: 0;
          width: 100%;
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .responsive-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .responsive-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .responsive-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .btn-primary {
          background: linear-gradient(135deg, #c9a84c, #e8c96a);
          color: #0d1b3e;
          border: none;
          padding: 14px 36px;
          font-family: 'Cinzel', serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
        }
        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(201,168,76,0.5);
        }

        .btn-outline {
          background: transparent;
          color: #c9a84c;
          border: 2px solid #c9a84c;
          padding: 12px 32px;
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-outline:hover {
          background: #c9a84c;
          color: #0d1b3e;
        }

        .section-divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #c9a84c, #2d9b57);
          margin: 16px auto;
          border-radius: 2px;
        }

        .urdu-text {
          font-family: 'Noto Nastaliq Urdu', serif;
          direction: rtl;
          line-height: 2.2;
        }

        .nav-link {
          font-family: 'Cinzel', serif;
          font-size: 13px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.3s ease;
          padding: 8px 0;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #c9a84c;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }

        .geometric-border {
          border: 2px solid #c9a84c;
          position: relative;
        }
        .geometric-border::before {
          content: '';
          position: absolute;
          top: 6px;
          left: 6px;
          right: -6px;
          bottom: -6px;
          border: 2px solid rgba(201,168,76,0.3);
          z-index: -1;
        }

        .stat-number {
          font-family: 'Cinzel', serif;
          font-size: 52px;
          font-weight: 800;
          background: linear-gradient(135deg, #c9a84c, #f0d080);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
        }

        .decorative-dot {
          width: 8px;
          height: 8px;
          background: #c9a84c;
          border-radius: 50%;
          display: inline-block;
          margin: 0 8px;
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 36px !important; }
          .grid-3 { grid-template-columns: 1fr 1fr !important; }
          .grid-4 { grid-template-columns: 1fr 1fr !important; }
          .responsive-grid-2, .responsive-grid-3, .responsive-grid-4 { grid-template-columns: 1fr !important; }
          .hide-mobile { display: none !important; }
          .show-mobile { display: block !important; }
          body { overflow-x: hidden; }
        }
        @media (max-width: 480px) {
          .grid-3, .grid-4 { grid-template-columns: 1fr !important; }
          .responsive-grid-2, .responsive-grid-3, .responsive-grid-4 { grid-template-columns: 1fr !important; }
          body { overflow-x: hidden; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: window.innerWidth <= 768 ? "12px 16px" : "16px 40px",
        background: scrolled ? "rgba(13,27,62,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.2)" : "none",
        transition: "all 0.4s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 44, height: 44, borderRadius: "50%",
            background: "linear-gradient(135deg, #c9a84c, #e8c96a)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Cinzel', serif", fontWeight: 800, color: "#0d1b3e", fontSize: 14
          }}>AYW</div>
          <div>
            <div style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, color: "#c9a84c", fontSize: 16, letterSpacing: 2 }}>Active Youth Welfare</div>
            <div style={{ fontFamily: "'Lato', sans-serif", color: "#aaa", fontSize: 10, letterSpacing: 1 }}>388 GB</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hide-mobile" style={{ display: "flex", gap: 32 }}>
          {NAV_LINKS.map(link => (
            <span key={link} className={`nav-link ${activeNav === link ? "active" : ""}`}
              onClick={() => scrollTo(link)}
              style={{ color: activeNav === link ? "#c9a84c" : "#ddd" }}>
              {link}
            </span>
          ))}
        </div>

        <button className="btn-primary hide-mobile" style={{ fontSize: 11, padding: "10px 24px" }}
          onClick={() => scrollTo("Contact")}>
          Join Us
        </button>

        {/* Mobile hamburger */}
        <button className="show-mobile" style={{ background: "none", border: "none", color: "#c9a84c", fontSize: 24, cursor: "pointer" }}
          onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(13,27,62,0.98)", zIndex: 999,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32
        }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", color: "#c9a84c", fontSize: 28, cursor: "pointer" }}>✕</button>
          {NAV_LINKS.map(link => (
            <span key={link} onClick={() => scrollTo(link)}
              style={{ fontFamily: "'Cinzel', serif", fontSize: 20, letterSpacing: 3, color: "#c9a84c", cursor: "pointer" }}>
              {link}
            </span>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="home" className="hero-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: window.innerWidth <= 480 ? "100px 16px 60px" : window.innerWidth <= 768 ? "100px 24px 60px" : "120px 40px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, position: "relative", zIndex: 2 }}>
          {/* Decorative ring */}
          <div style={{
            width: 160, height: 160, borderRadius: "50%",
            border: "3px solid rgba(201,168,76,0.4)",
            margin: "0 auto 32px",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", animation: "fadeIn 1s ease forwards"
          }}>
            <div style={{
              width: 130, height: 130, borderRadius: "50%",
              background: "rgba(255,255,255,0.12)",
              display: "flex", alignItems: "center", justifyContent: "center",
              overflow: "hidden",
              padding: 12,
              boxShadow: "0 0 0 1px rgba(255,255,255,0.25) inset"
            }}>
              <img
                src="/WhatsApp Image 2026-04-30 at 11.32.31 AM.jpeg"
                alt="AYW logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block"
                }}
              />
            </div>
            <div style={{
              position: "absolute", top: -4, right: -4,
              width: 24, height: 24, borderRadius: "50%",
              background: "#c9a84c"
            }}></div>
          </div>

          <div className="animate-fadeUp" style={{ marginBottom: 8 }}>
            <span className="decorative-dot"></span>
            <span style={{ fontFamily: "'Lato', sans-serif", color: "#c9a84c", fontSize: 12, letterSpacing: 4, textTransform: "uppercase" }}>Est. 2022 · AYW 388 GB</span>
            <span className="decorative-dot"></span>
          </div>

          <h1 className="hero-title animate-fadeUp-delay1" style={{
            fontFamily: "'Cinzel', serif", fontWeight: 800,
            fontSize: 52, color: "#ffffff", lineHeight: 1.2,
            marginBottom: 12, letterSpacing: 2
          }}>
            Active Youth<br />
            <span className="gold-shimmer">Welfare</span>
          </h1>

          <p className="urdu-text animate-fadeUp-delay2" style={{
            color: "rgba(255,255,255,0.8)", fontSize: 22,
            marginBottom: 16, letterSpacing: 1
          }}>
            ایکٹیو یوتھ ویلفیئر
          </p>

          <p className="animate-fadeUp-delay2" style={{
            fontFamily: "'Lato', sans-serif", color: "rgba(255,255,255,0.65)",
            fontSize: 15, letterSpacing: 3, textTransform: "uppercase",
            marginBottom: 40
          }}>
            Serving Humanity · Building Communities
          </p>

          <div className="animate-fadeUp-delay3" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => scrollTo("Services")}>Our Services</button>
            <button className="btn-outline" onClick={() => scrollTo("About")}>Our Story</button>
          </div>

          {/* Scroll indicator */}
          <div style={{ marginTop: 60, animation: "pulse 2s infinite" }}>
            <div style={{ width: 1, height: 60, background: "linear-gradient(to bottom, #c9a84c, transparent)", margin: "0 auto" }}></div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: window.innerWidth <= 480 ? "60px 16px" : window.innerWidth <= 768 ? "80px 24px" : "100px 40px", background: "#f8f5ee" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#c9a84c", letterSpacing: 4, fontSize: 12, textTransform: "uppercase", marginBottom: 12 }}>Who We Are</p>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 42, fontWeight: 800, color: "#0d1b3e", marginBottom: 4 }}>About AYW</h2>
            <div className="section-divider"></div>
          </div>

          <div className="responsive-grid-2" style={{ alignItems: "center", gap: 64 }}>
            <div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 24, color: "#1a6b3c", marginBottom: 20 }}>
                4 Years of Selfless Service
              </h3>
              <p style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.9, color: "#444", fontSize: 16, marginBottom: 20 }}>
                Active Youth Welfare (AYW) was established in 2022 in village 388 GB with a mission to uplift our community through collective action and compassion. Founded by dedicated young volunteers, we have grown into a trusted organization serving hundreds of families.
              </p>
              <p className="urdu-text" style={{ color: "#555", fontSize: 18, marginBottom: 28, borderRight: "3px solid #c9a84c", paddingRight: 16 }}>
                ہم اپنے گاؤں کی خدمت کے لیے ہمہ وقت تیار ہیں — خدمتِ خلق ہمارا مشن ہے۔
              </p>
              <div style={{ display: "flex", gap: 16 }}>
                <div style={{ padding: "12px 20px", background: "#0d1b3e", color: "#c9a84c", fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: 1 }}>
                  Est. 2022
                </div>
                <div style={{ padding: "12px 20px", border: "2px solid #1a6b3c", color: "#1a6b3c", fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: 1 }}>
                  388 GB Region
                </div>
              </div>
            </div>

            <div className="responsive-grid-2" style={{ gap: 20 }}>
              {[
                { icon: "🤝", title: "Volunteer Spirit", desc: "50+ active volunteers" },
                { icon: "🌍", title: "Community First", desc: "Always people before profit" },
                { icon: "💚", title: "Compassion", desc: "Every family matters to us" },
                { icon: "🔥", title: "Youth Power", desc: "Young hearts, big change" },
              ].map((item, i) => (
                <div key={i} className="card-hover geometric-border"
                  style={{ padding: 24, background: "#ffffff", textAlign: "center" }}>
                  <div style={{ fontSize: 32, marginBottom: 10 }}>{item.icon}</div>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: 600, color: "#0d1b3e", marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 12, color: "#888" }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} style={{
        padding: window.innerWidth <= 480 ? "50px 16px" : window.innerWidth <= 768 ? "60px 24px" : "80px 40px",
        background: "linear-gradient(135deg, #0d1b3e, #1a3060)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Lato', sans-serif", color: "#c9a84c", letterSpacing: 4, fontSize: 12, textTransform: "uppercase", marginBottom: 48 }}>
            Our Impact in Numbers
          </p>
          <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
            {STATS.map((stat, i) => (
              <div key={i} style={{ borderTop: "2px solid rgba(201,168,76,0.3)", paddingTop: 24 }}>
                <div className="stat-number">{stat.number}</div>
                <div style={{ fontFamily: "'Lato', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: 13, letterSpacing: 2, marginTop: 8, textTransform: "uppercase" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: window.innerWidth <= 480 ? "60px 16px" : window.innerWidth <= 768 ? "80px 24px" : "100px 40px", background: "#f0ece2" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#c9a84c", letterSpacing: 4, fontSize: 12, textTransform: "uppercase", marginBottom: 12 }}>What We Do</p>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 42, fontWeight: 800, color: "#0d1b3e", marginBottom: 4 }}>Our Services</h2>
            <div className="section-divider"></div>
            <p className="urdu-text" style={{ color: "#666", fontSize: 18, marginTop: 20 }}>ہماری خدمات</p>
          </div>

          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {SERVICES.map((svc, i) => (
              <div key={i} className="card-hover"
                style={{
                  background: "#ffffff",
                  padding: "36px 28px",
                  borderBottom: "4px solid #1a6b3c",
                  position: "relative",
                  overflow: "hidden"
                }}>
                <div style={{
                  position: "absolute", top: 0, right: 0,
                  width: 60, height: 60,
                  background: "linear-gradient(135deg, #c9a84c22, #c9a84c44)",
                  clipPath: "polygon(100% 0, 0 0, 100% 100%)"
                }}></div>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{svc.icon}</div>
                <h3 className="urdu-text" style={{ color: "#0d1b3e", fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{svc.title}</h3>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: 11, color: "#c9a84c", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>{svc.english}</p>
                <p className="urdu-text" style={{ color: "#666", fontSize: 15, lineHeight: 2 }}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION BANNER */}
      <section style={{
        padding: window.innerWidth <= 480 ? "50px 16px" : window.innerWidth <= 768 ? "60px 24px" : "80px 40px",
        background: "linear-gradient(135deg, #1a6b3c, #0f4d2a)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontSize: 48, marginBottom: 24 }}>🌿</div>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 32, color: "#f8f5ee", marginBottom: 20, letterSpacing: 2 }}>
            Our Mission
          </h2>
          <p className="urdu-text" style={{ color: "rgba(255,255,255,0.85)", fontSize: 22, marginBottom: 12, lineHeight: 2.5 }}>
            خدمتِ خلق · غربت کا خاتمہ · صفائی مہم · مستقبل کا منصوبہ
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", color: "rgba(255,255,255,0.65)", letterSpacing: 3, fontSize: 13, textTransform: "uppercase" }}>
            Serving Humanity · Building Communities · Est. 2022
          </p>
        </div>
      </section>

      {/* GALLERY PLACEHOLDER */}
      <section id="gallery" style={{ padding: window.innerWidth <= 480 ? "60px 16px" : window.innerWidth <= 768 ? "80px 24px" : "100px 40px", background: "#f8f5ee" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#c9a84c", letterSpacing: 4, fontSize: 12, textTransform: "uppercase", marginBottom: 12 }}>Memories</p>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 42, fontWeight: 800, color: "#0d1b3e", marginBottom: 4 }}>Gallery</h2>
            <div className="section-divider"></div>
          </div>

          <div className="responsive-grid-3">
            {[
              { bg: "linear-gradient(135deg, #0d1b3e, #1a3060)", icon: "💧", label: "Water Drive 2023" },
              { bg: "linear-gradient(135deg, #1a6b3c, #2d9b57)", icon: "🏥", label: "Health Camp 2023" },
              { bg: "linear-gradient(135deg, #c9a84c, #e8c96a)", icon: "🧹", label: "Clean Village 2024" },
              { bg: "linear-gradient(135deg, #2d9b57, #1a6b3c)", icon: "🌱", label: "Tree Plantation" },
              { bg: "linear-gradient(135deg, #1a3060, #0d1b3e)", icon: "📚", label: "Education Drive" },
              { bg: "linear-gradient(135deg, #8b6914, #c9a84c)", icon: "🤝", label: "Community Meet" },
            ].map((item, i) => (
              <div key={i} className="card-hover"
                style={{
                  background: item.bg,
                  height: 180,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  cursor: "pointer"
                }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontFamily: "'Lato', sans-serif", color: "rgba(255,255,255,0.8)", fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: window.innerWidth <= 480 ? "60px 16px" : window.innerWidth <= 768 ? "80px 24px" : "100px 40px", background: "#0d1b3e" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#c9a84c", letterSpacing: 4, fontSize: 12, textTransform: "uppercase", marginBottom: 12 }}>The Team</p>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 42, fontWeight: 800, color: "#ffffff", marginBottom: 4 }}>Leadership</h2>
            <div className="section-divider"></div>
          </div>

          <div className="responsive-grid-4">
            {TEAM.map((member, i) => (
              <div key={i} className="card-hover"
                style={{
                  textAlign: "center",
                  padding: "32px 20px",
                  border: "1px solid rgba(201,168,76,0.2)",
                  background: "rgba(255,255,255,0.04)"
                }}>
                <div style={{
                  width: 64, height: 64, borderRadius: "50%",
                  background: "linear-gradient(135deg, #c9a84c, #e8c96a)",
                  margin: "0 auto 16px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Cinzel', serif", fontWeight: 800, color: "#0d1b3e", fontSize: 22
                }}>
                  {member.name.charAt(0)}
                </div>
                <div style={{ fontFamily: "'Cinzel', serif", color: "#ffffff", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{member.name}</div>
                <div style={{ fontFamily: "'Lato', sans-serif", color: "#c9a84c", fontSize: 11, letterSpacing: 1, textTransform: "uppercase" }}>{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: window.innerWidth <= 480 ? "60px 16px" : window.innerWidth <= 768 ? "80px 24px" : "100px 40px", background: "#f0ece2" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "'Lato', sans-serif", color: "#c9a84c", letterSpacing: 4, fontSize: 12, textTransform: "uppercase", marginBottom: 12 }}>Get In Touch</p>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 42, fontWeight: 800, color: "#0d1b3e", marginBottom: 4 }}>Contact Us</h2>
          <div className="section-divider"></div>
          <p className="urdu-text" style={{ color: "#666", fontSize: 18, margin: "24px 0" }}>
            ہم سے رابطہ کریں — آپ کا تعاون ہمارا حوصلہ ہے
          </p>

          <div className="responsive-grid-2" style={{ marginBottom: 40 }}>
            {[
              { icon: "📍", label: "Location", value: "Village 388 GB, Punjab" },
              { icon: "📅", label: "Established", value: "2022" },
              { icon: "👥", label: "Volunteers", value: "50+ Active Members" },
              { icon: "🌐", label: "Reach", value: "388 GB Region" },
            ].map((item, i) => (
              <div key={i} style={{
                padding: "24px", background: "#ffffff",
                borderLeft: "4px solid #c9a84c", textAlign: "left"
              }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: 11, color: "#c9a84c", letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontFamily: "'Lato', sans-serif", color: "#333", fontSize: 14, fontWeight: 700 }}>{item.value}</div>
              </div>
            ))}
          </div>

          <div style={{
            background: "#0d1b3e", padding: "40px",
            borderTop: "4px solid #c9a84c"
          }}>
            <h3 style={{ fontFamily: "'Cinzel', serif", color: "#c9a84c", fontSize: 20, marginBottom: 16, letterSpacing: 2 }}>
              Join Our Mission
            </h3>
            <p className="urdu-text" style={{ color: "rgba(255,255,255,0.7)", fontSize: 17, marginBottom: 24 }}>
              ہمارے ساتھ رضاکارانہ کام کریں اور اپنے گاؤں کی تعمیر میں حصہ لیں
            </p>
            <button className="btn-primary">Become a Volunteer <span>Admin</span> Amir Wattoo +966 50 785 7253</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#070e1e",
        padding: window.innerWidth <= 480 ? "24px 16px" : "40px",
        textAlign: "center",
        borderTop: "1px solid rgba(201,168,76,0.2)"
      }}>
        <div style={{ marginBottom: 20 }}>
          <span style={{ fontFamily: "'Cinzel', serif", color: "#c9a84c", fontSize: 22, fontWeight: 800, letterSpacing: 4 }}>AYW</span>
          <span style={{ fontFamily: "'Lato', sans-serif", color: "rgba(255,255,255,0.4)", fontSize: 13, marginLeft: 12 }}>388 GB</span>
        </div>
        <p style={{ fontFamily: "'Lato', sans-serif", color: "rgba(255,255,255,0.3)", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
          Serving Humanity · Building Communities · Est. 2022
        </p>
        <p className="urdu-text" style={{ color: "rgba(255,255,255,0.2)", fontSize: 14 }}>
          Active Youth Welfare — خدمتِ خلق ہمارا مشن
        </p>
        <div style={{ marginTop: 24, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p style={{ fontFamily: "'Lato', sans-serif", color: "rgba(255,255,255,0.2)", fontSize: 11 }}>
            © 2022–2026 Active Youth Welfare (AYW). All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
