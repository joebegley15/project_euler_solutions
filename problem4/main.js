// Largest palendrom that is the sum of two three digit numbers


function palThree() {
	var greatest = 0;
	for (var i = 100; i < 1000; i++) {
		for (var x = 100; x < 1000; x++) {
			var num = (i * x);
			var str = num.toString();
			if (str == str.split("").reverse().join("") && num > greatest) {
				greatest = num;
			}
		}
	}
	return greatest;
}

console.log(palThree());