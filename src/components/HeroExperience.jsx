// src/components/HeroExperience.jsx
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const HeroExperience = () => {
  const isTablet = false;

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={70} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={4} />

      {/* Lighthouse group */}
      <group position={[0, -2, 0]}>
        {/* Base platform */}
        <mesh position={[0, -0.25, 0]}>
          <cylinderGeometry args={[1.2, 1.2, 0.5, 16]} />
          <meshStandardMaterial color="#666666" />
        </mesh>

        {/* Tower */}
        <mesh position={[0, 2, 0]}>
          <cylinderGeometry args={[0.7, 1, 4, 16]} />
          <meshStandardMaterial color="#cccccc" />
        </mesh>

        {/* Light Room */}
        <mesh position={[0, 4.3, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.6, 16]} />
          <meshStandardMaterial
            color="#ffcc00"
            emissive="#ffcc00"
            emissiveIntensity={1}
          />
        </mesh>

        {/* Roof */}
        <mesh position={[0, 4.9, 0]}>
          <coneGeometry args={[0.8, 0.6, 16]} />
          <meshStandardMaterial color="#a00000" />
        </mesh>
      </group>

      {/* Orbit Controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={isTablet ? 10 : 20}
      />
    </Canvas>
  );
};

export default HeroExperience;
