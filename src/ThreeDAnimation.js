// src/ThreeDAnimation.js
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Box = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
};

const ThreeDAnimation = () => {
  return (
    <Canvas className="canvas">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  );
};

export default ThreeDAnimation;
