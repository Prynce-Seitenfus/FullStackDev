// non-recursive
function factorial(number) {
    if (number < 0) {
        return undefined;
    }
    let total = 1;
    for (let n = number; n > 1; n--) {
        total *= n;
    }
    return total;
}

// recursive
function factorialRecursive(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// console.log("factorial of 5: " + factorial(5)); // 120
// console.log("recursive factorial of 5: " + factorialRecursive(5)); // 120


function doSomething(value) {
    if (value == 0) {
        return 0;
    }    
    else 
      return value + doSomething(value - 1);
}

console.log(doSomething(3)); // 6
