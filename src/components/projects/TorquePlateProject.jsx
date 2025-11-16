import React from 'react';

const TorquePlateProject = () => {
  return (
    <div className="min-h-screen text-gray-900" style={{background: 'transparent'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-3 pb-2 break-words leading-[1.4]">
            Torque Plate Project
          </h1>
          <p className="text-xl text-gray-600 font-medium break-words">Sep 2025 — Present</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 pb-1 text-gray-900 break-words leading-[1.3]">Overview</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed text-lg pl-2 pb-2">
              <li className="break-words">Collaborated to manufacture a torque plate end‑to‑end.</li>
              <li className="break-words">Produced a process report with measurements and lessons.</li>
            </ul>
          </div>
          <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 pb-1 text-gray-900 break-words leading-[1.3]">Skills</h2>
            <div className="flex flex-wrap gap-3 pb-2">
              {['Manufacturing','Metrology','Teamwork','Documentation'].map((t) => (
                <span key={t} className="bg-primary/10 text-primary font-semibold border border-primary/20 text-sm px-4 py-2 rounded-full break-words">{t}</span>
              ))}
            </div>
          </div>
        </div>
        {/* Documents Section */}
        <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-1 text-gray-900 break-words leading-[1.3]">Project Documents</h2>
          <p className="text-gray-600 mb-6 leading-relaxed break-words">
            Download the complete project documentation including the manufacturing report.
          </p>
          <div className="grid md:grid-cols-1 gap-6 max-w-2xl pb-2">
            {/* Word Document Download */}
            <a
              href="/lab 1 Manuf.docx"
              download
              className="group bg-gradient-to-br from-primary to-secondary hover:from-secondary hover:to-accent text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                    <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 break-words">Manufacturing Report</h3>
                  <p className="text-white/90 text-sm break-words">Detailed Word document with manufacturing process, procedures, measurements, and lessons learned</p>
                  <div className="mt-3 flex items-center text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    Download DOCX
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-white p-8 pb-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-1 text-gray-900 break-words leading-[1.3]">Gallery</h2>
          <p className="text-gray-600 text-lg break-words pb-2">Add photos in public/ (e.g., torque-*.jpg) and reference them.</p>
        </div>
      </div>
    </div>
  );
};

export default TorquePlateProject;


