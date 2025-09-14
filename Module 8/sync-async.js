// Import the Node filesystem modules
// import fs from 'node:fs';

import fs from 'node:fs/promises';

// Callback function
// const fileWriteCompleted = () => {
//     console.log("File written");
// };

// Writing the data to the file
// const data = JSON.stringify({});
// fs.writeFile("./data.json", data, fileWriteCompleted);

//Callback hell
// const data1 = JSON.stringify({});
// fs.writeFile("./file1.json", data, () => {
//     console.log("File written");
//     fs.writeFile("./file2.json", data, () => {
//         console.log("File 2 written.");
//         fs.writeFile("./file3.json", data, () => {
//             console.log("File 3 written.");
//         })
//     })
// });

// Writing data to the file with promises
// const data2 = JSON.stringify({});
// fs.writeFile("./file1.json", data)
// .then(() => fs.writeFile("./file4.json", data))
// .then(() => fs.writeFile("./file5.json", data))
// .then(() => fs.writeFile("./file6.json", data))

// Using Async/Await(top-level await)
const data3 = JSON.stringify({});

async function writeFiles() {
    await fs.writeFile("./file7.json", data3);
    await fs.writeFile("./file8.json", data3);
    await fs.writeFile("./file9.json", data3);
};

//Execute async function
writeFiles().then(() => console.log("Files written"));