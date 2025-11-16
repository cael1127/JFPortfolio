import React from 'react';
import ThreeViewer from './ThreeViewer';
import ExplodedAssembly from './ExplodedAssembly';

const Models = () => {
  // Featured STL model - Bathroom Rack
  const featuredModel = {
    path: '/BathRoom Rack v6.stl',
    title: 'Bathroom Rack',
    description: 'A functional and elegant bathroom rack design featuring modern aesthetics and practical storage solutions. Rotate, zoom, and explore the detailed 3D model.',
    color: '#006f9f',
  };

  // Additional STL models can be added here
  const stlModels = [
    // Add more models here as needed
  ];

  return (
    <div className="min-h-screen text-gray-900" style={{background: 'transparent'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            Interactive 3D Models
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore interactive 3D models loaded directly in your browser using WebGL. 
            Rotate, zoom, and inspect detailed mechanical designs with full camera controls.
          </p>
        </div>

        {/* Featured Model - Bathroom Rack */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 sm:p-12">
              <div className="mb-6">
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Featured Design
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{featuredModel.title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                  {featuredModel.description}
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <ThreeViewer 
                  modelPath={featuredModel.path} 
                  modelColor={featuredModel.color}
                  modelScale={1}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Other Models Section */}
        {(stlModels.length > 0 || true) && (
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Additional Models</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Local 3D Viewer</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">This viewer runs in your browser and lets you look around freely.</p>
                  <ThreeViewer />
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Exploded Assembly Demo</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">Shows how parts fit together and move apart.</p>
                  <ExplodedAssembly />
                </div>
              </div>

              {stlModels.map((model, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{model.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{model.description}</p>
                    <ThreeViewer 
                      modelPath={model.path} 
                      modelColor={model.color}
                      modelScale={1}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h3 className="text-xl font-bold mb-4 text-gray-900">About 3D Model Viewing</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            All models are loaded directly in your browser using Three.js WebGL rendering. 
            You can interact with the models using mouse controls:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li><strong>Rotate:</strong> Click and drag to rotate the model</li>
            <li><strong>Zoom:</strong> Scroll or pinch to zoom in/out</li>
            <li><strong>Pan:</strong> Right-click and drag (or middle mouse button) to pan</li>
          </ul>
          <p className="text-sm text-gray-600">
            To add more STL models, place them in the <code className="bg-gray-100 px-2 py-1 rounded text-primary font-mono">public/</code> directory
            and update the models array in <code className="bg-gray-100 px-2 py-1 rounded text-primary font-mono">src/components/Models.jsx</code>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Models;


