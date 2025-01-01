import { GovernmentBuildingsType, HouseType } from "../02/02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map(b => b.address.street.title)
}
export const getStreetsTitlesOfHouses = (houses: HouseType[]) => {
    return houses.map(b => b.address.street.title)
}

export const createMessages = (houses: HouseType[]) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}