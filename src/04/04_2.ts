import { CityType, GovernmentBuildingsType } from "../02/02";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: GovernmentBuildingsType[], number: number) => {
    return buildings.filter(b => b.staffCount > number)
}