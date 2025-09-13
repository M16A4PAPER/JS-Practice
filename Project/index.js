import createPrompt from 'prompt-sync';
let prompt = createPrompt();

let employee = {};

let firstName = prompt("First name: ");

if(!firstName){
    console.error(`Invalid first name`);
    process.exit(1);
};

employee.firstName = firstName;

let lastName = prompt('Last Name: ');
if(!lastName){
    console.log('Invalid last name.');
    process.exit(1);
};

employee.lastName = lastName;

let startDateYear = prompt(`Employee start year (1990 - 2023): `);
startDateYear = Number(startDateYear);

// Check if valid integer
if(!Number.isInteger(startDateYear)){
    console.log(`Enter a valid starting year`);
    process.exit(1);
};

// Check if the number is in range
if(startDateYear < 1990 || startDateYear > 2023){
    console.error(`Enter a starting year within the correct range.`);
    process.exit(1);
};

let startDateMonth = prompt(`Employee start date month (1 - 12):`);
startDateMonth = Number(startDateMonth);

// Check if it is a valid integer
if(!Number.isInteger(startDateMonth)){
    console.error(`Enter a valid starting month.`);
    process.exit(1);
};

// Check if the number is in range
if(startDateMonth < 1 || startDateMonth > 12){
    console.error(`Enter a starting month within the correct range`)
};

let startDateDay = prompt('Employee start date day (1 -31 ): ');
startDateDay = Number(startDateDay);
// Check if it is a valid integer
if(!Number.isInteger(startDateDay)){
    console.error(`Enter a valid start date day`);
    process.exit(1);
};

// Check if the number is in range
if(startDateDay < 1 || startDateDay > 31){
    console.error(`Enter a starting day within the correct range.`);
    process.exit(1);
};

// Date creation if elements are valid
employee.startDate = new Date(startDateYear, startDateMonth - 1, startDateDay);

let isActive = prompt('Is employee active(yes or no): ');
// Check for incorrect values
if(isActive !== "yes" && isActive !== "no"){
    console.error(`Enter yes or no for employee active status`);
    process.exit(1);
};

employee.isActive = (isActive === "yes");

// Output Employee JSON
const json = JSON.stringify(employee, null, 2);
console.log(`Employee: ${json}`);