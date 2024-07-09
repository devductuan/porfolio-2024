import React from 'react'

type Props = {}

function About({ }: Props) {
    return (
        <section className="py-20 px-4 lg:px-0 lg:py-40 container mx-auto h-screen" id="about">
            <h1 id="heading-about" className="text-center text-gray-500 text-xs lg:text-sm uppercase">About me</h1>
            <p className="text-2xl lg:text-4xl lg:mt-10 mt-4 text-center font-mono">A developer who loves to code</p>
            <div className="lg:mt-20 mt-10 max-w-xl mx-auto">
                <p className="text-center">
                    My name is Duc Tuan Nguyen. Ever since I started schooling, my favourite subject has always been ICT.
                    I enjoyed spending time figuring out how a "piece of metal" could deliver such amazing features like
                    websites, desktop applications, video games, etc. My curiosity then encouraged me to try my best to become
                    a software developer, who can build outstanding applications and deliver high values to the world. Coding became
                    my hobby, and then, it became my passion.
                </p>
            </div>
        </section>
    )
}

export default About