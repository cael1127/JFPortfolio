import React from 'react';

const SlotMachineProject = () => {
  return (
    <div className="min-h-screen text-gray-900" style={{background: 'transparent'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-3">
            Slot Machine Restoration
          </h1>
          <p className="text-xl text-gray-600 font-medium">Jan 2024 — Nov 2024</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Overview</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed text-lg">
              <li>Rewrote control system with Arduino, replacing a legacy onboard computer.</li>
              <li>Reverse‑engineered wiring and control logic.</li>
              <li>Restored core functions and reliability.</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {['Arduino','Embedded','Reverse Engineering','Soldering'].map((t) => (
                <span key={t} className="bg-primary/10 text-primary font-semibold border border-primary/20 text-sm px-4 py-2 rounded-full">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Slot Machine Photo */}
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="/slotpic.JPEG" 
                alt="Slot machine restoration project"
                className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110 bg-gray-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end justify-center pb-4">
                <span className="text-white text-sm font-semibold">
                  Slot Machine Restoration
                </span>
              </div>
            </div>
            
            {/* Slot Machine Video */}
            <div className="relative group overflow-hidden rounded-xl">
              <video 
                src="/slotvid.MP4" 
                controls
                className="w-full h-80 object-contain rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-100"
                poster="/slotpic.JPEG"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
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


