// Counts the number of sundays that fall on the first of the month for the 1900s
function sundaysOnFirstOfMonth(){

	// # of Days in a month
	var daysInMonths = {
		1:31,
		3:31,
		4:30,
		5:31,
		6:30,
		7:31,
		8:31,
		9:30,
		10:31,
		11:30,
		12:31
	}
	// Days passed
	var dayCount = 0;

	// First Day of Month is a Sunday Counter
	var firstSundayCounter = 0;


	// Year iterator
	for (var year = 1901; year <= 1901; year++) {
		// Month iterator
		for (var month = 1; month <= 12; month++) {
			// Add first Sunday if it's a Sunday;
			console.log(month + '-' + year);
			console.log(new Date(year,month - 1,0).getDay());
			console.log(dayCount % 7);
			// Add days of the month, unless it's February
			if (month != 2) {
				dayCount += daysInMonths[month];
			} else {
			// If it's February, figure out if it's a leap year
				if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
					dayCount += 29;
				} else {
					dayCount += 28;
				}
			}
		}
	}
	return firstSundayCounter;
}

console.log(sundaysOnFirstOfMonth());