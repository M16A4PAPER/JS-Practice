import fs from 'node:fs/promises';

// Global variables ---------------------------------------------------------

let employees = [];
let currencyData;

// Currency data ------------------------------------------------------------

const getCurrencyConversionData = async () => {
  const headers = new Headers();
  headers.append("apikey", "1bd50b33e46b4f297fa82dac56d8e20a");
  const options = {
    method: "GET",
    redirect: "follow",
    headers
  };
  const response = await fetch(`https://api.apilayer.com/exchangerates_data/latest?base=USD`, options);
  if(!response.ok){
    throw new Error("Cannot fetch currency data.");
  }
  currencyData = await response.json();
}

const getSalary = (amountUSD, currency) => {
  const amount = (currency === "USD") ? amountUSD : amountUSD * currencyData.rates[currency];
  const formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency : currency
  });
  return formatter.format(amount);
}

// Loading & Writing data to the filesystem ---------------------------------

const loadData = async () => {
  console.log("Loading employees...");
  try {
    const fileData = await fs.readFile('./data.json');
    employees = JSON.parse(fileData);
  }
  catch (err) {
    console.error("Cannot load in employees.");
    throw err;
  }
}

const writeData = async () => {
  console.log("Writing employees...");
  try {
    await fs.writeFile('./data.json', JSON.stringify(employees, null, 2));
  }
  catch (err) {
    console.error("Cannot write employees data.");
    throw err;
  }
}

// --------------------------------------------------------------------------

import createPrompt from 'prompt-sync';
let prompt = createPrompt();

const logEmployee = (employee) => {
  Object.entries(employee).forEach(entry => {
    if(entry[0] !== "salaryUSD" || entry[0] !== "localCurrency") {
      console.log(`${entry[0]}: ${entry[1]}`);
    }
  });
  console.log(`Salary USD: ${getSalary(employee.salaryUSD, "USD")}`);
  console.log(`Local Salary: ${getSalary(employee.salaryUSD, employee.localCurrency)}`);
}

function getInput(promptText, validator, transformer) {
  let value = prompt(promptText);
  if (validator && !validator(value)) {
    console.error(`--Invalid input`);
    return getInput(promptText, validator, transformer);
  }
  if (transformer) {
    return transformer(value);
  }
  return value;
};

const getNextEmployeeID = () => {
  const maxID = Math.max(...employees.map(e => e.id));
  return maxID + 1;
}

// Validator functions -----------------------------------------------------

const isStringInputValid = (input) => {
  return (input) ? true : false;
};

const isBooleanInputValid = (input) => {
  return (input === "yes" || input === "no");
};

const isStartYearValid = (input) => {
  let numValue = Number(input);
  if (!Number.isInteger(numValue) || numValue < 1990 || numValue > 2023) {
    return false;
  }
  return true;
};

const isStartMonthValid = function (input) {
  let numValue = Number(input);
  if (!Number.isInteger(numValue) || numValue < 1 || numValue > 12) {
    return false;
  }
  return true;
};

const isStartDayValid = function (input) {
  let numValue = Number(input);
  if (!Number.isInteger(numValue) || numValue < 1 || numValue > 31) {
    return false;
  }
  return true;
};

const isCurrencyCodeValid = function (code) {
  const currencyCodes = Object.keys(currencyData.rates);
  return (currencyCodes.indexOf(code) > -1);
}

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

async function addEmployee() {
  console.log(`Add Employee -----------------------------`);
  console.log('');
  let employee = {};
  employee.id = getNextEmployeeID();
  employee.firstName = getInput("First Name: ", isStringInputValid);
  employee.lastName = getInput("Last Name: ", isStringInputValid);
  let startDateYear = getInput("Employee Start Year (1990 - 2023): ", isStartYearValid);
  let startDateMonth = getInput("Employee Start Month (1 - 12): ", isStartMonthValid);
  let startDateDay = getInput("Employee Start Day (1 - 31): ", isStartDayValid);
  employee.startDate = new Date(startDateYear, startDateMonth - 1, startDateDay);
  employee.isActive = getInput("Is employee active (yes or no): ", isBooleanInputValid, i => (i === "yes"));
  employee.salaryUSD = getInput("Annual salary in USD: ", isIntegerValid(1000, 100000));
  employee.localCurrency = getInput("Local currency in 3 letter code: ", isCurrencyCodeValid);

  employees.push(employee);
  await writeData();
};

// Search for employee by id
function searchById() {
  const id = getInput("Employee ID: ", null, Number);
  const result = employees.find(e => e.id === id);
  if (result) {
    console.log("");
    logEmployee(result);
  }
  else {
    console.log("No results...");
  }
};

// Search for employee by name
function searchByName() {
  const firstNameSearch = getInput("FirstName: ").toLowerCase();
  const lastNameSearch = getInput("Last Name: ").toLowerCase();
  const results = employees.filter(e => {
    if (firstNameSearch && !e.firstName.toLowerCase().includes(firstNameSearch)) {
      return false;
    }
    if (lastNameSearch && !e.lastName.toLowerCase().includes(lastNameSearch)) {
      return false;
    }
    return true;
  });
  results.forEach((e, idx) => {
    console.log("");
    console.log(`Search Result ${idx + 1} ------------------------------------`);
    logEmployee(e);
  });
}

// Application execution ---------------------------------------------------

const main = async () => {
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
      await addEmployee();
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
}

Promise.all([loadData(), getCurrencyConversionData()])
  .then(main)
  .catch((err) => {
    console.error("Cannot complete startup.");
    throw err;
  });

  