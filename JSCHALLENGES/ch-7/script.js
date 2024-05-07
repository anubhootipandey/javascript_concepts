function calculateArea(){
    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
    var sideC = parseFloat(document.getElementById("sideC").value);

    var s = (sideA + sideB + sideC) / 2;
    var area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

    if(!isNaN(area)){
        document.getElementById("result").innerHTML = "Area: " + area.toFixed(2);
    }
    else {
        document.getElementById("result").innerHTML = "Invalid Input!";
    }
}