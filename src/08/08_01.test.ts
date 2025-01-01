 type UsersType = {
    [key: string]: {id: number, name: string}
 }

 let users: UsersType;
 
 beforeAll(( ) => {
    users = {
        '101': {id: 101, name: 'Dimych' },
        '2323': {id: 2323, name: 'N' },
        '1212': {id: 101, name: 'V' },
        '1': {id: 1, name: 'K' },
    }
 })

 test("should update corresponding user", () => {
    users['1'].name = 'Ekaterina'

    expect(users['1'].name).toBe('Ekaterina');
    expect(users['1']).toEqual({id: 1, name: 'Ekaterina' });//по значению
 })

 test("should update corresponding user", () => {
    delete users['1']

    expect(users['1']).toBeUndefined()
 })