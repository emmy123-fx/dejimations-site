"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundImage: "linear-gradient(to bottom, #071226, #071726)" }}>
      <main className={styles.container} style={{ paddingTop: "5rem" }}>
        <header className={styles.header}>
          <div className={styles.logo}>Dejimations</div>
          <nav className={styles.nav}>
            <a href="#features">Features</a>
            <a href="#showcase">Showcase</a>
            <a href="#shop">Shop</a>
          </nav>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <Reveal>
              <h1>Simple. Intuitive. Fun.</h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p>Create frame-by-frame animations, sell courses, and share your art with the world.</p>
            </Reveal>
            <div className={styles.ctaButtons}>
              <Reveal delay={0.16}>
                <Link href="/courses" className={styles.btnPrimary}>
                  Explore Courses
                </Link>
              </Reveal>
              <Reveal delay={0.24}>
                <a className={styles.btnSecondary} href="#shop">Buy Merch</a>
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.12}>
            <div className={styles.heroImage}>
              <Image src="/file.svg" alt="demo" width={520} height={320} />
            </div>
          </Reveal>
        </section>

        <section id="features" className={styles.features}>
          <Reveal>
            <div className={styles.featureCard}>
              <h3>Awesome drawing tools</h3>
              <p>Brushes, onion skin, and helpful guides for fast drawing.</p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className={styles.featureCard}>
              <h3>Layer it up</h3>
              <p>Use multiple layers to separate foreground and background.</p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className={styles.featureCard}>
              <h3>Make it sing</h3>
              <p>Add audio tracks, sound effects, and lip sync.</p>
            </div>
          </Reveal>
        </section>

        <section id="showcase" className={styles.showcase}>
          <Reveal>
            <h2>Share anywhere</h2>
          </Reveal>
          <div className={styles.gallery}>
            <Reveal>
              <div className={styles.galleryCard}>
                <Image src="/globe.svg" alt="example" width={400} height={240} />
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className={styles.galleryCard}>
                <Image src="/window.svg" alt="example" width={400} height={240} />
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className={styles.galleryCard}>
                <Image src="/vercel.svg" alt="example" width={400} height={240} />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="about" className={styles.aboutSection}>
          <Reveal>
            <h2>About Me</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              Heyyy 👋 I'm Deji, popularly known as Dejimations.
            </p>
            <p style={{ marginTop: "1rem" }}>
              I'm an animator who loves turning random ideas, jokes, and everyday situations into short, fun animations. 
              What started as me just having fun with animations slowly turned into a brand — and a community of people who enjoy creativity, humor, and storytelling.
            </p>
            <p style={{ marginTop: "1rem" }}>
              I create animations mostly for entertainment, but I also genuinely enjoy teaching what I know. On this site, you'll find my animation courses, 
              the tools I personally use, and Dejimations merch I've created for people who rock with the brand.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Everything here is a reflection of my journey — learning, experimenting, improving, and sharing along the way. If you're here to learn animation, 
              get inspired, or just support what I do, you're very welcome.
            </p>
            <p style={{ marginTop: "1rem", fontWeight: "600" }}>
              Thanks for being part of the Dejimations story ❤️
            </p>
          </Reveal>
        </section>

        <section style={{ margin: "5rem 0" }}>
          <Reveal>
            <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#fff", marginBottom: "2rem" }}>Connect With Me</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
            <Reveal>
              <a href="https://instagram.com/dejimations" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div style={{
                  padding: "2rem",
                  borderRadius: "1rem",
                  background: "linear-gradient(135deg, rgba(224, 44, 109, 0.1), rgba(20, 20, 40, 0.8))",
                  border: "1px solid rgba(224, 44, 109, 0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.borderColor = "rgba(224, 44, 109, 0.6)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(224, 44, 109, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(224, 44, 109, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                >
                  <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>📸</div>
                  <h3 style={{ color: "#fff", fontWeight: "700", margin: "0 0 0.5rem 0" }}>Instagram</h3>
                  <p style={{ color: "#cbd5e1", margin: "0", fontSize: "0.9rem" }}>@dejimations - Follow my latest animations</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.08}>
              <a href="https://tiktok.com/@dejimations" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div style={{
                  padding: "2rem",
                  borderRadius: "1rem",
                  background: "linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(20, 20, 40, 0.8))",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(255, 255, 255, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                >
                  <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🎵</div>
                  <h3 style={{ color: "#fff", fontWeight: "700", margin: "0 0 0.5rem 0" }}>TikTok</h3>
                  <p style={{ color: "#cbd5e1", margin: "0", fontSize: "0.9rem" }}>@dejimations - Viral animation shorts</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.16}>
              <a href="https://youtube.com/@dejimations" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div style={{
                  padding: "2rem",
                  borderRadius: "1rem",
                  background: "linear-gradient(135deg, rgba(255, 0, 0, 0.1), rgba(20, 20, 40, 0.8))",
                  border: "1px solid rgba(255, 0, 0, 0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.borderColor = "rgba(255, 0, 0, 0.6)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(255, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255, 0, 0, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                >
                  <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>▶️</div>
                  <h3 style={{ color: "#fff", fontWeight: "700", margin: "0 0 0.5rem 0" }}>YouTube</h3>
                  <p style={{ color: "#cbd5e1", margin: "0", fontSize: "0.9rem" }}>@dejimations - Full tutorials & behind-the-scenes</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.24}>
              <a href="https://twitter.com/dejimations" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div style={{
                  padding: "2rem",
                  borderRadius: "1rem",
                  background: "linear-gradient(135deg, rgba(29, 161, 242, 0.1), rgba(20, 20, 40, 0.8))",
                  border: "1px solid rgba(29, 161, 242, 0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.borderColor = "rgba(29, 161, 242, 0.6)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(29, 161, 242, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(29, 161, 242, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                >
                  <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>𝕏</div>
                  <h3 style={{ color: "#fff", fontWeight: "700", margin: "0 0 0.5rem 0" }}>Twitter</h3>
                  <p style={{ color: "#cbd5e1", margin: "0", fontSize: "0.9rem" }}>@dejimations - Animation tips & updates</p>
                </div>
              </a>
            </Reveal>
          </div>
        </section>

        <section id="courses" className={styles.coursesSection}>
          <Reveal>
            <h2>My Courses</h2>
          </Reveal>
          <div className={styles.coursesGrid}>
            <Reveal>
              <div className={styles.courseCard}>
                <h3>Basic Course</h3>
                <div className={styles.coursePrice}>₹20,000</div>
                <p className={styles.courseDesc}>
                  Perfect for beginners. Learn FlipaClip basics, drawing tools, frames, and create your first animation.
                </p>
                <Link href="/courses" style={{ textDecoration: "none" }}>
                  <button className={styles.courseBtn}>View Details</button>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className={styles.courseCard}>
                <h3>Standard Course</h3>
                <div className={styles.coursePrice}>₹35,000</div>
                <p className={styles.courseDesc}>
                  Most popular! Advanced techniques, audio integration, layers, character animation, and more.
                </p>
                <Link href="/courses" style={{ textDecoration: "none" }}>
                  <button className={styles.courseBtn}>View Details</button>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className={styles.courseCard}>
                <h3>Premium Course</h3>
                <div className={styles.coursePrice}>₹2,50,000</div>
                <p className={styles.courseDesc}>
                  Professional package with 1-on-1 mentorship, growth strategies, and lifetime support.
                </p>
                <Link href="/courses" style={{ textDecoration: "none" }}>
                  <button className={styles.courseBtn}>View Details</button>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="merch" className={styles.merchSection}>
          <Reveal>
            <h2>Merchandise</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className={styles.comingSoon}>🎨 Coming Soon</div>
            <p>Custom apparel, stickers, and exclusive Dejimations gear will be available soon. Stay tuned!</p>
          </Reveal>
        </section>

        <section className={styles.socialSection}>
          <Reveal>
            <h3>Follow My Journey</h3>
          </Reveal>
          <Reveal delay={0.06}>
            <div className={styles.socialLinks}>
              <a href="https://instagram.com/dejimations" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="Instagram">
                📸
              </a>
              <a href="https://tiktok.com/@dejimations" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="TikTok">
                🎵
              </a>
              <a href="https://youtube.com/@dejimations" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="YouTube">
                ▶️
              </a>
              <a href="https://twitter.com/dejimations" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="Twitter">
                𝕏
              </a>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
