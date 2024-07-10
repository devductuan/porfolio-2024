"use client"
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef } from 'react'
import Earth from '../shapes/Earth'
import Jupiter from '../shapes/Jupiter'
import Mars from '../shapes/Mars'
import Loader from './Loader'
import { CameraControls, PerspectiveCamera, Stars } from '@react-three/drei'

type Props = {}

function Planets({ }: Props) {

    const cameraRef = useRef(null)

    useEffect(() => {
        const resizeHandler = (e: any) => {
            const windowWidth = window.innerWidth;

            if (cameraRef.current) {
                if (windowWidth <= 768) {
                    // @ts-ignore
                    cameraRef.current.position.z = 20;
                } else {
                    // @ts-ignore
                    cameraRef.current.position.z = 7;
                }
            }
        }

        window.addEventListener("resize", resizeHandler)

        return () => {
            window.removeEventListener("resize", resizeHandler)
        }
    }, [])

    const cameraZ = typeof window !== "undefined" ? window.innerWidth <= 768 ? 20 : 7 : 20;


    return (
        <div id="canvas-container" className="h-full">
            <Canvas>
                <Suspense fallback={<Loader />}>
                    <ambientLight intensity={2} />
                    {/* <pointLight color="#f6f3ea" position={[0, 1, -7]} intensity={20} /> */}

                    <Stars radius={300} depth={60} count={2000} factor={7} saturation={0} fade={true} />
                    <Earth />
                    <Jupiter />
                    <Mars />
                    <PerspectiveCamera
                        ref={cameraRef}
                        makeDefault
                        position={[0, 0, cameraZ]}
                        fov={60}
                        zoom={0.9}
                    />

                </Suspense>
            </Canvas>
        </div>
    )
}

export default Planets