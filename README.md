# Justis Findley – Mechanical Engineering Portfolio

A modern, responsive portfolio for showcasing mechanical engineering projects, CAD/FEA skills, certifications, and interactive 3D models.

## Features

- **Modern Design** - Clean dark theme with Justis’ blue/aqua brand palette
- **Portfolio & Detail Pages** - Chevelle, Boat Restoration, Slot Machine, Torque Plate
- **Interactive 3D Models** - Sketchfab embeds and local WebGL viewer (Three.js)
- **Resume Page** - Embedded PDF viewer and quick download
- **Responsive Design** - Optimized for all devices and screen sizes

## Technologies Used

### Frontend
- **React (CRA)**
- **Tailwind CSS**
- **JavaScript ES6+**
- **Three.js** via **@react-three/fiber** and **@react-three/drei** (local viewer)

### Backend (optional folder)
- Simple Node utilities for demos; not required for portfolio deployment

## 📁 Project Structure

```
Portfolio/
├── src/
│  ├── App.jsx
│  ├── components/
│  │  ├── Home.jsx
│  │  ├── MEPortfolio.jsx           # Projects, Experience, Certifications
│  │  ├── Models.jsx                # 3D embeds + local viewer
│  │  ├── ThreeViewer.jsx           # @react-three/fiber placeholder viewer
│  │  └── projects/
│  │     ├── ChevelleProject.jsx
│  │     ├── BoatProject.jsx
│  │     ├── SlotMachineProject.jsx
│  │     └── TorquePlateProject.jsx
│  └── index.js
├── public/
│  ├── index.html
│  └── Justis-Findley-Resume.pdf    # Place your resume here for Resume page
├── tailwind.config.js
├── netlify.toml                     # Netlify build + SPA redirects
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

1. Clone
   ```bash
   git clone https://github.com/cael1127/JFPortfolio.git
   cd JFPortfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start dev server
   ```bash
   npm start
   ```

4. Build
   ```bash
   npm run build
   ```

## Portfolio Sections

- Projects: Chevelle Restoration, 30 ft Boat Restoration, Slot Machine Restoration, Torque Plate
- Experience: Port Lavaca Auto Group (Head Porter), Domino’s (Delivery Driver)
- Certifications: Apprenticeship Electrician (exp 05/10/26), NCCER Electrical 1 & 2, ServSafe
- Education: Texas A&M University–Corpus Christi — B.S. Mechanical Engineering (Expected May 2027)

## Brand Color Palette

CSS HEX
```
--bice-blue: #006f9f;
--moonstone: #2ca8bb;
--vivid-sky-blue: #00d0ff;
--celeste: #a1f6ff;
--ghost-white: #fbfbff;
```
Configured in `tailwind.config.js` as `primary`, `secondary`, `accent`, `celeste`, `ghost`.

## 3D Models

- Local Viewer: `src/components/ThreeViewer.jsx` (React Three Fiber)
- Embeds: `src/components/Models.jsx` (replace Sketchfab URLs with your own)

## Netlify Deployment

- Uses `netlify.toml` with SPA redirect and Node 18
- Build command: `npm run build`
- Publish directory: `build`

CLI (after `npm i -g netlify-cli`):
```bash
netlify login
netlify init    # link to site
netlify deploy --build --prod
```

## 🔧 Development

### Adding New Projects
1. Create a new component in `src/components/projects/YourProject.jsx`
2. Link from `MEPortfolio.jsx` with a `setCurrentPage('proj-your')` entry

### Customizing Styles
- Tailwind tokens in `tailwind.config.js`
- Component styles via Tailwind classes

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: JustisFindley@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/Justis-Findley

---

Built for Justis Findley 
