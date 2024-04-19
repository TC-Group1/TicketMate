import React, { useEffect } from 'react';
import { useThree, Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const Logo = () => {
  const { scene } = useThree();

  useEffect(() => {
    const loader = new GLTFLoader(); // Use GLTFLoader to load glb model

    loader.load('/3d-models/logo.glb', (gltf) => {
      const model = gltf.scene;
      
      // Set up shadows for each mesh in the model
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true; // Enable casting shadows
          child.receiveShadow = true; // Enable receiving shadows
        }
      });

      scene.add(model);
    }, undefined, (error) => {
      console.error('Error loading GLTF model:', error);
    });

    // Set up lighting for shadows
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(-4, 3, 6); // Position of the light
    light.castShadow = true; // Enable casting shadows from this light
    scene.add(light);

    // Set background color
    scene.background = new THREE.Color(0xffffff); // Use THREE.Color to set background color
    
    return () => {
      scene.children = scene.children.filter(child => child.type !== 'Group');
    };
  }, [scene]); // Remove THREE from dependencies

  return null;
};

const ThreeCanvasWithLogo = () => (
  <div className="relative w-10">
    <Canvas className="absolute top-0 left-0 w-22 h-22" shadows>
      {/* Enable shadows in the Canvas component */}
      <Logo />
    </Canvas>
  </div>
);

export default ThreeCanvasWithLogo;
