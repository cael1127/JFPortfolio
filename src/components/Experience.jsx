import React from 'react';

const Experience = () => {
  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <h2 className="text-4xl font-bold mb-8 text-green-400">Experience</h2>
        
        <div className="bg-gradient-to-br from-green-900 via-teal-800 to-cyan-800 p-8 rounded-xl border border-green-800 mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4">Current role</h3>
          <div className="flex items-start gap-4">
            <div className="bg-green-600 p-3 rounded-lg">
              <span className="text-2xl">💼</span>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white">Software Engineer</h4>
              <p className="text-green-400 font-medium">Three Sisters Oyster Company</p>
              <p className="text-gray-400 text-sm">2025 — present</p>
              <p className="text-gray-300 mt-3 leading-relaxed">
                Build tools for aquaculture operations: data capture, logistics, and environmental monitoring.
                Shipped features that improved traceability and cut manual steps.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 via-teal-800 to-cyan-800 p-8 rounded-xl border border-green-800">
          <h3 className="text-2xl font-semibold text-white mb-6">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-800 via-teal-700 to-cyan-700 p-4 rounded-lg border border-green-700 hover:border-green-600 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">☁️</span>
                <div>
                  <h4 className="font-semibold text-white">AWS Certified Developer</h4>
                  <p className="text-gray-400 text-sm">Earned 2024</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-800 via-teal-700 to-cyan-700 p-4 rounded-lg border border-green-700 hover:border-green-600 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h4 className="font-semibold text-white">Google Cloud Professional Data Engineer</h4>
                  <p className="text-gray-400 text-sm">Earned 2024</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-800 via-teal-700 to-cyan-700 p-4 rounded-lg border border-green-700 hover:border-green-600 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <h4 className="font-semibold text-white">CompTIA Security+</h4>
                  <p className="text-gray-400 text-sm">Earned 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 