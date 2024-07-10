import React from 'react'
import Planets from '../3d/scenes/Planets'

type Props = {}

function Home({ }: Props) {
    return (
        <section className="h-full home-page relative" id="home">
            <Planets />
            <div className="my-name typewriter lg:opacity-0">
                <h1 id="heading-home" className="text-3xl font-mono uppercase">Duc Tuan Nguyen</h1>
                <p>Software engineer</p>
            </div>

            <div className="my-desc lg:opacity-0">
                <p className="font-mono text-sm italic">Major Tuan: Nice to see you! :)</p>
            </div>
        </section>
    )
}

export default Home