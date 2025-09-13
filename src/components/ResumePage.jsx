import React from 'react';

const ResumePage = () => {
  const resumeUrl = `${process.env.PUBLIC_URL || ''}/IMG_4170.jpg`;
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Resume</h1>
        <p className="text-gray-300 mb-4">Download a copy or view inline below.</p>
        <div className="flex gap-3 mb-6">
          <a href={resumeUrl} target="_blank" rel="noreferrer" className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors" download>
            Download Image
          </a>
          <a href="https://www.linkedin.com/in/Justis-Findley" target="_blank" rel="noreferrer" className="bg-gray-800 border border-gray-700 hover:bg-gray-700 text-ghost px-4 py-2 rounded-lg transition-colors">LinkedIn</a>
        </div>
        <div className="bg-white border border-gray-300 rounded-xl overflow-hidden flex items-center justify-center">
          <img src={resumeUrl} alt="Resume" className="max-h-[80vh] w-auto" />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;


