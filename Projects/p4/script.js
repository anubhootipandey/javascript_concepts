//Task: Create circles when you click the screen and also delete the circle if it extend more than 2 circle and console if the second circle is intersecting with first one.

const circleCoor = [];

function circleIntersection(x0, y0, r0, x1, y1, r1){
    return Math.hypot(x0 - x1, y0 - y1) <= r0 + r1;
}

function logIfIntersectingCircle(){
    const firstCirc = circleCoor[0];
    const secondCirc = circleCoor[1];
    const x1 = firstCirc.x;
    const x2 = secondCirc.x;
    const r1 = firstCirc.radius; 
    const y1 = firstCirc.y;
    const y2 = secondCirc.y;
    const r2 = secondCirc.radius;

    return circleIntersection(x1, y1, r1, x2, y2, r2);
};

document.addEventListener("click", (e) => {

    const totalCircle = document.querySelectorAll(".circle");
    if(totalCircle.length === 2){
        totalCircle.forEach(circ => {
            document.body.removeChild(circ);
            circleCoor.shift();
        });
    };
    const x = e.clientX;
    const y = e.clientY;

    const radius = Math.floor(Math.random() * (200 - 50) + 50);
    console.log("x = ", x, "y = ", y, "rad =", radius);
    circleCoor.push({x, y, radius});

    const circle = document.createElement("div"); 
    circle.classList.add("circle");
    circle.style.top = y - (radius) + "px";
    circle.style.left = x - (radius) + "px";
    circle.style.width = radius*2 + "px";
    circle.style.height = radius*2 + "px";

    document.body.appendChild(circle);

    if(circleCoor.length === 2){
        const res = logIfIntersectingCircle();
        console.log("Intersecting =", res);
    }
});