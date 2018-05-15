// Get Factors
function isPrime(n) {
	var factors = [];
	for (var i = 2; i <= Math.sqrt(n); i++) {
		if (n % i == 0) {
			return false;
		}
	}
	return true;
}

// Sum all primes under n
function sumPrimes(n) {
	var sum = 0;
	var primes = [];
	for (var i = 2; i < n; i++) {
		if (isPrime(i)) {
			sum += i;
		}
	}
	return sum;
}

console.log(sumPrimes(2000000));