// Array
import employees from './data.json' with {type: 'json'}

// Basic while loop
let i = 0;
while(employees[i]){
    console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
    i++;
};

console.log(`-----`);

// do while loop
i = 0;
do{
    console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
    i++;
}
while(employees[i]);