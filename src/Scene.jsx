import React, { useReducer } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Scene() {
  let tex = useTexture("./frameI.png");
  let cyl = useRef(null);
  useFrame((state, delta) => {
    cyl.current.rotation.y += delta * 0.5;
  });
  return (
    <group rotation={[0, 0.5, 0.2]}>
      <mesh ref={cyl}>
        <cylinderGeometry args={[1, 1, 1, 50, 50, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default Scene;
