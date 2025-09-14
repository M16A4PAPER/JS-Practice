import createPrompt from 'prompt-sync';

// Import Sample Data
import employees from './data.json' with { type: 'json' }

let prompt = createPrompt();

const logEmployee = (employee) => {
  Object.entries(employee).forEach(entry => {
    console.log(`${entry[0]}: ${entry[1]}}`);
  });
}

function getInput(promptText, validator, transformer) {
  let value = prompt(promptText);
  if(validator && !validator(value)){
    console.error(`--Invalid input`);
    process.exit(1);
  }
  if(transformer){
    return transformer(value);
  }
  return value;
};

// Validator functions -----------------------------------------------------

const isStringInputValid = (input) => {
  return (input) ? true : false;
};

const isBooleanInputValid = (input) => {
  return (input === "yes" || input === "no");
};

const isStartYearValid = (input) => {
  let numValue = Number(input);
  if(!Number.isInteger(numValue) || numValue < 1990 || numValue > 2023){
    return false;
  }
  return true;
};

const isStartMonthValid = function (input) {
  let numValue = Number(input);
  if(!Number.isInteger(numValue) || numValue < 1 || numValue > 12){
    return false;
  }
  return true;
};

const isStartDayValid = function (input) {
  let numValue = Number(input);
  if(!Number.isInteger(numValue) || numValue < 1 || numValue > 31) {
    return false;
  }
  return true;
};

// Application commands ----------------------------------------------------

function listEmployees() {
  console.log(`Employee List ----------------------------`);
    console.log('');

    employees.forEach(e => {
      logEmployee(e);
      prompt(`Press enter to continue...`);
    });
    console.log(`Employee list completed`);
};

function addEmployee() {
  console.log(`Add Employee -----------------------------`);
    console.log('');
    let employee = {};

    employee.firstName = getInput("First Name: ", isStringInputValid);
    employee.lastName = getInput("Last Name: ", isStringInputValid);
    let startDateYear = getInput("Employee Start Year (1990 - 2023): ", isStartYearValid);
    let startDateMonth = getInput("Employee Start Month (1 - 12): ", isStartMonthValid);
    let startDateDay = getInput("Employee Start Day (1 - 31): ", isStartDayValid);
    employee.startDate = new Date(startDateYear, startDateMonth - 1, startDateDay);
    employee.isActive = getInput("Is employee active (yes or no): ", isBooleanInputValid, i => (i === "yes"));


    // Output Employee JSON
    const json = JSON.stringify(employee, null, 2);
    console.log(`Employee: ${json}`);
};

// Search for employee by id
function searchById(){
  const id = getInput("Employee ID: ", null, Number);
  const result = employees.find(e => e.id === id);
  if(result){
    console.log("");
    logEmployee(result);
  }
  else{
    console.log("No results...");
  }
};

// Search for employee by name
function searchByName(){
  const firstNameSearch = getInput("FirstName: ").toLowerCase();
  const lastNameSearch = getInput("Last Name: ").toLowerCase();
  const results = employees.filter(e => {
    if(firstNameSearch && !e.firstName.toLowerCase().includes(firstNameSearch)){
      return false;
    }
    if(lastNameSearch && !e.lastName.toLowerCase().includes(lastNameSearch)){
      return false;
    }
    return true;
  });
  results.forEach((e, idx) =>{
    console.log("");
    console.log(`Search Result ${idx + 1} ------------------------------------`);
    logEmployee(e);
  });
}

// Application execution ---------------------------------------------------

// Get the command the user wants to execute
const commandArg = process.argv[2];
if (!commandArg) {
  console.error("No command provided. Use: list or add");
  process.exit(1);
}
const command = commandArg.toLowerCase();

switch (command) {

  case 'list':
    listEmployees();
    break;

  case 'add':
    addEmployee();
    break;

  case 'search-by-id':
    searchById();
    break;

  case 'search-by-name':
    searchByName();
    break;

  default:
    console.log('Unsupported command. Exiting...');
    process.exit(1);

}