'use client';

import React, { useEffect, useRef } from 'react';

/* ── BENTO GRID AUDIT ──────────────────────────────────────────
   Array has 5 cards: [Backend, Frontend, Database, Web3, Tools]

   Grid: grid-cols-12 (desktop), grid-cols-1 (mobile)

   Row 1: [col-1–5: Backend cs-5 rs-2] [col-6–9: Frontend cs-4] [col-10–12: Database cs-3]
   Row 2: [col-1–5: FILLED by Backend] [col-6–8: Web3 cs-3]     [col-9–12: Tools cs-4]

   Placed 5/5 cards ✓
   No EMPTY cells ✓
──────────────────────────────────────────────────────────────── */

const skillCategories = [
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙️',
    color: 'primary',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'WebSockets'],
    description: 'Server-side logic, API design, and scalable architecture.',
    colSpan: 'lg:col-span-5',
    rowSpan: 'lg:row-span-2',
    tall: true,
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '🖥️',
    color: 'accent',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer'],
    description: 'Pixel-perfect UIs with smooth interactions.',
    colSpan: 'lg:col-span-4',
    rowSpan: '',
    tall: false,
  },
  {
    id: 'database',
    label: 'Database',
    icon: '🗄️',
    color: 'primary',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Mongoose', 'Prisma'],
    description: 'Data modeling, queries, and optimization.',
    colSpan: 'lg:col-span-3',
    rowSpan: '',
    tall: false,
  },
  {
    id: 'web3',
    label: 'Web3',
    icon: '⛓️',
    color: 'accent',
    skills: ['Solidity', 'Web3.js', 'Hardhat', 'Ethers.js', 'IPFS'],
    description: 'Smart contracts and decentralized application development.',
    colSpan: 'lg:col-span-3',
    rowSpan: '',
    tall: false,
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    icon: '🛠️',
    color: 'primary',
    skills: ['Git', 'Docker', 'Linux', 'VSCode', 'Postman', 'GitHub Actions', 'MongoDb Compass'],
    description: 'Development workflow, containerization, and CI/CD.',
    colSpan: 'lg:col-span-4',
    rowSpan: '',
    tall: false,
  },
];

export default function SkillsSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-hidden');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((el) => {
      if (el) {
        el.classList.add('reveal-hidden');
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 lg:py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={(el) => { cardRefs.current[0] = el; }}
          className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="section-label block mb-3">02 — Skills</span>
            <h2 className="font-sans font-extrabold text-4xl lg:text-5xl tracking-tight">
              Tech I build with
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            A full-spectrum stack — from writing smart contracts to deploying
            containerized backends and shipping polished frontends.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 auto-rows-auto">
          {/* Card 0: Backend — col-span-5, row-span-2 */}
          <div
            ref={(el) => { cardRefs.current[1] = el; }}
            className={`reveal skill-card p-7 flex flex-col justify-between ${skillCategories[0].colSpan} ${skillCategories[0].rowSpan} min-h-[280px]`}
            style={{ transitionDelay: '0ms' }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{skillCategories[0].icon}</span>
                <span className="section-label">{skillCategories[0].label}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {skillCategories[0].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skillCategories[0].skills.map((skill) => (
                  <span key={skill} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
            {/* Decorative bar */}
            <div className="mt-6 h-1 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full w-4/5 bg-primary rounded-full" />
            </div>
          </div>

          {/* Card 1: Frontend — col-span-4 */}
          <div
            ref={(el) => { cardRefs.current[2] = el; }}
            className={`reveal skill-card p-7 flex flex-col justify-between ${skillCategories[1].colSpan} min-h-[200px]`}
            style={{ transitionDelay: '80ms' }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{skillCategories[1].icon}</span>
                <span className="section-label" style={{ color: 'var(--accent)' }}>
                  {skillCategories[1].label}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {skillCategories[1].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skillCategories[1].skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-1 bg-accent/10 border border-accent/20 rounded-full font-mono text-xs"
                    style={{ color: 'var(--accent)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Database — col-span-3 */}
          <div
            ref={(el) => { cardRefs.current[3] = el; }}
            className={`reveal skill-card p-7 flex flex-col justify-between ${skillCategories[2].colSpan} min-h-[200px]`}
            style={{ transitionDelay: '160ms' }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{skillCategories[2].icon}</span>
                <span className="section-label">{skillCategories[2].label}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {skillCategories[2].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skillCategories[2].skills.map((skill) => (
                  <span key={skill} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Web3 — col-span-3 */}
          <div
            ref={(el) => { cardRefs.current[4] = el; }}
            className={`reveal skill-card p-7 flex flex-col justify-between ${skillCategories[3].colSpan} min-h-[200px] relative overflow-hidden`}
            style={{ transitionDelay: '240ms' }}
          >
            {/* Accent glow bg */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 blob-accent opacity-20 rounded-full pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{skillCategories[3].icon}</span>
                <span className="section-label" style={{ color: 'var(--accent)' }}>
                  {skillCategories[3].label}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {skillCategories[3].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skillCategories[3].skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-1 bg-accent/10 border border-accent/20 rounded-full font-mono text-xs"
                    style={{ color: 'var(--accent)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 4: Tools — col-span-4 */}
          <div
            ref={(el) => { cardRefs.current[5] = el; }}
            className={`reveal skill-card p-7 flex flex-col justify-between ${skillCategories[4].colSpan} min-h-[200px]`}
            style={{ transitionDelay: '320ms' }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{skillCategories[4].icon}</span>
                <span className="section-label">{skillCategories[4].label}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {skillCategories[4].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skillCategories[4].skills.map((skill) => (
                  <span key={skill} className="tech-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}