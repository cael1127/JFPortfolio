import React from 'react';

const BoatProject = () => {
  return (
    <div className="min-h-screen text-gray-900" style={{background: 'transparent'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-3">
            30‑ft Boat Restoration
          </h1>
          <p className="text-xl text-gray-600 font-medium">Mar 2021 — May 2022</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Overview</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed text-lg">
              <li>Restored seaworthiness; verified systems and safety equipment.</li>
              <li>Fabricated custom brackets; reduced BOM cost and turnaround.</li>
              <li>Coordinated vendors and materials; managed critical path.</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {['Fabrication','Bracket Design','Fasteners','Marine'].map((t) => (
                <span key={t} className="bg-primary/10 text-primary font-semibold border border-primary/20 text-sm px-4 py-2 rounded-full">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Placeholder for boat photos */}
            <div className="relative group border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center h-80 bg-gray-50 hover:border-primary/50 transition-colors duration-300">
              <div className="text-center text-gray-500">
                <svg className="mx-auto h-16 w-16 text-gray-400 group-hover:text-primary transition-colors" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="mt-4 text-base font-semibold">Boat restoration photos</p>
                <p className="text-sm text-gray-400 mt-2">Add boat-*.jpg files to public/ folder</p>
              </div>
            </div>
            
            {/* Placeholder for additional photos */}
            <div className="relative group border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center h-80 bg-gray-50 hover:border-primary/50 transition-colors duration-300">
              <div className="text-center text-gray-500">
                <svg className="mx-auto h-16 w-16 text-gray-400 group-hover:text-primary transition-colors" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="mt-4 text-base font-semibold">Additional photos</p>
                <p className="text-sm text-gray-400 mt-2">Add more boat-*.jpg files</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoatProject;


