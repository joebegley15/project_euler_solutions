const countFirstSundays = (start, end) => {
    let currentDate = {...start};
    let countSundays = 0;
    const daysInMonth = {1: 31, 2: (currentDate.year % 4 === 0 && currentDate.year % 100 != 0 ? 29 : 28), 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31};
    while (currentDate.year < end.year || (currentDate.year === end.year && currentDate.month <= end.month)) {
        if (currentDate.dow === 0) {
            countSundays++;
        }
        // Change the month
        currentDate.dow = (currentDate.dow + daysInMonth[currentDate.month]) % 7;
        if (currentDate.month === 12) {
            currentDate.year++;
            currentDate.month = 1;
            if (currentDate.year % 4 === 0 && currentDate.year % 100 != 0) {
                daysInMonth[2] = 29;
            } else {
                daysInMonth[2] = 28;
            }
        } else {
            currentDate.month++;
        }
        
    }
    return countSundays;
}

const startDate = {dow: 2, year: 1901, month: 1, day: 1};
const endDate = {year: 2000, month: 12};

console.log(countFirstSundays(startDate, endDate));