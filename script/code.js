function displayMiddleNumbers(numbers) {
    // Sort the array in ascending order
    numbers.sort((a, b) => a - b);

    // Find the middle index
    let middleIndex = Math.floor(numbers.length / 2);

    // Check if the array size is even or odd
    if (numbers.length % 2 === 0) {
        // If even, return two middle elements
        let middleNumbers = numbers.slice(middleIndex - 1, middleIndex + 1);
        console.log("The middle numbers are: " + middleNumbers.join(', '));
    } else {
        // If odd, return the single middle element
        let middleNumber = numbers[middleIndex];
        console.log("The middle number is: " + middleNumber);
    }
}

// Test the function with the provided array
let numbers = [12, 18, 11, 5, 8, 2];
displayMiddleNumbers(numbers);
console.log(numbers)





























// let number = [12 ,18 ,11 ,5 ,8 ,2];
// let twoElements = numbers.slice(11, 5)
// let singleElement = numbers.slice(18,11)
// let result = twoElements.concat(singleElement);
// console.log(numbers);






// 
// }

// // Test the function with the provided array
// let numbers = [12, 18, 11, 5, 8, 2];
// displayMiddleNumbers(numbers);
// console.log(numbers)
