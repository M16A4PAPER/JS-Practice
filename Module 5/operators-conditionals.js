// Example 3
let example3 = ("Hello" == "Hi");
console.log(example3);

// Example 4
let example4 = (4 != 7);
console.log(example4);

// Using conditionals
let badgeColor;
let numYearsService = 16;

if (numYearsService < 5){
    badgeColor = "blue";
}
else if(numYearsService < 10){
    badgeColor = "yellow";
}
else if(numYearsService < 15){
    badgeColor = "red";
}
else{
    badgeColor = "purple";
};

console.log(`Badge Color: ${badgeColor}`);