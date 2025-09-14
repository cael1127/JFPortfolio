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
          Below are interactive 3D models you can rotate, zoom, and explore. We will replace these
          with examples from the portfolio. They work well on phones and support full‑screen viewing.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-ghost border border-primary/20 rounded-xl overflow-hidden">
            <div className="p-4">
              <h3 className="font-semibold mb-2">Local 3D Viewer (Placeholder)</h3>
              <p className="text-gray-600 text-sm mb-4">This viewer runs in your browser and lets you look around freely.</p>
              <ThreeViewer />
            </div>
          </div>

          <div className="bg-ghost border border-primary/20 rounded-xl overflow-hidden">
            <div className="p-4">
              <h3 className="font-semibold mb-2">Exploded Assembly Demo</h3>
              <p className="text-gray-600 text-sm mb-4">Shows how parts fit together and move apart.</p>
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
              <p className="text-gray-600 text-sm">Pan, rotate, and zoom to explore the shape.</p>
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
              <p className="text-gray-600 text-sm">Replace with your own 3D model export.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-gray-400 text-sm">
          Note: We can also load local 3D files for viewing in the browser and add helpful tools like
          cut‑away views, free camera controls, and callouts. The examples above are simple embeds and
          are quick to set up.
        </div>
      </div>
    </div>
  );
};

export default Models;


