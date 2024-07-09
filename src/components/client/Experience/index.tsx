import React from 'react'
import Timeline from '../Timeline'

type Props = {}

function Experience({ }: Props) {
    return (
        <section className="py-20 lg:py-40 container mx-auto px-4 lg:px-0" id="experience">
            <h1 id="heading-experience" className="text-center text-gray-500 text-xs lg:text-sm uppercase">Experience</h1>
            <p className="text-2xl lg:text-4xl mt-4 lg:mt-10 text-center font-mono">My Experience</p>
            <div className="mt-10 lg:mt-20 max-w-xl mx-auto">
                <p className="text-center">
                    Mid-level Software Developer with 6 years of coding experience. Eager to learn new technology everyday and passionate to build high quality software and applications.
                </p>
            </div>
            <Timeline />
        </section>
    )
}

export default Experience