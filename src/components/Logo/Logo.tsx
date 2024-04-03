import React, { useEffect } from 'react';
import { useThree, Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Logo = () => {
  // Use the useThree hook to access the scene
  const { scene } = useThree();

  // Load the GLB model when the component mounts
  useEffect(() => {
    // Create an instance of GLTFLoader
    const loader = new GLTFLoader();

    // Load the GLB model
    loader.load('/3d-models/logo.glb', (gltf) => {
      // Add the model's scene to the Three.js scene
      scene.add(gltf.scene);
    }, undefined, (error) => {
      console.error('Error loading GLTF model:', error);
    });

    // Cleanup function to remove the model from the scene
    return () => {
      scene.children = scene.children.filter(child => child.type !== 'Group');
    };
  }, [scene]); // useEffect dependency

  // Return null since this component doesn't render anything directly
  return null;
};

// Define a named function that wraps Logo within Canvas
const ThreeCanvasWithLogo = () => (
  <div className="relative w-10">
    <Canvas className="absolute top-0 left-0 w-12 h-12">
      <Logo />
    </Canvas>
  </div>
);

export default ThreeCanvasWithLogo;
