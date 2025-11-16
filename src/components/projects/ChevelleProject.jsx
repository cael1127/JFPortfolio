import React from 'react';

const ChevelleProject = () => {
  // Organize Chevelle images and videos
  const chevImages = [];
  const chevVideos = [];

  // Add CHEV images (1-22) - handle mixed case extensions
  const chevExtMap = {
    1: 'JPG', 2: 'JPG', 3: 'JPG', 4: 'JPG', 11: 'JPG', 12: 'JPG', 13: 'JPG'
  };
  for (let i = 1; i <= 22; i++) {
    const ext = chevExtMap[i] || 'jpg';
    chevImages.push(`/CHEV${i}.${ext}`);
  }

  // Add CHEV videos
  chevVideos.push('/CHEV9.MOV');
  chevVideos.push('/CHEV10.MOV');

  return (
    <div className="min-h-screen text-gray-900" style={{background: 'transparent'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-3 break-words">
            1968 Chevelle Restoration
          </h1>
          <p className="text-xl text-gray-600 font-medium break-words">Aug 2020 — Nov 2022</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 break-words">Overview</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed text-lg pl-2 pb-2">
              <li className="break-words">Rebuilt core systems and fabricated custom parts.</li>
              <li className="break-words">Applied manufacturing and welding best practices.</li>
              <li className="break-words">Delivered on schedule while balancing school and sports.</li>
            </ul>
          </div>
          <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 break-words">Skills</h2>
            <div className="flex flex-wrap gap-3 pb-2">
              {['Fabrication','Welding','Sheet Metal','Measurement'].map((t) => (
                <span key={t} className="bg-primary/10 text-primary font-semibold border border-primary/20 text-sm px-4 py-2 rounded-full break-words">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 break-words">Gallery</h2>
          
          {/* Videos Section */}
          {chevVideos.length > 0 && (
            <div className="mb-8 pb-2">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 break-words">Restoration Videos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {chevVideos.map((video, idx) => (
                  <div key={idx} className="relative group overflow-hidden rounded-xl">
                    <video 
                      src={video} 
                      controls
                      preload="metadata"
                      className="w-full h-80 object-contain rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-100"
                      poster={chevImages[0]}
                    >
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg break-words">
                      Video {idx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Images Grid */}
          <div className="pb-2">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 break-words">Restoration Progress Photos</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {chevImages.map((img, idx) => (
                <div key={idx} className="relative group overflow-hidden rounded-xl bg-gray-100 aspect-square">
                  <img 
                    src={img} 
                    alt={`Chevelle restoration progress ${idx + 1}`}
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

export default ChevelleProject;
