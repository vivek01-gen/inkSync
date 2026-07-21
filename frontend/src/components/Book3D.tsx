import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Float, Environment, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

function Book3D({ color = '#ffd700', title = 'Book', position = [0, 0, 0], rotationSpeed = 0.005 }) {
  const meshRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group
        ref={meshRef}
        position={position as [number, number, number]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        {/* Book Cover */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.2, 1.8, 0.15]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.3} 
            roughness={0.4}
            emissive={color}
            emissiveIntensity={hovered ? 0.2 : 0.05}
          />
        </mesh>

        {/* Book Spine */}
        <mesh position={[-0.6, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[1.8, 0.15, 0.15]} />
          <meshStandardMaterial color={color} metalness={0.5} roughness={0.3} />
        </mesh>

        {/* Pages */}
        <mesh position={[0.02, 0, 0.02]}>
          <boxGeometry args={[1.14, 1.74, 0.12]} />
          <meshStandardMaterial color="#f5f0e8" roughness={0.8} />
        </mesh>

        {/* Title on cover */}
        <Text
          position={[0, 0.3, 0.08]}
          fontSize={0.15}
          color="#1a1a2e"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2"
        >
          {title}
        </Text>
      </group>
    </Float>
  )
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const count = 200

  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#ffd700" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

export default function BookScene() {
  return (
    <div className="w-full h-[600px] relative">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffd700" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00d4ff" />

        <Book3D color="#ffd700" title="The Golden
Quill" position={[-2.5, 0.5, 0]} rotationSpeed={0.003} />
        <Book3D color="#ff6b9d" title="Crimson
Petals" position={[0, -0.5, 0]} rotationSpeed={0.004} />
        <Book3D color="#00d4ff" title="Starlight
Drifter" position={[2.5, 0.3, 0]} rotationSpeed={0.002} />

        <ParticleField />
        <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={20} blur={2} />
        <Environment preset="night" />
      </Canvas>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}
