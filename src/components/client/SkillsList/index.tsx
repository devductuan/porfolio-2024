"use client"
import { skills } from '@/constants/skills'
import { SkillType } from '@/types/skill'
import React, { Dispatch, SetStateAction, useMemo, useState } from 'react'
import Modal from '../Modal'
import { arrayFromNumber } from '../../../../utils/map'
import { IoIosStarOutline, IoIosStarHalf, IoMdStar, IoMdStarHalf } from "react-icons/io";
import { CgClose } from 'react-icons/cg'


type Props = {}

function SkillsList({ }: Props) {

    const [openDialog, setOpenDialog] = useState(false)
    const [currentSkill, setCurrentSkill] = useState<SkillType | null>(null)

    const selectSkill = (selectedSkill: SkillType) => {
        setOpenDialog(true);
        setCurrentSkill(selectedSkill)
    }

    return (
        <div className="mt-10 lg:mt-20 flex items-center justify-center flex-wrap max-w-lg  mx-auto gap-4">
            {skills.map(skill => <Skill selectSkill={selectSkill} skill={skill} key={skill.id} />)}
            {currentSkill ? <SkillDialog open={openDialog} setOpen={setOpenDialog} skill={currentSkill} /> : null}
        </div>
    )
}

const Skill = ({
    skill,
    selectSkill
}: {
    skill: SkillType,
    selectSkill: (selectedSkill: SkillType) => void
}) => {
    return <div className="card cursor-pointer font-medium" onClick={() => { selectSkill(skill) }}>
        <p>{skill.label}</p>
    </div>
}

const SkillDialog = ({
    open,
    skill,
    setOpen
}: {
    open: boolean,
    skill: SkillType,
    setOpen: Dispatch<SetStateAction<boolean>>
}) => {
    return <Modal setOpen={setOpen} open={open} className="px-4 lg:px-0">
        <div className="skill-dialog relative">
            <button className="absolute right-4 top-4" onClick={() => { setOpen(false) }}>
                <CgClose />
            </button>
            <p className="text-xl mb-2">{skill.label}</p>
            <p className="text-sm">{skill.description}</p>
            {skill.technologies ? <div className="mt-10 flex flex-col gap-2">
                {skill.technologies.map(tech => <div key={tech.id} className="flex items-center justify-between">
                    <p className="text-sm">{tech.label}</p>
                    <Proficiency score={tech.proficiency} maxScore={10} isHalf={true} />
                </div>)}
            </div> : null}
        </div>
    </Modal>
}

const Proficiency = ({
    score,
    maxScore,
    isHalf
}: {
    score: number,
    maxScore: number,
    isHalf: boolean
}) => {

    const newMaxScore = useMemo(() => isHalf ? maxScore / 2 : maxScore, [maxScore, isHalf])
    const newScore = useMemo(() => isHalf ? score / 2 : score, [score, isHalf])

    const renderStar = (currentNumber: number) => {
        if (newScore - currentNumber === -0.5) {
            return <IoMdStarHalf color="rgb(211, 65, 3)" />
        }
        if (newScore - currentNumber >= 0) {
            return <IoMdStar color="rgb(211, 65, 3)" />
        }
        return <IoIosStarOutline color="rgb(211, 65, 3)" />
    }

    return <div className="flex items-center">
        {arrayFromNumber(newMaxScore).map((value, index) => <div key={index}>
            {renderStar(index + 1)}
        </div>)}
    </div>
}

export default SkillsList