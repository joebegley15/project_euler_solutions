const palThreeDigit = function() {
	let max = 0, product;
	for (var i = 100; i < 1000; i++) {
		for (var x = 100; x < 1000; x++) {
			product = i*x;
			if (product > max) {
				if (product.toString().split('').reverse().join('') == product.toString()) {
					max = product;
				}
			}
		}		
	}
	return max;
}

console.log(palThreeDigit());