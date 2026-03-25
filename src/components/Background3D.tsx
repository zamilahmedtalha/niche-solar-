import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSun() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[2.2, 100, 100]} position={[3, 0, -4]}>
        <MeshDistortMaterial 
          color="#ff7b00"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          emissive="#ff4500"
          emissiveIntensity={0.5}
          wireframe={true}
        />
      </Sphere>
    </Float>
  );
}

export default function Background3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSun />
        <Stars radius={100} depth={50} count={4000} factor={4} saturation={1} fade speed={1.5} />
      </Canvas>
      {/* Gradient overlay to blend it into the dark theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
    </div>
  );
}
