"use client"
import { timeline } from '@/constants/timeline'
import Link from 'next/link'
import React, { Dispatch, SetStateAction, useState } from 'react'

type Props = {}

function Timeline({ }: Props) {
    const [selectedJob, setSelectedJob] = useState("")
    const [showDetail, setShowDetail] = useState(false)
    const [currentJobId, setCurrentJobId] = useState("")

    const closeDetail = () => {
        setShowDetail(false)
    }

    const openDetail = (jobId: string) => {
        setShowDetail(true)
        setCurrentJobId(jobId)
    }

    return (
        <div className="timeline" onMouseLeave={() => { setSelectedJob("") }}>
            <TimelineVerticalLine
                selectedJob={selectedJob}
                setSelectedJob={setSelectedJob}
                openDetail={openDetail}
            />
            <JobDetail currentJobId={currentJobId} show={showDetail} close={closeDetail} />
        </div>
    )
}

const TimelineVerticalLine = ({
    selectedJob,
    setSelectedJob,
    openDetail
}: {
    selectedJob: string,
    setSelectedJob: Dispatch<SetStateAction<string>>,
    openDetail: (jobId: string) => void
}) => {
    return <div className="flex lg:justify-center mt-20" >
        <div className="flex flex-col items-center justify-center">
            {timeline.map((item, index) => <div key={item.id} className="relative">
                <div
                    className="timeline-time"
                    onMouseEnter={() => { setSelectedJob(item.id) }}
                    onClick={() => { openDetail(item.id) }}
                >
                    {item.duration}
                    {item.duration.includes("NOW") ? <div className="ping animate-ping" /> : null}
                </div>
                {index < timeline.length - 1 ? <div className="vertical-line"></div> : null}
                <div className={`horizontal-line ${selectedJob === item.id ? "active" : ""}`} />
                <div className={`timeline-brief ${selectedJob === item.id ? "active" : ""}`}>
                    <p className="text-xs text-gray-600 mb-2">{item.duration}</p>
                    <p className="font-bold">{item.companyName}</p>
                    <p className="text-sm mb-4">{item.position}</p>
                    <button onClick={() => { openDetail(item.id) }} className="font-bold text-sm hover:underline">View more</button>
                </div>
            </div>)}
        </div>
    </div>
}

const JobDetail = ({
    show,
    close,
    currentJobId
}: {
    show: boolean,
    close: () => void,
    currentJobId: string
}) => {

    const job = timeline.find(item => item.id === currentJobId);

    return <div className={`modal ${show ? "active" : ""}`} onClick={close}>
        <div className="relative">
            <div className="colored-card" />

            <div className="white-card" onClick={e => { e.stopPropagation() }}>
                <div className="relative">
                    <div className="job-detail">
                        <p className="text-xs text-gray-700">{job?.duration}</p>
                        <h2 className="font-bold text-xl mt-2">{job?.companyName}</h2>
                        <p className="">{job?.position}</p>
                        <p className="text-xs text-gray-500 mb-6">
                            Company website:
                            <Link target='_blank' className="text-blue-500 hover:underline ml-2" href={job?.link ?? ""}>{job?.link}</Link>
                        </p>
                        <ul>
                            {
                                job?.bullets.map((bullet, index) => <li key={index}>
                                    {bullet}
                                </li>)
                            }
                        </ul>
                        <button onClick={close} className="lg:hidden mt-6 btn-primary px-4 py-2 font-medium text-sm">Close</button>
                    </div>
                </div>
            </div>


        </div>
    </div>
}

export default Timeline