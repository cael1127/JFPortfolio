import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

const Placeholder = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color={'#10b981'} />
  </mesh>
);

const ThreeViewer = ({ children }) => {
  return (
    <div className="w-full h-96 bg-gray-800 rounded-xl overflow-hidden">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [2.5, 2.5, 2.5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
        <Suspense fallback={null}>
          <Stage preset="rembrandt" intensity={1} environment="city">
            {children || <Placeholder />}
          </Stage>
        </Suspense>
        <OrbitControls enableDamping makeDefault />
      </Canvas>
    </div>
  );
};

export default ThreeViewer;


