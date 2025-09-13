import React from 'react';

const TorquePlateProject = () => {
  return (
    <div className="min-h-screen text-gray-900" style={{background: 'transparent'}}>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2">Torque plate project</h1>
        <p className="text-gray-600 mb-6">Sep 2025 — present</p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 bg-ghost p-6 rounded-xl border border-primary/20">
            <h2 className="text-xl font-semibold mb-3">Overview</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
              <li>Collaborated to manufacture a torque plate end‑to‑end.</li>
              <li>Produced a process report with measurements and lessons.</li>
            </ul>
          </div>
          <div className="bg-ghost p-6 rounded-xl border border-primary/20">
            <h2 className="text-xl font-semibold mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['Manufacturing','Metrology','Teamwork','Documentation'].map((t) => (
                <span key={t} className="bg-primary/10 text-gray-800 border border-primary/20 text-xs px-2 py-1 rounded">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-ghost p-6 rounded-xl border border-primary/20">
          <h2 className="text-xl font-semibold mb-3">Gallery</h2>
          <p className="text-gray-600">Add photos in public/ (e.g., torque-*.jpg) and reference them.</p>
        </div>
      </div>
    </div>
  );
};

export default TorquePlateProject;


