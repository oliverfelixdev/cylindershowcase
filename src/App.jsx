import { Canvas, useThree } from "@react-three/fiber";
import React, { useEffect } from "react";
import "./style.css";
import Scene from "./Scene";
import { Bloom, ToneMapping } from "@react-three/postprocessing";
import { EffectComposer } from "@react-three/postprocessing";
import Information from "./Information";

function AdaptiveFOV() {
  const { camera, size } = useThree();

  useEffect(() => {
    if (size.width < 600) {
      camera.fov = 50;
    } else if (size.width < 1024) {
      camera.fov = 40;
    } else {
      camera.fov = 35;
    }

    camera.updateProjectionMatrix();
  }, [size.width]);

  return null;
}
function App() {
  return (
    <>
      <Canvas flat camera={{ fov: 35, position: [0, 0, 5] }}>
        <AdaptiveFOV />
        {/* <OrbitControls /> */}
        <ambientLight />
        <Scene />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={4.2}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
        </EffectComposer>
      </Canvas>
      <Information />
    </>
  );
}

export default App;
