// Function declaration
function isValidiInput(input){
    let isValid = true;
    return isValid;
};

function isInputValidDepartment(input){
    const departmentNames = ["Marketing", "Engineering", "Human Resources"];
    return departmentNames.includes(input);
};

// Using the function
let val1 = isInputValidDepartment("Engineering");
let val2 = isInputValidDepartment("Finance");

console.log(`Val1: ${val1}, Val2: ${val2}`);