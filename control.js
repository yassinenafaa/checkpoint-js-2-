//1
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage:
const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "olleh"

//2
function countCharacters(str) {
    return str.length;
}

// Example usage:
const exampleString = "hello, world!";
const characterCount = countCharacters(exampleString);
console.log(characterCount); // Output: 13
//3
function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Example usage:
const exampleSentence = "hello world ";
const capitalizedSentence = capitalizeWords(exampleSentence);
console.log(capitalizedSentence); // Output: "Hello World "
//4
function factorial(n) {
    if (n < 0) {
        return undefined; // Factorial is not defined for negative numbers
    }
    if (n === 0 || n === 1) {
        return 1; // Base case
    }
    return n * factorial(n - 1); // Recursive case
}

// Example usage:
const number = 5;
const result = factorial(number);
console.log(result); // Output: 120
//5
function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Found a divisor, not prime
    }
    return true; // No divisors found, it is prime
}

// Example usage:
const numberr = 7;
const resultt = isPrime(number);
console.log(result); // Output: true
//6
function fibonacciSequence(n) {
    const sequence = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            sequence.push(0);
        } else if (i === 1) {
            sequence.push(1);
        } else {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
    }
    return sequence;
}

// Example usage:
const terms = 10;
const resulttt = fibonacciSequence(terms);
console.log(result); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
