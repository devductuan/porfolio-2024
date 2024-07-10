"use client"
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef } from 'react'
import Loader from './Loader'
import { Html, OrbitControls, Stars } from '@react-three/drei'
import CrystalSphere from '../shapes/CrystalSphere'

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
                    {/* <ambientLight intensity={1} /> */}
                    <pointLight color="#f6f3ea" position={[2, 0, -20]} intensity={100} />

                    <CrystalSphere />
                    <Stars radius={300} depth={60} count={2000} factor={7} saturation={0} fade={true} />
                    {/* <Stars radius={300} depth={60} count={2000} factor={7} saturation={0} fade={true} />
                    <Earth />
                    <Jupiter />
                    <Mars />
                    <PerspectiveCamera
                        ref={cameraRef}
                        makeDefault
                        position={[0, 0, cameraZ]}
                        fov={60}
                        zoom={0.9}
                   /> */}
                    <Html
                        prepend
                        as="div"
                        fullscreen
                    >
                        <div className="my-desc">
                            <p className="font-mono text-sm italic">Major Tuan: Nice to see you! :)</p>
                        </div>
                    </Html>


                    <Html
                        prepend
                        as="div"
                        fullscreen
                    >
                        <div className='my-name typewriter'>
                            <h1 id="heading-home" className="text-3xl font-mono uppercase">Duc Tuan Nguyen</h1>
                            <p>Software engineer</p>
                        </div>
                    </Html>
                    <OrbitControls enableZoom={false} />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Planets