// src/components/HeroExperience.jsx
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./sections/room.jsx";
import HeroLights from "./HeroLights.jsx";
const HeroExperience = () => {
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        autoRotate ={false}
        autoRotateSpeed={0.4}
        autoRotateDelay={500}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 10}
      />
      <HeroLights />
      <group scale={isMobile ? 0.7 : 1} position={[0, -3, 0]}>
        <Room />
      </group>
      
    </Canvas>
    
  );
};

export default HeroExperience;
