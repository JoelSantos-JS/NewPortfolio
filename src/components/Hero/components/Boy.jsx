import React from "react";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Boy() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <coneBufferGeometry args={[0.1, 0.5, 16]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
}

export default Boy;
