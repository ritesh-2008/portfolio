'use client';

import React, { useEffect, useRef, useState } from 'react';

const contactInfo = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'riteshvanivdekar@gmail.com',
    href: 'riteshvanivdekar@gmail.com',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/riteshvanivdekar',
    href: 'https://github.com/ritesh-2008',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/riteshvanivdekar',
    href: 'https://www.linkedin.com/in/ritesh-vanivdekar-364796336/',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Location',
    value: 'Mumbai, Maharashtra, India',
    href: '#',
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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

    itemRefs.current.forEach((el) => {
      if (el) {
        el.classList.add('reveal-hidden');
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Mock submit — connect to backend here
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32 px-6 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background blob */}
      <div className="absolute bottom-0 left-0 w-96 h-96 blob-primary opacity-5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={(el) => { itemRefs.current[0] = el; }}
          className="reveal mb-16"
        >
          <span className="section-label block mb-3">04 — Contact</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-sans font-extrabold text-4xl lg:text-5xl tracking-tight">
              Let&apos;s build something
              <br />
              <span className="gradient-text">together.</span>
            </h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Open to freelance projects, full-time roles, and interesting
              collaborations. Response time: usually within 24 hours.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Form */}
          <div
            ref={(el) => { itemRefs.current[1] = el; }}
            className="reveal lg:col-span-7"
          >
            {submitted ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center bg-card border border-primary/30 rounded-2xl p-10 text-center glow-primary">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-sans font-bold text-2xl text-foreground mb-3">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out, {formData.name}. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-6 font-mono text-xs text-primary border border-primary/30 px-5 py-2.5 rounded-full hover:bg-primary/10 transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <FormField
                  label="Subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-muted-foreground tracking-widest uppercase block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground py-4 rounded-xl font-mono text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-300 glow-primary disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity="0.25" />
                        <path d="M21 12a9 9 0 00-9-9" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div
            ref={(el) => { itemRefs.current[2] = el; }}
            className="reveal lg:col-span-5 flex flex-col justify-between gap-8"
            style={{ transitionDelay: '120ms' }}
          >
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/40 hover:bg-card transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-0.5">
                      {item.label}
                    </p>
                    <p className="font-sans text-sm font-medium text-foreground truncate">
                      {item.value}
                    </p>
                  </div>
                  <svg
                    className="ml-auto shrink-0 text-muted-foreground group-hover:text-primary transition-colors"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 7h10v10M7 17L17 7" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Availability card */}
            <div className="bg-card border border-primary/20 rounded-xl p-6 glow-primary">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-xs text-primary tracking-widest uppercase font-semibold">
                  Currently Available
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Open to freelance projects, internships, and full-time
                opportunities. Especially interested in Web3, DeFi, and
                full-stack SaaS roles.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Remote', 'Hybrid', 'Mumbai'].map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={name}
        className="font-mono text-xs text-muted-foreground tracking-widest uppercase block"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-card border border-border rounded-xl px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-200"
      />
    </div>
  );
}