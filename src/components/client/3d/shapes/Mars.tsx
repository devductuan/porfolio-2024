// import EarthNightMap from "../assets/textures/8k_earth_nightmap.jpg"
import * as THREE from "three"
import { MeshProps, ThreeElements, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { OrbitControls, Stars } from "@react-three/drei"
import { useRef } from "react"

type Props = {}

function Mars({ }: Props) {

    const [colorMap, normalMap] = useLoader(TextureLoader, [
        "/assets/textures/8k_mars.jpg",
        "/assets/textures/8k_earth_clouds.jpg"
    ])

    const earthRef = useRef(null)

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime()
        // @ts-ignore
        earthRef.current.rotation.y = elapsedTime / 6;
    })


    return (
        <>
            <ambientLight intensity={1} />
            {/* <pointLight color="#f6f3ea" position={[-1, 0, 2]} intensity={20} /> */}
            <Stars radius={300} depth={60} count={2000} factor={7} saturation={0} fade={true} />

            <mesh ref={earthRef} position={[-4, 2, -4]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.4} />
            </mesh>
            {/* <OrbitControls /> */}
        </>
    )
}

export default Mars