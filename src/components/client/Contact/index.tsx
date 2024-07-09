import Link from 'next/link'
import React from 'react'
import { FaLinkedin } from 'react-icons/fa6'
import { LiaLinkedin } from 'react-icons/lia'

type Props = {}

function Contact({ }: Props) {
    return (
        <section className="py-20 lg:py-40 container mx-auto h-screen px-4 lg:px-0" id="contact">
            <h1 id="heading-contact" className="text-center text-gray-500 text-xs lg:text-sm uppercase">Contact</h1>
            <p className="text-2xl lg:text-4xl mt-4 lg:mt-10 text-center font-mono">Contact for work</p>
            <div className="mt-6 lg:mt-10 max-w-xl mx-auto">
                <p className="text-center">
                    If you are having a promising project that needs the help of a software engineer like me, I'm more than happy to join. Please refer to my contact information below to get in touch:
                </p>
            </div>
            <div className="max-w-lg mx-auto mt-10 lg:mt-20">
                <div className="flex items-center justify-between mb-10">
                    <p>Email:</p>
                    <Link href="mailto:ductuan1999@gmail.com" className="text-primary">ductuan1999@gmail.com</Link>
                </div>
                <div className="flex items-center justify-between ">
                    <p>LinkedIn:</p>
                    <Link className="flex items-center gap-2  text-primary" href="https://www.linkedin.com/in/duc-tuan-nguyen-7914a317a/">
                        <FaLinkedin /> duc-tuan-nguyen-7914a317a
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Contact