import React from 'react';

const BoatProject = () => {
  return (
    <div className="min-h-screen text-gray-900" style={{background: 'transparent'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-3 break-words">
            30‑ft Yacht Restoration
          </h1>
          <p className="text-xl text-gray-600 font-medium break-words">Mar 2021 — May 2022</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 break-words">Overview</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed text-lg pl-2 pb-2">
              <li className="break-words">Restored seaworthiness; verified systems and safety equipment.</li>
              <li className="break-words">Fabricated custom brackets; reduced BOM cost and turnaround.</li>
              <li className="break-words">Coordinated vendors and materials; managed critical path.</li>
            </ul>
          </div>
          <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 break-words">Skills</h2>
            <div className="flex flex-wrap gap-3 pb-2">
              {['Fabrication','Bracket Design','Fasteners','Marine'].map((t) => (
                <span key={t} className="bg-primary/10 text-primary font-semibold border border-primary/20 text-sm px-4 py-2 rounded-full break-words">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 break-words">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-2">
            <div className="relative group overflow-hidden rounded-xl bg-gray-100 aspect-square">
              <img 
                src="/BOAT1.jpg" 
                alt="Yacht restoration project"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end justify-center pb-4">
                <span className="text-white text-sm font-semibold px-2 break-words">
                  Yacht Restoration
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoatProject;
