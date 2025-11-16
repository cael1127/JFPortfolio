import React from 'react';

const MustangRestorationProject = () => {
  const mustangImages = [
    '/MUS1.jpg',
    '/MUST2.jpg',
    '/MUST3.jpg'
  ];

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
            Mustang Restoration
          </h1>
          <p className="text-xl text-gray-600 font-medium break-words">Automotive Restoration Project</p>
        </div>

        {/* Overview and Skills */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 break-words">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4 break-words">
              Comprehensive restoration project for a Mustang, involving custom fabrication, bodywork, and mechanical 
              restoration. This project demonstrates hands-on automotive restoration skills, attention to detail, and 
              problem-solving in bringing a classic vehicle back to life.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed text-lg pl-2 pb-2">
              <li className="break-words">Complete vehicle restoration and refurbishment</li>
              <li className="break-words">Custom fabrication and bodywork</li>
              <li className="break-words">Mechanical system restoration</li>
              <li className="break-words">Paint and finish work</li>
            </ul>
          </div>
          <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 break-words">Skills & Tools</h2>
            <div className="flex flex-wrap gap-3 pb-2">
              {['Fabrication', 'Welding', 'Bodywork', 'Paint', 'Mechanical', 'Restoration'].map((t) => (
                <span key={t} className="bg-primary/10 text-primary font-semibold border border-primary/20 text-sm px-4 py-2 rounded-full break-words">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 break-words">Restoration Gallery</h2>
          <p className="text-gray-600 mb-6 leading-relaxed break-words">
            Photos documenting the Mustang restoration process, showing progress from initial condition through 
            various stages of restoration and custom fabrication work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-2">
            {mustangImages.map((img, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-square">
                <img
                  src={img}
                  alt={`Mustang restoration progress - Photo ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end justify-center pb-4">
                  <span className="text-white text-sm font-semibold px-2 break-words">
                    Restoration Photo {idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 break-words">Project Details</h2>
          <div className="grid md:grid-cols-2 gap-6 pb-2">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 break-words">Restoration Process</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed pl-2">
                <li className="break-words">Complete disassembly and assessment</li>
                <li className="break-words">Body panel repair and replacement</li>
                <li className="break-words">Custom fabrication of missing components</li>
                <li className="break-words">Mechanical system overhaul</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 break-words">Key Achievements</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed pl-2">
                <li className="break-words">Restored vehicle to roadworthy condition</li>
                <li className="break-words">Custom parts fabrication and integration</li>
                <li className="break-words">Professional paint and finish work</li>
                <li className="break-words">Complete mechanical restoration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MustangRestorationProject;

