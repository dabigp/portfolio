'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function PrismMesh({ mouse }: { mouse: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  const meshRef3 = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current || !meshRef2.current || !meshRef3.current) return;

    const targetRotX = mouse.y * 0.3;
    const targetRotY = mouse.x * 0.5;

    meshRef.current.rotation.x += (targetRotX - meshRef.current.rotation.x) * delta * 2;
    meshRef.current.rotation.y += (targetRotY - meshRef.current.rotation.y) * delta * 2;
    meshRef.current.rotation.z += delta * 0.08;

    meshRef2.current.rotation.x = meshRef.current.rotation.x;
    meshRef2.current.rotation.y = meshRef.current.rotation.y;
    meshRef2.current.rotation.z = meshRef.current.rotation.z;

    meshRef3.current.rotation.x = meshRef.current.rotation.x;
    meshRef3.current.rotation.y = meshRef.current.rotation.y;
    meshRef3.current.rotation.z = meshRef.current.rotation.z;
  });

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={meshRef} position={[0, 0, 0]} scale={1.8}>
          <octahedronGeometry args={[1.2, 0]} />
          <MeshDistortMaterial
            color="#fffdf9"
            transparent
            opacity={0.08}
            roughness={0.2}
            metalness={0.9}
            wireframe={false}
            envMapIntensity={0.4}
          />
        </mesh>
      </Float>

      <mesh ref={meshRef2} position={[0.03, 0.02, -0.05]} scale={1.8}>
        <octahedronGeometry args={[1.22, 0]} />
        <meshBasicMaterial color="#ff4444" transparent opacity={0.04} wireframe />
      </mesh>

      <mesh ref={meshRef3} position={[-0.03, -0.02, 0.05]} scale={1.8}>
        <octahedronGeometry args={[1.22, 0]} />
        <meshBasicMaterial color="#4488ff" transparent opacity={0.04} wireframe />
      </mesh>
    </group>
  );
}

export default function ThreePrism() {
  const mouse = useRef({ x: 0, y: 0 });

  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    });
  }

  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6f879c" />
        <PrismMesh mouse={mouse.current} />
      </Canvas>
    </div>
  );
}
