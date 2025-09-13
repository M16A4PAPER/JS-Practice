// Creating arrays
let arr1 = [];
let arr2 = ["Item1", "Item2"];
let arr3 = new Array();
let arr4 = new Array("Item1", "Item2");

// Accessing values
let names = ["David", "Kim", "Steve", "Katie"];
console.log(`Names length: ${names.length}`);
console.log(`First name: ${names[0]}`);
console.log(`Second name: ${names[1]}`);
console.log(`Tenth Name: ${names[10]}`);

// Searching for Values
const includesDavid = names.includes("David");
console.log(`Includes David: ${includesDavid}`);

const includesTucker = names.includes("Tucker");
console.log(`Includes Tucker: ${includesTucker}`);

const davidIndex  = names.indexOf("David");
console.log(`David Index: ${davidIndex}`);

const tuckerIndex  = names.indexOf("Tucker");
console.log(`David Index: ${tuckerIndex}`);

// Adding values at the end
names.push("Shannon");
console.log(names);

// Adding values at the beginning
names.unshift("Sarah");
console.log(names);

// Add value at a specific index
names.splice(1, "William");
console.log(names);

// Remove value at beginning
names.shift();
console.log(names);

// Remove value at a specific index
names.splice(5, 1);
console.log(names);

const obj1 = {
    firstName: "David",
    lastName: "Tucker"
};

const obj2 = {
    firstName: "Sarah",
    lastName: "Jenkins"
};

const obj3 = {
    firstName: "David",
    lastName: "Tucker"
};

const employess = [obj1, obj2];
console.log(`Is identical object: ${employess.includes(obj3)}`);
console.log(`Is same object: ${employess.includes(obj1)}`);