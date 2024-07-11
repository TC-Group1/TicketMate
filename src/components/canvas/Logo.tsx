
import { FC, useEffect, useRef } from "react";
import { useThree, Canvas } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Group, Mesh, DirectionalLight } from "three";
// import { OrbitControls } from '@react-three/drei';

const Logo: FC = () => {

  const { scene, camera } = useThree();
  const modelRef = useRef<Group>();

  // Load the GLTF model
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/3d-models/logo.glb",
      (gltf) => {

        const model = gltf.scene as Group; // Cast to Group
        model.scale.set(1, 1, 1);
        model.position.set(-2, 1, 0);
        model.traverse((child) => {
          if ((child as Mesh).isMesh) {

            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        scene.add(model);
        modelRef.current = model; // Store a reference to the model
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model:", error);
      }
    );


    const light = new DirectionalLight(0xffffff, 5);

    light.position.set(3, 3, 3);
    light.castShadow = true;
    scene.add(light);

    // scene.background = new THREE.Color(0xffffff);

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

  <div className="max-h-14">
    <Canvas shadows camera={{ position: [0, 0, 5] }} className="block">
      <Logo />
      {/* <OrbitControls /> */}
    </Canvas>
  </div>
);

export default ThreeCanvasWithLogo;
