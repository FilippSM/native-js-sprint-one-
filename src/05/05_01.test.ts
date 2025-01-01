import { CityType } from "../02/02"
import { createMessages, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses } from "./05_02"

export type ManType = {
    name: string
    age: number
}

let people: Array<ManType> = []

beforeEach(() => {
    people = [
        { name: "Andrew Ivanov", age: 33 },
        { name: "Alexander Petrov", age: 24 },
        { name: "Dmitry Sidorov", age: 18 },
    ]
})

test("should get array of greeting message", () => {
    const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcom to IT-Incubator`);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Andrew. Welcom to IT-Incubator");
    expect(messages[1]).toBe("Hello Alexander. Welcom to IT-Incubator");
    expect(messages[2]).toBe("Hello Dmitry. Welcom to IT-Incubator");
});

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses:
            [
                {
                    id: 1,
                    buildedAt: 2012, repaired: false,
                    address: { number: 100, street: { title: "White street" } }
                },
                {
                    id: 2,
                    buildedAt: 2008, repaired: false,
                    address: { number: 100, street: { title: "Happy street" } }
                },
                {
                    id: 3,
                    buildedAt: 2020, repaired: false,
                    address: { number: 200, street: { title: "Hogwarts street" } }
                },
            ],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }

        ],
        citiziensNumber: 1000000
    }
})

test('list of streets titles of government buildings', () => {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("South Str");
})

test('list of streets titles', ()=> {
    let streetsNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("White street");
    expect(streetsNames[1]).toBe("Happy street");
    expect(streetsNames[2]).toBe("Hogwarts street");
})

test("create greeting messages for streets", () => {
    const messages = createMessages(city.houses);
 
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello guys from White street");
    expect(messages[1]).toBe("Hello guys from Happy street");
    expect(messages[2]).toBe("Hello guys from Hogwarts street");
 });