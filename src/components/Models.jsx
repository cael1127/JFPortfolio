import React from 'react';
import ThreeViewer from './ThreeViewer';
import ExplodedAssembly from './ExplodedAssembly';

const Models = () => {
  return (
    <div className="min-h-screen text-gray-900" style={{background: 'transparent'}}>
      <div className="container mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold">Interactive 3D Models</h1>
          <a
            href="https://sketchfab.com/feed"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-primary hover:text-secondary"
          >
            Explore more models
          </a>
        </div>

        <p className="text-gray-300 mb-6 max-w-3xl">
          Below are embedded 3D models you can rotate, zoom, and inspect. We'll swap these with
          portfolio-specific assemblies or parts. These embeds are mobile friendly and support
          full-screen viewing.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-ghost border border-primary/20 rounded-xl overflow-hidden">
            <div className="p-4">
              <h3 className="font-semibold mb-2">Local 3D Viewer (Placeholder)</h3>
              <p className="text-gray-600 text-sm mb-4">This viewer runs fully in the browser with orbit controls.</p>
              <ThreeViewer />
            </div>
          </div>

          <div className="bg-ghost border border-primary/20 rounded-xl overflow-hidden">
            <div className="p-4">
              <h3 className="font-semibold mb-2">Exploded Assembly Demo</h3>
              <p className="text-gray-600 text-sm mb-4">Showcase part relationships and motion planning.</p>
              <ExplodedAssembly />
            </div>
          </div>

          <div className="bg-ghost border border-primary/20 rounded-xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                title="3D Model 1"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking="true"
                execution-while-out-of-viewport="true"
                execution-while-not-rendered="true"
                web-share="true"
                src="https://sketchfab.com/models/7w7pAfrMBg8XkXjaYvQz7fJ2K3NB/embed"
              />
            </div>
            <div className="p-4 border-t border-primary/10">
              <h3 className="font-semibold">Sample Mechanical Assembly</h3>
              <p className="text-gray-600 text-sm">Pan, rotate, and zoom to explore geometry.</p>
            </div>
          </div>

          <div className="bg-ghost border border-primary/20 rounded-xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                title="3D Model 2"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking="true"
                execution-while-out-of-viewport="true"
                execution-while-not-rendered="true"
                web-share="true"
                src="https://sketchfab.com/models/3w3yG6S4gU6v6yqvMZ7m3gXqJgkK/embed"
              />
            </div>
            <div className="p-4 border-t border-primary/10">
              <h3 className="font-semibold">Precision Part</h3>
              <p className="text-gray-600 text-sm">Replace with your own CAD export.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-gray-400 text-sm">
          Note: For local CAD, we can integrate `@react-three/fiber` and `@react-three/drei` to load GLTF/GLB
          exports, add section cuts, orbit controls, and annotations. Embeds shown here require no additional
          dependencies and are quick to deploy.
        </div>
      </div>
    </div>
  );
};

export default Models;


