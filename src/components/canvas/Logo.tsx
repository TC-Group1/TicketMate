import React, { useEffect, useRef } from 'react';
import { useThree, Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

const Logo = () => {
  const { scene, camera } = useThree();
  const modelRef = useRef<THREE.Group>();

  // Load the GLTF model
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('/3d-models/logo.glb', (gltf) => {
      const model = gltf.scene as THREE.Group; // Cast to THREE.Group
      model.scale.set(7, 7, 7); // Adjust the scaling factor as needed
      model.position.set(-4, 7, 0); // Adjust the initial position
      model.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      scene.add(model);
      modelRef.current = model; // Store a reference to the model
    }, undefined, (error) => {
      console.error('Error loading GLTF model:', error);
    });

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(-4, 3, 6);
    light.castShadow = true;
    scene.add(light);

    scene.background = new THREE.Color(0xffffff);

    return () => {
      // Remove the loaded model when the component unmounts
      if (modelRef.current) {
        scene.remove(modelRef.current);
      }
    };
  }, [scene]);

  return null;
};

const ThreeCanvasWithLogo = () => (
  <div className="relative w-40">
    <Canvas className="absolute top-0 left-0 w-full h-full" shadows camera={{ position: [0, 0, 10] }}>
      <Logo />
      <OrbitControls />
    </Canvas>
  </div>
);

export default ThreeCanvasWithLogo;
