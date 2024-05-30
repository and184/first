// Super helper function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Test the super helper function
const number = 5;
const result = factorial(number);
console.log(`Factorial of ${number} is: ${result}`);