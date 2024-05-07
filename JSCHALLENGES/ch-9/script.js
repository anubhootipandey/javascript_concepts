function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters

    if (!isNaN(weight) && !isNaN(height) && height > 0 && weight > 0) {
        var bmi = weight / (height * height);
        // Display the result
        document.getElementById("result").textContent = "Your BMI: " + bmi.toFixed(2);
    } else {
        document.getElementById("result").textContent = "Please enter valid weight and height values.";
    }
}
