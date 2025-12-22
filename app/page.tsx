"use client";

import Image from "next/image";
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
                <a className={styles.btnPrimary} href="#shop">Buy Merch</a>
              </Reveal>
              <Reveal delay={0.24}>
                <a className={styles.btnSecondary} href="#course">Enroll</a>
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
      </main>
    </div>
  );
}
