//Json is similar to object literal syntax
//Requires double quotes for property names and string values

//JS Object
let employee = {
    firstName: "David",
    lastName: "Tucker",
    birthDate: new Date("January 1,1982"),
    numYearsEmployment: 7,
    department: "Engineering",
    title: "CTO",
    isActive: true,
    salary: 10000
};

//Convert to JSON string
let jsonValue = JSON.stringify(employee);
console.log(jsonValue);
jsonValue = JSON.stringify(employee, null, 2);
console.log(jsonValue);

//Convert Jsons string back to object
let newEmployee = JSON.parse(jsonValue);
console.log(newEmployee);

//Write JSON Directly
let jsonString = `{
    "firstName": "Elizabeth",
    "lastName": "Jones"
}`;
let obj = JSON.parse(jsonString);
console.log(obj);

// Improper Format
// let notJson = "hello!";
// let newObj = JSON.parse(notJson); 