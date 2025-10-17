# Usama Bin Nadeem - Portfolio Website

A modern, design-forward portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Inspired by [nadhir.dev](https://nadhir.dev) with a focus on clean aesthetics, smooth animations, and excellent SEO for Upwork freelancing.

## 🌟 Features

- **Modern Design**: Clean, inviting aesthetic with soft colors and generous whitespace
- **Smooth Animations**: Framer Motion animations throughout for a polished feel
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Comprehensive metadata, semantic HTML, and Open Graph tags
- **Fast Performance**: Built with Next.js 15 App Router and optimized for speed
- **TypeScript**: Fully typed for better developer experience

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Plus Jakarta Sans (Google Fonts)

## 📁 Project Structure

```
usamabinnadeem.com/
├── app/
│   ├── about/              # About page
│   ├── projects/           # Projects page with filtering
│   ├── contact/            # Contact page with form
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Page sections (Hero, Services, etc.)
│   ├── ui/                 # Reusable UI components
│   ├── Navbar.tsx          # Sticky navigation
│   └── Footer.tsx          # Footer with social links
└── public/
    └── images/             # Project images and assets
```

## 🎨 Design System

### Color Palette
- **Primary**: Soft purple (#7C3AED)
- **Accent**: Soft pink (#EC4899)
- **Background**: Very light gray (#FAFAFA)
- **Text Primary**: Dark charcoal (#1F2937)
- **Text Secondary**: Light gray (#6B7280)

### Typography
- **Headings**: Plus Jakarta Sans (font-weight: 600)
- **Body**: Inter (font-weight: 400)

### Components
- Rounded corners (12px border radius)
- Soft shadows (no harsh drop shadows)
- Smooth hover transitions
- Card-based layouts

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/usamabinnadeem.com.git
cd usamabinnadeem.com
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## 📄 Pages

### Homepage (/)
- Hero section with greeting and CTA
- "What I Do" services section
- Featured projects showcase
- Skills & technologies grid
- "Let's Work Together" CTA

### About (/about)
- Personal story and background
- Professional experience timeline
- "Why Work With Me?" section
- Technical skills by category
- Education and certifications

### Projects (/projects)
- Filterable project grid (All, Web Development, Mobile, etc.)
- Project cards with images, descriptions, and tech stack
- Smooth filtering animations

### Contact (/contact)
- Contact form (Name, Email, Message)
- Contact information cards
- Social media links
- Response time expectations

## ✨ Customization

### Update Personal Information

1. **Colors**: Edit CSS variables in [app/globals.css](app/globals.css)
2. **Content**: Update placeholder text in page components
3. **Projects**: Modify project data in [app/projects/page.tsx](app/projects/page.tsx)
4. **Social Links**: Update URLs in [components/Footer.tsx](components/Footer.tsx) and [app/contact/page.tsx](app/contact/page.tsx)
5. **Avatar**: Replace the emoji placeholder in [components/sections/Hero.tsx](components/sections/Hero.tsx) with your own 3D avatar or image

### Replace Project Images

Currently using SVG placeholders. Replace with actual project screenshots:
```bash
# Add images to public/images/
# Update image paths in project data
```

### Add Real Contact Form Handling

The contact form currently has a simulated submission. Integrate with:
- **Email Service**: SendGrid, Mailgun, AWS SES
- **Form Handler**: Formspree, Web3Forms, Netlify Forms
- **Backend API**: Your own API endpoint

Example with Formspree:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  // Handle response
};
```

## 🔍 SEO

The site includes:
- ✅ Semantic HTML5 structure
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Proper heading hierarchy
- ✅ Alt text placeholders for images

### Next Steps for SEO:
1. Add actual Open Graph image (`/public/og-image.jpg`)
2. Create a sitemap.xml
3. Add robots.txt
4. Implement structured data (JSON-LD)
5. Add Google Analytics

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Next Steps

### Must Do:
1. ✅ Replace placeholder project images with real screenshots
2. ✅ Update all personal information (bio, experience, education)
3. ✅ Add real social media and Upwork URLs
4. ✅ Create an actual avatar/profile image for the hero section
5. ✅ Set up contact form backend integration
6. ✅ Create Open Graph image for social sharing

### Nice to Have:
- 🔄 Add a blog section
- 🔄 Implement dark mode toggle
- 🔄 Add testimonials section
- 🔄 Create case study pages for individual projects
- 🔄 Add analytics (Google Analytics, Plausible)
- 🔄 Set up automated testing
- 🔄 Add a resume/CV download button
- 🔄 Implement i18n for multiple languages

## 🚢 Deployment

Deploy to Vercel (recommended for Next.js):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or use GitHub integration:
1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically on every push

Other deployment options:
- Netlify
- AWS Amplify
- Railway
- Render

## 📝 License

MIT License - feel free to use this as a template for your own portfolio!

## 🙏 Credits

- Design inspiration: [nadhir.dev](https://nadhir.dev)
- Icons: [Lucide React](https://lucide.dev)
- Fonts: [Google Fonts](https://fonts.google.com)

---

**Built with ❤️ by Usama Bin Nadeem**

For questions or feedback, reach out at hello@usamabinnadeem.com
