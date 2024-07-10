import { useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import { TextureLoader } from 'three'

type Props = {}

function CrystalSphere({ }: Props) {
    const torusRef = useRef(null)

    const [colorMap] = useLoader(TextureLoader, [
        "/assets/textures/crystal.webp",
    ])

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime()

        // @ts-ignore
        torusRef.current.rotation.y = elapsedTime / 6;
    })

    return (
        <mesh ref={torusRef} position={[0, 0, -40]}>
            <octahedronGeometry args={[10, 3]} />
            <meshStandardMaterial map={colorMap} />
        </mesh>
    )
}

export default CrystalSphere