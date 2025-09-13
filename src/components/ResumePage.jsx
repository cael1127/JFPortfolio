import React from 'react';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Resume</h1>
        <p className="text-gray-300 mb-4">Download a copy or view inline below.</p>
        <div className="flex gap-3 mb-6">
          <a href="/Justis-Findley-Resume.pdf" target="_blank" rel="noreferrer" className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors">Download PDF</a>
          <a href="https://www.linkedin.com/in/Justis-Findley" target="_blank" rel="noreferrer" className="bg-gray-800 border border-gray-700 hover:bg-gray-700 text-ghost px-4 py-2 rounded-lg transition-colors">LinkedIn</a>
        </div>
        <div className="bg-gray-100 border border-gray-300 rounded-xl overflow-hidden">
          <object data="/Justis-Findley-Resume.pdf" type="application/pdf" className="w-full h-[80vh]">
            <embed src="/Justis-Findley-Resume.pdf" type="application/pdf" className="w-full h-[80vh]" />
            <div className="p-6 text-gray-700">
              <p>PDF preview isn’t available in this browser. You can download it here:</p>
              <a href="/Justis-Findley-Resume.pdf" className="text-primary underline">Download Resume</a>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;


