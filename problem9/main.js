function findTriplet(){
	var a = 0, b = 0, c = 0, sum = 1000;
	var found = false;
	for (a = 0; a < sum / 3; a++) {
		for (b = a; b < sum / 2; b++) {
			c = sum - a - b;
			if (a ** 2 + b ** 2 == c ** 2) {
				return (a * b * c);
			}
		}
	}
}

console.log(findTriplet());