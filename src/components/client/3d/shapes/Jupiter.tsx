// import EarthNightMap from "../assets/textures/8k_earth_nightmap.jpg"
import * as THREE from "three"
import { MeshProps, ThreeElements, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { OrbitControls, Stars } from "@react-three/drei"
import { useRef } from "react"

type Props = {}

function Jupiter({ }: Props) {

    const [colorMap, normalMap] = useLoader(TextureLoader, [
        "/assets/textures/jupiter_map.jpg",
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
            <mesh ref={earthRef} position={[20, 2, -80]}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.4} />
            </mesh>
        </>
    )
}

export default Jupiter