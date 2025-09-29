import React from 'react';

const BoatProject = () => {
  return (
    <div className="min-h-screen text-gray-900" style={{background: 'transparent'}}>
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-10">
        <h1 className="text-3xl font-bold mb-2">30‑ft boat restoration</h1>
        <p className="text-gray-600 mb-6">Mar 2021 — May 2022</p>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <div className="md:col-span-2 bg-ghost p-4 sm:p-6 rounded-xl border border-primary/20">
            <h2 className="text-xl font-semibold mb-3">Overview</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
              <li>Restored seaworthiness; verified systems and safety equipment.</li>
              <li>Fabricated custom brackets; reduced BOM cost and turnaround.</li>
              <li>Coordinated vendors and materials; managed critical path.</li>
            </ul>
          </div>
          <div className="bg-ghost p-4 sm:p-6 rounded-xl border border-primary/20">
            <h2 className="text-xl font-semibold mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['Fabrication','Bracket Design','Fasteners','Marine'].map((t) => (
                <span key={t} className="bg-primary/10 text-gray-800 border border-primary/20 text-xs px-2 py-1 rounded">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-ghost p-4 sm:p-6 rounded-xl border border-primary/20">
          <h2 className="text-xl font-semibold mb-3">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Placeholder for boat photos */}
            <div className="relative group border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-64 bg-gray-50">
              <div className="text-center text-gray-500">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="mt-2 text-sm">Boat restoration photos</p>
                <p className="text-xs text-gray-400 mt-1">Add boat-*.jpg files to public/ folder</p>
              </div>
            </div>
            
            {/* Placeholder for additional photos */}
            <div className="relative group border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-64 bg-gray-50">
              <div className="text-center text-gray-500">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="mt-2 text-sm">Additional photos</p>
                <p className="text-xs text-gray-400 mt-1">Add more boat-*.jpg files</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoatProject;


