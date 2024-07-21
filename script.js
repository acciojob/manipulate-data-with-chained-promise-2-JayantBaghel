//your JS code here. If required.
function manipulateArray() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([1, 2, 3, 4]);
                }, 3000);
            });
        }

        function filterEvenNumbers(arr) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const evenNumbers = arr.filter(num => num % 2 === 0);
                    document.getElementById("output").textContent = evenNumbers.join(',');
                    resolve(evenNumbers);
                }, 1000);
            });
        }

        function multiplyEvenNumbers(arr) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const multipliedNumbers = arr.map(num => num * 2);
                    document.getElementById("output").textContent = multipliedNumbers.join(',');
                    resolve(multipliedNumbers);
                }, 2000);
            });
        }

        manipulateArray()
            .then(filterEvenNumbers)
            .then(multiplyEvenNumbers)
            .catch(error => {
                console.error("An error occurred:", error);
            });