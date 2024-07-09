import React from 'react'
import SongList from '../SongList'

type Props = {}

function Hobbies({ }: Props) {
    return (
        <section className="py-20 lg:py-40 container mx-auto px-4 lg:px-0" id="hobbies">
            <h1 id="heading-hobbies" className="text-center text-gray-500 text-xs lg:text-sm uppercase">Hobbies</h1>
            <p className="text-2xl lg:text-4xl mt-4 lg:mt-10 text-center font-mono">What do I do in leisure time?</p>
            <div className="mt-10 lg:mt-20 max-w-md mx-auto">
                <p className="text-center">When I don't engineer applications, I engineer sound. One of my biggest hobbies is making music. Here are some of my tracks on Soundcloud. Check 'em out :D. By the way, they are written in Vietnamese.</p>
            </div>
            <SongList />
        </section>
    )
}

export default Hobbies