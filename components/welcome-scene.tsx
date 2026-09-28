'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Sparkles, Stars } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function Globe() {
  const globe = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (globe.current) globe.current.rotation.y += delta * 0.08
  })

  return (
    <Float speed={0.7} rotationIntensity={0.12} floatIntensity={0.18}>
      <group ref={globe} rotation={[0.15, -0.6, 0.08]}>
        <mesh>
          <sphereGeometry args={[1.55, 64, 64]} />
          <meshStandardMaterial color="#163d7a" roughness={0.78} metalness={0.08} />
        </mesh>
        <mesh scale={1.015}>
          <sphereGeometry args={[1.55, 48, 48]} />
          <meshBasicMaterial color="#3e9bff" transparent opacity={0.13} side={THREE.BackSide} />
        </mesh>
        <mesh scale={1.04}>
          <sphereGeometry args={[1.55, 48, 48]} />
          <meshBasicMaterial color="#64c8ff" transparent opacity={0.18} side={THREE.BackSide} />
        </mesh>
        <mesh position={[-0.78, 0.68, 1.28]} rotation={[0.2, 0.1, -0.3]}>
          <sphereGeometry args={[0.4, 24, 16]} />
          <meshBasicMaterial color="#74d69d" transparent opacity={0.72} />
        </mesh>
        <mesh position={[0.52, 0.3, 1.45]} rotation={[0.1, -0.2, 0.2]}>
          <sphereGeometry args={[0.3, 24, 16]} />
          <meshBasicMaterial color="#6bc58d" transparent opacity={0.78} />
        </mesh>
        <mesh position={[0.12, -0.55, 1.38]} rotation={[-0.2, 0.1, 0.1]}>
          <sphereGeometry args={[0.22, 20, 14]} />
          <meshBasicMaterial color="#8be0aa" transparent opacity={0.68} />
        </mesh>
      </group>
    </Float>
  )
}

export function WelcomeScene() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas camera={{ position: [0, 0.1, 6.8], fov: 35 }} dpr={[1, 1.7]}>
        <color attach="background" args={['#050b1d']} />
        <ambientLight intensity={0.18} />
        <directionalLight position={[-4, 3, 5]} intensity={3.4} color="#b9e2ff" />
        <pointLight position={[3, -2, 2]} intensity={8} distance={8} color="#2c7cff" />
        <Globe />
        <Stars radius={80} depth={45} count={1800} factor={2.2} saturation={0.3} fade speed={0.45} />
        <Sparkles count={45} scale={[9, 6, 5]} size={1.6} speed={0.18} color="#91c8ff" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.18} minPolarAngle={Math.PI / 2.7} maxPolarAngle={Math.PI / 1.9} />
      </Canvas>
    </div>
  )
}
