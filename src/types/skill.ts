type Technology = {
    id: string,
    label: string,
    proficiency: number
}

export type Skill = {
    id: string,
    label: string,
    description: string,
    technologies?: Technology[]
}