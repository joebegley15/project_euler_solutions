const fs = require('fs');

// Read the text file synchronously
const triangleText = fs.readFileSync('triangle.txt', 'utf8');

// Split the text file into an array of rows
const rows = triangleText.trim().split('\n');

// Convert each row into an array of numbers
const triangle = rows.map(row => row.split(' ').map(Number));

const findLargestPath = () => {
    let previousNodeLeft = 0;
    let previousNodeRight = 0;
    for (let i = 1; i < triangle.length; i++) {
        for (let x = 0; x < triangle[i].length; x++) {
            previousNodeLeft = triangle[i - 1][x - 1] || 0;
            previousNodeRight = triangle[i - 1][x] || 0;
            triangle[i][x] = Math.max(previousNodeLeft, previousNodeRight) + triangle[i][x];
        }
    }
    return triangle[triangle.length - 1].reduce((acc, el) => acc > el ? acc : el, 0)
}

console.log(findLargestPath())