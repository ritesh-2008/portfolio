'use client';

import React, { useEffect, useRef, useState } from 'react';

const ROLES = [
  'Full-Stack Developer',
  'Web3 Engineer',
  'Solidity Developer',
  'React Specialist',
  'Node.js Builder',
];

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);

  // Typewriter effect
  useEffect(() => {
    if (isWaiting) return;
    const currentRole = ROLES[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = currentRole.slice(0, displayText.length + 1);
          setDisplayText(next);
          if (next === currentRole) {
            setIsWaiting(true);
            setTimeout(() => {
              setIsWaiting(false);
              setIsDeleting(true);
            }, 1800);
          }
        } else {
          const next = currentRole.slice(0, displayText.length - 1);
          setDisplayText(next);
          if (next === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
          }
        }
      },
      isDeleting ? 45 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, isWaiting]);

  // Cursor parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      if (blobRef1.current) {
        blobRef1.current.style.transform = `translate(${dx * 40}px, ${dy * 30}px)`;
      }
      if (blobRef2.current) {
        blobRef2.current.style.transform = `translate(${dx * -30}px, ${dy * -20}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16 noise-overlay"
      aria-label="Hero"
    >
      {/* Atmospheric depth layers */}
      <div
        ref={blobRef1}
        className="blob-primary animate-pulse-glow absolute w-[600px] h-[600px] rounded-full -top-32 -left-32 pointer-events-none"
        style={{ transition: 'transform 0.8s cubic-bezier(0.4,0,0.2,1)' }}
      />
      <div
        ref={blobRef2}
        className="blob-accent animate-pulse-glow absolute w-[500px] h-[500px] rounded-full bottom-0 right-0 pointer-events-none"
        style={{ transition: 'transform 0.8s cubic-bezier(0.4,0,0.2,1)', animationDelay: '3s' }}
      />

      {/* Grid lines decorative */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 bottom-0 left-1/4 w-px bg-foreground" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-foreground" />
        <div className="absolute top-0 bottom-0 left-3/4 w-px bg-foreground" />
        <div className="absolute left-0 right-0 top-1/3 h-px bg-foreground" />
        <div className="absolute left-0 right-0 top-2/3 h-px bg-foreground" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Main content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-muted border border-border rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                Available for work · Mumbai, India
              </span>
            </div>

            {/* Massive headline */}
            <div>
              <h1 className="text-hero-display font-sans font-extrabold uppercase leading-none">
                <span className="block text-foreground">RITESH</span>
                <span className="block text-stroke-primary">VANIV</span>
                <span className="block text-foreground">DEKAR</span>
              </h1>
            </div>

            {/* Typewriter role */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-primary" />
              <p className="font-mono text-lg text-primary typewriter-cursor min-h-[1.75rem]">
                {displayText}
              </p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              18-year-old developer from Mumbai shipping full-stack web apps and
              decentralized protocols. I build things that work in production,
              not just on localhost.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-mono text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-300 glow-primary"
              >
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 7h10v10M7 17L17 7" />
                </svg>
              </button>
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-full font-mono text-sm font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-border">
              {[
                { value: '3+', label: 'Years Coding' },
                { value: '15+', label: 'Projects Built' },
                { value: '8+', label: 'Tech Stacks' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-sans font-extrabold text-3xl text-primary leading-none">{stat.value}</p>
                  <p className="font-mono text-xs text-muted-foreground mt-1 tracking-widest uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Terminal card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="terminal-card w-full max-w-sm animate-float">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <span className="w-3 h-3 rounded-full terminal-dot-red" />
                <span className="w-3 h-3 rounded-full terminal-dot-yellow" />
                <span className="w-3 h-3 rounded-full terminal-dot-green" />
                <span className="font-mono text-xs text-muted-foreground ml-2 tracking-wide">
                  ritesh@dev:~$
                </span>
              </div>
              {/* Terminal body */}
              <div className="p-5 space-y-3">
                <TerminalLine delay={0} prompt=">" text="whoami" />
                <TerminalOutput delay={300} text="Ritesh Vanivdekar" highlight />
                <TerminalLine delay={600} prompt=">" text="cat skills.json" />
                <div className="pl-4 space-y-1 mt-1">
                  <TerminalOutput delay={900} text='"stack": ["React", "Node.js"],' />
                  <TerminalOutput delay={1050} text='"web3": ["Solidity", "Hardhat"],' />
                  <TerminalOutput delay={1200} text='"db": ["MongoDB", "PostgreSQL"]' />
                </div>
                <TerminalLine delay={1400} prompt=">" text="node --version" />
                <TerminalOutput delay={1700} text="v22.3.0" highlight />
                <TerminalLine delay={1900} prompt=">" text="git log --oneline -1" />
                <TerminalOutput delay={2200} text="a9f3c21 feat: shipped new dApp 🚀" />
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-mono text-xs text-primary">❯</span>
                  <span className="font-mono text-xs text-foreground typewriter-cursor">&nbsp;</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  );
}

function TerminalLine({
  prompt,
  text,
  delay,
}: {
  prompt: string;
  text: string;
  delay: number;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className="flex items-center gap-2 transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <span className="font-mono text-xs text-primary">{prompt}</span>
      <span className="font-mono text-xs text-foreground">{text}</span>
    </div>
  );
}

function TerminalOutput({
  text,
  delay,
  highlight,
}: {
  text: string;
  delay: number;
  highlight?: boolean;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className="pl-4 transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <span
        className={`font-mono text-xs ${highlight ? 'text-accent' : 'text-muted-foreground'}`}
      >
        {text}
      </span>
    </div>
  );
}