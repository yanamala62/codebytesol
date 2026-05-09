import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const HeroOrb = () => {
  const points = useRef<THREE.Points>(null!);
  
  const particlesCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particlesCount);
      const theta = Math.sqrt(particlesCount * Math.PI) * phi;
      
      const radius = 2;
      pos[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      pos[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    points.current.rotation.y = time * 0.1;
    points.current.rotation.z = time * 0.05;
    
    // Breathing effect
    const scale = 1 + Math.sin(time * 0.5) * 0.05;
    points.current.scale.set(scale, scale, scale);
  });

  return React.createElement('points', { ref: points },
    React.createElement('bufferGeometry', null,
      React.createElement('bufferAttribute', {
        attach: 'attributes-position',
        count: particlesCount,
        array: positions,
        itemSize: 3,
      })
    ),
    React.createElement('pointsMaterial', {
      size: 0.05,
      color: '#14B8A6',
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })
  );
};
