import React from "react";
import { Html } from '@react-three/drei'

export default function Loader() {
    return (
        <>
            <Html
                prepend
                center
            >
                <div className="font-mono animate-pulse text-center " style={{ width: 320 }}>
                    Ground Control to Major Tuan...
                </div>
            </Html>
        </>
    )
}