// Sum of Squares
function sumOfSquares(n){
	var sum = 0;
	for (var i = 1; i <= n; i++) {
		sum += i * i;
	}
	return sum;
}
// Square of Sums
function squareOfSums(n){
	var sum = 0;
	for (var i = 1; i <= n; i++) {
		sum += i;
	}
	return sum * sum;	
}
// Difference
function difference(n) {
	return squareOfSums(n) - sumOfSquares(n);
}

// Execute
console.log(difference(100));