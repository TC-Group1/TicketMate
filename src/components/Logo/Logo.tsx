import React, { useEffect } from 'react';
import { useThree } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';



const Logo = () => {
  const { scene } = useThree();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('/3d-models/logo.glb', (gltf: GLTF) => {
      scene.add(gltf.scene);
    }, undefined, (error) => {
      console.error('Error loading GLTF model:', error);
    });

    return () => {
    
      scene.children = scene.children.filter(child => child.type !== 'Group');
    };
  }, [scene]);

  return null; 
};

export default Logo;
