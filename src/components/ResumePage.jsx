import React from 'react';

const ResumePage = () => {
  const resumeUrl = `${process.env.PUBLIC_URL || ''}/IMG_4170.jpg`;
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-10">
        <h1 className="text-3xl font-bold mb-4">Resume</h1>
        <p className="text-gray-600 mb-4">Download a copy or view inline below.</p>
        <div className="flex gap-2 sm:gap-3 mb-6 flex-wrap">
          <a href={resumeUrl} target="_blank" rel="noreferrer" className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors" download>
            Download image
          </a>
          <a href="https://www.linkedin.com/in/Justis-Findley" target="_blank" rel="noreferrer" className="bg-gray-100 border border-gray-200 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-lg transition-colors">LinkedIn</a>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden flex items-center justify-center">
          <img src={resumeUrl} alt="Resume" className="w-full h-auto sm:max-h-[80vh] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;


