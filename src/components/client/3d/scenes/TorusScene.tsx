"use client"
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef } from 'react'
import CrystalSphere from '../shapes/CrystalSphere'
import TorusKnot from '../shapes/TorusKnot'

type Props = {}

function TorusScene({ }: Props) {


    return (
        <div id="torus-container" >
            <Canvas>
                <Suspense fallback={null}>
                    {/* <ambientLight intensity={1} /> */}
                    <pointLight color="#f6f3ea" position={[2, 0, -10]} intensity={100} />

                    <TorusKnot />

                </Suspense>
            </Canvas>
        </div>
    )
}

export default TorusScene