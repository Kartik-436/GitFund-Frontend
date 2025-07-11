'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Suspense, useRef } from 'react';

const RotatingLogo = ({ size = 1, speed = 0.01, direction = 'clockwise' }) => {
    const modelRef = useRef();
    const { scene } = useGLTF('/NeowareLogo1.glb'); // Ensure this path is correct (public folder)

    useFrame(() => {
        if (modelRef.current) {
            const spinSpeed = direction === 'clockwise' ? speed : -speed;
            modelRef.current.rotation.y += spinSpeed;
        }
    });

    return <primitive ref={modelRef} object={scene} scale={size} />;
};

const NeowareLogo = ({ width = 100, height = 100, size = 1, speed = 0.01, direction = 'clockwise' }) => {
    return (
        <div style={{ width, height }}>
            <Canvas camera={{ position: [0, 0, 3] }} gl={{ preserveDrawingBuffer: true }}>
                <ambientLight intensity={1} />
                <directionalLight position={[2, 2, 5]} intensity={1.5} />
                <Suspense fallback={null}>
                    <RotatingLogo size={size} speed={speed} direction={direction} />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default NeowareLogo;
