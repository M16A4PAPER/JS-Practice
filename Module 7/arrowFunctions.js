// Function expression
const isDavidExpression = function (name){
    return (name === "David");
};

// Multi-line arrow function
const isDavidArrow = (name) => {
    return (name === "David");
};

// Single-line arrow function with a parameter
const isDavid = (name) => name === "David";

// Single-line arrow function with no parameters
const lineBreak = () => console.log("");

// Arrow function with multiple parameters
const logArray = (item, index) => {
    console.log(`${index}: ${item}`);
};

logArray(item, index);