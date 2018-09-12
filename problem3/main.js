// Get Factors
const getFactors = function(n) {
	const factors = [], limit = Math.sqrt(n);
	for (var i = 1; i <= limit; i+=2) {
		const div = Math.floor(n / i);
		if (div * i === n) {
		    factors.push(i);
		    if (div !== n) {
		        factors.push(div);
		    }
		}
	}
	return factors;
}
// Determine If Factors Are Prime

const isPrime = (n) => {
    if (n === 2) {
        return true;
    } else if (n < 2 || n % 2 === 0) {
        return false;
    }
    if (n < 9) {
        return true;
    } else if (n % 3 === 0) {
        return false;
    }

    const sqrt = Math.floor(Math.sqrt(n));
    for (let i = 5; i <= sqrt; i += 6) {
        if (n % i === 0) {
            return false;
        }
        if (n % (i + 2) === 0) {
            return false;
        }
    }

    return true;
};

// Function Greatest Prime Factor

const greatestPrimeFactor = function(n) {
	let factors = getFactors(n);
	let gpf = factors.reduce((gpf = 1, factor) => factor > gpf && isPrime(factor) ? factor : gpf);
	return gpf;
}

// Execute

console.log(greatestPrimeFactor(600851475143));