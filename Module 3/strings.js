//Single line string
let firstName = "David";
let lastName = 'Tucker';

//backticks
let title = `VP Engineering`;
title = `CTO`;

//String concatenation
let fullName = firstName + "" + lastName;

// Concatenation with template literals
fullName = `${firstName} ${lastName}`;
console.log(fullName);

// Multi line strings
let bio = "Line 1 \nline 2 \nline 3";
console.log(bio);

//Multi line with backticks
bio = `About David Tucker:
CTO of Globomantics,
Author on Pluralsight.`;

//Escaping
let quote = 'David said, "Js is great."';
quote = "David said, \"JS is Great.\"";
quote = `Can use both 'single' and "double" quote in backticks`;
quote = `In Js, you must escape the \\ character`;
console.log(quote);

//String length
let length = quote.length;
console.log(`Quote length: ${length}`);

// Accessing specific characters
let secondCharacter = quote[1]; //Zero indexed items
console.log(`Second character ${secondCharacter}`);

//Change case
let upperCaseName = fullName.toUpperCase();
console.log(upperCaseName);
let lowerCaseName = fullName.toLowerCase();
console.log(lowerCaseName);

//Finding a substring
let idx1 = fullName.indexOf("Dav");
console.log(`Index 1: ${idx1}`);
let idx2 = fullName.indexOf("ker");
console.log(`Index 2: ${idx2}`);
let idx3 = fullName.indexOf("xyz");
console.log(`Index 3: ${idx3}`);

//Does a string contain a substring
let doesContain = fullName.includes("Dav");
console.log(doesContain);