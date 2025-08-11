# Senior Data Engineer Portfolio Website

A modern, responsive portfolio website built for a Senior Data Engineer, featuring a clean design with dark navy background and orange accents. The site effectively showcases technical skills, projects, experience, education, and certifications.

## 🚀 Features

- **Modern Design**: Clean, professional layout with dark theme and orange accents
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations, hover effects, and scroll-triggered animations
- **Accessible**: Semantic HTML with proper ARIA labels and keyboard navigation
- **Performance Optimized**: Fast loading with optimized assets and lazy loading
- **SEO Friendly**: Proper meta tags and structured data

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality and animations
└── README.md           # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary Background**: Dark navy (#0B0D17)
- **Secondary Background**: Lighter navy (#141625)
- **Accent Color**: Orange (#FF5C33)
- **Text**: White for headings, light grey for body text

### Typography
- **Headings**: Poppins (Bold)
- **Body Text**: Inter (Regular)

### Sections
1. **Hero**: Profile image with accent circles, title, and contact details
2. **About**: Professional summary and core expertise areas
3. **Skills**: Interactive skill bars with percentages
4. **Projects**: Project cards with tech stack tags
5. **Experience**: Timeline layout with detailed work history
6. **Education**: Degrees and certifications
7. **Testimonials**: Client/colleague endorsements
8. **Contact**: Contact form and information
9. **Footer**: Social links and newsletter signup

## 🛠️ Customization Guide

### Personal Information
Update the following in `index.html`:

1. **Name and Title**:
   ```html
   <title>Your Name - Senior Data Engineer</title>
   <h1 class="hero-title">Building reliable, <span class="accent">scalable</span> data platforms</h1>
   ```

2. **Contact Information**:
   ```html
   <span>Your Name</span>
   <span>your.email@example.com</span>
   <span>+1 (555) 123-4567</span>
   <span>linkedin.com/in/your-profile</span>
   <span>github.com/your-username</span>
   ```

3. **Profile Image**:
   Replace the placeholder image URL with your own:
   ```html
   <img src="path/to/your/image.jpg" alt="Your Name">
   ```

### Skills Section
Update the skills and percentages in the skills section:

```html
<div class="skill-card">
    <div class="skill-icon">
        <i class="fab fa-python"></i>
    </div>
    <h3>Python</h3>
    <div class="skill-bar">
        <div class="skill-progress" data-percentage="99"></div>
    </div>
    <span class="skill-percentage">99%</span>
</div>
```

### Projects
Replace the example projects with your own:

```html
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-chart-line"></i>
    </div>
    <h3>Your Project Title</h3>
    <p>Project description goes here...</p>
    <div class="project-tech">
        <span class="tech-tag">Technology 1</span>
        <span class="tech-tag">Technology 2</span>
    </div>
    <div class="project-links">
        <a href="#" class="btn btn-sm">GitHub →</a>
        <a href="#" class="btn btn-sm btn-outline">Case Study →</a>
    </div>
</div>
```

### Experience
Update your work experience:

```html
<div class="experience-item">
    <div class="experience-content">
        <div class="experience-header">
            <h3>Your Job Title</h3>
            <span class="company">Company Name</span>
            <span class="period">2022 - Present</span>
        </div>
        <ul class="experience-details">
            <li>Your achievement or responsibility</li>
            <li>Another achievement or responsibility</li>
        </ul>
    </div>
</div>
```

### Education & Certifications
Update your educational background and certifications:

```html
<div class="education-card">
    <div class="education-icon">
        <i class="fas fa-graduation-cap"></i>
    </div>
    <h3>Your Degree</h3>
    <p class="institution">University Name</p>
    <p class="year">2014 - 2016</p>
    <p>Description of your studies...</p>
</div>
```

## 🚀 Deployment Options

### GitHub Pages
1. Create a new repository on GitHub
2. Upload your files to the repository
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Sign up for Netlify
2. Drag and drop your project folder to Netlify
3. Your site will be deployed automatically
4. Customize the URL in the site settings

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to your project directory
3. Run `vercel` and follow the prompts
4. Your site will be deployed with a custom URL

### Traditional Web Hosting
1. Upload all files to your web hosting provider
2. Ensure `index.html` is in the root directory
3. Your site will be accessible at your domain

## 🔧 Local Development

1. **Clone or download** the project files
2. **Open** `index.html` in your web browser
3. **Edit** the files using your preferred code editor
4. **Refresh** the browser to see changes

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Tips

1. **Optimize Images**: Compress profile and project images
2. **Minify Assets**: Minify CSS and JavaScript for production
3. **Use CDN**: Consider using CDN for fonts and icons
4. **Lazy Loading**: Images are already optimized for lazy loading

## 🔍 SEO Optimization

The site includes:
- Proper meta tags
- Semantic HTML structure
- Open Graph tags (can be added)
- Structured data (can be enhanced)

## 📞 Support

For customization help or questions:
1. Check the customization guide above
2. Review the HTML structure in `index.html`
3. Modify CSS variables in `styles.css` for color changes
4. Update JavaScript functionality in `script.js`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for data engineers who want to showcase their skills effectively.**