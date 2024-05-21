//Find the output

function print(x){
    if(x <= 1){
        print(x + 1);
        console.log("x in if block is " + x);
    } else if(x >= 1000000000000){
        console.log("x in else if block is " + x);;
    }
    print(x + 1);
}

print(0);

//Output:
//Uncaught RangeError: Maximum call stack size exceeded