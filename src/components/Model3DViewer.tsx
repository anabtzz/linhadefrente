import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface Model3DProps {
  modelPath: string;
  scale?: number;
  autoRotate?: boolean;
  floatIntensity?: number;
}

const Model = ({ modelPath, scale = 1, autoRotate = true }: { modelPath: string; scale: number; autoRotate: boolean }) => {
  const { scene } = useGLTF(modelPath);
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={meshRef}>
      <primitive object={scene} scale={scale} />
    </group>
  );
};

const Model3DViewer = ({ modelPath, scale = 1, autoRotate = true, floatIntensity = 1 }: Model3DProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#a855f7" />
      <pointLight position={[10, 10, 5]} intensity={0.5} color="#22c55e" />
      
      <Suspense fallback={null}>
        <Float
          speed={2}
          rotationIntensity={0.5}
          floatIntensity={floatIntensity}
        >
          <Model modelPath={modelPath} scale={scale} autoRotate={autoRotate} />
        </Float>
      </Suspense>
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
      />
    </Canvas>
  );
};

export default Model3DViewer;
