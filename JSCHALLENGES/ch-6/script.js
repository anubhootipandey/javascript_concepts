// function myFunction() {
//     let person = prompt("Please enter your name", "Harry Potter");
//     if (person != null) {
//       document.getElementById("demo").innerHTML =
//       "Hello " + person + "! How are you today?";
//     }
//   }
// console.log(myFunction());


function myFunction(){
    let person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
  else {
    window.stop()
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
    }
}
myFunction()
