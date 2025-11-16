import React, { useMemo, useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import * as THREE from 'three';

// Component for a single animated part
const AnimatedPart = ({ 
  modelPath, 
  color = '#006f9f', 
  scale = 1,
  finalPosition = [0, 0, 0],
  initialOffset = null, // Can be [x, y, z] array or THREE.Vector3
  animationDuration = 2.0,
  animationDelay = 0,
  startTime
}) => {
  const geometry = useLoader(STLLoader, modelPath);
  const meshRef = useRef();
  
  // Convert initialOffset to Vector3 if it's an array
  const initialOffsetRef = useRef(
    (() => {
      if (!initialOffset) return new THREE.Vector3(0, 0, 0);
      if (Array.isArray(initialOffset)) {
        return new THREE.Vector3(initialOffset[0], initialOffset[1], initialOffset[2]);
      }
      return initialOffset instanceof THREE.Vector3 ? initialOffset : new THREE.Vector3(0, 0, 0);
    })()
  );

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

  // Animation loop
  useFrame(() => {
    if (!meshRef.current) return;
    
    const elapsed = (Date.now() - startTime.current) / 1000 - animationDelay;
    const progress = Math.max(0, Math.min(elapsed / animationDuration, 1));
    
    // Easing function for smooth animation (ease-out)
    const easedProgress = 1 - Math.pow(1 - progress, 3);

    // Calculate current position (lerp from initial offset to final position)
    const currentOffset = initialOffsetRef.current.clone().multiplyScalar(1 - easedProgress);
    meshRef.current.position.set(
      finalPosition[0] + currentOffset.x,
      finalPosition[1] + currentOffset.y,
      finalPosition[2] + currentOffset.z
    );
    
    // Fade in effect
    if (meshRef.current.material) {
      meshRef.current.material.opacity = Math.min(1, easedProgress + 0.3);
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={centeredGeometry}
      position={[
        finalPosition[0] + initialOffsetRef.current.x,
        finalPosition[1] + initialOffsetRef.current.y,
        finalPosition[2] + initialOffsetRef.current.z
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
  );
};

// Main component that supports both single model (fallback) and multiple parts
const AnimatedSTLModel = ({ 
  modelPath, // Single model path (fallback mode)
  parts = null, // Array of part objects: [{ path, color, finalPosition, initialOffset, animationDelay }]
  color = '#006f9f', 
  scale = 1, 
  position = [0, 0, 0],
  animationDuration = 2.0,
  separationDistance = 1.5,
  numParts = 6
}) => {
  const startTime = useRef(Date.now());

  // Reset animation when component mounts or parts change
  useEffect(() => {
    startTime.current = Date.now();
  }, [parts, modelPath]);

  // If parts array is provided, use multi-part mode
  if (parts && Array.isArray(parts) && parts.length > 0) {
    return (
      <group>
        {parts.map((part, index) => (
          <AnimatedPart
            key={index}
            modelPath={part.path}
            color={part.color || color}
            scale={scale}
            finalPosition={part.finalPosition || position}
            initialOffset={part.initialOffset || null}
            animationDuration={part.animationDuration || animationDuration}
            animationDelay={part.animationDelay || (index * 0.1)} // Stagger animations
            startTime={startTime}
          />
        ))}
      </group>
    );
  }

  // Fallback: Single model with duplicate parts (original behavior)
  const geometry = useLoader(STLLoader, modelPath);
  const partsRef = useRef([]);

  // Compute bounding box to center the model
  const centeredGeometry = useMemo(() => {
    geometry.computeBoundingBox();
    const boundingBox = geometry.boundingBox;
    const center = new THREE.Vector3();
    boundingBox.getCenter(center);
    
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
    const targetSize = 2;
    return (targetSize / maxDim) * scale;
  }, [centeredGeometry, scale]);

  // Generate initial offsets for parts
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

  // Animation loop for fallback mode
  useFrame(() => {
    const elapsed = (Date.now() - startTime.current) / 1000;
    const progress = Math.min(elapsed / animationDuration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);

    offsets.forEach((initialOffset, index) => {
      if (partsRef.current[index]) {
        const currentOffset = initialOffset.clone().multiplyScalar(1 - easedProgress);
        partsRef.current[index].position.set(
          position[0] + currentOffset.x,
          position[1] + currentOffset.y,
          position[2] + currentOffset.z
        );
        
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
