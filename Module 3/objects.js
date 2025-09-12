// Create with object literal
let obj1 = {};

//Create with constructor
let obj2 = new Object();

//Populate properties on an object
obj1.firstName = "David";
obj1.lastName = "Tucker";
obj1.isActive = true;
obj1.startDate = new Date("January 1, 2022");
obj1.vacateionDays = 14;
console.log(obj1);

// Populating an object on creation with the object literal syntax
let obj3 = {
    firstName: "David",
    lastName: "Tucker",
    isActive: true,
    startDate: new Date("January 1, 2022"),
    vacationDays: 14
};
console.log(obj3);

// Accessing properties from an object
console.log(`First Name: ${obj3.firstName}`);
console.log(`Last Name: ${obj3["lastName"]}`);

// Deleting properties from an object
delete obj3.firstName;
console.log(obj3);

//Accessing non existent properties
console.log(`Non existent value: ${obj3.middleName}`);

// Objects are passed by reference
let obj4 = obj3;
obj4.lastName = "Smith";
console.log(`Last name (obj3): ${obj3.lastName}`);