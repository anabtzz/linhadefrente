import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Static 3D shapes for each department type
export const DeptIcon3D = ({ type, color }: { type: string; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const colorHex = color === "bg-primary" ? "#8b5cf6" : "#22c55e";

  // Gentle floating without rotation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    }
  });

  const getGeometry = () => {
    switch (type) {
      case "Marketing":
        return <coneGeometry args={[0.8, 1.4, 4]} />;
      case "T.I":
        return <boxGeometry args={[1, 1, 1]} />;
      case "Eventos":
        return <dodecahedronGeometry args={[0.8, 0]} />;
      case "Recursos Humanos":
        return <sphereGeometry args={[0.8, 8, 6]} />;
      case "Podcast":
        return <cylinderGeometry args={[0.4, 0.6, 1.2, 8]} />;
      case "Pesquisa":
        return <torusGeometry args={[0.6, 0.25, 8, 16]} />;
      default:
        return <icosahedronGeometry args={[0.8, 0]} />;
    }
  };

  return (
    <mesh ref={meshRef}>
      {getGeometry()}
      <meshStandardMaterial
        color={colorHex}
        emissive={colorHex}
        emissiveIntensity={0.2}
        metalness={0.7}
        roughness={0.25}
        flatShading
      />
    </mesh>
  );
};
