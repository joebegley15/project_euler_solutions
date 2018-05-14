// Sum of numbers divisible by 3 or 5

function sumFivBy3or5(n){
	sum = 0
	for (var i = 0; i < n; i++) {
		if (i % 3 == 0 || i % 5 == 0) {
			sum += i;
		}
	}
	return sum;
}

console.log(sumFivBy3or5(1000));