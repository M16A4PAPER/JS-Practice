import fs from "node:fs/promises";

// Reading the file with the promises API
fs.readFile('./data.json', 'utf8')
    .then(data => {
        const dataObj = JSON.parse(data);
        console.log(dataObj);
        console.log("Complete");
    })
    .then(() => readFile("data.json"))
    .then(data => console.log(data))
    .catch(err => {
        console.log("Could not load and parse.");
        throw err;
});

// Creating a custom promise with the callback API
const readFile = async (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile('data.json', 'utf8', (err, data) =>{
            if(err){
            reject(err);
        }
        resolve(data);
        });
    });
};