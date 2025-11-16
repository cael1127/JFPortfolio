import React, { useState, Suspense } from 'react';
import STLModel from '../STLModel';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

const PulleyProject = () => {
  const [selectedVersion, setSelectedVersion] = useState('v10');

  const versions = [
    {
      id: 'v1',
      name: 'Version 1',
      file: '/pully_V1 VW.stl',
      description: 'Initial design concept',
      problems: [
        'Insufficient wall thickness for required load',
        'Belt groove dimensions not optimized',
        'Hub design lacked proper clearance'
      ],
      improvements: [
        'Established baseline geometry',
        'Identified critical design parameters'
      ]
    },
    {
      id: 'v3',
      name: 'Version 3',
      file: '/Pully_V3 vW.stl',
      description: 'Improved geometry and dimensions',
      problems: [
        'Material stress concentrations at hub interface',
        'Belt tracking issues due to groove angle',
        'Weight exceeded target specifications'
      ],
      improvements: [
        'Increased hub strength',
        'Refined groove profile',
        'Optimized material distribution'
      ]
    },
    {
      id: 'v4',
      name: 'Version 4',
      file: '/Pully_V4 v3W.stl',
      description: 'Further optimization and refinement',
      problems: [
        'Manufacturing complexity increased',
        'Tolerance stack-up concerns',
        'Cost exceeded budget constraints'
      ],
      improvements: [
        'Simplified manufacturing features',
        'Improved tolerance control',
        'Cost reduction through design simplification'
      ]
    },
    {
      id: 'v10',
      name: 'Version 10 (Final)',
      file: '/Pully_V10-CF vW.stl',
      description: 'Final optimized design with carbon fiber considerations',
      problems: [],
      improvements: [
        'Optimized for carbon fiber manufacturing',
        'Achieved target weight and strength',
        'Improved belt engagement and tracking',
        'Manufacturing-friendly design',
        'Cost-effective production solution'
      ]
    }
  ];

  const currentVersion = versions.find(v => v.id === selectedVersion) || versions[versions.length - 1];

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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-3">
            Pulley Manufacturing Project
          </h1>
          <p className="text-xl text-gray-600 font-medium">Manufacturing Lab 2 - Design Iterations</p>
        </div>

        {/* Overview and Skills */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              A comprehensive manufacturing project focused on pulley design and production. This project demonstrates 
              iterative design improvement, problem-solving, and hands-on experience with manufacturing processes, quality control, 
              and technical documentation.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed text-lg">
              <li>Iterative design process through multiple versions</li>
              <li>Problem identification and solution development</li>
              <li>Applied manufacturing principles and quality control measures</li>
              <li>Documented complete design evolution and manufacturing process</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Skills & Tools</h2>
            <div className="flex flex-wrap gap-3">
              {['Manufacturing', 'Machining', 'Quality Control', 'CAD', 'Iterative Design', 'Problem Solving'].map((t) => (
                <span key={t} className="bg-primary/10 text-primary font-semibold border border-primary/20 text-sm px-4 py-2 rounded-full">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Version Selection */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Design Iterations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {versions.map((version) => (
              <button
                key={version.id}
                onClick={() => setSelectedVersion(version.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedVersion === version.id
                    ? 'border-primary bg-primary/10 shadow-lg'
                    : 'border-gray-200 hover:border-primary/50 bg-white'
                }`}
              >
                <div className="text-center">
                  <div className={`text-lg font-bold mb-1 ${
                    selectedVersion === version.id ? 'text-primary' : 'text-gray-700'
                  }`}>
                    {version.name}
                  </div>
                  <div className="text-sm text-gray-600">{version.description}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Current Version Details */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* 3D Model Viewer */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">3D Model - {currentVersion.name}</h3>
              <div className="w-full h-[400px] bg-gray-800 rounded-xl overflow-hidden">
                <Canvas shadows dpr={[1, 2]} camera={{ position: [2.5, 2.5, 2.5], fov: 50 }}>
                  <ambientLight intensity={0.6} />
                  <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
                  <Suspense fallback={null}>
                    <Stage preset="rembrandt" intensity={1} environment="city">
                      <STLModel 
                        modelPath={currentVersion.file}
                        color="#006f9f"
                        scale={1}
                      />
                    </Stage>
                  </Suspense>
                  <OrbitControls enableDamping makeDefault />
                </Canvas>
              </div>
            </div>

            {/* Version Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Description</h3>
                <p className="text-gray-700 leading-relaxed">{currentVersion.description}</p>
              </div>

              {currentVersion.problems.length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h3 className="text-lg font-bold mb-3 text-red-900 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Problems Identified
                  </h3>
                  <ul className="list-disc list-inside text-red-800 space-y-1">
                    {currentVersion.problems.map((problem, idx) => (
                      <li key={idx}>{problem}</li>
                    ))}
                  </ul>
                </div>
              )}

              {currentVersion.improvements.length > 0 && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <h3 className="text-lg font-bold mb-3 text-green-900 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Improvements Made
                  </h3>
                  <ul className="list-disc list-inside text-green-800 space-y-1">
                    {currentVersion.improvements.map((improvement, idx) => (
                      <li key={idx}>{improvement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Documents Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Project Documents</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Download the complete project documentation including presentation and detailed manufacturing report.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="/manufacturing lab 2.pptx"
              download
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
                  <h3 className="text-xl font-bold mb-1">Manufacturing Presentation</h3>
                  <p className="text-white/90 text-sm">PowerPoint presentation covering the pulley manufacturing process, design considerations, and results</p>
                  <div className="mt-3 flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    Download PPTX
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="/Lab 2 Manufacturing.docx"
              download
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
                  <h3 className="text-xl font-bold mb-1">Manufacturing Report</h3>
                  <p className="text-white/90 text-sm">Detailed Word document with manufacturing process, procedures, analysis, and technical specifications</p>
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
      </div>
    </div>
  );
};

export default PulleyProject;
