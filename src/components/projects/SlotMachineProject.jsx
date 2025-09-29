import React from 'react';

const SlotMachineProject = () => {
  return (
    <div className="min-h-screen text-gray-900" style={{background: 'transparent'}}>
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-10">
        <h1 className="text-3xl font-bold mb-2">Slot machine restoration</h1>
        <p className="text-gray-600 mb-6">Jan 2024 — Nov 2024</p>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <div className="md:col-span-2 bg-ghost p-4 sm:p-6 rounded-xl border border-primary/20">
            <h2 className="text-xl font-semibold mb-3">Overview</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
              <li>Rewrote control system with Arduino, replacing a legacy onboard computer.</li>
              <li>Reverse‑engineered wiring and control logic.</li>
              <li>Restored core functions and reliability.</li>
            </ul>
          </div>
          <div className="bg-ghost p-4 sm:p-6 rounded-xl border border-primary/20">
            <h2 className="text-xl font-semibold mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['Arduino','Embedded','Reverse Engineering','Soldering'].map((t) => (
                <span key={t} className="bg-primary/10 text-gray-800 border border-primary/20 text-xs px-2 py-1 rounded">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-ghost p-4 sm:p-6 rounded-xl border border-primary/20">
          <h2 className="text-xl font-semibold mb-3">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Slot Machine Photo */}
            <div className="relative group">
              <img 
                src="/slotpic.JPEG" 
                alt="Slot machine restoration project"
                className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                  Slot Machine Restoration
                </span>
              </div>
            </div>
            
            {/* Slot Machine Video */}
            <div className="relative group">
              <video 
                src="/slotvid.MP4" 
                controls
                className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                poster="/slotpic.JPEG"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                Restoration Video
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotMachineProject;


