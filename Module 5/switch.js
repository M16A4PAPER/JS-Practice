// Employee object
let employee = {
    firstName: "David",
    lastName: "Tucker",
    startDate: new Date(2016, 1, 3),
    numYearsService: 7,
    isActive: true,
    department: "Engineering",
    title: "VP Engineering",
    annualBonus: null
};

switch(employee.department){
    case 'Engineering':
        console.log(`Meet in building 1.`);
        break;
    case 'Marketing':
        console.log(`Meet in building 2.`);
        break;
    case 'HR':
        console.log(`Meet in building 1.`);
        break;
    default:
        console.log(`Meet in building 3`);
}

switch(employee.department){
    case 'Engineering':
    case 'HR':
        console.log('Meet in building 1.');
        break;
    case 'Marketing':
        console.log('Meet in building 2.');
        break;
    default:
        console.log('Meet in building 3.');
}
