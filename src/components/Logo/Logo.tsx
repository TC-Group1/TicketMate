import React, { useEffect } from 'react';
import { useThree, Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Import GLTFLoader
import * as THREE from 'three'; // Import THREE directly

const Logo = () => {
  const { scene } = useThree();

  useEffect(() => {
    const loader = new GLTFLoader(); // Use GLTFLoader to load glb model

    loader.load('/3d-models/logo.glb', (gltf) => {
      scene.add(gltf.scene);
    }, undefined, (error) => {
      console.error('Error loading GLTF model:', error);
    });

    console.log(scene)
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
    <Canvas className="absolute top-0 left-0 w-22 h-22">
      <Logo />
    </Canvas>
  </div>
);

export default ThreeCanvasWithLogo;
