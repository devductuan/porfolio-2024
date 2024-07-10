// import EarthNightMap from "../assets/textures/8k_earth_nightmap.jpg"
import * as THREE from "three"
import { MeshProps, ThreeElements, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { OrbitControls, Stars } from "@react-three/drei"
import { useEffect, useRef } from "react"

type Props = {}



function Earth({ }: Props) {

    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [
        "/assets/textures/8k_earth_daymap.jpg",
        "/assets/textures/8k_earth_clouds.jpg",
        "/assets/textures/8k_earth_specular_map.jpg",
        "/assets/textures/8k_earth_clouds.jpg"
    ])

    const earthRef = useRef(null)
    const cloudsRef = useRef(null)


    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime()

        // @ts-ignore
        earthRef.current.rotation.y = elapsedTime / 6;
        // @ts-ignore
        cloudsRef.current.rotation.y = elapsedTime / 6;
    })


    return (
        <>
            <mesh ref={cloudsRef} position={[3, -3, -3]}>
                <sphereGeometry args={[1.005, 32, 32]} />
                <meshStandardMaterial
                    map={cloudsMap}
                    opacity={0.4}
                    depthWrite={false}
                    transparent={true}
                    side={THREE.DoubleSide}
                />
            </mesh>
            <mesh ref={earthRef} position={[3, -3, -3]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.4} />
            </mesh>
        </>
    )
}

export default Earth