'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const projects = [
{
  id: 1,
  title: 'DecentraVault',
  category: 'Web3 · DeFi',
  description:
  'A non-custodial crypto vault built on Ethereum. Users deposit ETH, earn yield via Aave integration, and withdraw anytime. Smart contracts audited and deployed on Sepolia testnet.',
  tech: ['Solidity', 'Hardhat', 'React', 'Ethers.js', 'IPFS'],
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1f16da186-1768146282473.png",
  imageAlt:
  'Dark atmospheric blockchain visualization with glowing circuit patterns, deep blue-black background, neon grid lines',
  github: 'https://github.com',
  live: 'https://github.com',
  featured: true,
  status: 'Live on Testnet'
},
{
  id: 2,
  title: 'TaskFlow API',
  category: 'Backend · REST',
  description:
  'Production-grade task management REST API. JWT auth, role-based access control, real-time notifications via WebSockets, and Redis caching. Containerized with Docker.',
  tech: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Docker'],
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1cc7c93f3-1779107968230.png",
  imageAlt:
  'Code editor with dark theme showing JavaScript code, dim studio lighting, dark background, atmospheric developer setup',
  github: 'https://github.com',
  live: 'https://github.com',
  featured: false,
  status: 'Production'
},
{
  id: 3,
  title: 'NFT Marketplace',
  category: 'Web3 · Full-Stack',
  description:
  'End-to-end NFT marketplace with minting, listing, and trading. ERC-721 contracts, IPFS metadata storage, and a React frontend with wallet connect.',
  tech: ['Solidity', 'Web3.js', 'Next.js', 'Tailwind', 'Pinata'],
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_120fc540e-1772148465741.png",
  imageAlt:
  'Abstract digital art marketplace visualization, dark moody background, glowing purple and teal geometric shapes',
  github: 'https://github.com',
  live: 'https://github.com',
  featured: false,
  status: 'Open Source'
},
{
  id: 4,
  title: 'DevLink',
  category: 'Full-Stack · SaaS',
  description:
  'Developer portfolio builder with drag-and-drop editor, custom domains, and GitHub stats integration. Built with Next.js App Router and PostgreSQL.',
  tech: ['Next.js', 'PostgreSQL', 'Tailwind', 'Prisma', 'Vercel'],
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_10cfef659-1778787023536.png",
  imageAlt:
  'Code on screen in dark room, dark background, blue screen glow on developer workspace, atmospheric low lighting',
  github: 'https://github.com',
  live: 'https://github.com',
  featured: false,
  status: 'In Development'
}];


export default function ProjectsSection() {
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
    <section id="projects" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={(el) => {cardRefs.current[0] = el;}}
          className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          
          <div>
            <span className="section-label block mb-3">03 — Projects</span>
            <h2 className="font-sans font-extrabold text-4xl lg:text-5xl tracking-tight">
              Things I&apos;ve shipped
            </h2>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-muted-foreground px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-300">
            
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View All on GitHub
          </a>
        </div>

        {/* Featured Project */}
        <div
          ref={(el) => {cardRefs.current[1] = el;}}
          className="reveal mb-6">
          
          <FeaturedProjectCard project={projects[0]} />
        </div>

        {/* Remaining Projects Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {projects.slice(1).map((project, i) =>
          <div
            key={project.id}
            ref={(el) => {cardRefs.current[i + 2] = el;}}
            className="reveal"
            style={{ transitionDelay: `${i * 80}ms` }}>
            
              <SmallProjectCard project={project} />
            </div>
          )}
        </div>
      </div>
    </section>);

}

function FeaturedProjectCard({ project }: {project: typeof projects[0];}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="project-card group relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      
      <div className="grid lg:grid-cols-12 gap-0">
        {/* Image side */}
        <div className="lg:col-span-6 relative aspect-video lg:aspect-auto min-h-[260px] overflow-hidden">
          <AppImage
            src={project.image}
            alt={project.imageAlt}
            fill
            className={`object-cover transition-all duration-700 ${
            hovered ? 'scale-105 grayscale-0' : 'grayscale scale-100'}`
            }
            sizes="(max-width: 768px) 100vw, 50vw" />
          
          {/* Scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/80 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent lg:hidden" />
          {/* Status badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-background/80 backdrop-blur-sm border border-primary/30 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              {project.status}
            </span>
          </div>
        </div>

        {/* Content side */}
        <div className="lg:col-span-6 p-7 lg:p-10 flex flex-col justify-between">
          <div className="space-y-5">
            <div>
              <span className="section-label block mb-2">{project.category}</span>
              <h3 className="font-sans font-extrabold text-3xl lg:text-4xl tracking-tight text-foreground">
                {project.title}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) =>
              <span key={t} className="tech-tag">{t}</span>
              )}
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-300">
              
              Live Demo
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 7h10v10M7 17L17 7" />
              </svg>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-300">
              
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>);

}

function SmallProjectCard({ project }: {project: typeof projects[0];}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="project-card group h-full flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <AppImage
          src={project.image}
          alt={project.imageAlt}
          fill
          className={`object-cover transition-all duration-700 ${
          hovered ? 'scale-105 grayscale-0' : 'grayscale scale-100'}`
          }
          sizes="(max-width: 768px) 100vw, 33vw" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-card/70 to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-background/70 backdrop-blur-sm border border-border/50 px-2.5 py-1 rounded-full">
          <span className="w-1 h-1 rounded-full bg-primary" />
          <span className="font-mono text-xs text-muted-foreground tracking-wide">{project.status}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <span className="section-label block mb-2">{project.category}</span>
        <h3 className="font-sans font-bold text-xl tracking-tight text-foreground mb-3">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 4).map((t) =>
          <span key={t} className="tech-tag text-xs">{t}</span>
          )}
        </div>
        <div className="flex gap-2 pt-4 border-t border-border">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 bg-primary/10 border border-primary/20 text-primary rounded-lg font-mono text-xs font-semibold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            
            Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 border border-border text-muted-foreground rounded-lg font-mono text-xs font-semibold uppercase tracking-widest hover:border-foreground hover:text-foreground transition-all duration-300">
            
            Code
          </a>
        </div>
      </div>
    </div>);

}