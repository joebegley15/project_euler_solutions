function longestSequence(n) {
	var longestValue = 0, longestChainLen = 0;
	for (var i = 1; i <= n; i++) {
		var chainValue = i;
		var chainLen = 0;
		while (chainValue > 1) {
			if (chainValue % 2 == 0) {
				chainValue = chainValue / 2;
			} else {
				chainValue = 3 * chainValue + 1;
			}
			chainLen++;
		}
		if (chainLen > longestChainLen) {
			longestChainLen = chainLen;
			longestValue = i;
		}
	}
	return longestValue;
}

console.log(longestSequence(1000000));