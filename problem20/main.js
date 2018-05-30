function factorialDigitSum(n) {
	var total;
	for (var i = 1; i<=n; i++) {
		total = total * i || i;
	}
	return total.toString().split('');
}

console.log(factorialDigitSum(100));