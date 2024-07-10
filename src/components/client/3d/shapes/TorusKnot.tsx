import { useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import { TextureLoader } from 'three'

type Props = {}

function TorusKnot({ }: Props) {

    const torusRef = useRef(null)

    const [shiny_color_map] = useLoader(TextureLoader, [
        "/assets/textures/shiny_metal_map.avif"
    ])

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime()

        // @ts-ignore
        torusRef.current.rotation.y = elapsedTime / 6;
    })

    return (
        <>
            <mesh ref={torusRef} position={[0, 0, -20]}>
                <torusKnotGeometry args={[10, 1, 100, 16, 2, 3]} />
                <meshStandardMaterial map={shiny_color_map} color="rgb(211, 65, 3)" metalness={0.6} />
            </mesh>
        </>
    )
}

export default TorusKnot