const weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
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
const filteredweeks = weeks.filter((week, index, array) => {
    //console.log(index + 1, week);
    return week.includes('t');
})