import { songs } from '@/constants/songs'
import { SongType } from '@/types/song'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";


type Props = {}

function SongList({ }: Props) {
    return (
        <div className="xl:h-screen relative flex flex-wrap  justify-center xl:block mt-10 xl:mt-0 gap-4">
            {
                songs.map(song => <Song song={song} key={song.id} />)
            }
        </div>
    )
}

const Song = ({
    song
}: {
    song: SongType
}) => {
    return <div className={`song-container song-${song.id}`}>
        <Image
            src={song.image.src}
            width={song.image.width}
            height={song.image.height}
            alt={song.image.alt}
            className="song-img"
        />
        <p className="font-bold text-lg mt-2 ">{song.title}</p>
        <p className="text-sm mt-1">{song.author}</p>
        <Link href={song.link} target='_blank' className="song-play">
            <FaCirclePlay />
            Play
        </Link>
    </div>
}

export default SongList