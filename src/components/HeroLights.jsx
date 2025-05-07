// src/components/HeroLights.jsx
import React, { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { SpotLightHelper } from "three";

const HeroLights = () => {
  const spotLightRef1 = useRef();
  const spotLightRef2 = useRef();
  const targetRef = useRef();
  // This will add a visible helper for the spotlight
  // useHelper(spotLightRef1, SpotLightHelper, "hotpink");
  // useHelper(spotLightRef2, SpotLightHelper, "cyan");

  return (
    <>
      <spotLight
        ref={spotLightRef1}
        position={[-1.1, -1.2, -1]}
        angle={7}
        intensity={100}
        penumbra={1.9}
        decay={2}
        target={targetRef.current}
      />
      <spotLight
        ref={spotLightRef2}
        position={[3, 1, 3]}
        intensity={10}
        penumbra={20}
      />
      <ambientLight intensity={0.1} />
      <mesh ref={targetRef} position={[-9, -111, -9]}></mesh>
    </>
  );
};

export default HeroLights;
