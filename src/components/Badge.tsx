"use client"

import * as THREE from 'three'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Lightformer, OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'
import type { ObjectMap } from '@react-three/fiber'

const GLTF_URL = 'https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb'

type BadgeGLTF = GLTF & ObjectMap & {
  nodes: ObjectMap['nodes'] & {
    card: THREE.Mesh
    clip: THREE.Mesh
    clamp: THREE.Mesh
  }
  materials: ObjectMap['materials'] & {
    metal: THREE.MeshStandardMaterial
  }
}

export default function BadgeComponent({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative touch-none ${
        compact
          ? 'h-52 w-52 sm:h-60 sm:w-60'
          : 'h-[min(62vh,440px)] min-h-[320px] w-full sm:h-[min(72vh,600px)] sm:min-h-[400px]'
      }`}
    >
      <Canvas camera={{ position: [0, 0, compact ? 9 : 13], fov: compact ? 30 : 25 }} gl={{ alpha: true }}>
        <ambientLight intensity={Math.PI} />
        <Suspense fallback={null}>
          <BadgeModel />
          <Environment background={false} blur={0.75}>
            <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
          </Environment>
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={0.15}
          maxPolarAngle={Math.PI - 0.15}
          rotateSpeed={0.7}
        />
      </Canvas>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/20 bg-black/70 px-2.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.14em] text-white sm:px-3 sm:text-[10px] ${
          compact ? 'hidden' : 'bottom-[12%] sm:bottom-[22%]'
        }`}
      >
        <svg className="h-3.5 w-3.5 animate-[spin_6s_linear_infinite] sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20 7v5h-5M4 17v-5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.5 9a7 7 0 0 1 12-2L20 9M4 15l2.5 2a7 7 0 0 0 12-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>Drag to rotate</span>
      </div>
    </div>
  )
}

function BadgeModel() {
  const { nodes, materials } = useGLTF(GLTF_URL) as BadgeGLTF
  const badgeTexture = useTexture('/Badge-Mateo-Texture.jpg', (texture) => {
    texture.flipY = false
  })

  return (
    <group scale={2.75} position={[0, -0.8, -0.05]}>
      <mesh geometry={nodes.card.geometry}>
        <meshPhysicalMaterial
          map={badgeTexture}
          map-anisotropy={16}
          clearcoat={1}
          clearcoatRoughness={0.15}
          roughness={0.3}
          metalness={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
      <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
    </group>
  )
}
