const students = [
    {name: "Alexandre", grade:10},
    {name: "Jasmine", grade:10},
    {name: "Dean", grade:4},
    {name: "Claire", grade:6}
]

function isApproved(student){
    return student.grade >= 6
}

const approvedStudents = students.filter(isApproved)

console.log(approvedStudents)

//////////////////////////////////////////////////////////////

const people = [
    {name: "Jim", age: 21, eyeColor: "blue"},
    {name: `Pam`, age: 24, eyeColor: "brown"},
    {name: 'Michael', age: 18, eyeColor:"brown"}
]

function allowedToDrink(person){
    return person.age >= 21 && person.eyeColor === 'brown'
}

const canDrink = people.filter(allowedToDrink)

console.log(canDrink)