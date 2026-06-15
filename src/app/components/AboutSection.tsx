'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const stats = [
{ value: '18', label: 'Years Old', suffix: '' },
{ value: '3', label: 'Years Coding', suffix: '+' },
{ value: '15', label: 'Projects Built', suffix: '+' },
{ value: '100', label: 'GitHub Commits', suffix: 'k+' }];


const interests = ['Open Source', 'DeFi Protocols', 'System Design', 'Linux', 'Cryptography'];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-hidden');
          }
        });
      },
      { threshold: 0.15 }
    );

    itemRefs.current.forEach((el) => {
      if (el) {
        el.classList.add('reveal-hidden');
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 px-6 relative overflow-hidden">
      
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 blob-accent opacity-5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div
          ref={(el) => {itemRefs.current[0] = el;}}
          className="reveal flex items-center gap-3 mb-16">
          
          <span className="section-label">01 — About</span>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Photo card + stats */}
          <div className="lg:col-span-5 space-y-6">
            {/* Profile card */}
            <div
              ref={(el) => {itemRefs.current[1] = el;}}
              className="reveal relative group">
              
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1b525bce2-1773097091615.png"
                  alt="Young developer at laptop in dark moody studio, low-key lighting, blue screen glow, dim background"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 40vw" />
                
                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                {/* Overlay tag */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="font-mono text-xs text-foreground/80 tracking-widest uppercase">
                      Mumbai, India · Open to Remote
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative border accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-primary/20 pointer-events-none" />
            </div>

            {/* Stats grid */}
            <div
              ref={(el) => {itemRefs.current[2] = el;}}
              className="reveal grid grid-cols-2 gap-4"
              style={{ transitionDelay: '100ms' }}>
              
              {stats.map((stat) =>
              <div
                key={stat.label}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-all duration-300 group">
                
                  <p className="font-sans font-extrabold text-3xl text-primary leading-none group-hover:text-accent transition-colors">
                    {stat.value}
                    <span className="text-lg">{stat.suffix}</span>
                  </p>
                  <p className="font-mono text-xs text-muted-foreground mt-1.5 tracking-widest uppercase">
                    {stat.label}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right: Bio */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-10">
            <div
              ref={(el) => {itemRefs.current[3] = el;}}
              className="reveal space-y-6"
              style={{ transitionDelay: '150ms' }}>
              
              <h2 className="font-sans font-extrabold text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight">
                Building the web,{' '}
                <span className="gradient-text">one commit</span>
                {' '}at a time.
              </h2>

              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I&apos;m Ritesh — an 18-year-old self-taught developer who&apos;s been writing
                  code since I was 15. What started as curiosity about how websites work
                  turned into a full obsession with building them.
                </p>
                <p>
                  My stack spans the full spectrum: from designing REST APIs with Node.js
                  and Express, to crafting responsive UIs with React and Tailwind, to
                  writing and deploying smart contracts on Ethereum with Solidity and
                  Hardhat.
                </p>
                <p>
                  I believe the best code is the kind that ships. I run Linux daily,
                  containerize everything with Docker, and treat my Git history like
                  documentation.
                </p>
              </div>
            </div>

            {/* Interests */}
            <div
              ref={(el) => {itemRefs.current[4] = el;}}
              className="reveal space-y-4"
              style={{ transitionDelay: '200ms' }}>
              
              <p className="section-label">Currently Interested In</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) =>
                <span key={interest} className="tech-tag">
                    {interest}
                  </span>
                )}
              </div>
            </div>

            {/* Quick info row */}
            <div
              ref={(el) => {itemRefs.current[5] = el;}}
              className="reveal grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border"
              style={{ transitionDelay: '250ms' }}>
              
              {[
              { icon: '📍', label: 'Location', value: 'Mumbai, India' },
              { icon: '🎓', label: 'Education', value: 'Self-Taught' },
              { icon: '💼', label: 'Status', value: 'Open to Work' }].
              map((item) =>
              <div key={item.label} className="flex items-start gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                      {item.label}
                    </p>
                    <p className="font-sans text-sm font-semibold text-foreground mt-0.5">
                      {item.value}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}