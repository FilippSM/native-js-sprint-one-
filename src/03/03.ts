import { GovernmentBuildingsType, HouseType } from "../02/02";
import { StudentType } from "../02/02_02"

export const addSkill = (ts: StudentType, skill: string) => {
    ts.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLive = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const changeBudget = (buildings: GovernmentBuildingsType, budjet: number)=> {
    buildings.budget += budjet;
}

export const repairHouse = (houseType: HouseType)=> {
    houseType.repaired = true;
}
export const toFireStaff = (buildings: GovernmentBuildingsType, staffCountToFire: number)=> {
    buildings.staffCount -= staffCountToFire;
}
export const toHireStaff = (buildings: GovernmentBuildingsType, staffCountToHire: number)=> {
    buildings.staffCount += staffCountToHire;
}