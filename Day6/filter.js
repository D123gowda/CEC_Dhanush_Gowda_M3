const numbers  = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);

const words = ["cat", "elephant", "dog", "butterfly"];
const longWords = words.filter((word) => word.length > 4)
console.log(longWords);