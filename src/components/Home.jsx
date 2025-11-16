import React from 'react';
import AnimatedCard from './AnimatedCard';
import StatStrip from './StatStrip';
import Timeline from './Timeline';

const Home = ({ setCurrentPage }) => {
  

  return (
    <div className="min-h-screen text-gray-900 relative overflow-x-hidden" style={{background: 'transparent'}}>
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 relative z-10 snap-section">
        <div className="text-center max-w-5xl mx-auto">
          <AnimatedCard delay={0} direction="down" className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-[1.4] tracking-tight pb-2">
              Justis Findley
            </h1>
          </AnimatedCard>
          <AnimatedCard delay={150} direction="down" className="mb-6">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 font-medium leading-tight max-w-4xl mx-auto">
              Mechanical Engineer
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
              3D design in SolidWorks and Fusion 360, strength testing, and designs that are easy to manufacture and assemble
            </p>
          </AnimatedCard>
          <AnimatedCard delay={250} direction="down" className="mb-12">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              I create designs you can build, with clear dimensions and tolerances, careful tolerance checks, and strength verification using engineering simulations.
            </p>
          </AnimatedCard>

          {/* Stat Strip */}
          <div className="mb-16">
            <StatStrip />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setCurrentPage('portfolio')}
              className="group relative bg-primary hover:bg-secondary text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Portfolio
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="group relative bg-white hover:bg-gray-50 text-primary border-2 border-primary font-semibold py-4 px-10 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg"
            >
              <span className="relative z-10">Get In Touch</span>
            </button>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-20 lg:py-28 relative z-10 snap-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard delay={0} direction="down" className="mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">Core Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </AnimatedCard>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <AnimatedCard delay={200} direction="left" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                <div className="bg-gradient-to-br from-primary to-secondary text-white w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-900 group-hover:text-primary transition-colors">3D Design</h3>
                <p className="text-gray-600 text-center leading-relaxed">SolidWorks, Fusion 360, and Onshape</p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={300} direction="up" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                <div className="bg-gradient-to-br from-secondary to-accent text-white w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-900 group-hover:text-secondary transition-colors">Engineering Analysis</h3>
                <p className="text-gray-600 text-center leading-relaxed">Structural and fluid simulations, and careful tolerance planning</p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={400} direction="up" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                <div className="bg-gradient-to-br from-accent to-primary text-white w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-900 group-hover:text-accent transition-colors">Manufacturing</h3>
                <p className="text-gray-600 text-center leading-relaxed">Machining, sheet‑metal work, and designs that are easy to build</p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={500} direction="right" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                <div className="bg-gradient-to-br from-primary via-secondary to-accent text-white w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-900 group-hover:text-primary transition-colors">Documentation</h3>
                <p className="text-gray-600 text-center leading-relaxed">Clear drawings, bills of materials, and change tracking</p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>

      

      {/* Highlighted Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <AnimatedCard delay={0} direction="down" className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">Featured Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </AnimatedCard>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <button
            onClick={() => setCurrentPage('portfolio')}
            className="group relative bg-gradient-to-br from-primary via-secondary to-accent p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/30 text-left overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">🛠️</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Design Projects</h3>
              <p className="text-white/90 text-base leading-relaxed">Fixtures, enclosures, frames, and more. Explore detailed project showcases with CAD designs, 3D models, and manufacturing insights.</p>
              <div className="mt-6 flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">
                View Projects
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </button>
          <button
            onClick={() => setCurrentPage('portfolio')}
            className="group relative bg-gradient-to-br from-secondary via-accent to-primary p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-secondary/30 text-left overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">🧩</div>
              <h3 className="text-2xl font-bold mb-3 text-white">3D Models & CAD</h3>
              <p className="text-white/90 text-base leading-relaxed">Interactive 3D models with implode animations, CAD designs, and technical documentation. All integrated into project pages.</p>
              <div className="mt-6 flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">
                View Portfolio
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <AnimatedCard delay={0} direction="down" className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">Career Timeline</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </AnimatedCard>
        <div className="max-w-4xl mx-auto">
          <Timeline />
        </div>
      </div>

      
    </div>
  );
};

export default Home; 