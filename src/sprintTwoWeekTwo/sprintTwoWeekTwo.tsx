let age = 18;
let age2 = age;

var a = {
    name: 'it-incybator.com',
    protocol: 'http',
    isOnline: true,
    students: ['ivan', 'andrey', 'farid'],
    classroom: {
        teatcher: {
            name: 'wew',
            age: 18
        }
    }
}

var b = {...a}; //поверхностаная копия, копируются только примитивы остальное ссылка
console.log(b === a); //false
console.log(b.name === a.name);//true так сранвнива.тся значения (так как примитивы)
b.classroom.teatcher.name = 'Dmitry';
console.log(b.classroom.teatcher.name === a.classroom.teatcher.name); //true

/* а как скопировать */
b.classroom = {...a.classroom};
b.classroom.teatcher = {...a.classroom.teatcher};
b.students = [...a.students];

//проверим глубокое копирование
b.classroom.teatcher.name = 'Alex';
console.log(b.classroom.teatcher.name === a.classroom.teatcher.name); //false

let c = {
    ...a,
    protocol: 'https' //перезаписали свойство
};
console.log(c.protocol); //https

let d = {
    ...a,
    students: {...a.students} //копируем студентов
};

let array = [1, 2, 3, 4];
let newArray = [...array];
newArray.push(7);

//кароче синтаксис
let newArrayTwo = [...array, 7];

//как сделать глубокую копию массива объектов
let arryTwo = [{name: 'D', a: {age: 21}}, {name: 'M'}];
let newArrayTWo = arryTwo.map(el => ({...el, a: {...el.a}}))
