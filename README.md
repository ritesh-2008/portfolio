# 🎨 Ritesh's Portfolio

A modern, responsive portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. Showcase your skills, projects, and experience with a beautiful, fast, and SEO-optimized site.

**🚀 Live Demo:** [View on Vercel](https://riteshdev-two.vercel.app/)

---

## ✨ Features

- ⚡ **Lightning Fast** - Next.js with Turbopack for instant HMR
- 📱 **Fully Responsive** - Mobile-first design for all devices
- 🎨 **Modern UI** - Built with Tailwind CSS and custom components
- 🔍 **SEO Optimized** - Meta tags, sitemap, and robots.txt included
- 📊 **Data Visualization** - Charts and graphs with Recharts
- 🎯 **Smooth Animations** - Enhanced with Tailwind Animate
- 🧩 **Modular Components** - Reusable React components
- 💯 **Type Safe** - Full TypeScript support

---

## 📂 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── components/
│       ├── HeroSection.tsx   # Hero banner
│       ├── AboutSection.tsx  # About me
│       ├── SkillsSection.tsx # Technical skills
│       ├── ProjectsSection.tsx # Featured projects
│       └── ContactSection.tsx # Contact form
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Footer
│   └── ui/
│       ├── AppIcon.tsx       # Icon component
│       ├── AppImage.tsx      # Image component
│       └── AppLogo.tsx       # Logo component
└── styles/
    └── tailwind.css          # Tailwind config
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/ritesh-2008/portfolio.git
cd portfolio/riteshportfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:4028](http://localhost:4028) in your browser.

---

## 📝 Available Scripts

```bash
# Development - Run with HMR on port 4028
npm run dev

# Production build
npm run build

# Start production server
npm run serve

# Type checking
npm run type-check

# Linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Next.js 16](https://nextjs.org) | React framework with SSR & SSG |
| [React 19](https://react.dev) | UI library |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [Recharts](https://recharts.org) | Data visualization |
| [Lucide React](https://lucide.dev) | Icon library |
| [Heroicons](https://heroicons.com) | Additional icons |

---

## 📄 Content Sections

### Hero Section
Welcoming introduction with CTA button. Customize your headline and tagline in `src/app/components/HeroSection.tsx`.

### About Section
Share your story, background, and what you're passionate about. Edit `src/app/components/AboutSection.tsx`.

### Skills Section
Showcase your technical skills with descriptions and proficiency levels. Update `src/app/components/SkillsSection.tsx`.

### Projects Section
Display your best work with project cards, descriptions, and links. Modify `src/app/components/ProjectsSection.tsx`.

### Contact Section
Contact form for visitors to reach out. Configure email service in `src/app/components/ContactSection.tsx`.

---

## 🎨 Customization

### Update Personal Info
Edit `src/app/components/HeroSection.tsx` to update your name, title, and bio.

### Change Colors
Modify `tailwind.config.js` to customize the color scheme.

### Add Projects
Update the projects data in `src/app/components/ProjectsSection.tsx`.

### Update Skills
Edit `src/app/components/SkillsSection.tsx` with your technical skills.

### Update Header/Footer
Customize navigation and footer links in `src/components/Header.tsx` and `src/components/Footer.tsx`.

---

## 🚢 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Update README"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository `portfolio`
5. Click "Deploy" ✨

**Auto-deploy:** The site automatically redeploys on every push to main!

### Deploy on Netlify
```bash
npm run build
# Then connect your repo to Netlify for auto-deployment
```

---

## 📦 Dependencies

### Core
- `next@16.2.9` - React framework with Turbopack
- `react@19.0.3` - UI library
- `react-dom@19.0.3` - React DOM
- `tailwindcss@3.4.6` - CSS framework

### UI & Visualization
- `recharts@2.15.2` - Charts & graphs
- `lucide-react@1.7.0` - Modern icons
- `@heroicons/react@2.2.0` - Beautiful UI icons
- `tailwindcss-animate@1.0.7` - Smooth animations
- `@tailwindcss/typography@0.5.16` - Typography plugin
- `@tailwindcss/forms@0.5.10` - Form styling

### Developer Tools
- `typescript@5` - Type checking
- `eslint@9` - Code linting
- `prettier@3.5.3` - Code formatting
- `@typescript-eslint/*` - TypeScript ESLint rules

---

## 🔄 Making Changes & Redeploying

After deployment, making changes is simple:

```bash
# 1. Edit your files locally
# 2. Test changes on http://localhost:4028
# 3. Commit and push
git add .
git commit -m "Update portfolio with new project"
git push origin main

# 4. Vercel auto-deploys within 1-2 minutes! 🚀
# Check deployment status at https://vercel.com/dashboard
```

---

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vercel Deployment Docs](https://vercel.com/docs)

---

## 🐛 Troubleshooting

### Port already in use
```bash
# Use a different port
npm run dev -- -p 3000
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Deployment issues
- ✅ Check `.gitignore` includes `node_modules/` and `.next/`
- ✅ Verify all required environment variables are set
- ✅ Review Vercel deployment logs for errors
- ✅ Ensure `package.json` has correct scripts

### Git push fails
```bash
# Make sure large files are in .gitignore
git status  # Check what's being tracked
git rm --cached <large-file>  # Remove if needed
git push origin main
```

---

## 📧 Support & Contact

For questions or issues:
1. Check the [Next.js docs](https://nextjs.org/docs)
2. Review Vercel deployment logs
3. Visit the contact form on your portfolio site

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

Built with ❤️ using modern web technologies.

**Thanks to:**
- Next.js & Vercel team
- React community
- Tailwind CSS for amazing utility CSS
- All open-source contributors

---

**Ready to launch your portfolio?** 🚀

```bash
# Quick start:
npm install && npm run dev
# Then deploy to Vercel!
```

**Last Updated:** June 2026
