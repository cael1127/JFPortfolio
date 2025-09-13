import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Placeholder exploded assembly: three cubes offset on toggle
const Part = ({ color, position }) => (
  <mesh position={position} castShadow receiveShadow>
    <boxGeometry args={[0.6, 0.6, 0.6]} />
    <meshStandardMaterial color={color} />
  </mesh>
);

const ExplodedAssembly = () => {
  return (
    <div className="w-full h-96 rounded-xl overflow-hidden border border-primary/20 bg-ghost">
      <Canvas shadows camera={{ position: [2.5, 2.2, 2.5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
        <Suspense fallback={null}>
          <group>
            <Part color="#006f9f" position={[-0.8, 0, 0]} />
            <Part color="#2ca8bb" position={[0, 0.6, 0]} />
            <Part color="#00d0ff" position={[0.8, 0, 0]} />
          </group>
        </Suspense>
        <OrbitControls enableDamping makeDefault />
      </Canvas>
    </div>
  );
};

export default ExplodedAssembly;


