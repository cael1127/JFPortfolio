import React, { useMemo, useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import * as THREE from 'three';

const AnimatedSTLModel = ({ 
  modelPath, 
  color = '#006f9f', 
  scale = 1, 
  position = [0, 0, 0],
  animationDuration = 2.0,
  separationDistance = 1.5,
  numParts = 6
}) => {
  const geometry = useLoader(STLLoader, modelPath);
  const startTime = useRef(Date.now());
  const partsRef = useRef([]);
  const initialOffsets = useRef([]);

  // Compute bounding box to center the model
  const centeredGeometry = useMemo(() => {
    geometry.computeBoundingBox();
    const boundingBox = geometry.boundingBox;
    const center = new THREE.Vector3();
    boundingBox.getCenter(center);
    
    // Create a new geometry centered at origin
    const centeredGeo = geometry.clone();
    centeredGeo.translate(-center.x, -center.y, -center.z);
    
    return centeredGeo;
  }, [geometry]);

  // Calculate scale to fit model nicely in view
  const modelScale = useMemo(() => {
    centeredGeometry.computeBoundingBox();
    const size = new THREE.Vector3();
    centeredGeometry.boundingBox.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    const targetSize = 2; // Target size in scene units
    return (targetSize / maxDim) * scale;
  }, [centeredGeometry, scale]);

  // Generate initial offsets for parts (stored in ref to avoid recalculation)
  const offsets = useMemo(() => {
    return Array.from({ length: numParts }, () => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      return new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta) * separationDistance,
        Math.sin(phi) * Math.sin(theta) * separationDistance,
        Math.cos(phi) * separationDistance
      );
    });
  }, [numParts, separationDistance]);

  useEffect(() => {
    initialOffsets.current = offsets;
    startTime.current = Date.now();
  }, [offsets]);

  // Animation loop
  useFrame(() => {
    const elapsed = (Date.now() - startTime.current) / 1000;
    const progress = Math.min(elapsed / animationDuration, 1);
    
    // Easing function for smooth animation (ease-out)
    const easedProgress = 1 - Math.pow(1 - progress, 3);

    // Update part positions
    initialOffsets.current.forEach((initialOffset, index) => {
      if (partsRef.current[index]) {
        const currentOffset = initialOffset.clone().multiplyScalar(1 - easedProgress);
        partsRef.current[index].position.set(
          position[0] + currentOffset.x,
          position[1] + currentOffset.y,
          position[2] + currentOffset.z
        );
        
        // Fade in effect
        if (partsRef.current[index].material) {
          partsRef.current[index].material.opacity = Math.min(1, easedProgress + 0.3);
        }
      }
    });
  });

  return (
    <group>
      {offsets.map((initialOffset, index) => (
        <mesh
          key={index}
          ref={(el) => {
            if (el) partsRef.current[index] = el;
          }}
          geometry={centeredGeometry}
          position={[
            position[0] + initialOffset.x,
            position[1] + initialOffset.y,
            position[2] + initialOffset.z
          ]}
          scale={[modelScale, modelScale, modelScale]}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial 
            color={color} 
            opacity={0.3}
            transparent
          />
        </mesh>
      ))}
    </group>
  );
};

export default AnimatedSTLModel;

