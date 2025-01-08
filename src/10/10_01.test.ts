import { addNewBooksToUser, mikeHairsStyle, moveUser, moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2, upgradeUserLaptop, UserType, UserWidthBooksType, UserWidthLaptopType, WithCompaniesType } from "./10_01";



test('reference type test', () => {
    var user: UserType = {
        name: "Fil",
        hair: 32,
        address: {
            city: "Minsk"
        }
    }
    
    const awesomeUser = mikeHairsStyle(user, 2);
    
    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)

})

test('change address', () => {
    var user: UserWidthLaptopType = {
        name: "Fil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZeenBook"
        }

    }
    
    const movedUser = moveUser(user, 'Kiev');
 
    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe("Kiev")
})

test('upgrade laptop to macbook', () => {
    var user: UserWidthLaptopType = {
        name: "Fil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZeenBook"
        }

    }
    
    const movedLaptop = upgradeUserLaptop(user, 'Macbook');
 
    expect(user).not.toBe(movedLaptop)
    expect(user.laptop).not.toBe(movedLaptop.laptop)
    expect(user.address).toBe(movedLaptop.address)
    expect(movedLaptop.laptop.title).toBe("Macbook")
    expect(user.laptop.title).toBe("ZeenBook")
})

test('moved house', () => {
    var user: UserWidthLaptopType & UserWidthBooksType= {
        name: "Fil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZeenBook"
        },
        books: ['css', 'html', 'js', 'react']

    }
    
    const userCopy = moveUserToOtherHouse(user, 99);
 
    expect(user).not.toBe(userCopy)
    expect(user.address).not.toBe(userCopy.address)
    expect(user.books).toBe(userCopy.books)
    expect(userCopy.address.house).toBe(99)
})

test('add new book to user', () => {
    var user: UserWidthLaptopType & UserWidthBooksType= {
        name: "Fil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZeenBook"
        },
        books: ['css', 'html', 'js', 'react']

    }
    
    const userCopy = addNewBooksToUser(user, ['ts', 'rest api']);
 
    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('rest api')
})

test('update js to ts', () => {
    var user: UserWidthLaptopType & UserWidthBooksType= {
        name: "Fil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZeenBook"
        },
        books: ['css', 'html', 'js', 'react']

    }
    
    const userCopy = updateBook(user, 'js', 'ts');
 
    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})

test('remove js book', () => {
    var user: UserWidthLaptopType & UserWidthBooksType= {
        name: "Fil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZeenBook"
        },
        books: ['css', 'html', 'js', 'react']

    }
    
    const userCopy = removeBook(user,'js') as UserWidthLaptopType & UserWidthBooksType;
 
    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
})

test('update company', () => {
    var user: UserWidthLaptopType & WithCompaniesType= {
        name: "Fil",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZeenBook"
        },
        companies: [{id: 1, title: 'ЕПАМ'}, {id: 2, title: 'it-incubator'}]

    }
    
    const userCopy = updateCompanyTitle(user, 1, 'EPAM');
 
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('EPAM')
})

test('update company', () => {
    let companies = {
        "Dimych": [{id: 1, title: 'ЕПАМ'}, {id: 2, title: 'it-incubator'}],
        "Artem": [{id: 2, title: 'it-incubator'}]
    }

    const copy = updateCompanyTitle2(companies, 'Dimych', 1, 'EPAM')

    expect(copy["Dimych"]).not.toBe(companies["Dimych"])
    expect(copy["Artem"]).toBe(companies["Artem"])
    expect(copy["Dimych"][0].title).toBe("EPAM")
})