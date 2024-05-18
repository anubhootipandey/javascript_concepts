// function mathSequence(arr){
//     let arithmetic = new Set();
//     let geometric = new Set();

//     for(let i=1; i<arr.length; i++){
//         let arith = arr[i] - arr[i - 1];
//         arithmetic.add(arith);
//         let geo = arr[i] / arr[i - 1];
//         geometric.add(geo);
//     }

//     if(arithmetic.size === 1) {
//         return "Arithmetic";
//     }
//     if(geometric.size === 1) {
//         return "Geometric";
//     }
//     return -1;
// }

// console.log(mathSequence([2, 4, 6, 8]));
// console.log(mathSequence([3, 9, 27]));
// console.log(mathSequence([2, 3, 5, 9]));



//---------------------------OR------------------------------>

function mathSequence(arr){
	let returnValue = "";
	for(let i = 0; i < arr.length-1; i++){
		if(arr[i] + arr[0] === arr[i+1]){
			returnValue = "Arithmetic"
		}
		else if(arr[i] * arr[0] === arr[i+1]){
			returnValue = "Geometric"
		}
		else{
			returnValue = "No Pattern"
		}
	}
	return(returnValue)	
}

console.log(mathSequence([2, 4, 6, 8]));
console.log(mathSequence([3, 9, 27]));
console.log(mathSequence([2, 3, 5, 9]));









