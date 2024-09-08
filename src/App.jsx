import { Canvas } from "@react-three/fiber"
import React from 'react'
import "./style.css"
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three';
import Scene from "./Scene";
import { Bloom, ToneMapping } from '@react-three/postprocessing'
import { EffectComposer } from '@react-three/postprocessing'
function App() {

  return (
    <>
      <Canvas flat camera={{ fov: 30 }}>
        <OrbitControls />
        <ambientLight />
        <Scene />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={3.0}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
        </EffectComposer>
      </Canvas >
    </>
  )
}

export default App