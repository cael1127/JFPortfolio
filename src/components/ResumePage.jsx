import React from 'react';

const ResumePage = () => {
  const resumeUrl = '/JustisFindley_Resume-2025.pdf';
  
  return (
    <div className="min-h-screen text-gray-900" style={{background: 'transparent'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4 pb-2 text-center md:text-left leading-[1.4]">
            Resume
          </h1>
          <p className="text-xl text-gray-600 font-medium break-words text-center md:text-left">
            Download a copy or view inline below.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
          <a 
            href={resumeUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="group bg-primary hover:bg-secondary text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 font-semibold flex items-center justify-center gap-2"
            download
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </a>
          <a 
            href="https://www.linkedin.com/in/Justis-Findley" 
            target="_blank" 
            rel="noreferrer" 
            className="group bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-primary px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg font-semibold flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
          <div className="w-full" style={{ height: 'calc(100vh - 300px)', minHeight: '600px' }}>
            <iframe
              src={resumeUrl}
              title="Resume PDF Viewer"
              className="w-full h-full border-0"
              style={{ minHeight: '600px' }}
            />
          </div>
        </div>

        {/* Fallback Message */}
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm break-words">
            Having trouble viewing?{' '}
            <a 
              href={resumeUrl} 
              target="_blank" 
              rel="noreferrer"
              className="text-primary hover:text-secondary font-semibold underline"
            >
              Open PDF in new tab
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;


