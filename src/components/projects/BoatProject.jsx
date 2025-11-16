import React from 'react';

const BoatProject = () => {
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
            30‑ft Yacht Restoration
          </h1>
          <p className="text-xl text-gray-600 font-medium break-words">Mar 2021 — May 2022</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 pb-1 text-gray-900 break-words leading-[1.3]">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4 break-words">
              Complete restoration of a 30-foot yacht to seaworthy condition. This project involved checking all 
              systems, verifying safety equipment, and fabricating custom brackets to reduce costs. The work required 
              coordinating with multiple vendors and managing the project timeline carefully.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed text-lg pl-2 pb-2">
              <li className="break-words">Restored vessel to seaworthy condition by checking all mechanical systems.</li>
              <li className="break-words">Verified and updated safety equipment to meet marine standards.</li>
              <li className="break-words">Fabricated custom brackets in-house to reduce bill of materials cost.</li>
              <li className="break-words">Coordinated with vendors for materials and parts delivery.</li>
              <li className="break-words">Managed project timeline and critical path to meet deadlines.</li>
            </ul>
          </div>
          <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 pb-1 text-gray-900 break-words leading-[1.3]">Skills & Tools</h2>
            <div className="flex flex-wrap gap-3 pb-2">
              {['Fabrication','Bracket Design','Fasteners','Marine','Project Management'].map((t) => (
                <span key={t} className="bg-primary/10 text-primary font-semibold border border-primary/20 text-sm px-4 py-2 rounded-full break-words">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-1 text-gray-900 break-words leading-[1.3]">Project Details</h2>
          <div className="grid md:grid-cols-2 gap-6 pb-2">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 break-words">Restoration Process</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed pl-2">
                <li className="break-words">Checked engine and propulsion systems</li>
                <li className="break-words">Verified navigation and electrical systems</li>
                <li className="break-words">Tested and updated safety equipment</li>
                <li className="break-words">Inspected hull and structural components</li>
                <li className="break-words">Restored interior and deck areas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 break-words">Cost Savings</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed pl-2">
                <li className="break-words">Designed and fabricated custom brackets in-house</li>
                <li className="break-words">Reduced bill of materials cost significantly</li>
                <li className="break-words">Shortened turnaround time with local fabrication</li>
                <li className="break-words">Coordinated vendor relationships for better pricing</li>
                <li className="break-words">Managed materials efficiently to reduce waste</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-8 pb-1 text-gray-900 break-words leading-[1.3]">Gallery</h2>
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
