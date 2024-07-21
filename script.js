//your JS code here. If required.
// Function that returns a promise resolving with an array of numbers after 3 seconds
function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

// Function to filter out odd numbers
function filterOdds(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = arr.filter(num => num % 2 === 0);
            resolve(evenNumbers);
        }, 1000);
    });
}

// Function to multiply even numbers by 2
function multiplyByTwo(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multipliedNumbers = arr.map(num => num * 2);
            resolve(multipliedNumbers);
        }, 2000);
    });
}

// Function to update the HTML element with the given array
function updateOutput(arr) {
    const outputElement = document.getElementById('output');
    outputElement.textContent = arr.join(', ');
}

// Chaining the promises
getNumbers()
    .then(numbers => {
        console.log('Initial array:', numbers);
        return filterOdds(numbers);
    })
    .then(evenNumbers => {
        console.log('Filtered even numbers:', evenNumbers);
        updateOutput(evenNumbers);
        return multiplyByTwo(evenNumbers);
    })
    .then(multipliedNumbers => {
        console.log('Multiplied even numbers by 2:', multipliedNumbers);
        updateOutput(multipliedNumbers);
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
