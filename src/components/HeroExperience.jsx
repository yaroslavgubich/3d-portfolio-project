// src/components/HeroExperience.jsx
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const HeroExperience = () => {
  const isTablet = "false";
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={70} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={4} />

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="green" />
        <OrbitControls enablePan={false} 
        
        enableZoom={!isTablet}
        maxDistance={isTablet ? 10 : 20}
        />
        
      </mesh>
    </Canvas>
  );
};

export default HeroExperience;
