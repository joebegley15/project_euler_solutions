// Smallest positive number that is evenly divisible by all of the numbers from 1 to n


// Smallest Mult
// Uses a loop to check if the number is divisible by a number already added to the final product. If it is, we remove it.

function smallestMult(n) {
	var arr = [], product = 1;
	for (var i = 1; i <= n; i++) {
		var pushMe = i;
		arr.map(function(element){
			if (pushMe % element == 0){
				pushMe = pushMe / element;
			}
		})			
		arr.push(pushMe);
	}
	arr.map(function(element){
		product *= element;
	})
	return product;
}

console.log(smallestMult(20));