//Question: Find the output

let place = "US";
let department = { [getStudentPlace()]: 'India', [place + "Department"]: 'English', standard: 100};
function getStudentPlace(){ return place;};
let division = "standard";

let { [getStudentPlace()]: placeDetails, [place + "Department"]: departmentDetails, [division]:standard } = department;

console.log(placeDetails + ' & ' + departmentDetails + ' & ' + standard);

//My answer:-
//     India & English & 100