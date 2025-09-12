// Numbers are like double or float

let num1 = 6;
let num2 = -10000;
let num3 = 1.234;

//Define big and small numbers:
let num4 = 150000000000000000000000;
console.log(num4);
let num5 = -0.000000000000000000000004;
console.log(num5);

// Create numbers with e-notation
let num6 = 1.2e+10;
console.log(num6);

//Limits for the number primitive
console.log(`Minimum Value: ${Number.MIN_VALUE}`);
console.log(`Minimum Safe Integer: ${Number.MIN_SAFE_INTEGER}`);
console.log(`Maximum Value: ${Number.MAX_VALUE}`);
console.log(`Maximum Safe Integer: ${Number.MAX_SAFE_INTEGER}`);

// Creating BigInts
let bigInt1 = 1n;
let bigInt2 = 1_560_000_000_000_000_000n;