/* type CityType = {
    title: string
    countryTitle: string
}

type AdressType = {
    streetTitle: string
    city: CityType
}

type TechType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AdressType
    technologies: Array<TechType>

} */




type TechType = {
    id: number
    title: string
}

type CityType = {
    title: string
    countryTitle: string
}

type AdressType = {
    streetTitle: string
    city: CityType
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AdressType
    technologies: TechType[]
}


export const student: StudentType = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}