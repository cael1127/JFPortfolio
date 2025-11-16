import React, { useMemo } from 'react';
import { useLoader } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import * as THREE from 'three';

const STLModel = ({ modelPath, color = '#006f9f', scale = 1, position = [0, 0, 0] }) => {
  const geometry = useLoader(STLLoader, modelPath);

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

  return (
    <mesh 
      geometry={centeredGeometry} 
      position={position} 
      scale={[modelScale, modelScale, modelScale]}
      castShadow 
      receiveShadow
    >
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default STLModel;

