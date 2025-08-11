# Data Engineer Portfolio Website

A modern, responsive portfolio website built for data engineers using Next.js, TypeScript, and Tailwind CSS. Features smooth animations, a clean design, and professional presentation of skills, projects, and experience.

## 🌟 Features

- **Modern Design**: Clean, professional layout with blue/green gradient theme
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion animations with scroll-triggered effects
- **Contact Form**: Integrated EmailJS for direct message functionality
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **TypeScript**: Full type safety throughout the application
- **Accessible**: WCAG compliant with proper ARIA labels and semantic HTML
- **SEO Optimized**: Meta tags, structured data, and performance optimized

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 🛠️ Customization Guide

### Personal Information

1. **Update your data** in `src/utils/data.ts`:
   ```typescript
   export const portfolioData = {
     name: "Your Name",
     role: "Data Engineer",
     bio: "Your professional bio...",
     email: "your.email@example.com",
     location: "Your City, Country",
     phone: "+1 (555) 123-4567"
   };
   ```

2. **Update skills** in the same file:
   ```typescript
   export const skillCategories: SkillCategory[] = [
     {
       title: "Data Ingestion",
       skills: [
         { name: "Apache Kafka", level: 5 },
         // Add your skills...
       ]
     }
   ];
   ```

3. **Add your projects**:
   ```typescript
   export const projects: Project[] = [
     {
       id: "1",
       title: "Your Project Name",
       description: "Project description...",
       techStack: ["Technology", "Stack"],
       githubUrl: "https://github.com/username/repo",
       liveUrl: "https://your-demo.com",
       featured: true
     }
   ];
   ```

### Email Contact Form Setup

1. **Create an EmailJS account** at [emailjs.com](https://www.emailjs.com/)

2. **Set up a service** (Gmail, Outlook, etc.)

3. **Create an email template** with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{to_email}}`

4. **Update EmailJS configuration** in `src/components/sections/Contact.tsx`:
   ```typescript
   await emailjs.send(
     'YOUR_SERVICE_ID',    // Replace with your service ID
     'YOUR_TEMPLATE_ID',   // Replace with your template ID
     {
       from_name: formData.name,
       from_email: formData.email,
       subject: formData.subject,
       message: formData.message,
       to_email: portfolioData.email,
     },
     'YOUR_PUBLIC_KEY'     // Replace with your public key
   );
   ```

### Adding Your Photo

1. **Add your photo** to the `public` folder (e.g., `public/profile.jpg`)

2. **Update the About section** in `src/components/sections/About.tsx`:
   ```jsx
   // Replace the placeholder div with:
   <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl shadow-xl overflow-hidden">
     <Image
       src="/profile.jpg"
       alt="Your Name"
       width={400}
       height={400}
       className="w-full h-full object-cover"
     />
   </div>
   ```

### Customizing Colors

Update the color theme in `src/app/globals.css`:

```css
:root {
  --primary-blue: #2563eb;     /* Your primary blue */
  --primary-green: #059669;    /* Your primary green */
  --secondary-blue: #3b82f6;   /* Secondary blue */
  --secondary-green: #10b981;  /* Secondary green */
  /* ... other colors */
}
```

### Adding Resume Download

1. **Add your resume** to the `public` folder as `resume.pdf`
2. The download button in the Hero section will automatically work

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Key responsive features:
- Collapsible navigation menu on mobile
- Responsive grid layouts
- Optimized typography scaling
- Touch-friendly interactions

## 🎨 Styling

The project uses:
- **Tailwind CSS** for utility-first styling
- **Custom CSS classes** for reusable components
- **Framer Motion** for animations
- **Lucide React** for icons

### Custom CSS Classes

```css
.gradient-text        /* Blue to green gradient text */
.btn-primary         /* Primary button styling */
.btn-secondary       /* Secondary button styling */
.card               /* Card component styling */
.section-padding    /* Consistent section padding */
.container-max      /* Max-width container */
```

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. **Push your code** to GitHub/GitLab/Bitbucket

2. **Import project** on [Vercel](https://vercel.com/new)

3. **Configure build settings**:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: (leave empty)

4. **Deploy**: Vercel will automatically deploy and provide a URL

### Deploy on Netlify

1. **Build the project**:
   ```bash
   npm run build
   npm run export
   ```

2. **Upload the `out` folder** to Netlify, or connect your Git repository

3. **Configure build settings**:
   - Build Command: `npm run build && npm run export`
   - Publish Directory: `out`

### Manual Deployment

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm start
   ```

3. **Deploy the `.next` folder** to your hosting provider

## 🔧 Environment Variables

Create a `.env.local` file for sensitive data:

```env
# EmailJS Configuration (optional - can be set directly in code)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 📊 Performance Optimization

The portfolio is optimized for performance:

- **Next.js 14** with App Router for optimal loading
- **Image optimization** with Next.js Image component
- **Code splitting** for reduced bundle size
- **Lazy loading** for smooth scrolling
- **Optimized fonts** with next/font
- **Minimal dependencies** for fast load times

## 🛡️ Security

- **No sensitive data** exposed in client-side code
- **HTTPS only** for production deployments
- **Secure headers** configured in Next.js
- **XSS protection** with proper data sanitization

## 📋 Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you need help customizing your portfolio:

1. Check the customization guide above
2. Review the code comments for guidance
3. Open an issue for bugs or questions
4. Contact me through the portfolio contact form

## 🔮 Future Enhancements

Potential features to add:
- **Blog section** with MDX support
- **Dark mode** toggle
- **Multi-language** support
- **Analytics dashboard** integration
- **CMS integration** for easy content updates
- **Animation theme** customizer

---

**Happy coding!** 🎉 Your data engineering portfolio is ready to showcase your amazing work to the world.
