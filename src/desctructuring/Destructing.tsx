export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}


type PropsType = {
    title: string
    man: ManType
}


/* export const ManComponent: React.FC<PropsType> = ({ props }) => {
    const { title, man } = props
} */

export const ManComponent: React.FC<PropsType> = ({ title, man }) => {

/*     const { title, man } = props */ //внктри блока деструктуризация 
/*     const { title, man, ...rops} = props 
запишутся остальные свойства так как если свойст более двух
к ним потом нельзя будет обратиться при тако записи
const { title, man } = props и например man.ability
*/
    return (
        <div>
            <h1>{title}</h1>
            <hr />
            <div>
                {man.name}
            </div>
        </div>
    )
};

