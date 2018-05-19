function divisibleTriangle(n) {
	var i = 2;
	var triangleNumber = 1;
	var divisorsCount = 0;
	while (divisorsCount < 500) {
		triangleNumber += i;
		i++;
		var divisorsCount = function getDivisors(triangleNumber){
			var divs = 0;
			for (var i = 1; i < Math.sqrt(triangleNumber); i++) {
				if (triangleNumber % i == 0) {
					divs += 2
				}
			}
			if (Math.sqrt(triangleNumber) % 1 == 0) {
				divs++;
			}
			return divs
		}(triangleNumber);
	}
	return triangleNumber;
}

console.log(divisibleTriangle(500));