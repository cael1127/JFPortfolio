import React from 'react';

const TorquePlateProject = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2">Torque Plate Project</h1>
        <p className="text-gray-400 mb-6">September 2025 — Present</p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h2 className="text-xl font-semibold mb-3">Overview</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Worked with a team to manufacture a torque plate.</li>
              <li>Produced report describing the full process and learnings.</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h2 className="text-xl font-semibold mb-3">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {['Manufacturing','Metrology','Teamwork','Documentation'].map((t) => (
                <span key={t} className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold mb-3">Gallery</h2>
          <p className="text-gray-400">Add photos here (public/torque-*.jpg) and reference them.</p>
        </div>
      </div>
    </div>
  );
};

export default TorquePlateProject;


