import { CourseType } from "./04";

test("should take old men older then 98", () => {
   const ages = [23, 35, 100, 77];

   const oldAges = ages.filter(age => age > 90);

   expect(oldAges.length).toBe(1);
   expect(oldAges[0]).toBe(100);
});

test("should take course chiper 160", () => {
   const courses = [
      { title: "CSS", price: 110 },
      { title: "JS", price: 200 },
      { title: "REACT", price: 150 }
   ];

   const chipCourses = courses.filter(course => course.price < 160);

   expect(chipCourses.length).toBe(2);
   expect(chipCourses[0].title).toBe('CSS');
   expect(chipCourses[1].title).toBe('REACT');
});

test("get only copleted task", () => {
   const tasks = [
      {id: 1, title: 'Bread', isDone: false},
      {id: 2, title: 'Milk', isDone: true},
      {id: 3, title: 'Solt', isDone: false},
      {id: 4, title: 'Sugar', isDone: true},
   ]

   const completedTasks = tasks.filter(task => task.isDone)
   expect(completedTasks.length).toBe(2);
   expect(completedTasks[0].id).toBe(2);
   expect(completedTasks[1].id).toBe(4);
})


test("get only uncopleted task", () => {
   const tasks = [
      {id: 1, title: 'Bread', isDone: false},
      {id: 2, title: 'Milk', isDone: true},
      {id: 3, title: 'Solt', isDone: false},
      {id: 4, title: 'Sugar', isDone: true},
   ]

   const completedTasks = tasks.filter(task => !task.isDone)
   expect(completedTasks.length).toBe(2);
   expect(completedTasks[0].id).toBe(1);
   expect(completedTasks[1].id).toBe(3);
})



/*  test("Houses should be destroyed", () => {
    demolishHousesOnTheStreet(city, "Happy street");
 
    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
 });

 test("list of streets titles of houses", () => {
    let happyHouses = getHousesOnTheStreet(city.houses, "Happy street");
    let whiteHouses = getHousesOnTheStreet(city.houses, "White street");
 
    expect(happyHouses.length).toBe(2);
    expect(whiteHouses.length).toBe(1);
 });
 
 test("buildings with correct staff count", () => {
    let buildings =
       getBuildingsWithStaffCountGreaterThen(
          city.governmentBuildings,
          500);
 
    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("FIRE-STATION");
 }); */