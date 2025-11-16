# Justis Findley – Mechanical Engineering Portfolio

A modern, responsive portfolio for showcasing mechanical engineering projects, CAD/FEA skills, certifications, and interactive 3D models.

## Features

- **Modern Design** - Clean dark theme with Justis' blue/aqua brand palette
- **Portfolio & Detail Pages** - Chevelle, Yacht Restoration, Slot Machine, Torque Plate
- **Interactive 3D Models** - STL file support with local WebGL viewer (Three.js)
- **Resume Page** - Embedded PDF viewer and quick download
- **Responsive Design** - Optimized for all devices and screen sizes

## Technologies Used

### Frontend
- **React (CRA)**
- **Tailwind CSS**
- **JavaScript ES6+**
- **Three.js** via **@react-three/fiber** and **@react-three/drei** (3D rendering)
- **STLLoader** from Three.js examples (STL file support)

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
│  │  ├── Models.jsx                # STL model viewers
│  │  ├── ThreeViewer.jsx           # @react-three/fiber viewer component
│  │  ├── STLModel.jsx              # STL file loader component
│  │  └── projects/
│  │     ├── ChevelleProject.jsx
│  │     ├── BoatProject.jsx
│  │     ├── SlotMachineProject.jsx
│  │     └── TorquePlateProject.jsx
│  └── index.js
├── public/
│  ├── index.html
│  ├── JustisFindley_Resume-2025.pdf    # Resume PDF file for Resume page
│  └── *.stl                        # Place STL model files here
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

- Projects: Chevelle Restoration, 30 ft Yacht Restoration, Slot Machine Restoration, Torque Plate
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

The portfolio supports interactive STL (Stereolithography) 3D models loaded directly in the browser using Three.js.

### Components

- **STLModel.jsx** - Loads and displays STL files using Three.js STLLoader
- **ThreeViewer.jsx** - Canvas wrapper with lighting, camera controls, and stage preset
- **Models.jsx** - Main page component that displays multiple STL models

### Adding STL Models

1. Place your STL files in the `public/` directory (e.g., `public/model1.stl`)
2. Update the `stlModels` array in `src/components/Models.jsx`:
   ```javascript
   const stlModels = [
     {
       path: '/model1.stl',  // Path relative to public directory
       title: 'Model Name',
       description: 'Model description',
       color: '#006f9f',    // Material color (hex)
     },
   ];
   ```

### Features

- Automatic model centering and scaling
- Interactive orbit controls (rotate, zoom, pan)
- Professional lighting with shadows
- Responsive design for all screen sizes
- Customizable material colors

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

### Adding 3D Models
1. Export your CAD models as STL files
2. Place STL files in the `public/` directory
3. Update the `stlModels` array in `src/components/Models.jsx` with your model paths and metadata

### Using Separate Parts for Animation
To create an "implode" animation with separate parts (instead of duplicating the whole model):

1. **Export Separate STL Files**: In your CAD software (SolidWorks, Fusion 360, etc.), export each component as a separate STL file:
   - Example: `BathroomRack-Part1.stl`, `BathroomRack-Part2.stl`, etc.
   - Place all part files in the `public/` directory

2. **Update the Project Component**: In your project component (e.g., `BathroomRackProject.jsx`), update the `AnimatedSTLModel` component:
   ```jsx
   <AnimatedSTLModel 
     parts={[
       {
         path: '/BathroomRack-Part1.stl',
         color: '#006f9f',
         finalPosition: [0, 0, 0],  // Final assembly position
         initialOffset: [1.5, 0, 0], // [x, y, z] starting offset
         animationDelay: 0
       },
       {
         path: '/BathroomRack-Part2.stl',
         color: '#2ca8bb',
         finalPosition: [0, 0, 0],
         initialOffset: [-1.5, 0, 0],
         animationDelay: 0.1  // Stagger animation start
       },
       // Add more parts...
     ]}
     animationDuration={2.0}
   />
   ```

3. **Part Configuration Options**:
   - `path`: Path to the STL file (relative to `public/`)
   - `color`: Hex color code for the part
   - `finalPosition`: `[x, y, z]` array - where the part ends up in the assembly
   - `initialOffset`: `[x, y, z]` array - starting position offset from final position
   - `animationDelay`: Delay in seconds before this part starts animating
   - `animationDuration`: How long the animation takes (in seconds)

**Note**: If `parts` is `null` or empty, the component falls back to the single-model mode (duplicating the whole model).

### Customizing Styles
- Tailwind tokens in `tailwind.config.js`
- Component styles via Tailwind classes
- 3D model colors can be customized via the `color` property in the model configuration

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
