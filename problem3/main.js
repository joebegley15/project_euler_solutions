// Get Factors
function getFactors(n) {
	var factors = [];
	for (var i = 1; i <= n; i++) {
		if (n % i == 0) {
			factors.push(i);
		}
	}
	return factors;
}
// Determine If Factors Are Prime

function isPrime(n) {
	return getFactors(n).length == 2;
}

// Function Greatest Prime Factor

function greatestPrimeFactor(n) {
	var allFactors = getFactors(n);
	var gpf = 1;
	allFactors.map(function(factor){
		if (isPrime(factor)) {
			gpf = factor;
		}
	})
	return gpf;
}

// Execute

console.log(greatestPrimeFactor(101));