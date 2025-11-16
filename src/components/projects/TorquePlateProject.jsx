import React from 'react';

const TorquePlateProject = () => {
  return (
    <div className="min-h-screen text-gray-900" style={{background: 'transparent'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-3">
            Torque Plate Project
          </h1>
          <p className="text-xl text-gray-600 font-medium">Sep 2025 — Present</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Overview</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed text-lg">
              <li>Collaborated to manufacture a torque plate end‑to‑end.</li>
              <li>Produced a process report with measurements and lessons.</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {['Manufacturing','Metrology','Teamwork','Documentation'].map((t) => (
                <span key={t} className="bg-primary/10 text-primary font-semibold border border-primary/20 text-sm px-4 py-2 rounded-full">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Gallery</h2>
          <p className="text-gray-600 text-lg">Add photos in public/ (e.g., torque-*.jpg) and reference them.</p>
        </div>
      </div>
    </div>
  );
};

export default TorquePlateProject;


