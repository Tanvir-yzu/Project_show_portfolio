<div align="center">

# 🚀 Tanvir Islam - Portfolio Website

A modern, minimalist portfolio website built with React, featuring clean design, smooth animations, and responsive layouts. Perfect for showcasing skills, projects, and experience as a Full-Stack Developer.

![Portfolio Preview](https://i.postimg.cc/kXCzVhGw/Macbook-Air-localhost.png)

[![Status](https://img.shields.io/badge/Status-Live-success?style=flat-square)](https://your-portfolio-url.com)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38BDF8?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## ✨ Features

- 🎨 **Modern Minimalist Design** - Clean, professional UI with elegant whitespace and typography
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- 🎭 **Smooth Animations** - Micro-interactions powered by Framer Motion
- 🎠 **Interactive Project Carousel** - Dynamic Swiper.js with navigation
- 📧 **Contact Form** - Integrated with FormSubmit for easy submissions
- 🌙 **Dark/Light Mode** - Automatic theme switching
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎯 **Smooth Scrolling** - Seamless section navigation
- 🎨 **Gradient Accents** - Modern color gradients throughout

## 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 18 |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS 3.4 |
| **Animations** | Framer Motion |
| **Carousel** | Swiper.js |
| **Icons** | React Icons |
| **Marquee** | React Fast Marquee |
| **Forms** | FormSubmit |

## 📂 Project Structure

```
Portfolio/
├── public/
│   ├── favicon.svg
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation with mobile menu
│   │   ├── Hero.jsx            # Landing section with intro
│   │   ├── SkillsMarquee.jsx   # Scrolling tech banner
│   │   ├── Skills.jsx          # Skill categories & cards
│   │   ├── About.jsx           # Personal information
│   │   ├── Projects.jsx        # Project showcase carousel
│   │   ├── Contact.jsx         # Contact form & info
│   │   └── Footer.jsx         # Footer with links & CTA
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── netlify.toml
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Tanvir-yzu/Project_show_portfolio.git

# 2. Navigate to the project
cd Portfolio

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view your portfolio.

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## 🌐 Deployment

### Netlify (Recommended)

This project includes `netlify.toml` for easy deployment:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy automatically on push

Or use the Netlify CLI:

```bash
npm run build
netlify deploy --prod
```

## 📧 Contact Form Setup

The portfolio uses [FormSubmit](https://formsubmit.co/) for contact forms:

1. Deploy your portfolio
2. Fill out and submit the contact form once
3. Check your email for activation link
4. Click to activate and start receiving messages

## 🎨 Design System

### Color Palette

| Color Name | Hex Code | Usage |
|-------------|-----------|--------|
| Primary | `#0D2426` | Main background, dark elements |
| Secondary | `#AEFF72` | Accents, buttons, highlights |
| Accent | `#00C6FF` | Gradients, links |
| Background Light | `#F3F4F6` | Light mode background |
| Background Dark | `#0D2426` | Dark mode background |

### Typography

- **Primary Font:** Poppins (Display)
- **Body:** System font stack
- **Headings:** 4xl - 6xl (responsive)
- **Body Text:** base - lg

## 📱 Section Overview

| Section | Description |
|---------|-------------|
| **Hero** | Eye-catching intro with animated profile and CTAs |
| **Skills Marquee** | Infinite scroll of tech stack |
| **About** | Personal background and story |
| **Skills** | Categorized skills with proficiency indicators |
| **Projects** | Interactive carousel with project cards |
| **Contact** | Functional form with social links |
| **Footer** | Navigation, contact info, and CTA |

## 🔧 Customization

### Update Personal Information

Edit these files to personalize your portfolio:

```bash
src/components/
├── Hero.jsx      # Name, title, description
├── About.jsx     # Bio, background story
├── Skills.jsx     # Your skill set
├── Projects.jsx   # Project portfolio
├── Contact.jsx   # Contact email
└── Footer.jsx    # Social media links
```

### Customize Colors

Update `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: "#0D2426",
      secondary: "#AEFF72",
      accent: "#00C6FF",
    },
  },
}
```

### Update Profile Image

Replace the image URL in `src/components/Hero.jsx`:

```jsx
<img
  src="your-image-url.jpg"
  alt="Your Name"
/>
```

## 🎯 Key Features Explained

### Modern Design Elements

- **Clean Lines:** Minimal borders and subtle shadows
- **Whitespace:** Generous spacing for readability
- **Gradients:** Smooth color transitions
- **Glassmorphism:** Subtle blur effects
- **Micro-interactions:** Hover and tap animations

### Responsive Design

- **Mobile First:** Optimized for small screens
- **Breakpoints:** 640px | 768px | 1024px | 1280px
- **Touch-Friendly:** Large tap targets
- **Adaptive Layout:** Flexible grid system

### Performance Optimizations

- **Code Splitting:** Lazy loading components
- **Image Optimization:** WebP format support
- **Tree Shaking:** Removing unused code
- **Minification:** Production build optimization

## 📄 License

This project is open source under the [MIT License](LICENSE).

Feel free to use it for your own portfolio!

## 👤 Author

**Tanvir Mahmud**

- 🌐 [GitHub](https://github.com/Tanvir-yzu)
- 💼 [LinkedIn](https://www.linkedin.com/in/tanvir-yzu/)
- 📧 [Email](mailto:2020tanvir1971@gmail.com)

## 🙏 Acknowledgments

- Design inspiration from [Linear](https://linear.app/), [Vercel](https://vercel.com/), and [Stripe](https://stripe.com/)
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Form handling by [FormSubmit](https://formsubmit.co/)

## 📸 Screenshots

### Desktop View
![Desktop View](https://i.postimg.cc/kXCzVhGw/Macbook-Air-localhost.png)

### Mobile View
![Mobile View](https://i.postimg.cc/kXCzVhGw/Macbook-Air-localhost.png)

---

<div align="center">

## ⭐ Star this repository if it helped you!

**Built with ❤️ by Tanvir Islam**

[⬆ Back to Top](#-tanvir-islam--portfolio-website)

</div>
