const smallestMult = function(n) {
	const mults = [];
	for (let i = 1; i <= n; i++) {
		mults.push(mults.reduce((acc, mult) => ((acc % mult === 0) ? acc / mult : acc),i));
	}
	return mults.reduce((product = 1, mult) => product *= mult);
}

console.log(smallestMult(20));