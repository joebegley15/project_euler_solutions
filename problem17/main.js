function countLetters(n) {
	var total = 0;
	var numberMap = {
		1 : 'one',
		2 : 'two',
		3 : 'three',
		4 : 'four',
		5 : 'five',
		6 : 'six',
		7 : 'seven',
		8 : 'eight',
		9 : 'nine',
		10 : 'ten',
		11 : 'eleven',
		12 : 'twelve',
		13 : 'thirteen',
		14 : 'fourteen',
		15 : 'fifteen', 
		16 : 'sixteen',
		17 : 'seventeen',
		18 : 'eighteen',
		19 : 'nineteen',
		20 : 'twenty',
		30 : 'thirty',
		40 : 'forty',
		50 : 'fifty',
		60 : 'sixty',
		70 : 'seventy',
		80 : 'eighty',
		90 : 'ninety',
		100 : 'hundred',
		1000 : 'onethousand'

	}
	for (var i = 1; i <= n; i++) {
		var printStr = '';
		var hundreds = Math.floor(i / 100) * 100;
		if (hundreds > 0 && i < 1000) {
			printStr += (numberMap[hundreds / 100]);
			printStr += (numberMap[100]);
		}
		var remainder = i % 100;
		var tens = Math.floor(remainder / 10) * 10;
		if (hundreds > 0 && remainder > 0) {
			printStr += 'and';
		}
		if (tens > 20) {
			printStr += numberMap[tens];
			remainder = remainder % 10;
			if (remainder > 0) {
				printStr += numberMap[remainder];
			}
		} else if (tens > 0 || remainder > 0) {
			printStr += numberMap[remainder];
		}
		if (i == 1000) {
			printStr = numberMap[1000];
		}
		total += printStr.length;
	}
	return total;
}


console.log(countLetters(1000));