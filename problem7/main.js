// Get Factors
function getFactors(n) {
	var factors = [];
	for (var i = 1; i <= Math.sqrt(n); i++) {
		if (n % i == 0) {
			factors.push(i);
			factors.push(n/i);
		}
	}
	return factors;
}
// Determine If Factors Are Prime

function isPrime(n) {
	return getFactors(n).length == 2;
}

//N length smallest primes list
function primeList(n) {
	var arr = [], i = 2;
	while (arr.length < n) {
		if (isPrime(i)) {
			arr.push(i);
		}
		i++;
	}
	return arr;
}

//Return last element
function lastPrime(n) {
	var arr = primeList(n);
	return arr[arr.length - 1];
}

// Call function
console.log(lastPrime(10001));
