'use client';

import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Social from "@/components/Social";
import Videos from "@/components/Videos";

import { useEffect, useRef, useState } from 'react';

export default function Home() {

  const sobreMiRef = useRef<HTMLElement>(null);
  const redesRef = useRef<HTMLElement>(null);
  const videosRef = useRef<HTMLElement>(null);
  const contactoRef = useRef<HTMLElement>(null);

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleObserver = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          window.history.replaceState({}, '', `#${entry.target.id}`);
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: '0px',
      threshold: 0.6,
    });

    const sections = [sobreMiRef, redesRef, videosRef, contactoRef];
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <main className="flex flex-col overflow-auto">
      <header className="h-fit">
        <Navbar reference={activeSection} />
      </header>
      <div className="flex flex-col">
        <section id="sobre-mi" ref={sobreMiRef}>
          <Banner />
        </section>
        <section id="redes" ref={redesRef}>
          <Social />
        </section>
        <section id="videos" ref={videosRef}>
          <Videos />
        </section>
        <section id="contacto" ref={contactoRef}>
          <Contact />
        </section>
      </div>
      <Footer />
    </main>
  );
}
