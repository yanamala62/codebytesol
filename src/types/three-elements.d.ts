import { ThreeElement } from '@react-three/fiber'

declare module '@react-three/fiber' {
  interface ThreeElements {
    points: ThreeElement<typeof THREE.Points>
    bufferGeometry: ThreeElement<typeof THREE.BufferGeometry>
    bufferAttribute: ThreeElement<typeof THREE.BufferAttribute>
    pointsMaterial: ThreeElement<typeof THREE.PointsMaterial>
    group: ThreeElement<typeof THREE.Group>
    mesh: ThreeElement<typeof THREE.Mesh>
    ambientLight: ThreeElement<typeof THREE.AmbientLight>
    pointLight: ThreeElement<typeof THREE.PointLight>
    sphereGeometry: ThreeElement<typeof THREE.SphereGeometry>
    meshDistortMaterial: any
  }
}

import * as THREE from 'three'
