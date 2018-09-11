function multipleOfThreeFive(n) {
	var sum = 0;
	for (var i = 0; i < n; i++) {
		if (i % 3 == 0 || i % 5 == 0) {
			sum += i;
		}
	}
	return sum;
}

console.log(multipleOfThreeFive(1000));

// 1 - Find a way to loop through all numbers under 1000
// 2 - Only sum numbers divisible by 3 or 5
// 3 - Return sum