test('Simple object', () => {
    let man = {
        name: 'John',
        age: 28
    };

    let manFullCopy = {...man};
    manFullCopy.age = 33;
    
    expect(man.age).toBe(28);
    expect(manFullCopy.age).toBe(33);
})

test('Array of primitives', () => {
    let numbers = [1, 2, 3];

    let numbersFullCopy = [...numbers];
    numbersFullCopy[0] = 99;
    
    expect(numbers[0]).toBe(1);
    expect(numbersFullCopy[0]).toBe(99);
})

test('Object inside an object', () => {
    let man1 = {
        name: 'John',
        age: 28,
        mother: {
            name: 'Kate',
            age: 50
        }
    };

    let man1FullCopy = {...man1, mother: {...man1.mother}};
    man1FullCopy.mother.age = 101;
    
    expect(man1.mother.age).toBe(50)
    expect(man1FullCopy.mother.age).toBe(101)
})

test('Array of primitives inside an object', () => {
    let man2 = {
        name: 'John',
        age: 28,
        friends: ["Peter", "Steven", "William"]
    };

    let man2FullCopy = {...man2, friends: [...man2.friends]};
    man2FullCopy.friends[0] = "Ivan";
    
    expect(man2.friends[0]).toBe("Peter")
    expect(man2FullCopy.friends[0]).toBe("Ivan")
})

test('Array of objects', () => {
    let people = [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ];

    let peopleFullCopy = people.map(el => ({...el}));
    peopleFullCopy[1].age = 45;
    
    expect(people[1].age).toBe(32)
    expect(peopleFullCopy[1].age).toBe(45)
})

test('Array of objects inside object', () => {
    let man3 = {
        name: 'John',
        age: 28,
        friends: [
            {name: "Peter", age: 30},
            {name: "Steven", age: 32},
            {name: "William", age: 28}
        ]
    };

    let man3FullCopy = {...man3, friends: man3.friends.map(el => ({...el}))}
    man3FullCopy.friends[1].name = "Serg";
    
    expect(man3.friends[1].name).toBe("Steven")
    expect(man3FullCopy.friends[1].name).toBe("Serg")
})

test('Object inside an object, inside an object', () => {
    let man4 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            }
        }
    };

    let man4FullCopy = {...man4, mother: {...man4.mother, work: {...man4.mother.work}}}
    man4FullCopy.mother.work.position = "Driver";
    
    expect(man4.mother.work.position).toBe("doctor")
    expect(man4FullCopy.mother.work.position).toBe("Driver")
})

test('Array of objects inside object -> object', () => {
    let man5 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {name: "Kevin", age: 80},
                {name: "Jennifer", age: 78},
            ]
        }
    };

    let man5FullCopy = {...man5, mother: {...man5.mother, parents: man5.mother.parents.map(el => ({...el}))}}
    man5FullCopy.mother.parents[0].age = 91;
    
    expect(man5.mother.parents[0].age).toBe(80)
    expect(man5FullCopy.mother.parents[0].age).toBe(91)
})

test('Object inside an object -> array -> object ->  object', () => {
    let man6 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {
                    name: "Kevin",
                    age: 80,
                    favoriteDish: {
                        title: "borscht"
                    }
                },
                {
                    name: "Jennifer",
                    age: 78,
                    favoriteDish: {
                        title: "sushi"
                    }
                },
            ]
        }
    };

    let man6FullCopy = {...man6, mother: {...man6.mother, parents: man6.mother.parents.map(el => ({...el}))}}
    man5FullCopy.mother.parents[0].age = 91;
    
    expect(man5.mother.parents[0].age).toBe(80)
    expect(man5FullCopy.mother.parents[0].age).toBe(91)
})