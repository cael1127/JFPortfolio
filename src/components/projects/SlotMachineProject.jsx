import React from 'react';

const SlotMachineProject = () => {
  const slotImages = [
    '/SLOT1.jpg',
    '/SLOT2.jpg',
    '/SLOT3.jpg',
    '/SLOT4.jpg',
    '/slotpic.JPEG'
  ];

  return (
    <div className="min-h-screen text-gray-900" style={{background: 'transparent'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-3 pb-2 break-words leading-[1.4]">
            Slot Machine Restoration
          </h1>
          <p className="text-xl text-gray-600 font-medium break-words">Jan 2024 — Nov 2024</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 pb-1 text-gray-900 break-words leading-[1.3]">Overview</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed text-lg pl-2 pb-2">
              <li className="break-words">Rewrote control system with Arduino, replacing a legacy onboard computer.</li>
              <li className="break-words">Reverse‑engineered wiring and control logic.</li>
              <li className="break-words">Restored core functions and reliability.</li>
            </ul>
          </div>
          <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 pb-1 text-gray-900 break-words leading-[1.3]">Skills</h2>
            <div className="flex flex-wrap gap-3 pb-2">
              {['Arduino','Embedded','Reverse Engineering','Soldering'].map((t) => (
                <span key={t} className="bg-primary/10 text-primary font-semibold border border-primary/20 text-sm px-4 py-2 rounded-full break-words">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-8 pb-1 text-gray-900 break-words leading-[1.3]">Gallery</h2>
          
          {/* Video Section */}
          <div className="mb-8 pb-2">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 break-words">Restoration Video</h3>
            <div className="relative group overflow-hidden rounded-xl">
              <video 
                src="/slotvid.MP4" 
                controls
                preload="metadata"
                className="w-full h-80 md:h-96 object-contain rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-100"
                poster="/slotpic.JPEG"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg break-words">
                Restoration Video
              </div>
            </div>
          </div>

          {/* Images Grid */}
          <div className="pb-2">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 break-words">Restoration Photos</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {slotImages.map((img, idx) => (
                <div key={idx} className="relative group overflow-hidden rounded-xl bg-gray-100 aspect-square">
                  <img 
                    src={img} 
                    alt={`Slot machine restoration ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end justify-center pb-2">
                    <span className="text-white text-xs font-semibold px-1 break-words">
                      Photo {idx + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotMachineProject;
