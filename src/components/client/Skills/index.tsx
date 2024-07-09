import React from 'react'
import SkillsList from '../SkillsList'

type Props = {}

function Skills({ }: Props) {
    return (
        <section className="py-20 lg:py-40 container mx-auto px-4 lg:px-0" id="skills">
            <h1 id="heading-skills" className="text-center text-gray-500 text-xs lg:text-sm uppercase">Skills</h1>
            <p className="text-2xl lg:text-4xl mt-4 lg:mt-10 text-center font-mono">My skills</p>
            <SkillsList />
        </section>
    )
}

export default Skills