import React, { Suspense } from 'react';
import STLModel from '../STLModel';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

const JeepVisorProject = () => {
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-3 break-words">
            Jeep Visor Support
          </h1>
          <p className="text-xl text-gray-600 font-medium break-words">Custom Automotive Fabrication Project</p>
        </div>

        {/* Overview and Skills */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 break-words">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4 break-words">
              Designed and fabricated a custom visor support system incorporating Jeep visor components. 
              This project demonstrates custom automotive fabrication skills, problem-solving, and attention to detail in 
              creating functional aftermarket solutions.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed text-lg pl-2 pb-2">
              <li className="break-words">Custom bracket design and fabrication</li>
              <li className="break-words">Integration of Jeep visor components</li>
              <li className="break-words">Precision measurement and fitment</li>
              <li className="break-words">Material selection for durability and aesthetics</li>
            </ul>
          </div>
          <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 break-words">Skills & Tools</h2>
            <div className="flex flex-wrap gap-3 pb-2">
              {['Fabrication', 'Welding', 'Custom Parts', 'CAD Design', 'Measurement', 'Automotive'].map((t) => (
                <span key={t} className="bg-primary/10 text-primary font-semibold border border-primary/20 text-sm px-4 py-2 rounded-full break-words">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 3D Model Section */}
        <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 break-words">3D Model</h2>
          <p className="text-gray-600 mb-6 leading-relaxed break-words">
            Interactive 3D model of the Jeep visor support design. Rotate, zoom, and explore the detailed design.
          </p>
          <div className="w-full h-[500px] bg-gray-800 rounded-xl overflow-hidden pb-2">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [2.5, 2.5, 2.5], fov: 50 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
              <Suspense fallback={null}>
                <Stage preset="rembrandt" intensity={1} environment="city">
                  <STLModel 
                    modelPath="/Jeep_Merior v2.stl"
                    color="#006f9f"
                    scale={1}
                  />
                </Stage>
              </Suspense>
              <OrbitControls enableDamping makeDefault />
            </Canvas>
          </div>
        </div>

        {/* Project Details */}
        <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 break-words">Project Details</h2>
          <div className="grid md:grid-cols-2 gap-6 pb-2">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 break-words">Design & Fabrication</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed pl-2">
                <li className="break-words">Custom bracket design for visor mounting</li>
                <li className="break-words">Precision fitment and alignment</li>
                <li className="break-words">Integration of Jeep visor components</li>
                <li className="break-words">Material selection for strength and appearance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 break-words">Key Features</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed pl-2">
                <li className="break-words">Seamless integration with existing interior</li>
                <li className="break-words">Durable construction for long-term use</li>
                <li className="break-words">Professional finish and appearance</li>
                <li className="break-words">Functional visor support system</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JeepVisorProject;

