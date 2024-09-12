function getFirstElement(arr){
    return arr[0]
}
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
const number = [1,2,3];
const word = ["apple","banana","cherry"]
console.log(`First number: ${getFirstElement(numbers)}`);
console.log(`First word: ${getFirstElement(words)}`);