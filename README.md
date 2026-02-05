# Abaneesh M - Data Analyst Portfolio

🎨 **Elite, Warm, and Modern** portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Glassmorphism Design**: Frosted glass effects with backdrop blur
- **Framer Motion Animations**: Smooth, physics-based interactions
- **3D Tilt Effects**: Interactive skill cards with depth
- **Parallax Scrolling**: Dynamic "DATA ANALYST" floating text
- **Typewriter Effect**: Animated hero subtitle
- **Responsive Design**: Mobile-first approach
- **Web3Forms Integration**: Functional contact form
- **Warm Color Palette**: Amber, burnt orange, and sunset gold accents

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: Web3Forms API

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Extract the ZIP file**
   ```bash
   unzip abaneesh-portfolio.zip
   cd abaneesh-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Web3Forms** (for contact form)
   - Go to [Web3Forms](https://web3forms.com/)
   - Create a free account and get your access key
   - Open `src/components/Contact.jsx`
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your actual key on line 27

4. **Start development server**
   ```bash
   npm run dev
   ```
   - Open [http://localhost:5173](http://localhost:5173) in your browser

5. **Build for production**
   ```bash
   npm run build
   ```
   - Production files will be in the `dist` folder

## 📁 Project Structure

```
abaneesh-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the warm color palette:
```javascript
colors: {
  'dark-charcoal': '#1a1a1a',
  'amber': '#FFBF00',
  'burnt-orange': '#CC5500',
  'sunset-gold': '#FFA500',
}
```

### Content
Update your information in the respective component files:
- **Personal Info**: `src/components/Hero.jsx`
- **Education**: `src/components/About.jsx`
- **Skills**: `src/components/Skills.jsx`
- **Projects**: `src/components/Projects.jsx`
- **Contact**: `src/components/Contact.jsx`

### Profile Photo
Replace the placeholder in `src/components/Hero.jsx` (line 100-110) with your actual photo URL or import.

## 🌐 Deployment

### Deploy to Netlify
1. Build your project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚡ Performance Tips

- Images are optimized with lazy loading
- Animations use GPU acceleration
- Glassmorphism effects use optimized backdrop-blur
- Smooth scrolling enabled globally

## 🔧 Troubleshooting

**Issue**: Animations not working
- **Solution**: Ensure Framer Motion is installed: `npm install framer-motion`

**Issue**: Icons not displaying
- **Solution**: Install Lucide React: `npm install lucide-react`

**Issue**: Contact form not working
- **Solution**: Add your Web3Forms access key in `Contact.jsx`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contact

**Abaneesh M**
- Portfolio: [Abanee.netlify.app](https://Abanee.netlify.app)
- GitHub: [@Abanee](https://github.com/Abanee)
- LinkedIn: [abaneesh-m](https://linkedin.com/in/abaneesh-m)
- Email: abaneeshabanee87@gmail.com

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
