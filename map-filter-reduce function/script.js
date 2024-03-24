//const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

/*----------------------------Map method-----------------------------*/

// weeks.map((week, index) => {
//     console.log(index + 1, week);
//     return week.toUpperCase();
// })

// const capitalWeeks = weeks.map((week, index) => {
//     console.log(index + 1, week);
//     return week.toUpperCase();
// })

// console.log(
//     weeks.map((week) => {
//         console.log(week);
//         return week.toUpperCase();
//     })
// )

// const capitalWeeks = weeks.map((week, index, array) => {
//     //console.log(index + 1, week);
//     console.log(array)
//     return week.toUpperCase();
// })

/*---------------------------Filter method-----------------------*/

// const filteredweeks = weeks.filter((week, index, array) => {
//     //console.log(index + 1, week);
//     return week.includes('t');
// })

// const filteredweeks = weeks.filter((week, index, array) => {
//     return true
// })

const students = [
    {
        name: 'Tanu',
        age: 18
    },
    {
        name: 'Anu',
        age: 20
    },
    {
        name: 'Sattu',
        age: 15
    },
    {
        name: 'Nidhi',
        age: 26
    }
]

//Chaining of array methods
const filteredStudents = students.filter((student) => {
    return student.age <= 18;
}).map((student) => {
    return student.name
})