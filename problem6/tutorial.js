function sumOfSquares(n) {
	let sum = 0;
	for (var i = 1; i <= n; i++) {
		sum += i * i;
	}
	return sum;
}

function squareOfSums(n) {
	let sum = 0;
	for (var i = 1; i <=n; i++) {
		sum += i;
	}
	return sum * sum;
}

function diffOfSquares(n) {
	return squareOfSums(n) - sumOfSquares(n);
}

console.log(diffOfSquares(100));