// This is a single-line comment
let firstName = "David";

/*
    This is a multi line comment.
    More information can be placed in this syntax.
*/
let lastName = "Tucker";

/*
    Joins the first and last names together.

    @param {string} firstName is the first name
    @param {string} lastName is the last name
    @return {string} the full name
*/
function getFullName(firstName, lastName){
    return `${firstName} ${lastName}`;
};

let newName = "Tucker"; //eslint-disable-line