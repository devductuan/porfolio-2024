import { universities } from '@/constants/education'
import Image from 'next/image'

type Props = {}

function Education({ }: Props) {
    return (
        <section className="py-20 lg:py-40 container mx-auto h-screen px-4 lg:px-0" id="education">
            <h1 id="heading-education" className="text-center text-gray-500 text-xs lg:text-sm uppercase">Education</h1>
            <p className="text-2xl lg:text-4xl lg:mt-10 mt-4 text-center font-mono">Universities that I graduated from</p>
            <div className="mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {universities.map(uni => <div className="card" key={uni.id}>
                    <Image
                        className={`img-${uni.id}`}
                        src={uni.image.url}
                        width={uni.image.width}
                        height={uni.image.height}
                        alt={uni.image.alt}
                    />
                    <p className="text-xl mt-4 font-bold">{uni.name}</p>
                    <p className="mt-2">{uni.degree}</p>
                    {uni.major ? <p className="text-sm">Major: {uni.major}</p> : null}
                    <p className="mt-4 text-sm text-gray-400">Graduation date: {uni.graduatedIn}</p>
                    {uni.award ? <p className="mt-4 italic">Award: {uni.award}</p> : null}
                </div>)}
            </div>
        </section>
    )
}

export default Education