type Technology = {
    id: string,
    label: string,
    proficiency: number
}

export type SkillType = {
    id: string,
    label: string,
    description: string,
    technologies?: Technology[]
}