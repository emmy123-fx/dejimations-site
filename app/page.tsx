"use client";

import Image from "next/image";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071226] to-[#071726]">
      <main className="container mx-auto px-6 py-20">
        <header className="flex items-center justify-between pb-12">
          <div className="text-2xl font-extrabold" style={{color: '#fff'}}>Dejimations</div>
          <nav className="hidden md:flex gap-6" style={{color: '#cbd5e1'}}>
            <a href="#features">Features</a>
            <a href="#showcase">Showcase</a>
            <a href="#shop">Shop</a>
          </nav>
        </header>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          <div>
            <Reveal>
              <h1 className="text-4xl font-extrabold" style={{color: '#fff'}}>Simple. Intuitive. Fun.</h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 max-w-xl" style={{color: '#cbd5e1'}}>Create frame-by-frame animations, sell courses, and share your art with the world.</p>
            </Reveal>
            <div className="mt-6 flex gap-3">
              <Reveal delay={0.16}>
                <a className="inline-block rounded-lg bg-gradient-to-r from-indigo-600 to-pink-500 px-5 py-3 font-bold text-white" href="#shop">Buy Merch</a>
              </Reveal>
              <Reveal delay={0.24}>
                <a className="inline-block rounded-lg border px-5 py-3" style={{borderColor: 'rgba(255,255,255,0.1)', color: '#fff'}} href="#course">Enroll</a>
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.12}>
            <div className="mx-auto w-full max-w-md rounded-2xl bg-[#071226] p-6 shadow-lg">
              <Image src="/file.svg" alt="demo" width={520} height={320} />
            </div>
          </Reveal>
        </section>

        <section id="features" className="mt-20 grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="rounded-xl p-6" style={{backgroundColor: 'rgba(255,255,255,0.03)'}}>
              <h3 className="text-xl font-semibold" style={{color: '#fff'}}>Awesome drawing tools</h3>
              <p className="mt-2" style={{color: '#cbd5e1'}}>Brushes, onion skin, and helpful guides for fast drawing.</p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="rounded-xl p-6" style={{backgroundColor: 'rgba(255,255,255,0.03)'}}>
              <h3 className="text-xl font-semibold" style={{color: '#fff'}}>Layer it up</h3>
              <p className="mt-2" style={{color: '#cbd5e1'}}>Use multiple layers to separate foreground and background.</p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-xl p-6" style={{backgroundColor: 'rgba(255,255,255,0.03)'}}>
              <h3 className="text-xl font-semibold" style={{color: '#fff'}}>Make it sing</h3>
              <p className="mt-2" style={{color: '#cbd5e1'}}>Add audio tracks, sound effects, and lip sync.</p>
            </div>
          </Reveal>
        </section>

        <section id="showcase" className="mt-20">
          <Reveal>
            <h2 className="text-2xl font-bold" style={{color: '#fff'}}>Share anywhere</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Reveal>
              <div className="rounded-lg p-4" style={{backgroundColor: 'rgba(255,255,255,0.03)'}}>
                <Image src="/globe.svg" alt="example" width={400} height={240} />
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="rounded-lg p-4" style={{backgroundColor: 'rgba(255,255,255,0.03)'}}>
                <Image src="/window.svg" alt="example" width={400} height={240} />
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="rounded-lg p-4" style={{backgroundColor: 'rgba(255,255,255,0.03)'}}>
                <Image src="/vercel.svg" alt="example" width={400} height={240} />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
