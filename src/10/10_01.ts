export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}

export type UserWidthLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWidthBooksType = UserType & {
    books: Array<string>
}

type CompanyType = {
    id: number, title: string
}

export type WithCompaniesType = {
    companies: Array<CompanyType>
}


export function mikeHairsStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }

    /*   copy.hair = u.hair / power */

    return copy
}

export function moveUser(u: UserWidthLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }

    }
}

export function moveUserToOtherHouse(u: UserWidthLaptopType & UserWidthBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }

    }
}

export function upgradeUserLaptop(u: UserWidthLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }

    }
}

export function addNewBooksToUser(u: UserWidthLaptopType & UserWidthBooksType, books: Array<string>) {
    return {
        ...u,
        books: [...u.books, ...books]
    }
}

export function updateBook(u: UserWidthLaptopType & UserWidthBooksType, oldBook: string, newBook: string) {
    /* let index = u.books.findIndex(el => el === oldBook);
    let copy = {...u, books: [...u.books]};
    copy.books[index] = newBook;

    return copy;  */
    /*  через map */

    return {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    }
}

export function removeBook(u: UserWidthLaptopType & UserWidthBooksType, oldBook: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== oldBook)
    }
}

export function updateCompanyTitle(user: UserWidthLaptopType & WithCompaniesType, companyId: number, newTitle: string) {
    return {
        ...user,
        companies: user.companies.map(c => c.id === companyId
            ? {...c, title: newTitle} : c)
    }

    //через if else
   /*  return {
        ...user,
        companies: user.companies.map(c => {
            if (c.id === companyId) {
                return {...c, title: newTitle}
            } else return c
        })
    } */
}

export const updateCompanyTitle2 = (
    companies: {[key: string]: Array<CompanyType>}, 
    userName: string, 
    companyId: number, 
    newTitle: string) => {

    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId
        ? {...c, title: newTitle} : c)


    return companyCopy;
}