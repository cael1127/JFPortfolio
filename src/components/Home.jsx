import React from 'react';
import AnimatedCard from './AnimatedCard';
import StatStrip from './StatStrip';
import Timeline from './Timeline';

const Home = ({ setCurrentPage }) => {
  

  return (
    <div className="min-h-screen text-gray-900 relative overflow-x-hidden" style={{background: 'transparent'}}>
      {/* Hero Section */}
      <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 relative z-10 snap-section">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatedCard delay={0} direction="down" className="mb-6">
            <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Justis Findley
            </h1>
          </AnimatedCard>
          <AnimatedCard delay={150} direction="down" className="mb-4">
            <p className="text-xl md:text-2xl text-gray-700">
              Mechanical engineer — CAD (SolidWorks/Fusion), FEA, DFM/DFA
            </p>
          </AnimatedCard>
          <AnimatedCard delay={250} direction="down" className="mb-8">
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I deliver manufacturable designs with GD&T, tolerance analysis, and FEA‑backed validation. 
              Explore capabilities, projects, and a concise career timeline.
            </p>
          </AnimatedCard>

          {/* Stat Strip */}
          <div className="mb-12">
            <StatStrip />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('portfolio')}
              className="bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/30 text-lg animate-pulse-slow group relative overflow-hidden"
            >
              <span className="relative z-10">🧰 View Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-16 relative z-10 snap-section">
        <div className="container mx-auto px-4">
          <AnimatedCard delay={0} direction="down" className="mb-12">
            <h2 className="text-3xl font-bold text-center">Core skills</h2>
          </AnimatedCard>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <AnimatedCard delay={200} direction="left" className="text-center hover:scale-105 transition-all duration-300 group cursor-pointer">
              <div className="bg-primary text-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 group-hover:bg-secondary">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📐</span>
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-teal-400 transition-colors">CAD</h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">SolidWorks, Fusion 360, Onshape</p>
            </AnimatedCard>
            <AnimatedCard delay={300} direction="up" className="text-center hover:scale-105 transition-all duration-300 group cursor-pointer">
              <div className="bg-secondary text-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 group-hover:bg-accent">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🧮</span>
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-green-400 transition-colors">Analysis</h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">FEA, CFD, Tolerance Stack-up</p>
            </AnimatedCard>
            <AnimatedCard delay={400} direction="up" className="text-center hover:scale-105 transition-all duration-300 group cursor-pointer">
              <div className="bg-accent text-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 group-hover:bg-secondary">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🏭</span>
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-emerald-400 transition-colors">Manufacturing</h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">CNC, Sheet Metal, DFM/DFA</p>
            </AnimatedCard>
            <AnimatedCard delay={500} direction="right" className="text-center hover:scale-105 transition-all duration-300 group cursor-pointer">
              <div className="bg-primary text-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 group-hover:bg-secondary">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📝</span>
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-teal-400 transition-colors">Documentation</h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Drawings, BOM, ECOs</p>
            </AnimatedCard>
          </div>
        </div>
      </div>

      

      {/* Highlighted Sections */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured work</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <button
            onClick={() => setCurrentPage('portfolio')}
            className="bg-gradient-to-br from-primary to-accent hover:from-secondary hover:to-accent p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/20 text-left"
          >
            <div className="text-2xl mb-3 hover:scale-110 transition-transform duration-300">🛠️</div>
            <h3 className="font-semibold mb-2">Design projects</h3>
            <p className="text-gray-200 text-sm leading-relaxed">Fixtures, enclosures, frames, and more</p>
          </button>
          <button
            onClick={() => setCurrentPage('models')}
            className="bg-gradient-to-br from-secondary to-primary hover:from-accent hover:to-secondary p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 text-left"
          >
            <div className="text-2xl mb-3 hover:scale-110 transition-transform duration-300">🧩</div>
            <h3 className="font-semibold mb-2">Interactive 3D models</h3>
            <p className="text-gray-200 text-sm leading-relaxed">Rotate, zoom, and explore assemblies</p>
          </button>
          
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-center mb-6">Career timeline</h2>
        <div className="max-w-3xl mx-auto">
          <Timeline />
        </div>
      </div>

      
    </div>
  );
};

export default Home; 