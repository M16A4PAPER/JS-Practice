import fs from "node:fs/promises";

async function loadData(){
    // try{
    //     const data = await fs.readFile('./data.json', 'utf8');
    //     console.log('File read 1.');
    //     await fs.readFile('./data.json', 'utf8');
    //     console.log('File read 2.');
    //     await fs.readFile('./data.json', 'utf8');
    //     console.log('File read 3.');
    //     await fs.readFile('./data.json', 'utf8');
    //     console.log('File read 4.');
    //     const dataObj = JSON.parse(data);
    //     console.log(dataObj);
    //     console.log("Complete");
    // }
    // catch(err){
    //     console.log("Could not load and parse file.");
    //     throw err;
    // }
}

loadData().then(() => console.log("Promise completed"));

try{
        const data = await fs.readFile('./data.json', 'utf8');
        console.log('File read 1.');
        await fs.readFile('./data.json', 'utf8');
        console.log('File read 2.');
        await fs.readFile('./data.json', 'utf8');
        console.log('File read 3.');
        await fs.readFile('./data.json', 'utf8');
        console.log('File read 4.');
        const dataObj = JSON.parse(data);
        console.log(dataObj);
        console.log("Complete");
    }
    catch(err){
        console.log("Could not load and parse file.");
        throw err;
    }