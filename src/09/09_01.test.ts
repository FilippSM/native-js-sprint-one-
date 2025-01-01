type UserType = {
    name: string
    age: number
    address: {title: string}
}

function icreaseAge(u: UserType) {
    u.age++
}

test('reference type test', () => {
    var user: UserType = {
        name: "Fil",
        age: 32,
        address: {
            title: "Minsk"
        }
    }
    
    icreaseAge(user);

    expect(user.age).toBe(33);

    const superman = user;
    superman.age = 1000;

    expect(user.age).toBe(1000)
})

test('array test', () => {
    var users = [
        {
            name: "Fil",
            age: 32
        },
        {
            name: "Dimych",
            age: 33
        }
    ]
    
    var admins = users

    admins.push({name: "Boris", age: 10});

    expect(users[2]).toEqual({name: "Boris", age: 10});
})

test('array referenece test', () => {
    var usersCount = 100;

    var adminsCount = usersCount;

    adminsCount += 1;

    expect(adminsCount).toBe(101);
})

test('reference type test', () => {
    var user: UserType = {
        name: "Fil",
        age: 32,
        address: {
            title: "Minsk"
        }
    }
    
    var user2: UserType = {
        name: "Natasha",
        age: 30,
        address: user.address
    }

    const users = [user, user2, {name: "Dasha", age: 0.7, address: user.address}]

    user2.address.title = "Kanary";
 
    const admins = [user, user2];

    admins[0].name = "Filipp"

    expect(users[0].name).toBe("Filipp")
    expect(user.address.title).toBe("Kanary")
})