// Write a function which returns the factorial of a given number

function factorial_no(num) {
    if(typeof num !== "number"){
        throw new Error("Not a number")
    }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial_no(10));
console.log(factorial_no(4));
// console.log(factorial_no("s"));

console.log("-------------------------------------------------------")

// Write a function which returns the factorial of a given number using recursion method

function recursion_factorial(fac){
  if(fac < 0){
    throw new Error("Please Enter a no. greater than 0")
  }
  if(fac == 1){
    return 1
  }
  else{
    return  fac * recursion_factorial(fac - 1);
  }
};
console.log(recursion_factorial(10));
// console.log(recursion_factorial(-10));
// console.log(recursion_factorial("s"));
