//object destructuring

const band = {
    bandName: "led zeplin",
    famousSong: "stairway to heaven"
}


// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);

//destructuring

const {bandName, famousSong} = band;
console.log(bandName, famousSong);
