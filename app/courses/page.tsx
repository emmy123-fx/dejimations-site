"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../../components/Reveal";
import styles from "../styles.module.css";

export default function CoursesPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundImage: "linear-gradient(to bottom, #071226, #071726)" }}>
      <main className={styles.container} style={{ paddingTop: "5rem" }}>
        <header className={styles.header}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <div className={styles.logo}>Dejimations</div>
          </Link>
          <nav className={styles.nav}>
            <a href="/#features">Features</a>
            <a href="/#showcase">Showcase</a>
            <a href="/courses">Courses</a>
          </nav>
        </header>

        <section style={{ marginBottom: "5rem" }}>
          <Reveal>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#fff", marginBottom: "1rem" }}>
              Master Animation with Dejimations
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p style={{ fontSize: "1.1rem", color: "#cbd5e1", maxWidth: "60ch" }}>
              Choose the perfect course tier for your animation journey. From beginner basics to pro techniques,
              everything you need to create stunning animations and grow your audience.
            </p>
          </Reveal>
        </section>

        <section style={{ marginBottom: "5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
            {/* BASIC TIER */}
            <Reveal>
              <div style={{
                padding: "2.5rem",
                borderRadius: "1rem",
                background: "linear-gradient(135deg, rgba(100, 100, 200, 0.1), rgba(20, 20, 40, 0.8))",
                border: "1px solid rgba(100, 100, 200, 0.3)",
                transition: "all 0.3s",
              }}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <span style={{ display: "inline-block", padding: "0.5rem 1rem", background: "#4c5a9d", color: "#fff", borderRadius: "0.25rem", fontSize: "0.85rem", fontWeight: "700" }}>
                    STARTER
                  </span>
                </div>
                <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "#fff", margin: "1rem 0" }}>₹20,000</h2>
                <p style={{ color: "#cbd5e1", marginBottom: "2rem" }}>Perfect for beginners just starting their animation journey</p>
                
                <div style={{ marginBottom: "2rem" }}>
                  <h3 style={{ color: "#fff", fontWeight: "700", marginBottom: "1rem" }}>What You'll Learn:</h3>
                  <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>FlipaClip App Basics & Setup</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>Drawing Tools & Brush Basics</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>Frame Management & Onion Skin</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>Creating Your First Animation</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>Exporting & Sharing Basics</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>4 Beginner Projects</span>
                    </li>
                  </ul>
                </div>
                
                <button style={{
                  width: "100%",
                  padding: "1rem",
                  background: "#4c5a9d",
                  color: "#fff",
                  border: "none",
                  borderRadius: "0.5rem",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#3a4575"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#4c5a9d"}
                >
                  Enroll Now
                </button>
              </div>
            </Reveal>

            {/* STANDARD TIER */}
            <Reveal delay={0.1}>
              <div style={{
                padding: "2.5rem",
                borderRadius: "1rem",
                background: "linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(20, 20, 40, 0.9))",
                border: "2px solid rgba(124, 58, 237, 0.5)",
                transition: "all 0.3s",
                transform: "scale(1.05)",
              }}>
                <div style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ display: "inline-block", padding: "0.5rem 1rem", background: "#7c3aed", color: "#fff", borderRadius: "0.25rem", fontSize: "0.85rem", fontWeight: "700" }}>
                    POPULAR
                  </span>
                  <span style={{ color: "#7c3aed", fontSize: "0.9rem", fontWeight: "700" }}>⭐ Best Value</span>
                </div>
                <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "#fff", margin: "1rem 0" }}>₹35,000</h2>
                <p style={{ color: "#cbd5e1", marginBottom: "2rem" }}>Most popular choice for serious learners</p>
                
                <div style={{ marginBottom: "2rem" }}>
                  <h3 style={{ color: "#fff", fontWeight: "700", marginBottom: "1rem" }}>Everything in Basic, plus:</h3>
                  <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>Advanced Drawing Techniques</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>Audio Integration & Lip Sync</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>Layers & Layer Management</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>Special Effects & Filters</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>Character Animation Fundamentals</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>Rotoscope & Tracing Techniques</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>10 Intermediate Projects</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>Community Discord Access</span>
                    </li>
                  </ul>
                </div>
                
                <button style={{
                  width: "100%",
                  padding: "1rem",
                  background: "linear-gradient(90deg, #7c3aed, #6d28d9)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "0.5rem",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  Enroll Now
                </button>
              </div>
            </Reveal>

            {/* PREMIUM TIER */}
            <Reveal delay={0.2}>
              <div style={{
                padding: "2.5rem",
                borderRadius: "1rem",
                background: "linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(20, 20, 40, 0.8))",
                border: "1px solid rgba(255, 107, 107, 0.3)",
                transition: "all 0.3s",
              }}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <span style={{ display: "inline-block", padding: "0.5rem 1rem", background: "#ff6b6b", color: "#fff", borderRadius: "0.25rem", fontSize: "0.85rem", fontWeight: "700" }}>
                    PROFESSIONAL
                  </span>
                </div>
                <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "#fff", margin: "1rem 0" }}>₹2,50,000</h2>
                <p style={{ color: "#cbd5e1", marginBottom: "2rem" }}>Ultimate professional package with 1-on-1 mentorship</p>
                
                <div style={{ marginBottom: "2rem" }}>
                  <h3 style={{ color: "#fff", fontWeight: "700", marginBottom: "1rem" }}>Everything in Standard, plus:</h3>
                  <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>Advanced Motion & Timing</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>3D Animation & Perspective</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>Professional Color Grading</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>Monetization & YouTube Growth</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>TikTok & Instagram Strategy</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>Portfolio Building & Branding</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>Freelance & Client Work Training</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>1-on-1 Weekly Mentorship Sessions (6 months)</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>Project Review & Feedback</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>20+ Advanced Projects</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>Lifetime Community Access</span>
                    </li>
                    <li style={{ color: "#cbd5e1", padding: "0.5rem 0", display: "flex", gap: "0.75rem" }}>
                      <span>✅</span> <span>Exclusive Discord Channel</span>
                    </li>
                  </ul>
                </div>
                
                <button style={{
                  width: "100%",
                  padding: "1rem",
                  background: "#ff6b6b",
                  color: "#fff",
                  border: "none",
                  borderRadius: "0.5rem",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#ff5252"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#ff6b6b"}
                >
                  Enroll Now
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        <section style={{ marginTop: "5rem", paddingTop: "3rem", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
          <Reveal>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#fff", marginBottom: "1.5rem" }}>Frequently Asked Questions</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            <Reveal>
              <div>
                <h4 style={{ color: "#fff", fontWeight: "700", marginBottom: "0.5rem" }}>Do I need FlipaClip?</h4>
                <p style={{ color: "#cbd5e1", margin: "0" }}>Yes, FlipaClip is the tool we teach. It's available free on mobile or as a paid version with more features.</p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div>
                <h4 style={{ color: "#fff", fontWeight: "700", marginBottom: "0.5rem" }}>Can I upgrade tiers?</h4>
                <p style={{ color: "#cbd5e1", margin: "0" }}>Absolutely! Upgrade anytime and pay only the difference. All progress carries over.</p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div>
                <h4 style={{ color: "#fff", fontWeight: "700", marginBottom: "0.5rem" }}>Is there a refund policy?</h4>
                <p style={{ color: "#cbd5e1", margin: "0" }}>30-day money-back guarantee if you're not satisfied. No questions asked.</p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}