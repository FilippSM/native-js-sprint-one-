import { ManType } from "./Destructing";

let props: ManType

beforeEach(() => {
    props = {
        name: "Aisylu",
        age: 26,
        lessons: [{title:'9'}, {title:"2"}],
        address: {
            street: {
                title: 'Lebedeva'
            }
        }
    }
/* const {age,lessons, address: {street: {title}}} = props */
})

test('', () => {

})

/* const age = props.age
const lessons = props.lessons

эти две строчки эквиваленты
const {age, lessons} = props;
 */

test('', () => {
const {age, lessons} = props;

expect(age).toBe(26)
expect(lessons.length).toBe(2)
})


