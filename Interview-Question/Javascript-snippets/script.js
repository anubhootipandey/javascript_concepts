//Get current date and time
const now = new Date();

//Check if a variable is an array
Array.isArray(variable);

//Merge two arrays
const newArray = array1.concat(array2);

//Remove duplicates from an array
const uniqueArray = [...new Set(array)];

//Sort an array in ascending order
array.sort((a, b) => a - b);

//Reverse an array
array.reverse();

//Convert string to number
const number = parseInt(string);

//Generable a random number between two values
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

//Check if a string contains a substring
string.includes(substring);

//Get the length of an object
Object.keys(object).length;

//Convert object to array
const array0 = Object.entries(object);

//Check if an object is empty
const array = Object.entries(object);

//Get current url
const currURL = window.location.href;

//Redirect to a new URL
window.location.replace(url);

//Set a cookie
document.cookie = "name=value; expires=date; path=path; domain=domain; secure";

//Get a cookie
const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)name\s*\=\s*([^;]*).*$)|^.*$/, "$1");

//Check if a cookie exists
document.cookie.split(';').some((item) => item.trim().startsWith('name='));

//Remove a cookie
document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=path; domain=domain; secure";

//Get the current viewport dimensions
const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

//Copy text to clipboard
navigator.clipboard.writeText(text);