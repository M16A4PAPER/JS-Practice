// While loop
let x = 10;
while (x > 0){
    console.log(x);
    --x;
}

// do-while loop
let y = 10;
do{
    console.log(y);
    --y;
}
while(y > 0);

// for loops

let departments = ["Marketing", "Engineering"];

for(let i = 0; i < departments.length; i++){
    console.log(departments[i]);
;}

for(let val of departments){
    console.log(val);
};

let obj = {
    firstName: "David",
    lastName: "Tucker"
};

for(let key in obj){
    console.log(`${key}: ${obj[key]}`);
};