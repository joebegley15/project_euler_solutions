//Sum of even fib numbers under value n

function evenSumUnder(n) {
	if (n < 3) {
		return 0;
	}
	var fibArr = [0,1];
	var sum = 0;
	while (fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2] < n) {
		fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
		if ((fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]) % 2 == 0) {
			sum += fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
		}
	}
	return fibArr, sum;
}

// Run function for value 4,000,000
console.log(evenSumUnder(4000000));