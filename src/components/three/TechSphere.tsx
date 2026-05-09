import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface TechItemProps {
  name: string;
  position: [number, number, number];
}

function TechLabel({ name, position }: TechItemProps) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        position={position}
        fontSize={0.2}
        color="#F5F7FA"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZg.ttf"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </Float>
  );
}

export const TechSphere = ({ tools }: { tools: string[] }) => {
  const groupRef = useRef<THREE.Group>(null!);

  const positions = useMemo(() => {
    const pos: [number, number, number][] = [];
    const count = tools.length;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const radius = 3.5;
      pos.push([
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi),
      ]);
    }
    return pos;
  }, [tools]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x += 0.001;
    }
  });

  return React.createElement('group', null,
    React.createElement(OrbitControls, { enableZoom: false, autoRotate: true, autoRotateSpeed: 0.5 }),
    React.createElement('group', { ref: groupRef },
      tools.map((tool, i) => React.createElement(TechLabel, { key: tool, name: tool, position: positions[i] })),
      React.createElement(Sphere, { args: [2.5, 64, 64] },
        React.createElement(MeshDistortMaterial, {
          color: '#14B8A6',
          speed: 2,
          distort: 0.4,
          radius: 1,
          opacity: 0.1,
          transparent: true,
          blending: THREE.AdditiveBlending,
        })
      )
    ),
    React.createElement('points', null,
      React.createElement('bufferGeometry', null,
        React.createElement('bufferAttribute', {
          attach: 'attributes-position',
          count: 1000,
          array: new Float32Array(3000).map(() => (Math.random() - 0.5) * 20),
          itemSize: 3,
        })
      ),
      React.createElement('pointsMaterial', { size: 0.02, color: '#8B5CF6', transparent: true, opacity: 0.3 })
    )
  );
};
