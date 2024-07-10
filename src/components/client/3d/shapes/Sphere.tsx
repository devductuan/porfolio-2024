import React from 'react'
import { Vector3 } from 'three'

type Props = {
    color: string,
    position: Vector3
}

function Sphere({ color, position }: Props) {
    return (
        <mesh position={position}>
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial color={color} metalness={0.4} roughness={0.4} />
        </mesh>
    )
}

export default Sphere