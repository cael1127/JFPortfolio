import React, { Suspense } from 'react';
import AnimatedSTLModel from '../AnimatedSTLModel';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

const BathroomRackProject = () => {
  return (
    <div className="min-h-screen text-gray-900" style={{background: 'transparent'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Back Button */}
        <button
          onClick={() => window.location.hash = '#/portfolio'}
          className="mb-6 group inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold transition-colors"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </button>

        {/* Header */}
        <div className="mb-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-3 pb-2 break-words leading-[1.4]">
                Bathroom Rack Design
              </h1>
          <p className="text-xl text-gray-600 font-medium break-words">CAD Design Project</p>
        </div>

        {/* Overview and Skills */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 pb-1 text-gray-900 break-words leading-[1.3]">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4 break-words">
              A functional and elegant bathroom rack design featuring modern aesthetics and practical storage solutions. 
              This design focuses on maximizing space efficiency while maintaining a clean, contemporary look.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed text-lg pl-2 pb-2">
              <li className="break-words">Optimized for standard bathroom dimensions</li>
              <li className="break-words">Modular design for easy installation</li>
              <li className="break-words">Durable materials suitable for humid environments</li>
              <li className="break-words">Ergonomic considerations for user accessibility</li>
            </ul>
          </div>
          <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 pb-1 text-gray-900 break-words leading-[1.3]">Skills & Tools</h2>
            <div className="flex flex-wrap gap-3 pb-2">
              {['CAD Design', '3D Modeling', 'Product Design', 'SolidWorks', 'Fusion 360', 'STL Export'].map((t) => (
                <span key={t} className="bg-primary/10 text-primary font-semibold border border-primary/20 text-sm px-4 py-2 rounded-full break-words">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 3D Model Viewer with Implode Animation */}
        <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-1 text-gray-900 break-words leading-[1.3]">3D Model</h2>
          <p className="text-gray-600 mb-6 leading-relaxed break-words">
            Watch the parts implode together to form the complete assembly. Rotate, zoom, and explore the detailed design.
          </p>
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="w-full h-[600px] bg-gray-800 rounded-xl overflow-hidden">
              <Canvas shadows dpr={[1, 2]} camera={{ position: [2.5, 2.5, 2.5], fov: 50 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
                <Suspense fallback={null}>
                  <Stage preset="rembrandt" intensity={1} environment="city">
                    <AnimatedSTLModel 
                      parts={null}
                      // To use separate parts, uncomment and update the parts array below:
                      // parts={[
                      //   {
                      //     path: '/BathroomRack-Part1.stl',
                      //     color: '#006f9f',
                      //     finalPosition: [0, 0, 0],
                      //     initialOffset: [1.5, 0, 0], // [x, y, z] offset from final position
                      //     animationDelay: 0
                      //   },
                      //   {
                      //     path: '/BathroomRack-Part2.stl',
                      //     color: '#2ca8bb',
                      //     finalPosition: [0, 0, 0],
                      //     initialOffset: [-1.5, 0, 0],
                      //     animationDelay: 0.1
                      //   },
                      //   // Add more parts as needed...
                      // ]}
                      // Fallback: single model mode (current behavior)
                      modelPath="/BathRoom Rack v6.stl"
                      color="#006f9f"
                      scale={1}
                      animationDuration={2.0}
                      separationDistance={1.2}
                      numParts={8}
                    />
                  </Stage>
                </Suspense>
                <OrbitControls enableDamping makeDefault />
              </Canvas>
            </div>
          </div>
          <div className="mt-6 p-4 pb-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800 break-words pb-2">
              <strong>Note:</strong> To use separate parts animation, export each component of the bathroom rack as a separate STL file 
              (e.g., <code className="bg-blue-100 px-1 rounded">BathroomRack-Part1.stl</code>, <code className="bg-blue-100 px-1 rounded">BathroomRack-Part2.stl</code>, etc.) 
              and update the <code className="bg-blue-100 px-1 rounded">parts</code> array in <code className="bg-blue-100 px-1 rounded">BathroomRackProject.jsx</code>. 
              Each part will animate independently from its separated position to the final assembly position.
            </p>
          </div>
        </div>

        {/* Documents Section */}
        <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-1 text-gray-900 break-words leading-[1.3]">Project Documents</h2>
          <p className="text-gray-600 mb-6 leading-relaxed break-words">
            Download the complete project documentation including design presentation and detailed report.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {/* PowerPoint Download */}
            <a
              href="/BathroomRack-Presentation.pptx"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-primary to-secondary hover:from-secondary hover:to-accent text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                    <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">Design Presentation</h3>
                  <p className="text-white/90 text-sm">PowerPoint presentation with design concepts, renderings, and specifications</p>
                  <div className="mt-3 flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    Download PPTX
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            {/* Word Document Download */}
            <a
              href="/BathroomRack-Report.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-secondary to-accent hover:from-accent hover:to-primary text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                    <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">Project Report</h3>
                  <p className="text-white/90 text-sm">Detailed Word document with design process, analysis, and technical specifications</p>
                  <div className="mt-3 flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    Download DOCX
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Design Details */}
        <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-1 text-gray-900 break-words leading-[1.3]">Design Details</h2>
          <div className="grid md:grid-cols-2 gap-6 pb-2">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 break-words">Key Features</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed pl-2">
                <li className="break-words">Space-efficient vertical design</li>
                <li className="break-words">Multiple storage compartments</li>
                <li className="break-words">Easy-to-clean surfaces</li>
                <li className="break-words">Wall-mounted installation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 break-words">Technical Specifications</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed pl-2">
                <li className="break-words">Material: Stainless steel / ABS plastic</li>
                <li className="break-words">Mounting: Wall-mounted with standard hardware</li>
                <li className="break-words">Weight capacity: Designed for standard bathroom items</li>
                <li className="break-words">Dimensions: Optimized for standard bathroom spaces</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BathroomRackProject;

