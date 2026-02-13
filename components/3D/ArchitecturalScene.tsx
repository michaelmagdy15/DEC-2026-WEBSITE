import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, ContactShadows, Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Building = ({ position, height, width, color }: any) => {
  return (
    <group position={position}>
      <mesh position={[0, height / 2, 0]}>
        <boxGeometry args={[width, height, width]} />
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
        />
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(width, height, width)]} />
          <lineBasicMaterial color={color === "#F58220" ? "#ffaa80" : "#333"} transparent opacity={0.3} />
        </lineSegments>
      </mesh>
    </group>
  );
};

const Cityscape = () => {
  const buildings = useMemo(() => {
    const items = [];
    const gridSize = 7;
    const spacing = 1.8;
    
    for (let x = -gridSize; x <= gridSize; x++) {
      for (let z = -gridSize; z <= gridSize; z++) {
        const dist = Math.sqrt(x*x + z*z);
        if (dist > gridSize) continue;
        
        // Random layout
        if (Math.random() > 0.75) continue;
        
        // Height distribution
        const noise = Math.sin(x * 0.5) * Math.cos(z * 0.5);
        let h = 2 + (noise * 5) + Math.random() * 4;
        h *= (1 - dist/gridSize); // Taper at edges
        
        if (h < 1) h = 1;

        const isAccent = Math.random() > 0.97;
        
        items.push({
          position: [x * spacing, 0, z * spacing],
          height: h,
          width: 1 + Math.random() * 0.5,
          color: isAccent ? "#F58220" : "#151515"
        });
      }
    }
    return items;
  }, []);

  return (
    <group position={[0, -2, 0]}>
      {buildings.map((b, i) => (
        <Building key={i} {...b} />
      ))}
      <ContactShadows opacity={0.4} scale={60} blur={2.5} far={10} color="#000" />
    </group>
  );
};

const ArchitecturalScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
      <Canvas gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}>
        {/* Camera positioned for a cinematic isometric-like view */}
        <PerspectiveCamera makeDefault position={[22, 18, 22]} fov={25} />
        
        {/* Controls handle centering and rotation automatically */}
        <OrbitControls 
            autoRotate 
            autoRotateSpeed={0.8}
            enableZoom={false} 
            enablePan={false}
            maxPolarAngle={Math.PI / 2 - 0.1}
            target={[0, 2, 0]} 
        />
        
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 20, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, 5, -10]} intensity={5} color="#F58220" distance={40} />
        
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade />
        <fog attach="fog" args={['#0a0a0a', 20, 70]} />

        <Cityscape />
      </Canvas>
    </div>
  );
};

export default ArchitecturalScene;