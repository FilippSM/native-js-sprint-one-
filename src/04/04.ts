const ages = [23, 35, 101, 99];

const predicate = (age: number) => {
    return age > 90
}

const oldAges = [100];

const courses = [
    {title: "CSS", price: 110}, 
    {title: "JS", price: 200}, 
    {title: "REACT", price: 150}
];

export type CourseType = {
    title: string
    price: number
}

//< 160
const chipPredicate = (course: CourseType) => {
    return course.price < 160
}
const chipCourses = [
    {title: "CSS", price: 110}, 
]